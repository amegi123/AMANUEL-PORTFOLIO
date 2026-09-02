"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { TibebPattern } from "@/components/hero/TibebPattern";
import { Project } from "@/lib/types";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, FolderKanban, Mail, Sparkles } from "lucide-react";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20 relative">
        <TibebPattern opacity={0.06} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-6">
            <Link href="/" className="text-xs font-mono text-charcoal-400 hover:text-gold-700">
              Home
            </Link>
            <span className="text-xs font-mono text-charcoal-300 mx-2">/</span>
            <span className="text-xs font-mono text-gold-700 font-bold">Selected Projects</span>
          </div>

          <SectionHeading
            number="03"
            tag="Engineering Portfolio"
            title="Selected Work"
            subtitle="Production systems, multi-tenant software platforms, and automated architectures."
          />

          {projectsData.length === 0 ? (
            <div className="rounded-2xl border border-surface-border bg-white p-8 sm:p-14 text-center shadow-card-subtle relative overflow-hidden">
              <div className="max-w-lg mx-auto space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold-50 border border-surface-borderGold text-gold-700">
                  <FolderKanban className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-gold-700 font-bold uppercase tracking-wider block">
                    PORTFOLIO // ARCHIVE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900">
                    Selected Projects Being Published
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                  Detailed technical case studies and architectural blueprints are being curated. Direct architecture briefs and project inquiries are available on request.
                </p>

                <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                  <Link href="/contact">
                    <Button variant="gold" size="md" icon={<Mail className="w-3.5 h-3.5" />}>
                      Request Architecture Briefs
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="secondary" size="md" icon={<Sparkles className="w-3.5 h-3.5" />}>
                      View Services & Capabilities
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {projectsData.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpenCaseStudy={(proj) => setSelectedProject(proj)}
                />
              ))}
            </div>
          )}

          <div className="mt-14 p-8 rounded-2xl bg-white border border-surface-borderGold shadow-gold-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-charcoal-900">
                Have a product idea or system requiring architectural leadership?
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-500 font-mono mt-1">
                From initial schema blueprinting to automated cloud deployment.
              </p>
            </div>
            <Link href="/contact">
              <Button variant="gold" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Start a New Project Inquiry
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <Footer />
    </div>
  );
}
