"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Cpu,
  Code2,
  ChevronDown,
  Sparkles,
  Layers,
  Terminal,
  Database,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CodingInnovationBackground } from "./CodingInnovationBackground";

export const Hero: React.FC = () => {
  const stackChips = [
    { label: "Next.js 15 & React 19", icon: Code2 },
    { label: "Laravel 11 & Node.js", icon: Database },
    { label: "PostgreSQL & Redis", icon: Layers },
    { label: "Autonomous AI Agents", icon: Cpu },
  ];

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden bg-[#FAF8F5] border-b border-surface-border"
    >
      {/* Interactive Coding & Innovation Geometry Background */}
      <CodingInnovationBackground opacity={0.9} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center my-auto space-y-8 z-10">
        {/* Status Indicator */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2.5">
          <span className="font-mono text-xs font-bold text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-surface-borderGold uppercase tracking-wider shadow-xs">
            Full-Stack Software Developer · Applied AI
          </span>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-surface-border text-charcoal-700 font-mono text-xs shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Projects & Contracts</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal-900 leading-[1.12]">
          Engineering digital products from schema to production.
        </h1>

        {/* Concise Supporting Line */}
        <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto font-normal">
          Building resilient web applications, multi-tenant backend architectures, and autonomous AI automation pipelines designed for speed, reliability, and scale.
        </p>

        {/* Action CTAs */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link href="/services">
            <Button
              variant="gold"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              className="font-mono text-xs shadow-gold-md"
            >
              Explore Capabilities
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="secondary"
              size="lg"
              icon={<Mail className="w-4 h-4 text-gold-600" />}
              className="font-mono text-xs bg-white shadow-xs"
            >
              Direct Inquiry
            </Button>
          </Link>
        </div>

        {/* Core Architecture Highlights Chips */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5">
          {stackChips.map((chip, idx) => {
            const Icon = chip.icon;
            return (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 backdrop-blur-md border border-surface-border text-charcoal-700 text-xs font-mono shadow-xs hover:border-gold-300 hover:text-gold-800 transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-gold-600" />
                <span>{chip.label}</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative pt-8 pb-2 text-center z-10">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 text-[11px] font-mono text-charcoal-400 hover:text-gold-700 transition-colors"
          aria-label="Scroll to about section"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-gold-600" />
        </a>
      </div>
    </section>
  );
};
