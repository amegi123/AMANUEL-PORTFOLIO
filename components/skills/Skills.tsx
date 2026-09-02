"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechLogo } from "./TechLogo";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface MarqueeSkill {
  name: string;
  logoKey: string;
  tag: string;
  level: string;
  role: string;
}

const rowOneSkills: MarqueeSkill[] = [
  { name: "Next.js", logoKey: "nextjs", tag: "App Router & SSR", level: "Expert", role: "Hybrid SSR/SSG & Server Actions" },
  { name: "React", logoKey: "react", tag: "Concurrent UI", level: "Expert", role: "Custom Hooks & Design Systems" },
  { name: "TypeScript", logoKey: "typescript", tag: "Strict Types", level: "Expert", role: "Type Safety & Enterprise Schemas" },
  { name: "Tailwind CSS", logoKey: "tailwindcss", tag: "Design Systems", level: "Expert", role: "Token Architecture & Micro-Interactions" },
  { name: "JavaScript", logoKey: "javascript", tag: "ESNext & Async", level: "Expert", role: "Event-Driven & Asynchronous Logic" },
  { name: "Flutter", logoKey: "flutter", tag: "Cross-Platform", level: "Advanced", role: "Native Mobile Pipelines & Reactive State" },
  { name: "Supabase", logoKey: "supabase", tag: "Realtime DB", level: "Advanced", role: "Postgres RLS Policies & Auth" },
];

const rowTwoSkills: MarqueeSkill[] = [
  { name: "Laravel", logoKey: "laravel", tag: "Enterprise SaaS", level: "Expert", role: "Multi-tenant Architecture & Queues" },
  { name: "PostgreSQL", logoKey: "postgresql", tag: "Relational & JSONB", level: "Advanced", role: "Multi-Tenant Indexing & Optimization" },
  { name: "Node.js", logoKey: "nodejs", tag: "Async I/O", level: "Advanced", role: "Streaming APIs & Worker Threads" },
  { name: "NestJS", logoKey: "nestjs", tag: "Microservices", level: "Advanced", role: "Modular Dependency Injection" },
  { name: "OpenAI", logoKey: "openai", tag: "Agentic Loops", level: "Advanced", role: "Function Calling & Multimodal GPT-4o" },
  { name: "Gemini", logoKey: "gemini", tag: "Long Context", level: "Advanced", role: "Gemini 2.0 Reasoning & Processing" },
  { name: "Redis", logoKey: "redis", tag: "Sub-ms Cache", level: "Advanced", role: "In-Memory Caching & Distributed Locks" },
  { name: "Docker", logoKey: "docker", tag: "Containers", level: "Advanced", role: "Multi-Stage Builds & Isolation" },
  { name: "n8n", logoKey: "n8n", tag: "Automation", level: "Expert", role: "Self-Hosted Workflow Orchestration" },
  { name: "Linux", logoKey: "linux", tag: "Server Admin", level: "Advanced", role: "Debian/Ubuntu & SSH Hardening" },
  { name: "Git", logoKey: "git", tag: "CI/CD & Flow", level: "Expert", role: "Trunk-Based Workflows & Rebasing" },
];

export const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<MarqueeSkill | null>(null);

  const renderSkillTile = (skill: MarqueeSkill, index: number) => {
    return (
      <div
        key={`${skill.name}-${index}`}
        onMouseEnter={() => setActiveSkill(skill)}
        onMouseLeave={() => setActiveSkill(null)}
        className="group/tile mx-3 sm:mx-4 shrink-0 flex items-center gap-4 px-6 py-4 rounded-2xl sm:rounded-3xl border border-neutral-200/90 bg-white/90 backdrop-blur-md shadow-card-subtle hover:shadow-gold-md hover:border-amber-500/50 hover:bg-white transition-all duration-300 cursor-pointer select-none"
      >
        <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-surface-50 border border-surface-border flex items-center justify-center shrink-0 group-hover/tile:scale-110 group-hover/tile:border-gold-300 transition-all duration-300 shadow-xs">
          <TechLogo name={skill.logoKey} size={44} className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-xs" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-2.5">
            <span className="text-sm sm:text-base font-extrabold text-charcoal-900 tracking-tight block">
              {skill.name}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gold-50 text-gold-800 border border-gold-300/70 font-bold uppercase">
              {skill.level}
            </span>
          </div>
          <span className="text-xs sm:text-[13px] font-mono text-charcoal-600 block leading-tight mt-1 font-medium">
            {skill.tag}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#FAF8F5] overflow-hidden border-t border-surface-border">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E0D5_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading
            number="02"
            tag="Engineering Tech Stack"
            title="Tools I build with."
            subtitle="Curated, production-tested technologies power-scaling modern web apps, cloud backends, and AI pipelines."
            className="mb-0"
          />
          <Link href="/skills" className="shrink-0">
            <Button
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5 text-gold-600 group-hover:translate-x-0.5 transition-transform" />}
              className="font-mono text-xs border-surface-border hover:border-gold-400 bg-white shadow-xs"
            >
              Full Stack Matrix
            </Button>
          </Link>
        </div>
      </div>

      {/* Two-Row Auto-Sliding Marquee Showcase */}
      <div className="relative w-full overflow-hidden pause-on-hover space-y-5 py-3">
        {/* Left & Right Smooth Gradient Edge Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-20" />

        {/* Row 1: Auto Slide Left (55s smooth glide) */}
        <div className="flex animate-marquee">
          {/* Duplicate row items to create infinite seamless loop */}
          {rowOneSkills.map((skill, i) => renderSkillTile(skill, i))}
          {rowOneSkills.map((skill, i) => renderSkillTile(skill, i + rowOneSkills.length))}
          {rowOneSkills.map((skill, i) => renderSkillTile(skill, i + rowOneSkills.length * 2))}
        </div>

        {/* Row 2: Auto Slide Right (60s smooth glide) */}
        <div className="flex animate-marquee-reverse">
          {/* Duplicate row items to create infinite seamless loop */}
          {rowTwoSkills.map((skill, i) => renderSkillTile(skill, i))}
          {rowTwoSkills.map((skill, i) => renderSkillTile(skill, i + rowTwoSkills.length))}
          {rowTwoSkills.map((skill, i) => renderSkillTile(skill, i + rowTwoSkills.length * 2))}
        </div>
      </div>

      {/* Dynamic Architecture Inspector Pill */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-neutral-200/80 bg-white/80 backdrop-blur-md flex items-center justify-between gap-4 text-xs font-mono shadow-xs">
          <div className="flex items-center gap-2.5 text-charcoal-600 truncate">
            {activeSkill ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                <span className="truncate">
                  <strong className="text-charcoal-900 font-bold mr-1.5">{activeSkill.name}:</strong>
                  {activeSkill.role}
                </span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-charcoal-500 truncate">
                  Hover or tap any technology card to pause rotation and inspect architecture details.
                </span>
              </>
            )}
          </div>
          <span className="hidden sm:inline-block text-[11px] text-charcoal-400 shrink-0 font-semibold">
            2-Row Continuous Live Stream
          </span>
        </div>
      </div>
    </section>
  );
};
