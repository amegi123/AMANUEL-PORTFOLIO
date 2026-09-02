"use client";

import React, { useState } from "react";
import { SkillCategory as SkillCategoryType, SkillItem } from "@/lib/types";
import { TechLogo } from "./TechLogo";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface SkillCategoryProps {
  category: SkillCategoryType;
  index: number;
}

export const SkillCategoryCard: React.FC<SkillCategoryProps> = ({
  category,
  index,
}) => {
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  return (
    <div className="rounded-2xl border border-surface-border bg-white/90 backdrop-blur-xs p-6 sm:p-7 shadow-card-subtle hover:border-gold-300 hover:shadow-gold-sm transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Category Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-[10px] font-mono text-gold-700 font-bold uppercase tracking-wider block mb-0.5">
              0{index + 1} // DOMAIN
            </span>
            <h3 className="text-xl font-bold text-charcoal-900 group-hover:text-gold-800 transition-colors">
              {category.title}
            </h3>
          </div>
          <span className="text-xs font-mono text-charcoal-500 bg-surface-100 px-2.5 py-1 rounded-full border border-surface-border">
            {category.skills.length} tools
          </span>
        </div>

        <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6 font-normal">
          {category.description}
        </p>

        {/* High-density Tiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {category.skills.map((skill) => {
            const isHovered = hoveredSkill?.name === skill.name;
            return (
              <button
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => setHoveredSkill(isHovered ? null : skill)}
                className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col items-center justify-center text-center gap-2 group/tile ${
                  isHovered
                    ? "bg-gold-50/90 border-gold-400 shadow-gold-sm -translate-y-0.5"
                    : "bg-surface-50/90 border-surface-border hover:border-gold-300 hover:bg-white"
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center group-hover/tile:scale-105 transition-transform">
                  <TechLogo name={skill.logoKey || skill.name} size={32} className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-charcoal-900 block leading-tight">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono text-charcoal-400 uppercase">
                    {skill.level}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Inspector Area */}
      <div className="mt-6 pt-4 border-t border-surface-border min-h-[64px]">
        {hoveredSkill ? (
          <div className="animate-fade-in space-y-1">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-gold-800 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
                {hoveredSkill.name}
              </span>
              <span className="text-charcoal-400 text-[10px] uppercase font-semibold">
                {hoveredSkill.level}
              </span>
            </div>
            <p className="text-xs text-charcoal-700 leading-snug">
              {hoveredSkill.keyUseCase || hoveredSkill.description}
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs font-mono text-charcoal-400">
            <Sparkles className="w-3.5 h-3.5 text-gold-500 shrink-0" />
            <span>Hover a tool to inspect architectural capability</span>
          </div>
        )}
      </div>
    </div>
  );
};
