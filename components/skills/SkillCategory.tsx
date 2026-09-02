"use client";

import React, { useState } from "react";
import { SkillCategory as SkillCategoryType, SkillItem } from "@/lib/types";
import { Info } from "lucide-react";

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
    <div className="rounded-2xl border border-surface-border bg-white p-6 shadow-card-subtle hover:border-gold-300 hover:shadow-gold-sm transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Category Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-[10px] font-mono text-gold-700 font-bold uppercase tracking-wider block mb-0.5">
              0{index + 1} // DOMAIN
            </span>
            <h3 className="text-lg font-bold text-charcoal-900 group-hover:text-gold-800 transition-colors">
              {category.title}
            </h3>
          </div>
          <span className="text-xs font-mono text-charcoal-500 bg-surface-100 px-2 py-0.5 rounded-full">
            {category.skills.length} tools
          </span>
        </div>

        <p className="text-xs text-charcoal-600 leading-relaxed mb-5 font-normal">
          {category.description}
        </p>

        {/* Skills Pills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <button
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => setHoveredSkill(hoveredSkill?.name === skill.name ? null : skill)}
              className={`text-left px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200 ${
                hoveredSkill?.name === skill.name
                  ? "bg-gold-500 text-white border-gold-600 shadow-gold-sm font-semibold"
                  : skill.featured
                  ? "bg-gold-50/80 text-gold-900 border-surface-borderGold hover:border-gold-400 font-semibold"
                  : "bg-surface-100 text-charcoal-700 border-surface-border hover:text-charcoal-900 hover:border-charcoal-400"
              }`}
            >
              <div className="flex items-center gap-1.5">
                {skill.featured && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                )}
                <span>{skill.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Hover Inspection */}
      <div className="mt-5 pt-3.5 border-t border-surface-border min-h-[58px]">
        {hoveredSkill ? (
          <div className="animate-fade-in space-y-0.5">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-gold-800 font-bold">{hoveredSkill.name}</span>
              {hoveredSkill.level && (
                <span className="text-charcoal-500 text-[10px] uppercase font-semibold">
                  {hoveredSkill.level}
                </span>
              )}
            </div>
            <p className="text-xs text-charcoal-700 leading-snug">
              {hoveredSkill.description}
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-xs font-mono text-charcoal-400">
            <Info className="w-3.5 h-3.5 text-gold-500" />
            <span>Hover or tap a skill to inspect architecture role</span>
          </div>
        )}
      </div>
    </div>
  );
};
