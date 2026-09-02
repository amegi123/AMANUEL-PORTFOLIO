"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contentTopics } from "@/data/content";
import { socialLinks } from "@/data/social";
import { Youtube, Video, Instagram, ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const ContentKnowledge: React.FC = () => {
  const mediaChannels = socialLinks.filter((s) =>
    ["YouTube", "TikTok", "Instagram"].includes(s.name)
  );

  const getMediaIcon = (name: string) => {
    switch (name) {
      case "YouTube":
        return Youtube;
      case "TikTok":
        return Video;
      case "Instagram":
        return Instagram;
      default:
        return Youtube;
    }
  };

  return (
    <section id="knowledge" className="py-16 md:py-24 relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <SectionHeading
            number="06"
            tag="Knowledge & Media"
            title="Sharing what I'm building and learning."
            subtitle="Documenting engineering patterns, autonomous AI systems, and tech entrepreneurship."
            className="mb-0"
          />
          <Link href="/knowledge" className="mt-4 sm:mt-0">
            <Button variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5 text-gold-600" />}>
              Explore Publications
            </Button>
          </Link>
        </div>

        {/* Media Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mediaChannels.map((channel) => {
            const Icon = getMediaIcon(channel.name);
            return (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-white border border-surface-border hover:border-gold-400 hover:shadow-gold-sm transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-gold-50 border border-surface-borderGold text-gold-700 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:text-gold-700 transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-charcoal-900 group-hover:text-gold-800 transition-colors">
                    {channel.name}
                  </h3>
                  <p className="text-xs font-mono text-gold-700 mt-0.5 font-semibold">
                    {channel.handle}
                  </p>
                  <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                    {channel.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
