"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Briefcase,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export const QuickProfile: React.FC = () => {
  return (
    <div className="rounded-3xl border border-neutral-200/90 bg-white p-7 sm:p-8 shadow-card-subtle hover:shadow-md hover:border-gold-300 transition-all duration-300 flex flex-col justify-between space-y-6">
      {/* Top Profile Header */}
      <div className="flex items-start justify-between gap-4 pb-5 border-b border-surface-border">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-charcoal-900 to-charcoal-800 text-gold-400 font-mono font-black text-base flex items-center justify-center border border-charcoal-700 shadow-xs">
            AG
          </div>
          <div>
            <h3 className="text-lg font-bold text-charcoal-900 tracking-tight">
              Amanuel Girma
            </h3>
            <p className="text-xs font-mono text-gold-700 font-semibold">
              Full-Stack Developer & Systems Architect
            </p>
          </div>
        </div>

        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-[10px] font-semibold shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Available</span>
        </div>
      </div>

      {/* Quick Fact Matrix */}
      <div className="space-y-3 font-mono text-xs">
        <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-50 border border-surface-border">
          <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] text-charcoal-400 uppercase font-semibold block">Location</span>
            <span className="text-charcoal-800 font-medium">Addis Ababa, Ethiopia</span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-50 border border-surface-border">
          <Clock className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] text-charcoal-400 uppercase font-semibold block">Timezone</span>
            <span className="text-charcoal-800 font-medium">UTC+3 (EAT) · Global Remote Ready</span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-50 border border-surface-border">
          <Briefcase className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] text-charcoal-400 uppercase font-semibold block">Availability</span>
            <span className="text-charcoal-800 font-medium">Freelance, Contracts & Consulting</span>
          </div>
        </div>
      </div>

      {/* How I Work Box */}
      <div className="p-4 rounded-2xl bg-gold-50/50 border border-surface-borderGold space-y-2.5">
        <span className="text-[10px] font-mono text-gold-800 font-bold uppercase tracking-wider block">
          Core Engineering Philosophy
        </span>
        <ul className="space-y-2 text-xs text-charcoal-700 font-normal">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
            <span><strong>Schema-first:</strong> Sound data architecture before writing UI code.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
            <span><strong>Strict type safety:</strong> Catch errors at build time with TypeScript.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
            <span><strong>Full-cycle ownership:</strong> From initial scoping to cloud deployment.</span>
          </li>
        </ul>
      </div>

      {/* Direct Social / Contact Links */}
      <div className="pt-2 border-t border-surface-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/amegi123"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-surface-100 border border-surface-border text-charcoal-600 hover:text-charcoal-900 hover:border-charcoal-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-surface-100 border border-surface-border text-charcoal-600 hover:text-charcoal-900 hover:border-charcoal-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <Link
            href="/contact"
            className="p-2 rounded-xl bg-surface-100 border border-surface-border text-charcoal-600 hover:text-charcoal-900 hover:border-charcoal-400 transition-colors"
            aria-label="Contact Email"
          >
            <Mail className="w-4 h-4" />
          </Link>
        </div>

        <Link
          href="/contact"
          className="text-xs font-mono text-gold-700 font-bold hover:text-gold-800 flex items-center gap-1 transition-colors"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
