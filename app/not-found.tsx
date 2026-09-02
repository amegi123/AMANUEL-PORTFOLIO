import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Button } from "@/components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";
import { TibebPattern } from "@/components/hero/TibebPattern";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20 relative flex-1 flex items-center justify-center">
        <TibebPattern opacity={0.06} />

        <div className="max-w-md mx-auto px-4 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gold-50 border border-surface-borderGold text-gold-700 font-mono font-black text-xl shadow-xs">
            404
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-charcoal-900 tracking-tight">
              Page Not Found
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
              The page you are looking for does not exist or has been moved to a new route.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-center gap-3">
            <Link href="/">
              <Button
                variant="gold"
                size="md"
                icon={<Home className="w-4 h-4" />}
                className="font-mono text-xs shadow-gold-sm"
              >
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
