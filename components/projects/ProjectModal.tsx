"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, CheckCircle2, Layers, ArrowRight } from "lucide-react";
import { Project } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

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
              <p className="text-xs font-mono text-charcoal-500">{project.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-surface-100 border border-surface-border text-charcoal-600 hover:text-charcoal-900 transition-colors"
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

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-surface-border">
            <Badge variant="gold" size="md">
              {project.role}
            </Badge>
            {project.highlights.map((h, i) => (
              <Badge key={i} variant="default" size="md">
                {h}
              </Badge>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-bold">
              Key Features & Capabilities
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
                  <span className="text-[10px] font-mono text-charcoal-400 uppercase block">
                    Frontend Layer
                  </span>
                  <p className="text-charcoal-800 font-medium">{project.architecture.frontend}</p>
                </div>
              )}
              {project.architecture.backend && (
                <div className="p-2.5 rounded-lg bg-white border border-surface-border">
                  <span className="text-[10px] font-mono text-charcoal-400 uppercase block">
                    Backend Core
                  </span>
                  <p className="text-charcoal-800 font-medium">{project.architecture.backend}</p>
                </div>
              )}
              {project.architecture.database && (
                <div className="p-2.5 rounded-lg bg-white border border-surface-border">
                  <span className="text-[10px] font-mono text-charcoal-400 uppercase block">
                    Database
                  </span>
                  <p className="text-charcoal-800 font-medium">{project.architecture.database}</p>
                </div>
              )}
              {project.architecture.aiAutomation && (
                <div className="p-2.5 rounded-lg bg-white border border-surface-border sm:col-span-2">
                  <span className="text-[10px] font-mono text-gold-700 font-bold uppercase block">
                    AI & Automation Engine
                  </span>
                  <p className="text-charcoal-800 font-medium">{project.architecture.aiAutomation}</p>
                </div>
              )}
            </div>
          </div>

          {/* Footer actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-surface-border">
            <Link
              href={`/projects/${project.id}`}
              className="text-xs font-mono text-gold-700 font-bold hover:underline"
            >
              Open Standalone Project Page →
            </Link>
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
