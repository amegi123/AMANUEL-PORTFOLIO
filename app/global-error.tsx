"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home, AlertOctagon } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error Boundary caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAF8F5] text-[#18181B] flex flex-col items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-white border border-neutral-200/90 rounded-3xl p-8 sm:p-10 shadow-xl text-center space-y-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-50 border border-red-200 text-red-600 shadow-xs">
            <AlertOctagon className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono text-red-800 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200 font-bold uppercase">
              500 · SYSTEM ERROR
            </span>
            <h1 className="text-2xl font-extrabold text-charcoal-900 tracking-tight">
              Application Error
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
              An unexpected system exception occurred. The server recovered and you can reload the application.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reload App</span>
            </button>
            <a
              href="/"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-surface-100 hover:bg-surface-200 border border-surface-border text-charcoal-800 font-mono text-xs font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Back Home</span>
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
