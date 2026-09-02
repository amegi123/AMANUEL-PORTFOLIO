import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { QuickProfile } from "@/components/about/QuickProfile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Sparkles, MapPin, Briefcase } from "lucide-react";
import { TibebPattern } from "@/components/hero/TibebPattern";

export const metadata = {
  title: "About — Amanuel Girma | Full-Stack Developer",
  description: "Learn more about Amanuel Girma, a full-stack developer passionate about building modern, reliable, and user-focused digital experiences.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20 relative">
        <TibebPattern opacity={0.06} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
          {/* Breadcrumb */}
          <div>
            <Link href="/" className="text-xs font-mono text-charcoal-400 hover:text-gold-700">
              Home
            </Link>
            <span className="text-xs font-mono text-charcoal-300 mx-2">/</span>
            <span className="text-xs font-mono text-gold-700 font-bold">About Me</span>
          </div>

          <SectionHeading
            number="01"
            tag="About Me"
            title="Building modern products with real impact."
            subtitle="Full-stack software developer passionate about turning ambitious ideas into reliable, scalable digital experiences."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-tr from-amber-200/50 via-gold-300/30 to-surface-border opacity-70 blur-lg -z-10" />

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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 text-emerald-800 font-mono text-[11px] font-bold shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>Available for Work</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
                    <h3 className="text-sm font-extrabold text-charcoal-900 tracking-tight">
                      Amanuel Girma
                    </h3>
                    <p className="text-xs font-mono text-gold-700 font-semibold">
                      Full-Stack Developer & Systems Architect
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 space-y-7">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-surface-borderGold text-gold-900 font-mono text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                  <span>MEET THE DEVELOPER</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight leading-snug">
                  I’m Amanuel Girma, a full-stack developer passionate about building modern, reliable, and user-focused digital experiences.
                </h2>

                <div className="space-y-3 text-sm sm:text-base text-charcoal-600 leading-relaxed font-normal">
                  <p>
                    I work across frontend and backend technologies to turn ideas into practical, scalable products.
                  </p>
                  <p>
                    I enjoy solving problems, learning new technologies, and building things that make a real impact.
                  </p>
                </div>
              </div>

              {/* Location & Availability Bar */}
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

              <div className="pt-2 flex items-center gap-3">
                <Link href="/contact">
                  <Button variant="gold" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                    Discuss a Project
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="secondary" size="md" icon={<Sparkles className="w-3.5 h-3.5" />}>
                    View Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
