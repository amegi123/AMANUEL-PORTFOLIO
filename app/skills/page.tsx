import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import { SkillCategoryCard } from "@/components/skills/SkillCategory";
import { TibebPattern } from "@/components/hero/TibebPattern";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Terminal } from "lucide-react";

export const metadata = {
  title: "Skills & Technical Stack — Full-Stack Developer",
  description: "Explore the technical stack, tools, languages, frameworks, and AI workflows used for modern web development.",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20 relative">
        <TibebPattern opacity={0.06} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-6">
            <Link href="/" className="text-xs font-mono text-charcoal-400 hover:text-gold-700">
              Home
            </Link>
            <span className="text-xs font-mono text-charcoal-300 mx-2">/</span>
            <span className="text-xs font-mono text-gold-700 font-bold">Skills & Technologies</span>
          </div>

          <SectionHeading
            number="02"
            tag="Engineering Matrix"
            title="Tools I build with."
            subtitle="Categorized breakdown of technical capabilities across frontend, backend, AI orchestration, mobile, and cloud infrastructure."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategoryCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>

          <div className="mt-14 p-8 rounded-2xl bg-white border border-surface-borderGold shadow-gold-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-charcoal-900">
                Need a specific technology stack or custom integration?
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-500 font-mono mt-1">
                Whether deploying on Docker, configuring LLM agent chains, or building Laravel APIs.
              </p>
            </div>
            <Link href="/contact">
              <Button variant="gold" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Discuss Your Technical Architecture
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
