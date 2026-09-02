import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { socialLinks, contactInfo } from "@/data/social";
import { Mail, MapPin, Clock, ArrowUpRight, Github, Linkedin, Youtube, Video, Instagram } from "lucide-react";
import { TibebPattern } from "@/components/hero/TibebPattern";
import Link from "next/link";

export const metadata = {
  title: "Contact & Consultation — Full-Stack Developer",
  description: "Start a project conversation for full-stack software development, web applications, and AI automation.",
};

export default function ContactPage() {
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
            <span className="text-xs font-mono text-gold-700 font-bold">Contact</span>
          </div>

          <SectionHeading
            number="07"
            tag="Direct Communication"
            title="Have an idea worth building?"
            subtitle="Whether you're starting a new product, automating a business process, or looking for a developer to turn an idea into a working system, let's talk."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-charcoal-900">
                  Start a Conversation
                </h2>
                <p className="text-sm text-charcoal-600 leading-relaxed font-normal">
                  Direct inquiries for software architecture, SaaS platforms, AI automation, and technology advisory.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-surface-border hover:border-gold-400 transition-colors shadow-xs group"
                >
                  <div className="p-2.5 rounded-xl bg-gold-50 text-gold-700 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-charcoal-400 uppercase font-semibold">DIRECT EMAIL</p>
                    <p className="text-sm font-bold text-charcoal-900 group-hover:text-gold-700">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-surface-border text-charcoal-700 shadow-xs">
                  <div className="p-2.5 rounded-xl bg-surface-100 text-charcoal-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-charcoal-400 uppercase font-semibold">LOCATION</p>
                    <p className="text-sm font-bold text-charcoal-900">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-surface-border text-charcoal-700 shadow-xs">
                  <div className="p-2.5 rounded-xl bg-surface-100 text-gold-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-charcoal-400 uppercase font-semibold">TIMEZONE & AVAILABILITY</p>
                    <p className="text-sm font-bold text-charcoal-900">
                      Addis Ababa (GMT+3) · Available for high-impact work
                    </p>
                  </div>
                </div>
              </div>

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

            {/* Right Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
