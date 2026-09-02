"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "./ContactForm";
import { socialLinks, contactInfo } from "@/data/social";
import { Mail, MapPin, Clock, ArrowUpRight, Github, Linkedin, Youtube, Video, Instagram } from "lucide-react";

export const Contact: React.FC = () => {
  const getSocialIcon = (name: string) => {
    switch (name) {
      case "GitHub":
        return Github;
      case "LinkedIn":
        return Linkedin;
      case "YouTube":
        return Youtube;
      case "TikTok":
        return Video;
      case "Instagram":
        return Instagram;
      default:
        return Mail;
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="07"
          tag="Direct Communication"
          title="Have an idea worth building?"
          subtitle="Whether you're launching a product, automating a process, or seeking engineering leadership, let's talk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-charcoal-900">
                Start a Conversation
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed font-normal">
                Direct inquiries for software architecture, SaaS systems, AI automation, and executive consulting.
              </p>
            </div>

            <div className="space-y-2.5 pt-1">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-surface-border hover:border-gold-400 transition-colors shadow-xs group"
              >
                <div className="p-2 rounded-xl bg-gold-50 text-gold-700 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-charcoal-400 uppercase font-semibold">DIRECT EMAIL</p>
                  <p className="text-xs sm:text-sm font-bold text-charcoal-900 group-hover:text-gold-700">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-surface-border text-charcoal-700 shadow-xs">
                <div className="p-2 rounded-xl bg-surface-100 text-charcoal-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-charcoal-400 uppercase font-semibold">LOCATION</p>
                  <p className="text-xs sm:text-sm font-bold text-charcoal-900">
                    {contactInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-surface-border text-charcoal-700 shadow-xs">
                <div className="p-2 rounded-xl bg-surface-100 text-gold-600">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-charcoal-400 uppercase font-semibold">TIMEZONE</p>
                  <p className="text-xs sm:text-sm font-bold text-charcoal-900">
                    Addis Ababa (GMT+3) · Available for high-impact work
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-2 space-y-2">
              <p className="text-xs font-mono uppercase tracking-wider text-charcoal-400 font-semibold">
                Social Profiles
              </p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => {
                  const Icon = getSocialIcon(social.name);
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-surface-border hover:border-gold-400 text-xs font-mono text-charcoal-700 hover:text-gold-800 transition-colors shadow-xs"
                    >
                      <Icon className="w-3.5 h-3.5 text-gold-600" />
                      <span>{social.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-charcoal-400" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
