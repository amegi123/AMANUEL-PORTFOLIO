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
  ArrowRight,
  Sparkles,
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
  return (
    <div
      id={`project-${project.id}`}
      className="group rounded-2xl border border-neutral-200/90 bg-white shadow-card-subtle hover:shadow-gold-md hover:border-amber-500/50 transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* 1. Top Visual Thumbnail Preview */}
      <div className="relative w-full bg-neutral-950 overflow-hidden">
        <ProjectPreviewMockup
          project={project}
          onOpenCaseStudy={onOpenCaseStudy}
        />
      </div>

      {/* 2. Bottom Project Information & Specs Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3.5">
          {/* Top Kicker: Category & Pulsating Active Status */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-gold-700">
                [{project.number}]
              </span>
              <div className="h-3 w-px bg-surface-border" />
              <span className="text-[11px] font-mono text-charcoal-500 font-bold uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            {/* Active Status Badge */}
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-mono font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Active</span>
            </div>
          </div>

          {/* Title & Tagline */}
          <div>
            <h3
              onClick={() => onOpenCaseStudy(project)}
              className="text-xl sm:text-2xl font-extrabold tracking-tight text-charcoal-900 group-hover:text-gold-800 transition-colors cursor-pointer"
            >
              {project.name}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-gold-800 font-semibold font-mono">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Metrics Quick Strip */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-2 pt-1">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-xl bg-surface-50 border border-surface-border shadow-xs text-center"
                >
                  <span className="text-[9px] font-mono text-charcoal-400 uppercase block font-semibold truncate">
                    {metric.label}
                  </span>
                  <span className="text-xs font-bold text-charcoal-900 font-mono">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Row with Mini Inline SVG Badges */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] font-mono uppercase text-charcoal-400 font-semibold block">
              Architecture Stack:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-100/80 border border-neutral-200/90 text-charcoal-800 text-xs font-mono font-medium shadow-xs"
                >
                  <TechLogo name={tech} size={14} className="w-3.5 h-3.5" />
                  <span>{tech}</span>
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="inline-flex items-center px-2 py-1 rounded-lg bg-surface-100 border border-neutral-200 text-charcoal-500 text-[11px] font-mono">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-surface-border flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="primary"
                  size="sm"
                  icon={<ExternalLink className="w-3.5 h-3.5 text-slate-300" />}
                  className="bg-charcoal-900 text-white hover:bg-charcoal-800 font-mono text-xs shadow-xs"
                >
                  Live Demo
                </Button>
              </a>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenCaseStudy(project)}
              icon={<Code2 className="w-3.5 h-3.5 text-gold-600" />}
              className="font-mono text-xs border-surface-border hover:border-gold-400 hover:text-gold-800"
            >
              System Specs
            </Button>
          </div>

          <Link
            href={`/projects/${project.id}`}
            className="text-xs font-mono text-charcoal-500 hover:text-gold-700 flex items-center gap-1 transition-colors"
          >
            <span>Case Study</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
