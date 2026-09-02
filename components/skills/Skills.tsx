"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import { TechLogo } from "./TechLogo";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, Layers, Cpu, Server, Layout, CheckCircle2 } from "lucide-react";
import { SkillItem } from "@/lib/types";

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  const tabs = [
    { id: "all", label: "All Technologies", icon: Layers, count: skillCategories.reduce((acc, c) => acc + c.skills.length, 0) },
    { id: "frontend", label: "Frontend", icon: Layout, count: skillCategories.find((c) => c.id === "frontend")?.skills.length || 0 },
    { id: "backend", label: "Backend & Systems", icon: Server, count: skillCategories.find((c) => c.id === "backend")?.skills.length || 0 },
    { id: "ai-infrastructure", label: "AI & Infrastructure", icon: Cpu, count: skillCategories.find((c) => c.id === "ai-infrastructure")?.skills.length || 0 },
  ];

  const displayedSkills =
    activeTab === "all"
      ? skillCategories.flatMap((c) => c.skills)
      : skillCategories.find((c) => c.id === activeTab)?.skills || [];

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#FAF8F5]">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E0D5_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <SectionHeading
            number="02"
            tag="Engineering Tech Stack"
            title="Tools I build with."
            subtitle="Curated, production-tested ecosystem across modern frontend, resilient backends, autonomous AI pipelines, and cloud systems."
            className="mb-0"
          />
          <Link href="/skills" className="shrink-0">
            <Button
              variant="secondary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5 text-gold-600 group-hover:translate-x-0.5 transition-transform" />}
              className="font-mono text-xs shadow-xs hover:border-gold-400"
            >
              Full Stack Matrix
            </Button>
          </Link>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 shrink-0 border select-none ${
                  isActive
                    ? "bg-charcoal-900 text-white border-charcoal-900 shadow-sm"
                    : "bg-white/80 text-charcoal-600 border-neutral-200/80 hover:bg-white hover:text-charcoal-900 hover:border-neutral-300"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-gold-400" : "text-charcoal-400"}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-charcoal-800 text-gold-300" : "bg-neutral-100 text-charcoal-500"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* High-Density Icon Showcase Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {displayedSkills.map((skill) => {
            const isHovered = hoveredSkill?.name === skill.name;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => setHoveredSkill(isHovered ? null : skill)}
                className={`relative group rounded-2xl border border-neutral-200/90 bg-white/80 backdrop-blur-xs p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-xs transition-all duration-200 cursor-pointer ${
                  isHovered
                    ? "border-amber-500/60 shadow-gold-md bg-white -translate-y-1 ring-1 ring-amber-500/20"
                    : "hover:border-amber-500/40 hover:shadow-md hover:bg-white/95"
                }`}
              >
                {/* Brand Logo Container */}
                <div className="w-12 h-12 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                  <TechLogo name={skill.logoKey || skill.name} size={40} className="w-10 h-10 drop-shadow-xs" />
                </div>

                {/* Tech Name */}
                <span className="mt-3 text-xs sm:text-sm font-bold text-charcoal-900 tracking-tight block">
                  {skill.name}
                </span>

                {/* Level / Status Indicator */}
                <div className="mt-1 flex items-center gap-1">
                  {skill.featured && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                  )}
                  <span className="text-[10px] font-mono text-charcoal-400 uppercase">
                    {skill.level || "Core"}
                  </span>
                </div>

                {/* Floating Tooltip with 1-Line Key Use Case */}
                <div
                  className={`absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-56 sm:w-64 p-3 rounded-xl bg-charcoal-900 text-white shadow-xl border border-charcoal-700 pointer-events-none transition-all duration-200 ${
                    isHovered ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-1"
                  }`}
                >
                  <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-charcoal-800">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white">{skill.name}</span>
                      {skill.featured && (
                        <span className="text-[9px] font-mono bg-gold-900/60 text-gold-300 px-1.5 py-0.2 rounded border border-gold-700/40">
                          Production
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-gold-400 font-semibold uppercase">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-[11px] font-sans text-neutral-300 leading-snug text-left">
                    <strong className="text-gold-300 font-mono text-[10px] uppercase block mb-0.5">
                      Architecture Role:
                    </strong>
                    {skill.keyUseCase || skill.description}
                  </p>
                  {/* Tooltip Downward Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-charcoal-900" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Mobile/Desktop Inspection Bar */}
        <div className="mt-6 p-4 rounded-xl border border-neutral-200/80 bg-white/60 backdrop-blur-xs flex items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2.5 text-charcoal-600 truncate">
            {hoveredSkill ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                <span className="truncate">
                  <strong className="text-charcoal-900 font-bold mr-1.5">{hoveredSkill.name}:</strong>
                  {hoveredSkill.keyUseCase || hoveredSkill.description}
                </span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-charcoal-500">
                  Hover or tap any technology tile to inspect its 1-line production architecture role.
                </span>
              </>
            )}
          </div>
          <span className="hidden sm:inline-block text-[11px] text-charcoal-400 shrink-0">
            {displayedSkills.length} Technologies Active
          </span>
        </div>
      </div>
    </section>
  );
};
