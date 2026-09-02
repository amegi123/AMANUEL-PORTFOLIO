"use client";

import React from "react";
import Link from "next/link";
import { X, ArrowRight, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
  activeSection: string;
  onOpenCommand: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
  activeSection,
  onOpenCommand,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden bg-[#FAF8F5]/95 backdrop-blur-2xl animate-fade-in flex flex-col">
      <div className="flex items-center justify-between p-5 border-b border-surface-border">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold text-sm tracking-tight text-charcoal-900">
            FULL-STACK DEVELOPER
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg text-charcoal-600 hover:text-charcoal-900 bg-white border border-surface-border"
          aria-label="Close navigation menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="space-y-1">
          <p className="text-[11px] font-mono uppercase tracking-wider text-charcoal-400 mb-3 px-3 font-semibold">
            Navigation
          </p>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? "bg-gold-100 text-gold-900 font-bold"
                    : "text-charcoal-700 hover:bg-surface-100 hover:text-charcoal-900"
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-40 text-gold-600" />
              </Link>
            );
          })}
        </div>

        <div className="pt-4 border-t border-surface-border space-y-3">
          <button
            onClick={() => {
              onClose();
              onOpenCommand();
            }}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-white border border-surface-border text-xs font-mono text-charcoal-600"
          >
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-gold-600" />
              <span>Quick Search (Command Palette)</span>
            </div>
            <kbd className="px-2 py-0.5 rounded bg-surface-100 text-charcoal-700 border border-surface-border text-[10px]">
              Ctrl+K
            </kbd>
          </button>

          <Link href="/contact" onClick={onClose} className="block w-full">
            <Button
              variant="gold"
              size="md"
              className="w-full justify-center"
              icon={<Sparkles className="w-4 h-4" />}
            >
              Let&apos;s Work Together
            </Button>
          </Link>
        </div>

        <div className="pt-4 text-xs font-mono text-charcoal-500 space-y-1">
          <p className="font-semibold text-charcoal-800">Full-Stack & AI Systems Developer</p>
          <p>Available for freelance contracts & project engagements</p>
        </div>
      </div>
    </div>
  );
};
