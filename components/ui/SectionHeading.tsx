"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  tag,
  title,
  subtitle,
  alignment = "left",
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        alignment === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {(number || tag) && (
        <div
          className={cn(
            "flex items-center gap-2 mb-2.5 text-xs font-mono tracking-wider uppercase",
            alignment === "center" && "justify-center"
          )}
        >
          {number && <span className="text-gold-600 font-bold">[{number}]</span>}
          {tag && <span className="text-charcoal-500 font-semibold">{tag}</span>}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-charcoal-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-charcoal-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
