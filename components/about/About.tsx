"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuickProfile } from "./QuickProfile";
import { Button } from "@/components/ui/Button";
import {
  Code2,
  Server,
  Cpu,
  ArrowRight,
  Sparkles,
  Layers,
  Check,
} from "lucide-react";

export const About: React.FC = () => {
  const domains = [
    {
      number: "01",
      title: "Web & Product Engineering",
      description:
        "Building fast, accessible, and responsive user interfaces with React 19, Next.js App Router, and TypeScript. Obsessed with clean component architecture and smooth micro-interactions.",
      stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
      icon: Code2,
    },
    {
      number: "02",
      title: "Backend & Distributed Systems",
      description:
        "Architecting resilient REST and GraphQL APIs with Laravel and Node.js. Designing multi-tenant PostgreSQL schemas with JSONB indexing and Redis caching for high throughput.",
      stack: ["Laravel 11", "Node.js", "PostgreSQL", "Redis", "Docker"],
      icon: Server,
    },
    {
      number: "03",
      title: "Applied AI & Automation",
      description:
        "Integrating multimodal LLMs (OpenAI, Gemini) into production workflows—from structured document extraction and semantic search to automated n8n webhook pipelines.",
      stack: ["OpenAI GPT-4o", "Google Gemini", "LangChain", "n8n"],
      icon: Cpu,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#FAF8F5]">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E0D5_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12">
          <SectionHeading
            number="01"
            tag="Engineering Identity"
            title="Crafting software from first principles."
            subtitle="Full-stack engineer and software architect specializing in scalable web systems, relational backends, and practical AI automation."
            className="mb-0"
          />
        </div>

        {/* 2-Column Clean Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Narrative & 3 Core Domains */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Narrative Paragraph */}
            <div className="p-7 sm:p-8 rounded-3xl border border-neutral-200/90 bg-white/80 backdrop-blur-md shadow-card-subtle space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500" />
                <span className="text-[11px] font-mono text-charcoal-500 font-bold uppercase tracking-wider">
                  ENGINEERING PERSPECTIVE
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal-900 tracking-tight leading-snug">
                I bridge the gap between sound architectural design and clean, production-ready execution.
              </h3>

              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                Whether blueprinting a multi-tenant database from scratch, optimizing API queries for scale, or developing modern interactive user interfaces, I focus on building software that is maintainable, type-safe, and impactful.
              </p>
            </div>

            {/* 3 Core Domains Cards */}
            <div className="space-y-3.5">
              {domains.map((domain) => {
                const Icon = domain.icon;
                return (
                  <div
                    key={domain.number}
                    className="p-5 sm:p-6 rounded-2xl border border-neutral-200/90 bg-white shadow-xs hover:shadow-card-subtle hover:border-gold-300 transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-surface-100 text-charcoal-800 flex items-center justify-center border border-surface-border group-hover:bg-gold-50 group-hover:text-gold-800 group-hover:border-gold-200 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-charcoal-900 group-hover:text-gold-800 transition-colors">
                          {domain.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono text-charcoal-400 font-bold">
                        [{domain.number}]
                      </span>
                    </div>

                    <p className="text-xs sm:text-[13px] text-charcoal-600 leading-relaxed font-normal mb-3 pl-10.5">
                      {domain.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pl-10.5">
                      {domain.stack.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 rounded-md bg-surface-100 text-charcoal-700 border border-surface-border font-mono text-[10px]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Link href="/contact">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<ArrowRight className="w-3.5 h-3.5 text-slate-300" />}
                    className="bg-charcoal-900 text-white hover:bg-charcoal-800 font-mono text-xs shadow-xs"
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
                    View Services
                  </Button>
                </Link>
              </div>

              <Link
                href="/about"
                className="text-xs font-mono text-charcoal-500 hover:text-gold-700 flex items-center gap-1 transition-colors"
              >
                <span>Full Bio & Principles</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Right Column: Craftsman Profile Card */}
          <div className="lg:col-span-5 flex flex-col justify-stretch">
            <QuickProfile />
          </div>
        </div>
      </div>
    </section>
  );
};
