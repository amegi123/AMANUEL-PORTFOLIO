"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Project } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { ArrowRight, FolderKanban, Sparkles, Mail, Plus } from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 relative bg-[#FAF8F5] border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <SectionHeading
            number="03"
            tag="Engineering Portfolio"
            title="Selected Work"
            subtitle="Production software, multi-tenant architectures, and automated digital systems."
            className="mb-0"
          />
          <Link href="/contact" className="mt-4 sm:mt-0">
            <Button variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5 text-gold-600" />}>
              Request Project Briefs
            </Button>
          </Link>
        </div>

        {projectsData.length === 0 ? (
          /* High-Craft Empty State */
          <div className="rounded-2xl border border-surface-border bg-white p-8 sm:p-12 text-center shadow-card-subtle relative overflow-hidden">
            <div className="max-w-md mx-auto space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold-50 border border-surface-borderGold text-gold-700">
                <FolderKanban className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-gold-700 font-bold uppercase tracking-wider block">
                  PORTFOLIO // ARCHIVE STATUS
                </span>
                <h3 className="text-xl font-bold text-charcoal-900">
                  Case Studies Currently Updating
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                New production case studies, system breakdowns, and enterprise deployment blueprints will be published here soon.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <Link href="/contact">
                  <Button variant="gold" size="sm" icon={<Mail className="w-3.5 h-3.5" />}>
                    Discuss a Project
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="secondary" size="sm" icon={<Sparkles className="w-3.5 h-3.5" />}>
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
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
