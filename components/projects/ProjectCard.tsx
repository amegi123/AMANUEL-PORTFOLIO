"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { TechLogo } from "@/components/skills/TechLogo";
import { ProjectPreviewMockup } from "./ProjectPreviewMockup";
import {
  ExternalLink,
  Code2,
  CheckCircle2,
  TrendingUp,
  Layers,
  ArrowRight,
} from "lucide-react";

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
        {/* Visual Mockup Thumbnail Column */}
        <div
          className={`lg:col-span-6 ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <ProjectPreviewMockup
            project={project}
            onOpenCaseStudy={onOpenCaseStudy}
          />
        </div>

        {/* Project Spec Column */}
        <div
          className={`lg:col-span-6 space-y-4 sm:space-y-5 ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {/* Top Kicker: Category & Pulsating Active Status */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-gold-700">
                [{project.number}]
              </span>
              <div className="h-3 w-px bg-surface-border" />
              <span className="text-[11px] sm:text-xs font-mono text-charcoal-500 font-bold uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            {/* Active Status Indicator */}
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-mono font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Active System</span>
            </div>
          </div>

          {/* Heading & Tagline */}
          <div>
            <h3
              onClick={() => onOpenCaseStudy(project)}
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-charcoal-900 hover:text-gold-700 transition-colors cursor-pointer"
            >
              {project.name}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-gold-800 font-semibold font-mono">
              {project.tagline}
            </p>
          </div>

          {/* Description (2 Concise Architecture Sentences) */}
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Key Metrics / Highlights Row */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-2 py-1">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-white border border-surface-border shadow-xs"
                >
                  <span className="text-[9px] sm:text-[10px] font-mono text-charcoal-400 uppercase block font-semibold truncate">
                    {metric.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-charcoal-900 font-mono">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Row with Mini Inline Logo Badges */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase text-charcoal-400 font-semibold block">
              Core Technologies:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-neutral-200/90 text-charcoal-800 text-xs font-mono font-medium shadow-xs hover:border-amber-500/40 transition-colors"
                >
                  <TechLogo name={tech} size={14} className="w-3.5 h-3.5" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {/* Primary Live Demo Button */}
            <a
              href={project.liveUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="primary"
                size="sm"
                icon={<ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-white" />}
                className="bg-charcoal-900 text-white hover:bg-charcoal-800 font-mono text-xs shadow-sm"
              >
                Live Demo
              </Button>
            </a>

            {/* Secondary System Specs Outline Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenCaseStudy(project)}
              icon={<Code2 className="w-3.5 h-3.5 text-gold-600" />}
              className="font-mono text-xs border-surface-border hover:border-gold-400 hover:text-gold-800"
            >
              System Specs
            </Button>

            {/* Standalone Project Link */}
            <Link
              href={`/projects/${project.id}`}
              className="text-xs font-mono text-charcoal-400 hover:text-gold-700 flex items-center gap-1 ml-auto"
            >
              <span>Full Case Study</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
