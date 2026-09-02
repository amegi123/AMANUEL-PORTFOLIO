import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experienceData } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import { Code2, Cpu, CheckCircle2, ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { TibebPattern } from "@/components/hero/TibebPattern";

export const metadata = {
  title: "Career Journey & Experience — Full-Stack Developer",
  description: "Career milestones, software engineering experience, and technical projects delivered across full-stack development and AI automation.",
};

export default function ExperiencePage() {
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
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20 relative">
        <TibebPattern opacity={0.06} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-6">
            <Link href="/" className="text-xs font-mono text-charcoal-400 hover:text-gold-700">
              Home
            </Link>
            <span className="text-xs font-mono text-charcoal-300 mx-2">/</span>
            <span className="text-xs font-mono text-gold-700 font-bold">Journey & Experience</span>
          </div>

          <SectionHeading
            number="04"
            tag="Career Milestones"
            title="The journey so far."
            subtitle="Focusing on software systems architecture, autonomous AI automation, and full-stack engineering."
          />

          <div className="relative border-l-2 border-surface-borderGold ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {experienceData.map((item) => {
              const Icon = getIcon(item.type);
              return (
                <div key={item.id} className="relative group">
                  <div className="absolute -left-[38px] sm:-left-[54px] top-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white border border-surface-borderGold text-gold-700 shadow-gold-sm">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  <div className="p-6 sm:p-8 rounded-2xl bg-white border border-surface-border shadow-card-subtle space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900">
                          {item.role}
                        </h2>
                        <p className="text-sm sm:text-base font-semibold text-gold-700 mt-0.5">
                          {item.organization}
                        </p>
                      </div>
                      <Badge variant="gold" size="md">
                        {item.type}
                      </Badge>
                    </div>

                    <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-mono uppercase tracking-wider text-charcoal-400 font-bold">
                        Key Responsibilities & Scope
                      </p>
                      {item.responsibilities.map((resp, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-surface-border flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-surface-100 border border-surface-border text-[11px] font-mono text-charcoal-600"
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

          <div className="mt-14 p-8 rounded-2xl bg-white border border-surface-borderGold shadow-gold-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-charcoal-900">
                Interested in working together or hiring?
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-500 font-mono mt-1">
                Open to selected high-impact projects, full-time contracts, and freelance builds.
              </p>
            </div>
            <Link href="/contact">
              <Button variant="gold" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
