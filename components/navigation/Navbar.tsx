"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Terminal, Sparkles, Code2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { CommandPalette } from "./CommandPalette";

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-surface-border py-3.5 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - Individual Developer */}
          <Link
            href="/"
            className="group flex items-center gap-3 select-none"
            aria-label="Full-Stack Developer Home"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-charcoal-900 text-white font-mono font-bold text-xs shadow-gold-sm group-hover:bg-gold-600 transition-colors">
              <Code2 className="w-4 h-4 text-gold-400" />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-charcoal-900 group-hover:text-gold-700 transition-colors">
                FULL-STACK DEVELOPER
              </span>
              <span className="text-[10px] font-mono text-charcoal-500 uppercase tracking-tight hidden sm:inline">
                Web Systems & AI Automation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/90 border border-surface-border rounded-full px-3 py-1.5 backdrop-blur-md shadow-card-subtle">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-150 ${
                    isActive
                      ? "text-gold-900 bg-gold-100 font-semibold shadow-xs"
                      : "text-charcoal-600 hover:text-charcoal-900 hover:bg-surface-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Command Palette Button */}
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white border border-surface-border text-charcoal-600 hover:text-gold-700 hover:border-gold-300 transition-colors text-xs font-mono shadow-xs"
              aria-label="Open command palette"
              title="Search (Ctrl+K)"
            >
              <Terminal className="w-3.5 h-3.5 text-gold-600" />
              <kbd className="text-[10px] bg-surface-100 px-1.5 py-0.5 rounded text-charcoal-600 border border-surface-border">
                ⌘K
              </kbd>
            </button>

            {/* Desktop CTA */}
            <Link href="/contact" className="hidden sm:block">
              <Button
                variant="gold"
                size="sm"
                className="text-xs font-semibold"
                icon={<Sparkles className="w-3.5 h-3.5" />}
              >
                Let&apos;s Work Together
              </Button>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-white border border-surface-border text-charcoal-700 hover:text-charcoal-900"
              aria-label="Open mobile navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
        activeSection={pathname}
        onOpenCommand={() => {
          setMobileMenuOpen(false);
          setCommandPaletteOpen(true);
        }}
      />

      {/* Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </>
  );
};
