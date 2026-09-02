"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import { SkillCategoryCard } from "./SkillCategory";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 relative bg-surface-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <SectionHeading
            number="02"
            tag="Engineering Stack"
            title="Tools I build with."
            subtitle="Curated technology ecosystem across frontend, backends, autonomous AI pipelines, and cloud systems."
            className="mb-0"
          />
          <Link href="/skills" className="mt-4 sm:mt-0">
            <Button variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5 text-gold-600" />}>
              Explore Full Tech Matrix
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
