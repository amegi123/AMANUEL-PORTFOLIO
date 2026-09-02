"use client";

import React from "react";
import { Project } from "@/lib/types";
import {
  Lock,
  RotateCw,
  ExternalLink,
  Activity,
  Truck,
  MapPin,
  Calendar,
  Users,
  CheckCircle2,
  Sparkles,
  Bot,
  Zap,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

interface ProjectPreviewMockupProps {
  project: Project;
  onOpenCaseStudy?: (project: Project) => void;
}

export const ProjectPreviewMockup: React.FC<ProjectPreviewMockupProps> = ({
  project,
  onOpenCaseStudy,
}) => {
  const getUrl = () => {
    switch (project.previewType) {
      case "logistics":
        return "https://halink.app/dispatch-console";
      case "healthcare":
        return "https://dentflow.cloud/dashboard";
      case "ai":
        return "https://cognitiveops.ai/pipeline-telemetry";
      case "fintech":
        return "https://nexuscore.io/billing-ledger";
      default:
        return project.liveUrl || "https://app.portfolio.dev";
    }
  };

  const renderDashboardContent = () => {
    switch (project.previewType) {
      case "logistics":
        return (
          <div className="h-full bg-[#0F172A] text-slate-100 p-3.5 sm:p-4.5 flex flex-col justify-between font-sans text-xs select-none">
            {/* Top Bar inside app */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-amber-500 flex items-center justify-center text-charcoal-950 font-black text-[10px]">
                  H
                </div>
                <span className="font-bold text-slate-100 text-xs sm:text-sm">HALINK FLEET COMMAND</span>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[9px] border border-emerald-500/30">
                  LIVE TELEMETRY
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  1,248 TRUCKS ONLINE
                </span>
                <span className="hidden md:inline text-slate-600">|</span>
                <span className="hidden md:inline">LATENCY: 38ms</span>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="grid grid-cols-12 gap-2.5 my-2">
              {/* Map & Live Corridor Simulation */}
              <div className="col-span-8 bg-slate-900/90 rounded-xl border border-slate-800 p-3 relative overflow-hidden flex flex-col justify-between min-h-[140px] sm:min-h-[160px]">
                {/* Simulated Map Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />

                {/* Corridor Route Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-80" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M 30 110 Q 120 40 220 80 T 360 40"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                    className="animate-pulse"
                  />
                  <circle cx="30" cy="110" r="4" fill="#3B82F6" />
                  <circle cx="220" cy="80" r="5" fill="#10B981" />
                  <circle cx="360" cy="40" r="4" fill="#F59E0B" />
                </svg>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-xs px-2 py-1 rounded-lg border border-slate-800">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span className="font-mono text-[10px] text-slate-200">Corridor: Addis Ababa ➔ Djibouti Port</span>
                  </div>
                  <span className="font-mono text-[9px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/30">
                    98.4% ON-SCHEDULE
                  </span>
                </div>

                <div className="relative z-10 grid grid-cols-3 gap-2 mt-auto pt-2">
                  <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80">
                    <span className="text-[9px] text-slate-400 font-mono block">CARGO IN TRANSIT</span>
                    <span className="text-xs font-bold text-slate-100">4,820 Tons</span>
                  </div>
                  <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80">
                    <span className="text-[9px] text-slate-400 font-mono block">AVG SPEED</span>
                    <span className="text-xs font-bold text-slate-100">68 km/h</span>
                  </div>
                  <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80">
                    <span className="text-[9px] text-slate-400 font-mono block">DISPATCH ETA</span>
                    <span className="text-xs font-bold text-emerald-400">03:45 PM</span>
                  </div>
                </div>
              </div>

              {/* Right Queue Column */}
              <div className="col-span-4 bg-slate-900/90 rounded-xl border border-slate-800 p-2.5 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                  <span className="font-mono text-[10px] text-slate-300 font-bold">ACTIVE TRUCKS</span>
                  <Activity className="w-3 h-3 text-amber-400" />
                </div>
                <div className="space-y-1.5 my-1.5">
                  <div className="p-1.5 rounded bg-slate-950 border border-slate-800 flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1">
                      <Truck className="w-3 h-3 text-emerald-400" />
                      <span className="font-mono text-slate-200">#ET-8942</span>
                    </div>
                    <span className="text-emerald-400 font-mono text-[9px]">En Route</span>
                  </div>
                  <div className="p-1.5 rounded bg-slate-950 border border-slate-800 flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1">
                      <Truck className="w-3 h-3 text-amber-400" />
                      <span className="font-mono text-slate-200">#ET-3108</span>
                    </div>
                    <span className="text-amber-400 font-mono text-[9px]">Customs</span>
                  </div>
                  <div className="hidden sm:flex p-1.5 rounded bg-slate-950 border border-slate-800 items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1">
                      <Truck className="w-3 h-3 text-blue-400" />
                      <span className="font-mono text-slate-200">#ET-9402</span>
                    </div>
                    <span className="text-blue-400 font-mono text-[9px]">Loading</span>
                  </div>
                </div>
                <div className="text-[9px] font-mono text-slate-500 text-center">
                  Redis Queue: 0 dropped
                </div>
              </div>
            </div>

            {/* Bottom Status Ticker */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>TimescaleDB Synced</span>
              </div>
              <span className="text-amber-400 font-semibold">50,000+ Packets/Day</span>
            </div>
          </div>
        );

      case "healthcare":
        return (
          <div className="h-full bg-[#0D1520] text-slate-100 p-3.5 sm:p-4.5 flex flex-col justify-between font-sans text-xs select-none">
            {/* Top Bar inside app */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-cyan-500 flex items-center justify-center text-slate-950 font-black text-[10px]">
                  D
                </div>
                <span className="font-bold text-slate-100 text-xs sm:text-sm">DENTFLOW CLINIC EHR</span>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[9px] border border-cyan-500/30">
                  HIPAA VERIFIED
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
                <Calendar className="w-3 h-3 text-cyan-400" />
                <span>TODAY: 28 VISITS</span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-12 gap-2.5 my-2">
              {/* Doctor Schedule & Queue */}
              <div className="col-span-7 bg-slate-900/90 rounded-xl border border-slate-800 p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[10px] font-mono">
                  <span className="text-slate-300 font-bold">CHAIR 01 — DR. AMANUEL</span>
                  <span className="text-emerald-400">In Progress</span>
                </div>

                <div className="space-y-1.5 my-2 text-[10px]">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-100">Patient: Helen Tesfaye</p>
                      <p className="text-[9px] text-cyan-400 font-mono">Procedure: Molar Restoration (Tooth #19)</p>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[9px]">
                      10:30 AM
                    </span>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-300">Patient: Dawit Bekele</p>
                      <p className="text-[9px] text-slate-400 font-mono">Procedure: Routine Prophylaxis</p>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono text-[9px]">
                      11:15 AM
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 pt-1 border-t border-slate-800/60">
                  <span>Automated SMS Reminders: Sent</span>
                  <span className="text-emerald-400">100% Confirmed</span>
                </div>
              </div>

              {/* Tooth Chart & Revenue */}
              <div className="col-span-5 bg-slate-900/90 rounded-xl border border-slate-800 p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-1 border-b border-slate-800 text-[10px] font-mono">
                  <span className="text-slate-300 font-bold">DENTAL CHART</span>
                  <span className="text-cyan-400">SVG Map</span>
                </div>

                {/* Mini Tooth Grid Visual */}
                <div className="grid grid-cols-4 gap-1 my-2">
                  {[16, 17, 18, 19, 20, 21, 22, 23].map((t) => (
                    <div
                      key={t}
                      className={`p-1 rounded text-center font-mono text-[9px] border ${
                        t === 19
                          ? "bg-amber-500/20 border-amber-500/60 text-amber-300 font-bold"
                          : t === 18
                          ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300"
                          : "bg-slate-950 border-slate-800 text-slate-400"
                      }`}
                    >
                      #{t}
                    </div>
                  ))}
                </div>

                <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-[10px]">
                  <span className="text-slate-400 font-mono">Monthly Rev</span>
                  <span className="text-emerald-400 font-mono font-bold">$48,250</span>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Users className="w-3 h-3 text-cyan-400" />
                <span>12,000+ Patient Records Encrypted</span>
              </span>
              <span className="text-cyan-400 font-semibold">-35% Wait Times</span>
            </div>
          </div>
        );

      case "ai":
        return (
          <div className="h-full bg-[#0C1017] text-slate-100 p-3.5 sm:p-4.5 flex flex-col justify-between font-sans text-xs select-none">
            {/* Top Bar inside app */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-purple-500 flex items-center justify-center text-white font-black text-[10px]">
                  AI
                </div>
                <span className="font-bold text-slate-100 text-xs sm:text-sm">COGNITIVEOPS AGENT ENGINE</span>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-mono text-[9px] border border-purple-500/30">
                  GPT-4o & GEMINI 2.0
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] text-purple-400">
                <Zap className="w-3 h-3 text-purple-400" />
                <span>3,420 TOKENS/S</span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-12 gap-2.5 my-2">
              {/* Pipeline Pipeline Flow */}
              <div className="col-span-7 bg-slate-900/90 rounded-xl border border-slate-800 p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[10px] font-mono">
                  <span className="text-slate-300 font-bold">REASONING EXECUTION LOOP</span>
                  <span className="text-purple-400 font-semibold">Active</span>
                </div>

                <div className="space-y-1.5 my-2">
                  <div className="p-1.5 rounded bg-slate-950 border border-purple-500/40 flex items-center justify-between text-[10px] font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                      <span className="text-slate-200">1. Multimodal OCR Ingest</span>
                    </div>
                    <span className="text-emerald-400 text-[9px]">Done (0.8s)</span>
                  </div>

                  <div className="p-1.5 rounded bg-slate-950 border border-purple-500/40 flex items-center justify-between text-[10px] font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-slate-200">2. Schema Cross-Verification</span>
                    </div>
                    <span className="text-amber-400 text-[9px]">99.4% Match</span>
                  </div>

                  <div className="p-1.5 rounded bg-slate-950 border border-slate-800 flex items-center justify-between text-[10px] font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                      <span className="text-slate-400">3. Automated ERP Webhook Trigger</span>
                    </div>
                    <span className="text-slate-500 text-[9px]">Pending</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 pt-1 border-t border-slate-800">
                  <span>Self-Correcting Loops: 0 errors</span>
                  <span className="text-emerald-400 font-bold">99.2% Accuracy</span>
                </div>
              </div>

              {/* JSON Output Preview */}
              <div className="col-span-5 bg-slate-900/90 rounded-xl border border-slate-800 p-3 font-mono text-[9px] flex flex-col justify-between">
                <div className="flex items-center justify-between pb-1 border-b border-slate-800 text-[10px]">
                  <span className="text-slate-300 font-bold">EXTRACTED PAYLOAD</span>
                  <span className="text-purple-400">JSON</span>
                </div>

                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 my-1 text-slate-300 leading-relaxed overflow-hidden">
                  <p className="text-purple-300">&#123;</p>
                  <p className="pl-2">&quot;invoice_id&quot;: &quot;INV-2026-901&quot;,</p>
                  <p className="pl-2">&quot;vendor&quot;: &quot;Apex Global&quot;,</p>
                  <p className="pl-2 text-emerald-400">&quot;total_usd&quot;: 14850.00,</p>
                  <p className="pl-2">&quot;tax_verified&quot;: true</p>
                  <p className="text-purple-300">&#125;</p>
                </div>

                <div className="text-[9px] text-slate-400 text-center font-mono">
                  Latency: 2.4s total loop
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Bot className="w-3 h-3 text-purple-400" />
                <span>LangChain Agents & n8n Orchestration</span>
              </span>
              <span className="text-purple-300 font-semibold">80+ Hrs Saved/Week</span>
            </div>
          </div>
        );

      case "fintech":
      default:
        return (
          <div className="h-full bg-[#0A121E] text-slate-100 p-3.5 sm:p-4.5 flex flex-col justify-between font-sans text-xs select-none">
            {/* Top Bar inside app */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-[10px]">
                  N
                </div>
                <span className="font-bold text-slate-100 text-xs sm:text-sm">NEXUSCORE BILLING ENGINE</span>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[9px] border border-emerald-500/30">
                  IDEMPOTENT
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400">
                <TrendingUp className="w-3 h-3 text-emerald-400" />
                <span>MRR: $124,500</span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-12 gap-2.5 my-2">
              {/* Metric & Chart */}
              <div className="col-span-7 bg-slate-900/90 rounded-xl border border-slate-800 p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[10px] font-mono">
                  <span className="text-slate-300 font-bold">API USAGE METERING</span>
                  <span className="text-emerald-400">10k req/sec</span>
                </div>

                {/* Simulated Chart Bars */}
                <div className="flex items-end justify-between gap-1.5 h-16 my-2 px-2 pt-2 bg-slate-950 rounded-lg border border-slate-800">
                  {[40, 55, 35, 70, 60, 85, 95, 80, 100].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        style={{ height: `${height}%` }}
                        className="w-full bg-gradient-to-t from-emerald-600 to-teal-400 rounded-t-sm"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 pt-1 border-t border-slate-800">
                  <span>Concurrent Ledgers: 400+</span>
                  <span className="text-emerald-400 font-bold">100% Reconciled</span>
                </div>
              </div>

              {/* Transactions Stream */}
              <div className="col-span-5 bg-slate-900/90 rounded-xl border border-slate-800 p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-1 border-b border-slate-800 text-[10px] font-mono">
                  <span className="text-slate-300 font-bold">EVENT LOG</span>
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                </div>

                <div className="space-y-1.5 my-1 text-[9px] font-mono">
                  <div className="p-1.5 rounded bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-300">tx_89f4b...</span>
                    <span className="text-emerald-400 font-bold">+$420.00</span>
                  </div>
                  <div className="p-1.5 rounded bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-300">tx_12a9c...</span>
                    <span className="text-emerald-400 font-bold">+$1,850.00</span>
                  </div>
                  <div className="hidden sm:flex p-1.5 rounded bg-slate-950 border border-slate-800 justify-between">
                    <span className="text-slate-300">tx_55c3e...</span>
                    <span className="text-emerald-400 font-bold">+$95.00</span>
                  </div>
                </div>

                <div className="text-[9px] font-mono text-slate-500 text-center">
                  Zero Lock Contention
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <DollarSign className="w-3 h-3 text-emerald-400" />
                <span>Distributed Redis Locks & Prisma ORM</span>
              </span>
              <span className="text-emerald-400 font-semibold">&lt; 45ms P99</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      onClick={() => onOpenCaseStudy?.(project)}
      className="group/card relative aspect-[16/10] w-full rounded-2xl border border-neutral-200/90 bg-neutral-900 shadow-md hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
    >
      {/* Safari / macOS Browser Window Bar */}
      <div className="h-9 sm:h-10 bg-[#1E293B] border-b border-slate-800 px-3 sm:px-4 flex items-center justify-between shrink-0 z-10">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
        </div>

        {/* Address / URL Bar */}
        <div className="bg-slate-950/70 text-slate-300 font-mono text-[10px] sm:text-[11px] px-3 py-1 rounded-md flex items-center gap-1.5 border border-slate-800 shadow-inner max-w-[200px] sm:max-w-[280px] truncate">
          <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="truncate">{getUrl()}</span>
        </div>

        {/* Browser Right Action Icon */}
        <div className="flex items-center gap-2 text-slate-500">
          <RotateCw className="w-3 h-3 hidden sm:inline" />
          <ExternalLink className="w-3 h-3" />
        </div>
      </div>

      {/* High-Resolution Dashboard Mockup Body */}
      <div className="flex-1 relative overflow-hidden bg-slate-950">
        {renderDashboardContent()}

        {/* Glowing Hover Overlay */}
        <div className="absolute inset-0 bg-charcoal-900/60 backdrop-blur-[2.5px] opacity-0 group-hover/card:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none z-20">
          <div className="transform translate-y-3 group-hover/card:translate-y-0 transition-transform duration-300 bg-white/95 text-charcoal-950 px-5 py-2.5 rounded-full font-mono text-xs font-bold shadow-xl border border-amber-500/40 ring-4 ring-amber-400/20 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-charcoal-700" />
          </div>
        </div>
      </div>
    </div>
  );
};
