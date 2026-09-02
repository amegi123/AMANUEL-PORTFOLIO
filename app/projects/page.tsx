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
