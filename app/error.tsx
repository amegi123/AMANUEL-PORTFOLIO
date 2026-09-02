"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { RefreshCw, Home, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-white border border-neutral-200/90 rounded-3xl p-8 sm:p-10 shadow-xl text-center space-y-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 shadow-xs">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-mono text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 font-bold uppercase">
            RECOVERABLE RUNTIME EXCEPTION
          </span>
          <h1 className="text-2xl font-extrabold text-charcoal-900 tracking-tight">
            Something Went Wrong
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
            A temporary runtime error occurred while processing the request. You can retry the operation or navigate back to the home page.
          </p>
        </div>

        {error?.message && (
          <div className="p-3 rounded-xl bg-surface-50 border border-surface-border text-left font-mono text-xs text-charcoal-700 overflow-x-auto">
            <span className="text-[10px] text-charcoal-400 block uppercase font-semibold">Details:</span>
            <p className="truncate">{error.message}</p>
          </div>
        )}

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="gold"
            size="md"
            onClick={() => reset()}
            icon={<RefreshCw className="w-4 h-4" />}
            className="w-full sm:w-auto font-mono text-xs shadow-gold-sm"
          >
            Try Again
          </Button>
          <Link href="/" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              size="md"
              icon={<Home className="w-4 h-4" />}
              className="w-full sm:w-auto font-mono text-xs"
            >
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
