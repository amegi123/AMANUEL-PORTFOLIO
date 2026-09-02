"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { formatTimeInAddis } from "@/lib/utils";
import { socialLinks } from "@/data/social";
import { ArrowUp, Code2 } from "lucide-react";

export const Footer: React.FC = () => {
  const [localTime, setLocalTime] = useState<string>("00:00:00 GMT+3");

  useEffect(() => {
    setLocalTime(formatTimeInAddis());
    const interval = setInterval(() => {
      setLocalTime(formatTimeInAddis());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-surface-border bg-white py-12 text-charcoal-600 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-surface-border">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-base font-bold tracking-tight text-charcoal-900">
                FULL-STACK DEVELOPER
              </span>
            </div>
            <p className="text-charcoal-500 font-mono text-xs">
              Web Applications · Full-Stack Systems · AI & Workflow Automation
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] text-charcoal-500">
            <div className="px-3 py-1.5 rounded-xl bg-gold-50 border border-surface-borderGold text-gold-900 font-semibold shadow-xs">
              <span>LOCAL TIME // </span>
              <span className="text-gold-700 font-bold">{localTime}</span>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-surface-100 border border-surface-border text-charcoal-700 hover:text-gold-800 hover:border-gold-300 transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-gold-600" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="font-mono text-charcoal-900 uppercase text-[11px] font-bold tracking-wider mb-2.5">
              Pages
            </p>
            <ul className="space-y-1.5">
              <li>
                <Link href="/about" className="hover:text-gold-700 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-gold-700 transition-colors">
                  Skills & Tools
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gold-700 transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-gold-700 transition-colors">
                  Career Journey
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-charcoal-900 uppercase text-[11px] font-bold tracking-wider mb-2.5">
              Capabilities
            </p>
            <ul className="space-y-1.5">
              <li>
                <Link href="/services" className="hover:text-gold-700 transition-colors">
                  What I Build
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="hover:text-gold-700 transition-colors">
                  Knowledge & Media
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-700 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-charcoal-900 uppercase text-[11px] font-bold tracking-wider mb-2.5">
              Social Links
            </p>
            <ul className="space-y-1.5">
              {socialLinks.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-700 transition-colors flex items-center gap-1"
                  >
                    <span>{s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-charcoal-900 uppercase text-[11px] font-bold tracking-wider mb-2.5">
              Architecture Stack
            </p>
            <div className="space-y-1 font-mono text-[11px] text-charcoal-500">
              <p>Next.js 15 App Router</p>
              <p>Tailwind CSS Light Luxury</p>
              <p>TypeScript & Relational DBs</p>
              <p className="text-emerald-600 font-bold">Systems 100% Operational</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-charcoal-400">
          <p>© 2026 Developer Portfolio. All rights reserved.</p>
          <p className="text-gold-700 font-medium">Full-Stack Development & AI Systems</p>
        </div>
      </div>
    </footer>
  );
};
