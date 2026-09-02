"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesData } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <SectionHeading
            number="05"
            tag="Capabilities"
            title="What I build"
            subtitle="Specialized digital systems from SaaS platforms to autonomous AI pipelines."
            className="mb-0"
          />
          <Link href="/services" className="mt-4 sm:mt-0">
            <Button variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5 text-gold-600" />}>
              View All Services
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
