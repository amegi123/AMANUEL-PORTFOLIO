"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Key, ArrowRight, AlertCircle, ShieldCheck, Code2 } from "lucide-react";
import { TibebPattern } from "@/components/hero/TibebPattern";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError("Please enter the admin master passkey.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/admin");
      } else {
        setError(data.error || "Invalid authentication credentials.");
      }
    } catch (err) {
      setError("Authentication error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] flex flex-col justify-between relative overflow-hidden font-sans">
      <TibebPattern opacity={0.12} />

      {/* Top Header */}
      <header className="p-6 max-w-7xl mx-auto w-full flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center gap-2.5 text-xs font-mono text-zinc-700 hover:text-amber-700 transition-colors">
          <div className="w-8 h-8 rounded-xl bg-charcoal-900 text-white font-mono font-bold flex items-center justify-center text-xs shadow-md">
            <Code2 className="w-4 h-4 text-gold-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-zinc-900 tracking-wider text-xs">DEVELOPER PORTFOLIO</span>
            <span className="text-[10px] text-zinc-500 font-mono">ADMIN CONTROL</span>
          </div>
        </Link>
        <Link
          href="/"
          className="text-xs font-mono px-3 py-1.5 rounded-xl bg-white border border-zinc-200 text-zinc-600 hover:text-amber-700 hover:border-amber-300 shadow-sm transition-all"
        >
          ← Back to Portfolio
        </Link>
      </header>

      {/* Main Login Box */}
      <main className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-md bg-white border border-amber-200/80 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
          {/* Icon & Title */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 mb-2 shadow-sm">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              Admin Authentication
            </h1>
            <p className="text-xs text-zinc-500 font-mono">
              SECURE GATEWAY · PORTFOLIO MANAGEMENT CONSOLE
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-mono text-zinc-700 font-bold">
                MASTER ADMIN PASSKEY <span className="text-amber-600">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter administrator passkey..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all font-sans"
                />
                <Key className="w-4 h-4 text-amber-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-xs font-mono text-red-700 bg-red-50 p-3 rounded-xl border border-red-200 animate-fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-sm shadow-md hover:from-amber-600 hover:to-amber-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 select-none active:scale-[0.99]"
            >
              {isLoading ? (
                <span>Verifying credentials...</span>
              ) : (
                <>
                  <span>Verify & Enter Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Notice */}
          <div className="pt-4 border-t border-zinc-100 text-center space-y-1">
            <p className="text-[11px] font-mono text-zinc-500 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Secure Portfolio Management Engine</span>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-xs font-mono text-zinc-500 relative z-10">
        © 2026 Developer Portfolio Admin Portal
      </footer>
    </div>
  );
}
