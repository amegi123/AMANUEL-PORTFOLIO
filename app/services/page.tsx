import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { TibebPattern } from "@/components/hero/TibebPattern";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Engineering Services & Capabilities — Full-Stack Developer",
  description: "Bespoke full-stack development, web engineering, AI automation workflows, and custom backend systems.",
};

export default function ServicesPage() {
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
            <span className="text-xs font-mono text-gold-700 font-bold">Services</span>
          </div>

          <SectionHeading
            number="05"
            tag="Capabilities"
            title="What I build"
            subtitle="Transforming complex business challenges into production software, autonomous workflows, and modern cloud applications."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-14 p-8 rounded-2xl bg-white border border-surface-borderGold shadow-gold-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-charcoal-900">
                Ready to scope a new digital product or automation system?
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-500 font-mono mt-1">
                Receive an architectural blueprint and straightforward technical milestones.
              </p>
            </div>
            <Link href="/contact">
              <Button variant="gold" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Request a Project Consultation
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
