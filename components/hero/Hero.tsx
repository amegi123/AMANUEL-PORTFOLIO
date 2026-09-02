"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Cpu, Code2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TibebPattern } from "./TibebPattern";

export const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-[#FAF8F5] border-b border-surface-border"
    >
      {/* Authentic Cultural Textile Pattern with Interactive Cloth Wave on Mouse Hover */}
      <TibebPattern opacity={0.18} interactive={true} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center my-auto space-y-8">
        {/* Status Indicator */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2.5">
          <span className="font-mono text-xs font-bold text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-surface-borderGold uppercase tracking-wider">
            Full-Stack Developer · Systems & Automation
          </span>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-surface-border text-charcoal-700 font-mono text-xs shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Projects & Contracts</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal-900 leading-[1.14]">
          Engineering digital products from schema to production.
        </h1>

        {/* Concise Supporting Line */}
        <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto font-normal">
          Building resilient web applications, multi-tenant backend architectures, and autonomous AI workflow integrations designed for reliability and scale.
        </p>

        {/* Action CTAs */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link href="/services">
            <Button
              variant="gold"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Capabilities
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="secondary"
              size="lg"
              icon={<Mail className="w-4 h-4 text-gold-600" />}
            >
              Direct Inquiry
            </Button>
          </Link>
        </div>

        {/* Technical Highlights */}
        <div className="pt-2 flex items-center justify-center gap-6 sm:gap-8 text-xs font-mono text-charcoal-500">
          <span className="flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-gold-600" />
            Next.js & Laravel Web Apps
          </span>
          <span className="flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-emerald-600" />
            Autonomous AI Pipelines
          </span>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative pt-6 pb-2 text-center">
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
