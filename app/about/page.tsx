import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { QuickProfile } from "@/components/about/QuickProfile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";
import { TibebPattern } from "@/components/hero/TibebPattern";

export const metadata = {
  title: "About — Full-Stack Developer & Software Engineer",
  description: "Learn more about the engineering philosophy, technical background, and architectural approach to full-stack development and AI systems.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20 relative">
        <TibebPattern opacity={0.06} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href="/" className="text-xs font-mono text-charcoal-400 hover:text-gold-700">
              Home
            </Link>
            <span className="text-xs font-mono text-charcoal-300 mx-2">/</span>
            <span className="text-xs font-mono text-gold-700 font-bold">About</span>
          </div>

          <SectionHeading
            number="01"
            tag="Engineering & Background"
            title="Building technology from idea to execution."
            subtitle="Full-stack developer and software engineer specializing in scalable web systems, relational databases, and autonomous AI automation."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3 text-base text-charcoal-700 leading-relaxed font-normal">
                <p>
                  As an independent full-stack engineer, I partner with businesses, startups, and founders to take technical ideas from concept to robust production deployments.
                </p>
                <p>
                  My engineering focus balances resilient, type-safe frontend interfaces (React / Next.js / TypeScript) with reliable backends, structured database schemas (PostgreSQL / Laravel / Node.js), and intelligent automation.
                </p>
              </div>

              {/* Philosophy Quote */}
              <div className="p-6 rounded-2xl bg-white border border-surface-borderGold shadow-gold-sm space-y-2">
                <Quote className="w-7 h-7 text-gold-500/40" />
                <blockquote className="text-base sm:text-lg font-bold text-charcoal-900 italic">
                  &ldquo;Good software begins with deep problem understanding, sound architecture, and clean execution.&rdquo;
                </blockquote>
                <p className="text-xs font-mono text-gold-700 font-semibold pt-2 border-t border-surface-border">
                  — Core Engineering Philosophy
                </p>
              </div>

              {/* Principles */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-bold">
                  Core Engineering Principles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-white border border-surface-border space-y-1">
                    <p className="text-xs font-bold text-charcoal-900">Problem-First Architecture</p>
                    <p className="text-xs text-charcoal-500">Choosing resilient abstractions and schemas rather than chasing hype.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-surface-border space-y-1">
                    <p className="text-xs font-bold text-charcoal-900">Autonomous Operations</p>
                    <p className="text-xs text-charcoal-500">Eliminating operational drag through intelligent AI pipelines and API integrations.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-surface-border space-y-1">
                    <p className="text-xs font-bold text-charcoal-900">Multi-Tenant Resilience</p>
                    <p className="text-xs text-charcoal-500">Strict data isolation, secure authentication, and high-uptime hosting.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-surface-border space-y-1">
                    <p className="text-xs font-bold text-charcoal-900">End-to-End Ownership</p>
                    <p className="text-xs text-charcoal-500">Guiding concepts from napkin wireframes to production deployment.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <Link href="/services">
                  <Button variant="gold" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                    View Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary" size="md">
                    Start a Conversation
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <QuickProfile />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
