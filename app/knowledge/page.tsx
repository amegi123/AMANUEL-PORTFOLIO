import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contentTopics } from "@/data/content";
import { socialLinks } from "@/data/social";
import { TibebPattern } from "@/components/hero/TibebPattern";
import Link from "next/link";
import { Youtube, Video, Instagram, ArrowUpRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Knowledge & Media — Full-Stack Developer",
  description: "Explore engineering tutorials, full-stack architectural breakdowns, and AI workflow insights.",
};

export default function KnowledgePage() {
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
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20 relative">
        <TibebPattern opacity={0.06} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-10">
          <div className="mb-6">
            <Link href="/" className="text-xs font-mono text-charcoal-400 hover:text-gold-700">
              Home
            </Link>
            <span className="text-xs font-mono text-charcoal-300 mx-2">/</span>
            <span className="text-xs font-mono text-gold-700 font-bold">Knowledge & Media</span>
          </div>

          <SectionHeading
            number="06"
            tag="Knowledge & Media"
            title="Sharing what I'm building and learning."
            subtitle="Documenting software engineering patterns, autonomous AI agent pipelines, SaaS architectures, and tech entrepreneurship."
          />

          {/* Channels Grid */}
          <div className="space-y-4">
            <h2 className="text-sm font-mono uppercase tracking-wider text-charcoal-400 font-bold">
              Broadcast Channels
            </h2>
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

          {/* Topics Grid */}
          <div className="space-y-4 pt-4 border-t border-surface-border">
            <h2 className="text-sm font-mono uppercase tracking-wider text-charcoal-400 font-bold">
              Core Technical Topics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {contentTopics.map((topic, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-surface-border shadow-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-charcoal-900">{topic.name}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gold-50 text-gold-800 border border-surface-borderGold font-semibold">
                      {topic.tag}
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
