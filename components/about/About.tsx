"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Code2,
  Server,
  Cpu,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  CheckCircle2,
} from "lucide-react";

export const About: React.FC = () => {
  const highlights = [
    {
      title: "Frontend & UI Craft",
      desc: "React 19, Next.js 15 App Router, TypeScript & Tailwind CSS.",
      icon: Code2,
    },
    {
      title: "Backend & Systems",
      desc: "Laravel 11, Node.js, PostgreSQL schemas, Redis caching & Docker.",
      icon: Server,
    },
    {
      title: "AI & Automations",
      desc: "Applied LLM workflows (OpenAI, Gemini), document intelligence & n8n.",
      icon: Cpu,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#FAF8F5] border-t border-surface-border">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E0D5_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <SectionHeading
            number="01"
            tag="About Me"
            title="Building modern products with real impact."
            subtitle="Full-stack software developer passionate about turning ambitious ideas into reliable, scalable digital experiences."
            className="mb-0"
          />
        </div>

        {/* Main 2-Column About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Portrait Image & Quick Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Warm Backplate */}
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-tr from-amber-200/50 via-gold-300/30 to-surface-border opacity-70 blur-lg -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200/90 bg-white shadow-xl group">
                <div className="relative aspect-[4/5] w-full bg-neutral-100 overflow-hidden">
                  <Image
                    src="/img/IMG_0696.JPG"
                    alt="Amanuel Girma — Full-Stack Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Gradient Vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Live Status Pill (Top-Right) */}
                <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 text-emerald-800 font-mono text-[11px] font-bold shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Available for Work</span>
                </div>

                {/* Floating Info Overlay (Bottom) */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-extrabold text-charcoal-900 tracking-tight">
                        Amanuel Girma
                      </h3>
                      <p className="text-xs font-mono text-gold-700 font-semibold">
                        Full-Stack Developer & Systems Architect
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <a
                        href="https://github.com/amegi123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-surface-100 hover:bg-gold-50 text-charcoal-700 hover:text-gold-800 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-surface-100 hover:bg-gold-50 text-charcoal-700 hover:text-gold-800 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                      <Link
                        href="/contact"
                        className="p-1.5 rounded-lg bg-surface-100 hover:bg-gold-50 text-charcoal-700 hover:text-gold-800 transition-colors"
                        aria-label="Contact"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-7">
            {/* Core Narrative Paragraphs */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-surface-borderGold text-gold-900 font-mono text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                <span>MEET THE DEVELOPER</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight leading-snug">
                I’m Amanuel Girma, a full-stack developer passionate about building modern, reliable, and user-focused digital experiences.
              </h3>

              <div className="space-y-3 text-sm sm:text-base text-charcoal-600 leading-relaxed font-normal">
                <p>
                  I work across frontend and backend technologies to turn ideas into practical, scalable products.
                </p>
                <p>
                  I enjoy solving problems, learning new technologies, and building things that make a real impact.
                </p>
              </div>
            </div>

            {/* 3 Core Architecture Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-xs hover:shadow-card-subtle hover:border-gold-300 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-surface-100 text-charcoal-800 flex items-center justify-center mb-2.5 group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors border border-surface-border">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-charcoal-900 mb-1 group-hover:text-gold-800 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-charcoal-500 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Location & Quick Meta */}
            <div className="p-4 rounded-2xl bg-white border border-surface-border shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-charcoal-700">
                <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Addis Ababa, Ethiopia (UTC+3 · Remote Ready)</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                <Briefcase className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Open for Contracts & Freelance</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link href="/contact">
                <Button
                  variant="gold"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="font-mono text-xs shadow-gold-md"
                >
                  Discuss a Project
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  variant="secondary"
                  size="md"
                  icon={<Sparkles className="w-3.5 h-3.5" />}
                  className="font-mono text-xs"
                >
                  Explore Selected Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
