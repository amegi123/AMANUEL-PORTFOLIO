import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { projectsData } from "@/data/projects";
import { getProjects } from "@/lib/db";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TibebPattern } from "@/components/hero/TibebPattern";
import { TechLogo } from "@/components/skills/TechLogo";
import { ProjectPreviewMockup } from "@/components/projects/ProjectPreviewMockup";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  ExternalLink,
  Code2,
  Calendar,
} from "lucide-react";

export const dynamicParams = true;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function SingleProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const allProjects = await getProjects();
  const project = allProjects.find((p) => p.id === id) || projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20 relative">
        <TibebPattern opacity={0.06} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <Link href="/" className="text-charcoal-400 hover:text-gold-700">
              Home
            </Link>
            <span className="text-charcoal-300">/</span>
            <Link href="/projects" className="text-charcoal-400 hover:text-gold-700">
              Projects
            </Link>
            <span className="text-charcoal-300">/</span>
            <span className="text-gold-700 font-bold">{project.name}</span>
          </div>

          {/* Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-sm text-gold-700 font-bold">
                [{project.number} // CASE STUDY]
              </span>
              <Badge variant="gold" size="md">
                {project.role}
              </Badge>
              <span className="text-xs font-mono text-charcoal-500 uppercase tracking-wider font-semibold">
                {project.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal-900 leading-tight">
              {project.name}
            </h1>

            <p className="text-lg sm:text-xl text-gold-800 font-medium">
              {project.tagline}
            </p>

            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-3xl font-normal">
              {project.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="primary" size="md" icon={<ExternalLink className="w-4 h-4" />}>
                    Launch Live Demo
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="outline" size="md" icon={<Code2 className="w-4 h-4 text-gold-600" />}>
                    Repository
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* Interactive Visual Mockup */}
          <div className="max-w-4xl mx-auto">
            <ProjectPreviewMockup
              project={project}
            />
          </div>

          {/* Architecture & Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Features */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-xl font-bold text-charcoal-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-600" />
                <span>Core Architectural Features</span>
              </h2>

              <div className="space-y-3">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-surface-border shadow-xs space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                      <h3 className="text-sm font-bold text-charcoal-900">{feature.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed pl-6">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technical Stack Breakdown */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-surface-borderGold shadow-gold-sm space-y-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-charcoal-500 font-bold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-gold-600" />
                  System Blueprint Specs
                </h3>

                <div className="space-y-3 text-xs">
                  {project.architecture.frontend && (
                    <div className="p-3 rounded-xl bg-surface-50 border border-surface-border">
                      <span className="text-[10px] font-mono text-charcoal-400 uppercase block font-semibold mb-0.5">
                        Frontend Layer
                      </span>
                      <p className="text-charcoal-900 font-medium">{project.architecture.frontend}</p>
                    </div>
                  )}
                  {project.architecture.backend && (
                    <div className="p-3 rounded-xl bg-surface-50 border border-surface-border">
                      <span className="text-[10px] font-mono text-charcoal-400 uppercase block font-semibold mb-0.5">
                        Backend Services
                      </span>
                      <p className="text-charcoal-900 font-medium">{project.architecture.backend}</p>
                    </div>
                  )}
                  {project.architecture.database && (
                    <div className="p-3 rounded-xl bg-surface-50 border border-surface-border">
                      <span className="text-[10px] font-mono text-charcoal-400 uppercase block font-semibold mb-0.5">
                        Database & Persistence
                      </span>
                      <p className="text-charcoal-900 font-medium">{project.architecture.database}</p>
                    </div>
                  )}
                  {project.architecture.infrastructure && (
                    <div className="p-3 rounded-xl bg-surface-50 border border-surface-border">
                      <span className="text-[10px] font-mono text-charcoal-400 uppercase block font-semibold mb-0.5">
                        DevOps & Cloud
                      </span>
                      <p className="text-charcoal-900 font-medium">{project.architecture.infrastructure}</p>
                    </div>
                  )}
                  {project.architecture.aiAutomation && (
                    <div className="p-3 rounded-xl bg-gold-50 border border-surface-borderGold">
                      <span className="text-[10px] font-mono text-gold-800 uppercase block font-bold mb-0.5">
                        AI Automation Engine
                      </span>
                      <p className="text-charcoal-900 font-medium">{project.architecture.aiAutomation}</p>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-surface-border">
                  <p className="text-[11px] font-mono text-charcoal-400 mb-2 font-semibold">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-100 border border-surface-border text-charcoal-700 text-xs font-mono"
                      >
                        <TechLogo name={t} size={14} className="w-3.5 h-3.5" />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 rounded-2xl bg-charcoal-900 text-white space-y-3">
                <p className="text-sm font-bold">
                  Looking to build a system like this?
                </p>
                <p className="text-xs text-zinc-300">
                  Discuss architecture, milestones, and implementation timelines.
                </p>
                <Link href="/contact" className="block pt-1">
                  <Button variant="gold" size="md" className="w-full justify-center">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Back */}
          <div className="pt-6 border-t border-surface-border flex items-center justify-between">
            <Link href="/projects">
              <Button variant="secondary" size="sm" icon={<ArrowLeft className="w-3.5 h-3.5" />} iconPosition="left">
                Back to All Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="gold" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                Start a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
