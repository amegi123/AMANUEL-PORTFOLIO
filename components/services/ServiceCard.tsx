"use client";

import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/lib/types";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="rounded-2xl border border-surface-border bg-white p-6 shadow-card-subtle hover:border-gold-300 hover:shadow-gold-sm transition-all duration-300 flex flex-col justify-between group">
      <div className="space-y-3">
        {/* Service Header */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-gold-700">
            [{service.number}]
          </span>
          <span className="text-[11px] font-mono text-charcoal-400 uppercase font-semibold">
            {service.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-charcoal-900 group-hover:text-gold-800 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
          {service.description}
        </p>

        {/* Deliverables */}
        <div className="pt-2 space-y-1.5">
          <p className="text-[10px] font-mono uppercase text-charcoal-400 font-bold">
            Key Deliverables
          </p>
          <div className="space-y-1">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 pt-3.5 border-t border-surface-border space-y-2.5">
        <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
          {service.technologies.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded bg-surface-100 border border-surface-border text-charcoal-600"
            >
              {t}
            </span>
          ))}
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 text-xs font-mono text-gold-700 font-bold hover:text-gold-800 transition-colors"
        >
          <span>Request Scope & Quote</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
