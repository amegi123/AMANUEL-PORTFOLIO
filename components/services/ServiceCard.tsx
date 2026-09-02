"use client";

import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/lib/types";
import { TechLogo } from "@/components/skills/TechLogo";
import {
  CheckCircle2,
  ArrowRight,
  Code2,
  Layers,
  Cpu,
  Building2,
  Palette,
  Rocket,
  Sparkles,
} from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
}

const ICONS_MAP: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  "full-stack-development": { icon: Code2, color: "text-amber-700", bg: "bg-amber-50 border-amber-200" },
  "saas-development": { icon: Layers, color: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
  "ai-automation": { icon: Cpu, color: "text-purple-700", bg: "bg-purple-50 border-purple-200" },
  "business-systems": { icon: Building2, color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" },
  "ui-ux-design": { icon: Palette, color: "text-rose-700", bg: "bg-rose-50 border-rose-200" },
  "digital-product-development": { icon: Rocket, color: "text-cyan-700", bg: "bg-cyan-50 border-cyan-200" },
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const iconConfig = ICONS_MAP[service.id] || {
    icon: Sparkles,
    color: "text-gold-700",
    bg: "bg-gold-50 border-surface-borderGold",
  };
  const Icon = iconConfig.icon;

  return (
    <div className="rounded-3xl border border-neutral-200/90 bg-white p-7 sm:p-8 shadow-card-subtle hover:shadow-gold-md hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
      {/* Subtle Top-Right Ambient Gradient Blob */}
      <div className="absolute top-0 right-0 -mr-12 -mt-12 w-32 h-32 rounded-full bg-gold-400/10 blur-2xl group-hover:bg-gold-500/20 transition-all pointer-events-none" />

      <div className="space-y-4 relative z-10">
        {/* Top Header: Icon, Number & Category */}
        <div className="flex items-start justify-between gap-3">
          <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${iconConfig.bg} ${iconConfig.color} shadow-xs group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="text-right">
            <span className="font-mono text-xs font-bold text-gold-700 block">
              [{service.number}]
            </span>
            <span className="text-[10px] font-mono text-charcoal-400 uppercase font-semibold tracking-wider block mt-0.5">
              {service.category}
            </span>
          </div>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-xl font-extrabold text-charcoal-900 tracking-tight group-hover:text-gold-800 transition-colors">
            {service.title}
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
            {service.description}
          </p>
        </div>

        {/* Target Audience Pill */}
        {service.targetAudience && (
          <div className="p-2.5 rounded-xl bg-surface-50 border border-surface-border text-[11px] font-mono text-charcoal-600 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span className="truncate">{service.targetAudience}</span>
          </div>
        )}

        {/* Deliverables Checklist */}
        <div className="space-y-2 pt-1">
          <p className="text-[10px] font-mono uppercase text-charcoal-400 font-bold tracking-wider">
            Key Architecture Deliverables:
          </p>
          <div className="space-y-1.5">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer: Tech Stack with SVG Badges + Direct CTA */}
      <div className="mt-6 pt-4 border-t border-surface-border space-y-3.5 relative z-10">
        <div className="flex flex-wrap gap-1.5">
          {service.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-100/90 border border-neutral-200 text-charcoal-800 text-[11px] font-mono font-medium shadow-2xs"
            >
              <TechLogo name={tech} size={12} className="w-3 h-3" />
              <span>{tech}</span>
            </span>
          ))}
        </div>

        <Link
          href={`/contact?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-gold-800 font-bold hover:text-amber-600 transition-colors group/link"
        >
          <span>Request Scope & Quote</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
