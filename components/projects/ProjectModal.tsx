"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, CheckCircle2, Layers, ArrowRight, ExternalLink, Code2, Sparkles } from "lucide-react";
import { Project } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TechLogo } from "@/components/skills/TechLogo";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-900/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] bg-white border border-surface-borderGold rounded-2xl shadow-gold-lg overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-white/95 backdrop-blur-md border-b border-surface-border">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-gold-700 font-bold">
              [{project.number}]
            </span>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 tracking-tight">
                {project.name}
              </h3>
              <p className="text-xs font-mono text-charcoal-500 font-semibold">{project.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-surface-100 border border-surface-border text-charcoal-600 hover:text-charcoal-900 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <p className="text-lg font-bold text-charcoal-900 leading-snug">
              {project.tagline}
            </p>
            <p className="text-sm text-charcoal-600 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-surface-50 border border-surface-border font-mono">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <span className="text-[10px] text-charcoal-400 uppercase block font-semibold">
                    {m.label}
                  </span>
                  <span className="text-sm font-bold text-charcoal-900">{m.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Badges with SVGs */}
          <div className="space-y-2 pt-2 border-t border-surface-border">
            <span className="text-[10px] font-mono text-charcoal-400 uppercase font-semibold block">
              Production Technologies
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-100 border border-surface-border text-charcoal-800 text-xs font-mono"
                >
                  <TechLogo name={tech} size={14} className="w-3.5 h-3.5" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-bold">
              Core Architectural Capabilities
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-surface-100/70 border border-surface-border space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                    <p className="text-xs font-bold text-charcoal-900">{feature.title}</p>
                  </div>
                  <p className="text-xs text-charcoal-600 leading-relaxed pl-6">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stack Breakdown */}
          <div className="p-4 rounded-xl bg-surface-50 border border-surface-border space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-charcoal-500 flex items-center gap-1.5 font-bold">
              <Layers className="w-3.5 h-3.5 text-gold-600" />
              Technical Stack Breakdown
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {project.architecture.frontend && (
                <div className="p-2.5 rounded-lg bg-white border border-surface-border">
                  <span className="text-[10px] font-mono text-charcoal-400 uppercase block font-semibold mb-0.5">
                    Frontend Layer
                  </span>
                  <p className="text-charcoal-800 font-medium">{project.architecture.frontend}</p>
                </div>
              )}
              {project.architecture.backend && (
                <div className="p-2.5 rounded-lg bg-white border border-surface-border">
                  <span className="text-[10px] font-mono text-charcoal-400 uppercase block font-semibold mb-0.5">
                    Backend Core
                  </span>
                  <p className="text-charcoal-800 font-medium">{project.architecture.backend}</p>
                </div>
              )}
              {project.architecture.database && (
                <div className="p-2.5 rounded-lg bg-white border border-surface-border">
                  <span className="text-[10px] font-mono text-charcoal-400 uppercase block font-semibold mb-0.5">
                    Database
                  </span>
                  <p className="text-charcoal-800 font-medium">{project.architecture.database}</p>
                </div>
              )}
              {project.architecture.aiAutomation && (
                <div className="p-2.5 rounded-lg bg-white border border-surface-border sm:col-span-2">
                  <span className="text-[10px] font-mono text-gold-700 font-bold uppercase block mb-0.5">
                    AI & Automation Engine
                  </span>
                  <p className="text-charcoal-800 font-medium">{project.architecture.aiAutomation}</p>
                </div>
              )}
            </div>
          </div>

          {/* Footer actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-surface-border">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="primary" size="sm" icon={<ExternalLink className="w-3.5 h-3.5" />}>
                    Open Live Demo
                  </Button>
                </a>
              )}
              <Link
                href={`/projects/${project.id}`}
                className="text-xs font-mono text-gold-700 font-bold hover:underline"
              >
                Open Full Page →
              </Link>
            </div>

            <Link href="/contact" onClick={onClose}>
              <Button variant="gold" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                Inquire About This Architecture
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
