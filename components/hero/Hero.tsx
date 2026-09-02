"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Cpu, Code2, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TibebPattern } from "./TibebPattern";
import { HeroCodeEditor } from "./HeroCodeEditor";

export const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden bg-[#FAF8F5] border-b border-surface-border"
    >
      {/* Authentic Cultural Textile Pattern Background */}
      <TibebPattern opacity={0.15} interactive={true} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-6 text-left space-y-6">
            {/* Status Indicator */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-surface-borderGold uppercase tracking-wider">
                Full-Stack Developer · Systems & AI
              </span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-surface-border text-charcoal-700 font-mono text-xs shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Projects</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-charcoal-900 leading-[1.12]">
              Engineering digital products from schema to production.
            </h1>

            {/* Supporting Bio Line */}
            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-normal">
              Building resilient web applications, multi-tenant backend architectures, and autonomous AI workflow integrations designed for reliability, speed, and real business impact.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
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
                  className="font-mono text-xs"
                >
                  Direct Inquiry
                </Button>
              </Link>
            </div>

            {/* Tech Highlights Strip */}
            <div className="pt-3 border-t border-surface-border flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-charcoal-500">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-gold-600" />
                Next.js 15 & Laravel 11
              </span>
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-emerald-600" />
                Autonomous AI Pipelines
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Code & Programming Animation */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <HeroCodeEditor />
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="relative pt-10 text-center">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 text-[11px] font-mono text-charcoal-400 hover:text-gold-700 transition-colors"
          aria-label="Scroll to about section"
        >
          <span>Explore journey</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-gold-600" />
        </a>
      </div>
    </section>
  );
};
