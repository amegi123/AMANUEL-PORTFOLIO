"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "emerald" | "charcoal" | "outline";
  className?: string;
  size?: "sm" | "md";
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
  size = "sm",
  dot = false,
}) => {
  const variantStyles = {
    default: "bg-surface-100 text-charcoal-700 border-surface-border",
    gold: "bg-gold-50 text-gold-800 border-surface-borderGold font-semibold shadow-gold-sm",
    emerald: "bg-emerald-50 text-emerald-800 border-emerald-200 font-semibold",
    charcoal: "bg-charcoal-900 text-white border-charcoal-800",
    outline: "bg-transparent text-charcoal-600 border-surface-border",
  };

  const dotColors = {
    default: "bg-charcoal-400",
    gold: "bg-gold-500",
    emerald: "bg-emerald-500",
    charcoal: "bg-gold-400",
    outline: "bg-charcoal-400",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono border rounded-full font-medium transition-colors tracking-tight",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full animate-pulse", dotColors[variant])}
        />
      )}
      {children}
    </span>
  );
};
