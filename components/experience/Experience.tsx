"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceData } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import { Code2, Cpu, CheckCircle2, ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Experience: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "Full-Stack":
        return Layers;
      case "Backend":
        return Code2;
      case "AI & Automation":
        return Cpu;
      default:
        return Code2;
    }
  };

  return (
    <section id="experience" className="py-16 md:py-24 relative bg-surface-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <SectionHeading
            number="04"
            tag="Career Milestones"
            title="The journey so far."
            subtitle="Full-stack engineering, backend architectures, and AI workflow pipelines."
            className="mb-0"
          />
          <Link href="/experience" className="mt-4 sm:mt-0">
            <Button variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5 text-gold-600" />}>
              View Journey Details
            </Button>
          </Link>
        </div>

        <div className="relative border-l border-surface-borderGold ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {experienceData.map((item) => {
            const Icon = getIcon(item.type);
            return (
              <div key={item.id} className="relative group">
                {/* Node icon */}
                <div className="absolute -left-[37px] sm:-left-[53px] top-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white border border-surface-borderGold text-gold-700 shadow-gold-sm group-hover:bg-gold-50 transition-colors">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                {/* Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-surface-border shadow-card-subtle hover:border-gold-300 transition-all space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-charcoal-900">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-gold-700">
                        {item.organization}
                      </p>
                    </div>
                    <Badge variant={item.type === "Full-Stack" ? "gold" : "default"} size="sm">
                      {item.type}
                    </Badge>
                  </div>

                  <p className="text-sm text-charcoal-600 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {item.responsibilities.slice(0, 2).map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-surface-border flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded bg-surface-100 text-[11px] font-mono text-charcoal-600 border border-surface-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
