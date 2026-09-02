"use client";

import React from "react";
import { Layers, MapPin, Activity, Cpu, Code2, Clock } from "lucide-react";

export const QuickProfile: React.FC = () => {
  const profileDetails = [
    { label: "Role", value: "Full-Stack Developer", icon: Layers, color: "text-gold-700 font-bold" },
    { label: "Core Stack", value: "Next.js · Laravel · React · Node.js", icon: Code2, color: "text-charcoal-900 font-bold" },
    { label: "Specialization", value: "AI Automation · APIs · SaaS", icon: Cpu, color: "text-charcoal-800" },
    { label: "Location", value: "Addis Ababa, Ethiopia", icon: MapPin, color: "text-charcoal-700" },
    { label: "Timezone", value: "GMT+3 (Global Remote Ready)", icon: Clock, color: "text-charcoal-700" },
    { label: "Availability", value: "Open for freelance & contracts", icon: Activity, color: "text-emerald-700 font-bold" },
  ];

  return (
    <div className="rounded-2xl border border-surface-border bg-white p-6 shadow-card-subtle">
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-surface-border">
        <div className="flex items-center gap-2 text-xs font-mono text-charcoal-500 uppercase font-semibold">
          <span className="w-2 h-2 rounded-full bg-gold-500" />
          <span>Developer Profile Spec</span>
        </div>
        <span className="text-[10px] font-mono text-gold-700 bg-gold-50 px-2 py-0.5 rounded-full border border-surface-borderGold font-bold">
          STATUS: ACTIVE
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {profileDetails.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-3.5 rounded-xl bg-surface-100/70 border border-surface-border hover:border-gold-300 transition-colors"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Icon className="w-3.5 h-3.5 text-gold-600" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-500 font-semibold">
                  {item.label}
                </span>
              </div>
              <p className={`text-sm font-semibold tracking-tight ${item.color}`}>
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
