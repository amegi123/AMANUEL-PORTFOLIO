import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { Experience } from "@/components/experience/Experience";
import { Services } from "@/components/services/Services";
import { ContentKnowledge } from "@/components/content/ContentKnowledge";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#18181B] selection:bg-gold-200 selection:text-gold-950">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="relative z-10">
        {/* Hero Section with Interactive Coding & Innovation Geometry */}
        <Hero />

        {/* Editorial About Me with Portrait Photo */}
        <About />

        {/* Technical Skills & Capabilities 2-Row Marquee */}
        <Skills />

        {/* Selected Work Thumbnail Grid */}
        <Projects />

        {/* Journey & Experience Timeline */}
        <Experience />

        {/* Capabilities & What I Build */}
        <Services />

        {/* Content & Knowledge Broadcasts */}
        <ContentKnowledge />

        {/* Direct Contact & Inquiry System */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
