"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  CheckCircle2,
  Terminal,
  Copy,
  Check,
  Cpu,
  Sparkles,
  Zap,
} from "lucide-react";

interface CodeSnippet {
  id: string;
  filename: string;
  language: string;
  icon: string;
  code: string[];
  output: string[];
}

const SNIPPETS: CodeSnippet[] = [
  {
    id: "typescript",
    filename: "system.config.ts",
    language: "TypeScript",
    icon: "TS",
    code: [
      "// Production Next.js 15 & Type-Safe Architecture",
      "import { defineSystem, AgenticLoop } from '@core/engine';",
      "",
      "export const portfolioArchitecture = defineSystem({",
      "  framework: 'Next.js 15 App Router (React 19)',",
      "  database: 'PostgreSQL 16 + Multi-Tenant Indexing',",
      "  backend: 'Laravel 11 REST & WebSocket Gateways',",
      "  aiEngine: new AgenticLoop({",
      "    models: ['gpt-4o', 'gemini-2.0-flash'],",
      "    concurrency: 50,",
      "    strictValidation: true,",
      "  }),",
      "  telemetry: { targetUptime: 0.9998, maxLatencyMs: 45 },",
      "});",
    ],
    output: [
      "✓ Type-check passed (0 errors in 42 files)",
      "✓ PostgreSQL schema synced with strict isolation",
      "✓ Edge CDN warm-up completed in 32ms",
    ],
  },
  {
    id: "laravel",
    filename: "DeployPipeline.php",
    language: "PHP",
    icon: "PHP",
    code: [
      "<?php",
      "namespace App\\Services\\Architecture;",
      "",
      "class ProductionDeployEngine {",
      "    public function orchestratePipeline(): SystemHealth {",
      "        $cluster = DatabaseCluster::connect();",
      "        $cluster->optimizeIndexes(['tenant_id', 'created_at']);",
      "        ",
      "        $queue = RedisQueue::dispatchAsyncJobs([",
      "            'batchSize' => 1000,",
      "            'rateLimit' => '10000 req/min',",
      "        ]);",
      "        return new SystemHealth(status: 'OPTIMAL');",
      "    }",
      "}",
    ],
    output: [
      "✓ Artisan migrate: 18 tables verified",
      "✓ Redis workers active on 4 async queues",
      "✓ System response latency: 28ms",
    ],
  },
  {
    id: "ai",
    filename: "agent_workflow.py",
    language: "Python",
    icon: "PY",
    code: [
      "# Autonomous Multimodal AI Pipeline",
      "from langchain_core import AutonomousAgent",
      "from gemini_core import GeminiFlash2",
      "",
      "agent = AutonomousAgent(",
      "    model=GeminiFlash2(temperature=0.1),",
      "    tools=['database_query', 'document_parser', 'ocr'],",
      "    memory='hybrid_vector_store',",
      ")",
      "",
      "pipeline = agent.execute_pipeline(",
      "    input_stream='telemetry.json',",
      "    auto_recovery=True,",
      ")",
    ],
    output: [
      "✓ Multimodal embeddings initialized (1536 dim)",
      "✓ Vector store indexed 12,400 documents",
      "✓ Autonomous recovery loop: STANDBY",
    ],
  },
];

export const HeroCodeEditor: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeLine, setActiveLine] = useState(0);

  const snippet = SNIPPETS[activeTab];

  // Auto-cycle line highlighting
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % snippet.code.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [snippet.code.length]);

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 1200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto group">
      {/* Ambient Glow behind the editor */}
      <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-gold-500/20 via-amber-500/15 to-emerald-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      <div className="rounded-2xl border border-charcoal-800 bg-[#0F1117] text-zinc-300 shadow-2xl overflow-hidden font-mono text-xs flex flex-col">
        {/* Top Window Bar */}
        <div className="bg-[#181B24] px-4 py-3 border-b border-charcoal-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* macOS traffic light dots */}
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-xs" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-xs" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-xs" />
            </div>

            {/* Tab Bar */}
            <div className="flex items-center gap-1 ml-3 overflow-x-auto">
              {SNIPPETS.map((snip, index) => (
                <button
                  key={snip.id}
                  onClick={() => {
                    setActiveTab(index);
                    setActiveLine(0);
                  }}
                  className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
                    activeTab === index
                      ? "bg-[#0F1117] text-gold-400 border border-charcoal-700 shadow-xs"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-[#1E2230]"
                  }`}
                >
                  <span className="text-[10px] text-zinc-500 font-bold">{snip.icon}</span>
                  <span>{snip.filename}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="px-2.5 py-1 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold flex items-center gap-1 transition-all shadow-xs disabled:opacity-50"
              title="Run Code Script"
            >
              <Play className={`w-3 h-3 ${isRunning ? "animate-spin" : "fill-emerald-400"}`} />
              <span>{isRunning ? "Executing..." : "Run"}</span>
            </button>

            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg hover:bg-charcoal-700/60 text-zinc-400 hover:text-white transition-colors"
              title="Copy Code"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Code Editor Body */}
        <div className="p-4 sm:p-5 overflow-x-auto max-h-[300px] leading-relaxed select-text space-y-1 bg-[#0F1117]">
          {snippet.code.map((line, idx) => {
            const isHighlight = idx === activeLine;
            return (
              <div
                key={idx}
                className={`flex items-start gap-3 px-2 py-0.5 rounded-md transition-colors ${
                  isHighlight
                    ? "bg-gold-500/10 border-l-2 border-gold-400 text-white"
                    : "text-zinc-300"
                }`}
              >
                {/* Line number */}
                <span className="text-zinc-600 select-none w-5 text-right shrink-0 text-[11px]">
                  {idx + 1}
                </span>

                {/* Code line with high-craft syntax highlighting */}
                <div className="flex-1 whitespace-pre">
                  {line.startsWith("//") || line.startsWith("#") ? (
                    <span className="text-zinc-500 italic">{line}</span>
                  ) : line.startsWith("import") || line.startsWith("export") || line.startsWith("class") || line.startsWith("public") || line.startsWith("return") || line.startsWith("from") ? (
                    <span>
                      <span className="text-purple-400 font-bold">{line.split(" ")[0]}</span>{" "}
                      <span className="text-zinc-200">{line.substring(line.indexOf(" ") + 1)}</span>
                    </span>
                  ) : line.includes(":") ? (
                    <span>
                      <span className="text-gold-300">{line.split(":")[0]}:</span>
                      <span className="text-emerald-300">{line.substring(line.indexOf(":") + 1)}</span>
                    </span>
                  ) : (
                    <span>{line}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Execution Output Drawer */}
        <div className="bg-[#141722] p-3.5 border-t border-charcoal-800 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
              <Terminal className="w-3 h-3 text-gold-400" />
              <span>RUNTIME EXECUTION LOGS</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE CLOUD COMPILE</span>
            </div>
          </div>

          <div className="space-y-1 text-[11px] text-zinc-300">
            {snippet.output.map((out, oIdx) => (
              <div key={oIdx} className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="text-zinc-300">{out}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
