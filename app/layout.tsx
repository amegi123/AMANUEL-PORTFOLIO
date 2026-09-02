import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Full-Stack Developer — Web Applications & AI Automation",
  description:
    "Full-stack software developer building modern web applications, scalable APIs, and intelligent automation systems.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "AI Automation",
    "TypeScript",
    "PostgreSQL",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Full-Stack Developer — Web Applications & AI Automation",
    description:
      "Full-stack software developer building modern web applications, scalable APIs, and intelligent automation systems.",
    siteName: "Full-Stack Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Developer — Web Applications & AI Automation",
    description:
      "Full-stack software developer building modern web applications, scalable APIs, and intelligent automation systems.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    jobTitle: "Full-Stack Developer & AI Automation Engineer",
    knowsAbout: [
      "Full-Stack Development",
      "Next.js",
      "React",
      "TypeScript",
      "Laravel",
      "PHP",
      "AI Agents",
      "Workflow Automation",
      "System Design",
    ],
    description:
      "Full-stack software developer building modern web applications, scalable APIs, and intelligent automation systems.",
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${jetbrainsMono.variable} bg-[#FAF8F5] text-[#18181B] font-sans antialiased selection:bg-gold-200 selection:text-gold-950 min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
