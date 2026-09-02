"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Project } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, Mail } from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-[#FAF8F5] border-t border-surface-border">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E0D5_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <SectionHeading
            number="03"
            tag="Engineering Portfolio"
            title="Selected Work"
            subtitle="Production systems, multi-tenant SaaS architectures, real-time IoT pipelines, and automated intelligence backends."
            className="mb-0"
          />
          <Link href="/projects" className="shrink-0">
            <Button
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5 text-gold-600 group-hover:translate-x-0.5 transition-transform" />}
              className="font-mono text-xs border-surface-border hover:border-gold-400 bg-white shadow-xs"
            >
              All Case Studies
            </Button>
          </Link>
        </div>

        {/* Thumbnail Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenCaseStudy={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Bottom Consulting Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-white border border-surface-borderGold shadow-gold-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-[10px] font-mono text-gold-700 font-bold uppercase tracking-wider">
                SYSTEM ARCHITECTURE & CONSULTING
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 tracking-tight">
              Have a platform requiring system architecture leadership?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-500 font-mono">
              From relational schema design to sub-100ms async pipelines and automated cloud deployments.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/contact">
              <Button
                variant="gold"
                size="md"
                icon={<Mail className="w-4 h-4" />}
                className="font-mono text-xs shadow-gold-md"
              >
                Discuss a Project
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="secondary"
                size="md"
                icon={<Sparkles className="w-3.5 h-3.5" />}
                className="font-mono text-xs"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
