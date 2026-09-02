"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Code2, Layers, Cpu } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onOpenCaseStudy,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      id={`project-${project.id}`}
      className="py-12 md:py-16 border-b border-surface-border last:border-b-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Info Column */}
        <div
          className={`lg:col-span-6 space-y-4 ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {/* Number & Category */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm sm:text-base font-bold text-gold-700">
              {project.number} // PROJECT
            </span>
            <div className="h-3.5 w-px bg-surface-border" />
            <span className="text-xs sm:text-sm font-mono text-charcoal-500 uppercase tracking-wider font-semibold">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-charcoal-900">
              {project.name}
            </h3>
            <p className="mt-1 text-sm sm:text-base text-gold-800 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2">
            {project.highlights.map((highlight, idx) => (
              <Badge
                key={idx}
                variant={idx === 0 ? "gold" : "default"}
                size="sm"
              >
                {highlight}
              </Badge>
            ))}
          </div>

          {/* Technology tags */}
          <div className="pt-1">
            <div className="flex flex-wrap gap-1.5 font-mono text-xs text-charcoal-600">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md bg-white border border-surface-border text-charcoal-700 shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Button
              variant="gold"
              size="md"
              onClick={() => onOpenCaseStudy(project)}
              className="group text-xs"
              icon={
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              }
            >
              Case Study Modal
            </Button>
            <Link href={`/projects/${project.id}`}>
              <Button
                variant="secondary"
                size="md"
                className="text-xs font-mono"
              >
                Full Page
              </Button>
            </Link>
          </div>
        </div>

        {/* Technical Specification Box */}
        <div
          className={`lg:col-span-6 ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="rounded-2xl border border-surface-border bg-charcoal-900 text-white p-6 shadow-gold-sm space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-charcoal-800 pb-3">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-gold-500" />
                <span className="text-zinc-300 font-bold uppercase">{project.name}</span>
              </div>
              <span className="text-[10px] text-zinc-500">SPECIFICATION</span>
            </div>

            <div className="space-y-2 text-zinc-400">
              <div className="flex justify-between">
                <span className="text-zinc-500">Role:</span>
                <span className="text-zinc-200">{project.role}</span>
              </div>
              {project.architecture.frontend && (
                <div className="flex justify-between">
                  <span className="text-zinc-500">Frontend:</span>
                  <span className="text-zinc-200">{project.architecture.frontend}</span>
                </div>
              )}
              {project.architecture.backend && (
                <div className="flex justify-between">
                  <span className="text-zinc-500">Backend:</span>
                  <span className="text-zinc-200">{project.architecture.backend}</span>
                </div>
              )}
              {project.architecture.database && (
                <div className="flex justify-between">
                  <span className="text-zinc-500">Database:</span>
                  <span className="text-zinc-200">{project.architecture.database}</span>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-charcoal-800 flex items-center justify-between text-[11px] text-zinc-400">
              <span>Status: Production Ready</span>
              <span className="text-emerald-400 font-bold">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
