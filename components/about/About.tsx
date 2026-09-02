"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuickProfile } from "./QuickProfile";
import { Button } from "@/components/ui/Button";
import {
  Code2,
  Cpu,
  Database,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Terminal,
  ShieldCheck,
} from "lucide-react";

export const About: React.FC = () => {
  const pillars = [
    {
      title: "Full-Stack SaaS Architecture",
      description: "End-to-end web applications with Next.js 15, React 19, TypeScript, and Laravel 11 backends.",
      icon: Code2,
      accent: "text-gold-600 bg-gold-50 border-gold-200",
    },
    {
      title: "Autonomous AI & Agent Pipelines",
      description: "Document intelligence, schema extraction, and webhook workflows using OpenAI, Gemini & n8n.",
      icon: Cpu,
      accent: "text-purple-600 bg-purple-50 border-purple-200",
    },
    {
      title: "Resilient Database & Cloud Systems",
      description: "PostgreSQL relational schemas with JSONB indexing, Redis caching, and Docker deployments.",
      icon: Database,
      accent: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#FAF8F5]">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E0D5_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12">
          <SectionHeading
            number="01"
            tag="Engineering Identity"
            title="Building technology from idea to execution."
            subtitle="Full-stack software development, resilient APIs, and autonomous AI automation pipelines."
            className="mb-0"
          />
        </div>

        {/* 2-Column Cohesive Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Core Narrative & Pillars Bento Card */}
          <div className="lg:col-span-7 rounded-3xl border border-neutral-200/90 bg-white/80 backdrop-blur-md p-7 sm:p-9 shadow-card-subtle flex flex-col justify-between space-y-7">
            {/* Top Identity Tag & Narrative */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono text-charcoal-500 font-bold uppercase tracking-wider">
                  ARCHITECTURAL PHILOSOPHY // CRAFT FIRST
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal-900 tracking-tight leading-snug">
                I design and build production-grade web systems, high-throughput APIs, and autonomous AI workflows.
              </h3>

              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                Focused on delivering end-to-end software solutions—from relational database modeling and secure backend services to high-performance, accessible Next.js interfaces with strict type safety.
              </p>
            </div>

            {/* 3 Core Architecture Pillars */}
            <div className="space-y-3 pt-2">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-2xl border border-surface-border bg-surface-50/70 hover:bg-white hover:border-gold-300 hover:shadow-xs transition-all duration-200 flex items-start gap-3.5 group/item"
                  >
                    <div className={`p-2.5 rounded-xl border shrink-0 ${pillar.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-charcoal-900 group-hover/item:text-gold-800 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-charcoal-500 leading-relaxed mt-0.5 font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 border-t border-surface-border flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Link href="/contact">
                  <Button
                    variant="gold"
                    size="sm"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="font-mono text-xs shadow-gold-md"
                  >
                    Discuss a Project
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={<Sparkles className="w-3.5 h-3.5" />}
                    className="font-mono text-xs"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>

              <Link
                href="/about"
                className="text-xs font-mono text-charcoal-500 hover:text-gold-700 flex items-center gap-1 transition-colors"
              >
                <span>Full Journey</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Developer Spec Console */}
          <div className="lg:col-span-5 flex flex-col justify-stretch">
            <QuickProfile />
          </div>
        </div>
      </div>
    </section>
  );
};
