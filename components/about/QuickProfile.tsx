"use client";

import React from "react";
import {
  Code2,
  MapPin,
  Clock,
  Activity,
  Cpu,
  ShieldCheck,
  Zap,
  Terminal,
  Layers,
  Sparkles,
} from "lucide-react";

export const QuickProfile: React.FC = () => {
  const specs = [
    {
      label: "ROLE",
      value: "Full-Stack Engineer & Architect",
      sub: "Specializing in Web Apps & AI",
      icon: Layers,
      highlight: "text-white font-bold",
    },
    {
      label: "CORE STACK",
      value: "Next.js · Laravel · TypeScript · Postgres",
      sub: "Strict Type Safety & Clean Code",
      icon: Code2,
      highlight: "text-gold-400 font-bold",
    },
    {
      label: "AI & AUTOMATION",
      value: "OpenAI · Gemini · LangChain · n8n",
      sub: "Multi-Agent Document Intelligence",
      icon: Cpu,
      highlight: "text-purple-300 font-medium",
    },
    {
      label: "LOCATION & TIMEZONE",
      value: "Addis Ababa, Ethiopia (GMT+3)",
      sub: "Seamless Global Remote Collaboration",
      icon: MapPin,
      highlight: "text-neutral-200",
    },
    {
      label: "DEPLOYMENT READINESS",
      value: "Open for Freelance & Contracts",
      sub: "Direct System Architecture Inquiries",
      icon: Activity,
      highlight: "text-emerald-400 font-bold",
    },
  ];

  return (
    <div className="rounded-3xl border border-charcoal-800 bg-[#121318] text-white p-6 sm:p-7 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-56 h-56 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div>
        {/* Terminal macOS Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-charcoal-800">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <span className="font-mono text-[11px] text-zinc-400 ml-2">
              identity/spec.json
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-mono text-[9px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ONLINE</span>
          </div>
        </div>

        {/* Spec List */}
        <div className="space-y-3">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <div
                key={i}
                className="p-3 rounded-2xl bg-charcoal-800/60 border border-charcoal-700/60 hover:border-gold-500/40 hover:bg-charcoal-800/90 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 font-semibold tracking-wider">
                    <Icon className="w-3 h-3 text-gold-400" />
                    <span>{spec.label}</span>
                  </div>
                </div>
                <p className={`text-xs sm:text-[13px] tracking-tight leading-snug ${spec.highlight}`}>
                  {spec.value}
                </p>
                <p className="text-[10px] font-mono text-zinc-400 mt-0.5">
                  {spec.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* High-Signal Metrics Strip */}
      <div className="mt-6 pt-4 border-t border-charcoal-800 grid grid-cols-3 gap-2 text-center font-mono">
        <div className="p-2 rounded-xl bg-charcoal-800/40 border border-charcoal-800">
          <span className="text-[9px] text-zinc-400 uppercase block">TARGET UPTIME</span>
          <span className="text-xs font-bold text-emerald-400">99.98%</span>
        </div>
        <div className="p-2 rounded-xl bg-charcoal-800/40 border border-charcoal-800">
          <span className="text-[9px] text-zinc-400 uppercase block">LATENCY GOAL</span>
          <span className="text-xs font-bold text-gold-400">&lt; 50ms</span>
        </div>
        <div className="p-2 rounded-xl bg-charcoal-800/40 border border-charcoal-800">
          <span className="text-[9px] text-zinc-400 uppercase block">TYPE SAFETY</span>
          <span className="text-xs font-bold text-cyan-400">100% Strict</span>
        </div>
      </div>
    </div>
  );
};
