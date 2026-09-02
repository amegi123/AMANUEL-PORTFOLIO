"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuickProfile } from "./QuickProfile";
import { Quote, Code, Cpu, Workflow, Compass, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          tag="Engineering Identity"
          title="Building technology from idea to execution."
          subtitle="Full-stack software development, resilient APIs, and autonomous AI automation pipelines."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-start">
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3 text-base text-charcoal-700 leading-relaxed font-normal">
              <p>
                An independent full-stack developer and software engineer specializing in modern web ecosystems, cloud databases, and AI-driven automation workflows.
              </p>
              <p className="text-charcoal-600">
                Focused on delivering end-to-end software solutions—from database modeling and secure backend APIs to high-performance, accessible React and Next.js user interfaces.
              </p>
            </div>

            {/* Philosophy Quote */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-white border border-surface-borderGold shadow-gold-sm text-charcoal-800">
              <Quote className="w-7 h-7 text-gold-500/40 mb-2" />
              <blockquote className="text-base sm:text-lg font-semibold text-charcoal-900 italic leading-relaxed">
                &ldquo;Good software begins with deep problem understanding, sound architecture, and clean execution.&rdquo;
              </blockquote>
              <div className="mt-3 pt-3 border-t border-surface-border flex items-center justify-between text-xs font-mono text-charcoal-500 font-medium">
                <span>PHILOSOPHY // CRAFT</span>
                <span className="text-gold-700 font-bold">ENGINEERING FIRST</span>
              </div>
            </div>

            {/* 4 Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-white border border-surface-border text-left shadow-xs">
                <Code className="w-4 h-4 text-gold-600 mb-1.5" />
                <p className="text-xs font-bold text-charcoal-900">Full-Stack</p>
                <p className="text-[11px] text-charcoal-500">Next.js & Laravel</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-surface-border text-left shadow-xs">
                <Cpu className="w-4 h-4 text-emerald-600 mb-1.5" />
                <p className="text-xs font-bold text-charcoal-900">AI Systems</p>
                <p className="text-[11px] text-charcoal-500">Agents & LLMs</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-surface-border text-left shadow-xs">
                <Workflow className="w-4 h-4 text-gold-600 mb-1.5" />
                <p className="text-xs font-bold text-charcoal-900">Automation</p>
                <p className="text-[11px] text-charcoal-500">n8n & Pipelines</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-surface-border text-left shadow-xs">
                <Compass className="w-4 h-4 text-charcoal-800 mb-1.5" />
                <p className="text-xs font-bold text-charcoal-900">Architecture</p>
                <p className="text-[11px] text-charcoal-500">Clean & Scalable</p>
              </div>
            </div>

            {/* Dedicated Page Link */}
            <div className="pt-2">
              <Link href="/about">
                <Button
                  variant="outline"
                  size="sm"
                  className="font-mono text-xs"
                  icon={<ArrowRight className="w-3.5 h-3.5 text-gold-600" />}
                >
                  More About Background & Principles
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Quick Profile */}
          <div className="lg:col-span-5">
            <QuickProfile />
          </div>
        </div>
      </div>
    </section>
  );
};
