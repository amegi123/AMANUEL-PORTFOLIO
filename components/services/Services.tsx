"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesData } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, Mail, Layers } from "lucide-react";

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Capabilities", count: servicesData.length },
    { id: "fullstack", label: "Full-Stack & SaaS", count: 2 },
    { id: "ai", label: "AI & Automations", count: 1 },
    { id: "systems", label: "Business Systems", count: 1 },
    { id: "product", label: "Design & Product", count: 2 },
  ];

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "fullstack") return ["full-stack-development", "saas-development"].includes(service.id);
    if (activeCategory === "ai") return service.id === "ai-automation";
    if (activeCategory === "systems") return service.id === "business-systems";
    if (activeCategory === "product") return ["ui-ux-design", "digital-product-development"].includes(service.id);
    return true;
  });

  return (
    <section id="services" className="py-20 md:py-28 relative bg-[#FAF8F5] border-t border-surface-border">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5E0D5_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <SectionHeading
            number="05"
            tag="Capabilities & Offerings"
            title="What I build."
            subtitle="Transforming complex business challenges into production-grade web systems, multi-tenant architectures, and autonomous AI pipelines."
            className="mb-0"
          />
          <Link href="/contact" className="shrink-0">
            <Button
              variant="gold"
              size="sm"
              icon={<Mail className="w-3.5 h-3.5" />}
              className="font-mono text-xs shadow-gold-sm"
            >
              Start Project Consultation
            </Button>
          </Link>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? "bg-charcoal-900 text-white font-bold shadow-xs"
                  : "bg-white text-charcoal-600 hover:text-charcoal-900 border border-surface-border hover:border-gold-300 shadow-2xs"
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                activeCategory === cat.id ? "bg-charcoal-800 text-gold-300" : "bg-surface-100 text-charcoal-500"
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Creative Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Consulting Callout Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-white border border-surface-borderGold shadow-gold-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-[10px] font-mono text-gold-800 font-bold uppercase tracking-wider">
                CUSTOM SYSTEM ARCHITECTURE & ENGINEERING
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 tracking-tight">
              Have a unique product requirement not listed above?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 font-mono">
              I collaborate on custom full-stack solutions, high-throughput database refactoring, and AI agent integrations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/contact">
              <Button
                variant="gold"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                className="font-mono text-xs shadow-gold-md"
              >
                Discuss Requirements
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="secondary"
                size="md"
                icon={<Layers className="w-3.5 h-3.5" />}
                className="font-mono text-xs"
              >
                See Portfolio Proof
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
