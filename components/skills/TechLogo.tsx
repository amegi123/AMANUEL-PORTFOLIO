"use client";

import React from "react";

interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechLogo: React.FC<TechLogoProps> = ({
  name,
  className = "w-10 h-10",
  size = 40,
}) => {
  const normalized = name.toLowerCase().replace(/[\s\.\-_]/g, "");

  switch (normalized) {
    case "react":
      return (
        <svg
          viewBox="-11.5 -10.23174 23 20.46348"
          width={size}
          height={size}
          className={className}
          fill="none"
        >
          <circle cx="0" cy="0" r="2.05" fill="#087EA4" />
          <g stroke="#149ECA" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case "nextjs":
    case "next":
      return (
        <svg viewBox="0 0 180 180" width={size} height={size} className={className}>
          <mask height="180" id="next-mask" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
            <circle cx="90" cy="90" fill="black" r="90" />
          </mask>
          <g mask="url(#next-mask)">
            <circle cx="90" cy="90" fill="#000000" r="90" />
            <path
              d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
              fill="url(#next-paint0)"
            />
            <rect fill="url(#next-paint1)" height="72" width="12" x="115" y="54" />
          </g>
          <defs>
            <linearGradient id="next-paint0" gradientUnits="userSpaceOnUse" x1="109" x2="144.5" y1="116.5" y2="160.5">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="next-paint1" gradientUnits="userSpaceOnUse" x1="121" x2="120.799" y1="54" y2="106.875">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "typescript":
    case "ts":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#3178C6" rx="16" width="128" height="128" />
          <path
            d="M72.2 88.5c1.4 8.7 8.3 14.5 19.3 14.5 10.4 0 17.6-5.4 17.6-13.2 0-8.8-7.3-11.8-19.7-16.7-16.2-6.4-23.7-14.1-23.7-27.1 0-14.9 12-25.7 29.5-25.7 16.4 0 27.6 9.4 28.7 24.3h-14.1c-1.1-7.7-6.5-12-14.6-12-8.3 0-14.6 5.1-14.6 12 0 7.3 5.4 10.7 16.9 15.3 17.6 6.8 26.5 14.3 26.5 28.4 0 17.6-13.6 27.2-32.6 27.2-18.7 0-30.8-10.1-32.9-27h14.1zM34.7 113V33.6H18V22.9h47.4v10.7H48.8V113H34.7z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "javascript":
    case "js":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#F7DF1E" rx="16" width="128" height="128" />
          <path
            d="M71.4 87.7c1.3 7.8 7.3 12.8 17.1 12.8 9.3 0 15.5-4.8 15.5-11.7 0-7.8-6.5-10.4-17.5-14.8-14.4-5.6-21-12.5-21-23.9 0-13.2 10.6-22.7 26.1-22.7 14.5 0 24.4 8.3 25.4 21.5h-12.5c-1-6.8-5.7-10.6-12.9-10.6-7.3 0-12.9 4.5-12.9 10.6 0 6.5 4.8 9.5 15 13.5 15.6 6 23.4 12.7 23.4 25.1 0 15.6-12 24-28.8 24-16.5 0-27.3-8.9-29.2-23.9h12.3zM25.6 86.8c1.3 6.6 6.2 10.9 14.4 10.9 8.3 0 13.6-4.5 13.6-16.2V22.9h13.3v58.8c0 19.1-10.9 26.8-26.9 26.8-14.8 0-24.8-7.7-26.8-21.7h12.4z"
            fill="#000000"
          />
        </svg>
      );

    case "tailwindcss":
    case "tailwind":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#0F172A" rx="16" width="128" height="128" />
          <path
            d="M64 36c-18.7 0-29.3 9.3-32 28 8-10.7 17.3-14.7 28-12 6.1 1.5 10.5 5.9 15.3 10.8C83.1 70.8 92.5 80.3 112 80.3c18.7 0 29.3-9.3 32-28-8 10.7-17.3 14.7-28 12-6.1-1.5-10.5-5.9-15.3-10.8C92.9 45.5 83.5 36 64 36zM32 64C13.3 64 2.7 73.3 0 92c8-10.7 17.3-14.7 28-12 6.1 1.5 10.5 5.9 15.3 10.8C51.1 98.8 60.5 108.3 80 108.3c18.7 0 29.3-9.3 32-28-8 10.7-17.3 14.7-28 12-6.1-1.5-10.5-5.9-15.3-10.8C60.9 73.5 51.5 64 32 64z"
            fill="#38BDF8"
            transform="scale(0.85) translate(8, 10)"
          />
        </svg>
      );

    case "laravel":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#FFF5F5" rx="16" width="128" height="128" stroke="#FED7D7" strokeWidth="2" />
          <path
            d="M109.2 40.2l-38.6-22.3c-1.6-.9-3.6-.9-5.2 0L26.8 40.2c-1.6.9-2.6 2.6-2.6 4.5v44.6c0 1.9 1 3.6 2.6 4.5l38.6 22.3c1.6.9 3.6.9 5.2 0l38.6-22.3c1.6-.9 2.6-2.6 2.6-4.5V44.7c0-1.9-1-3.6-2.6-4.5zM64 26.6l31.2 18-12.7 7.3-31.2-18 12.7-7.3zm-5.4 67.8L32.2 78.7V49.2l26.4 15.2v29.5zm5.4-36.8L38.2 45.4l13.1-7.6 25.8 14.9-13.1 7.6zm26.4 21.1L64 94.4V64.9l26.4-15.2v29.5z"
            fill="#FF2D20"
          />
        </svg>
      );

    case "php":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#232531" rx="16" width="128" height="128" />
          <path
            d="M64 24C35.3 24 12 41.9 12 64s23.3 40 52 40 52-17.9 52-40-23.3-40-52-40zm-27.2 56h-8.5l7.5-32h14.8c6.6 0 10.9 3.3 9.4 9.8-1.5 6.6-7.3 11-13.9 11h-6.2l-3.1 11.2zm8.8-17.6h4.8c3.5 0 6.6-2.3 7.4-5.8.8-3.4-1.2-5.1-4.7-5.1h-4.8l-2.7 10.9zm27.8 17.6h-8.5l7.5-32h8.5l-3.1 13.2h8.3c6.6 0 10.9 3.3 9.4 9.8-1.5 6.6-7.3 11-13.9 11H73.4zm8.8-17.6h4.8c3.5 0 6.6-2.3 7.4-5.8.8-3.4-1.2-5.1-4.7-5.1h-4.8l-2.7 10.9zm32.6 6.4c-1.5 6.6-7.3 11.2-13.9 11.2h-14.8l7.5-32h8.5l-3.1 13.2h6.2c6.7 0 11.1 1 9.6 7.6zm-11.2-2.1c.8-3.4-1.2-5.1-4.7-5.1h-4.8l-2.7 10.9h4.8c3.5 0 6.6-2.4 7.4-5.8z"
            fill="#777BB4"
          />
        </svg>
      );

    case "nodejs":
    case "node":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#1E293B" rx="16" width="128" height="128" />
          <path
            d="M64 20.3L26.4 42v43.5L64 107.2l37.6-21.7V42L64 20.3zm0 9.8l29.4 17-29.4 17-29.4-17 29.4-17zm-32 22.8l29.4 17v33.9L32 86.8V52.9zm34.6 50.9V69.9l29.4-17v33.9L66.6 103.8z"
            fill="#5FA04E"
          />
        </svg>
      );

    case "nestjs":
    case "nest":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#1A1824" rx="16" width="128" height="128" />
          <path
            d="M109.4 43.1c-2.8-5.3-7.5-9.3-13.2-11.4-2.8-1-5.8-1.5-8.8-1.5-5.5 0-10.7 1.7-15.1 4.8l-3.2 2.3c-2.4 1.7-5.3 2.7-8.3 2.7-3.4 0-6.6-1.2-9.1-3.4l-7.7-6.8c-2.3-2-5.3-3.1-8.3-3.1-4.8 0-9.2 2.7-11.5 7L11.5 61.3c-2 3.8-2.1 8.3-.3 12.2 1.8 3.9 5.2 6.8 9.3 7.8l22.4 5.6c2.4.6 4.5 2 5.9 4l12.4 18.2c2.6 3.8 6.9 6.1 11.5 6.1 2.5 0 5-.7 7.2-2l27.1-16.3c4.7-2.8 7.9-7.6 8.7-13.1.8-5.5-.8-11.1-4.4-15.2l-1.9-2.2 4-13.3c.4-1.6.2-3.3-.6-4.9zm-27.1 22.6l-9.8 14.4c-.6.9-1.5 1.5-2.5 1.7-.3.1-.7.1-1 .1-.7 0-1.4-.2-2-.6l-12.4-8.3c-1.3-.9-2.1-2.4-2.1-4V52.8c0-1.6.8-3.1 2.1-4l9.8-6.5c1.3-.9 3-.9 4.3 0l11.4 7.6c1.3.9 2.1 2.4 2.1 4v10.6c.1.5 0 .9-.2 1.2z"
            fill="#E0234E"
          />
        </svg>
      );

    case "postgresql":
    case "postgres":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#F0F4F8" rx="16" width="128" height="128" stroke="#D0DDEB" strokeWidth="2" />
          <path
            d="M63.8 22c-20.9 0-37.4 14.5-37.4 34.6 0 12.4 6.3 23.3 16.3 29.5-1.1 4.5-3.3 10.9-8.4 15.3 8.3-.3 16.3-4.1 21.6-10.4 2.6.4 5.2.6 7.9.6 20.9 0 37.4-14.5 37.4-34.6 0-20.1-16.5-35-37.4-35zm12.5 45.4c-1.8 1.8-4.3 2.9-7.2 2.9h-8.8v11.8h-7.6V41.7h16.4c2.9 0 5.4 1.1 7.2 2.9 1.8 1.8 2.9 4.3 2.9 7.2v10.7c0 2.9-1.1 5.4-2.9 7.2zm-4.7-14.3c0-1.7-.8-2.6-2.5-2.6h-8.8v10.5h8.8c1.7 0 2.5-.9 2.5-2.6V53.1z"
            fill="#336791"
          />
        </svg>
      );

    case "mysql":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#001B2B" rx="16" width="128" height="128" />
          <path
            d="M28 84.5c4.7-9.5 13.9-19.3 25.1-23.7 4.1-1.6 8.5-2.5 13-2.6 2.3 0 4.6.2 6.8.7 1.8.4 3.5 1 5.2 1.7 8.5 3.7 15.2 10.7 18.7 19.4 1.4 3.5 2.1 7.2 2.2 11h-10c0-2.8-.5-5.6-1.5-8.2-2.7-6.8-7.9-12.2-14.6-15.1-1.3-.6-2.7-1-4.1-1.3-1.8-.4-3.6-.5-5.4-.5-3.6.1-7.1.8-10.4 2.1-9 3.5-16.3 11.4-20 19.1l-5-.6z"
            fill="#00758F"
          />
          <path
            d="M62.5 31.4c-4.1 0-7.8 1.6-10.6 4.3l-2.4-2.4C53 30 57.5 28 62.5 28c8.8 0 16.2 6.2 17.8 14.5l-3.3.9c-1.3-6.7-7.2-12-14.5-12zM80.2 46.2l3.4-.6c2.4 12.8-5.8 25-18.6 27.4-12.8 2.4-25-5.8-27.4-18.6l3.4-.6c2.1 11 12.5 18 23.5 16 11-2.1 18-12.5 15.7-23.6z"
            fill="#F29111"
          />
        </svg>
      );

    case "redis":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#1E1E1E" rx="16" width="128" height="128" />
          <path
            d="M109.8 45.4L67.1 22.8c-1.9-1-4.3-1-6.2 0L18.2 45.4c-2 1.1-3.2 3.2-3.2 5.5v34.2c0 2.3 1.2 4.4 3.2 5.5l42.7 22.6c1.9 1 4.3 1 6.2 0l42.7-22.6c2-1.1 3.2-3.2 3.2-5.5V50.9c0-2.3-1.2-4.4-3.2-5.5zM64 30.6l33.6 17.8L64 66.2 30.4 48.4 64 30.6zm-36 26.6l32 17v29.4l-32-17V57.2zm40 46.4V74.2l32-17v29.4l-32 17z"
            fill="#DC382D"
          />
        </svg>
      );

    case "openai":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#0A0A0A" rx="16" width="128" height="128" />
          <path
            d="M101.4 56.4c-.8-6.1-4.6-11.4-10.2-14.2-1.4-.7-2.9-1.2-4.4-1.5-1.5-4.7-4.6-8.7-8.9-11.2-6.5-3.8-14.6-3.8-21.1 0-2.3 1.3-4.2 3.1-5.7 5.2-4.6-2.1-9.9-2.4-14.8-.8-6.9 2.2-12.2 7.7-14.1 14.7-2.7 1.4-5 3.5-6.7 6.1-4.2 6.5-4.2 14.8 0 21.3.8 6.1 4.6 11.4 10.2 14.2 1.4.7 2.9 1.2 4.4 1.5 1.5 4.7 4.6 8.7 8.9 11.2 6.5 3.8 14.6 3.8 21.1 0 2.3-1.3 4.2-3.1 5.7-5.2 4.6 2.1 9.9 2.4 14.8.8 6.9-2.2 12.2-7.7 14.1-14.7 2.7-1.4 5-3.5 6.7-6.1 4.2-6.5 4.2-14.8 0-21.3zm-32.9 44.8c-3.6 0-6.9-1.9-8.7-5l4.8-2.8c1.1 1.9 3.1 3 5.3 3 3.3 0 6-2.7 6-6v-14l6.5 3.8v10.2c0 5.9-4.9 10.8-10.9 10.8h-3zm-27.1-11.8c-1.8-3.1-1.8-7 0-10.1l4.8 2.8c-1.1 1.9-1.1 4.3 0 6.2 1.6 2.9 5.3 3.9 8.2 2.2l12.1-7 3.2 5.6-8.8 5.1c-5.1 3-11.6 1.2-14.5-3.9l-5-8.9zm-4.7-32.2c1.8-3.1 5.1-5 8.7-5 2.2 0 4.2 1.1 5.3 3l4.8-2.8c-1.8-3.1-5.1-5-8.7-5-5.9 0-10.9 4.9-10.9 10.8v10.2l6.5-3.8v-7.4zm44.2 15.6l-12.1 7-3.2-5.6 8.8-5.1c5.1-3 11.6-1.2 14.5 3.9l5 8.9c1.8 3.1 1.8 7 0 10.1l-4.8-2.8c1.1-1.9 1.1-4.3 0-6.2-1.6-2.9-5.3-3.9-8.2-2.2zm12.9-10.5c0 5.9-4.9 10.8-10.9 10.8h-3v-7.6l6.5-3.8v-7.4c0-3.3-2.7-6-6-6-2.2 0-4.2 1.1-5.3 3l-4.8-2.8c1.8-3.1 5.1-5 8.7-5 5.9 0 10.9 4.8 10.9 10.8v8zm-29.8-14.5l-8.8 5.1c-5.1 3-6.9 9.5-3.9 14.5l5 8.9c1.8 3.1 5.1 5 8.7 5l4.8-2.8c-1.9-1.1-3-3.1-3-5.3 0-3.3 2.7-6 6-6h14.1l-3.2-5.6-25.7-13.8z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "gemini":
    case "googlegemini":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#1E2028" rx="16" width="128" height="128" />
          <path
            d="M64 16C64 42.5 42.5 64 16 64c26.5 0 48 21.5 48 48 0-26.5 21.5-48 48-48-26.5 0-48-21.5-48-48z"
            fill="url(#gemini-grad)"
          />
          <defs>
            <linearGradient id="gemini-grad" x1="16" y1="16" x2="112" y2="112" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4E8CFF" />
              <stop offset="0.5" stopColor="#B567FF" />
              <stop offset="1" stopColor="#FF7A85" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "langchain":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#002B36" rx="16" width="128" height="128" />
          <path
            d="M42 36c-8.8 0-16 7.2-16 16v24c0 8.8 7.2 16 16 16h8v-10h-8c-3.3 0-6-2.7-6-6V52c0-3.3 2.7-6 6-6h8V36h-8zm44 0h-8v10h8c3.3 0 6 2.7 6 6v24c0 3.3-2.7 6-6 6h-8v10h8c8.8 0 16-7.2 16-16V52c0-8.8-7.2-16-16-16zM46 59h36v10H46V59z"
            fill="#2BD67B"
          />
          <circle cx="64" cy="40" r="6" fill="#1C8B82" />
          <circle cx="64" cy="88" r="6" fill="#1C8B82" />
        </svg>
      );

    case "n8n":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#1F1D2B" rx="16" width="128" height="128" />
          <path
            d="M93.3 54.5c-4.2-7.3-11.8-12-20.2-12.5-6.2-.4-12.2 1.7-17 5.7l-9.6 8.1c-1.4 1.2-3.2 1.8-5 1.7-1.8-.1-3.5-.9-4.7-2.2l-6.8-7.5c-3.5-3.9-8.5-6.1-13.8-6.1-10.4 0-18.8 8.4-18.8 18.8 0 4.8 1.8 9.4 5.2 12.9l14.4 14.8c3.6 3.7 8.5 5.8 13.6 5.8 4.7 0 9.2-1.7 12.7-4.9l9.6-8.5c1.4-1.2 3.2-1.9 5-1.8 1.9.1 3.6.9 4.8 2.2l6.8 7.5c3.5 3.9 8.5 6.1 13.8 6.1 10.4 0 18.8-8.4 18.8-18.8 0-9-6.3-16.5-14.8-18.4z"
            fill="#EA4B71"
          />
          <circle cx="48" cy="64" r="5" fill="#FFA3B8" />
          <circle cx="80" cy="64" r="5" fill="#FFA3B8" />
        </svg>
      );

    case "docker":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#0B1A2C" rx="16" width="128" height="128" />
          <path
            d="M115.6 63.8c-1.8-1.2-4.5-1.5-6.8-.7-1.2.4-2.3 1.1-3.2 2-1.2-3.8-4.2-6.7-8.1-8.1-.8-.3-1.6-.4-2.5-.5l-2.4-.2c-.8-6.1-4.2-11.6-9.4-15.1-1.3-.9-2.7-1.6-4.1-2.1l-2.6-.8-.8 2.6c-2.1 6.8-.7 14.3 3.6 19.8-3.7 2.2-8.3 3.4-13.4 3.4H16.2c-2.3 0-4.2 1.9-4.2 4.2 0 16.5 8.1 31.9 21.6 41.2 9.5 6.5 21 10.2 33 10.2 27.5 0 50.4-18.1 57.6-43.8 4-1.5 7.1-4.8 8.6-8.9 1.1-2.7.9-5.7-.2-8.3zm-59-28.7h11.2v10.1H56.6V35.1zm0 13.5h11.2v10.1H56.6V48.6zm-14-13.5h11.2v10.1H42.6V35.1zm0 13.5h11.2v10.1H42.6V48.6zm-14 0h11.2v10.1H28.6V48.6zm42-13.5h11.2v10.1H70.6V35.1zm0 13.5h11.2v10.1H70.6V48.6zm14 0h11.2v10.1H84.6V48.6z"
            fill="#2496ED"
          />
        </svg>
      );

    case "linux":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#F5F5F7" rx="16" width="128" height="128" stroke="#E2E2E8" strokeWidth="2" />
          <path
            d="M64 20c-15.5 0-24 12.3-24 28.5 0 6.8 1.5 17.5 3.5 24.3-4.2 4.2-9.5 11.8-9.5 19.2 0 10.5 8.5 16 19 16 4.3 0 14-2.8 19.5-2.8s15.2 2.8 19.5 2.8c10.5 0 19-5.5 19-16 0-7.4-5.3-15-9.5-19.2 2-6.8 3.5-17.5 3.5-24.3 0-16.2-8.5-28.5-24-28.5z"
            fill="#111111"
          />
          <ellipse cx="54" cy="45" rx="4" ry="6" fill="#FFFFFF" />
          <ellipse cx="74" cy="45" rx="4" ry="6" fill="#FFFFFF" />
          <circle cx="55" cy="46" r="2.5" fill="#000000" />
          <circle cx="73" cy="46" r="2.5" fill="#000000" />
          <path d="M52 56c0 6.6 5.4 12 12 12s12-5.4 12-12H52z" fill="#FFA500" />
        </svg>
      );

    case "git":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#FFF7F5" rx="16" width="128" height="128" stroke="#FFD8CF" strokeWidth="2" />
          <path
            d="M109.4 56.6L71.4 18.6c-4.1-4.1-10.7-4.1-14.8 0L38.4 36.8l18.7 18.7c3.3-1.1 7.2-.3 9.8 2.3 2.6 2.6 3.4 6.5 2.3 9.8l18 18c3.3-1.1 7.2-.3 9.8 2.3 3.9 3.9 3.9 10.2 0 14.1s-10.2 3.9-14.1 0c-2.8-2.8-3.5-7.1-2-10.4L64.5 73.2v24.2c1.8 1.1 3.2 2.8 3.8 4.9 1.6 5.3-.9 11-6.2 12.6s-11-.9-12.6-6.2c-1.3-4.3.4-8.9 4.1-10.9V73.1c-3.7-2-5.4-6.6-4.1-10.9 1.1-3.6 4-6.3 7.7-7.2L39.1 37.4 18.6 57.9c-4.1 4.1-4.1 10.7 0 14.8l38 38c4.1 4.1 10.7 4.1 14.8 0l38-38c4.1-4.1 4.1-10.8 0-14.9z"
            fill="#F05032"
          />
        </svg>
      );

    case "nginx":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#0D2E1B" rx="16" width="128" height="128" />
          <path
            d="M64 20L25.3 42.3v43.4L64 108l38.7-22.3V42.3L64 20zm20.8 62.4c0 3.8-2.6 6.9-6.4 6.9-2 0-3.9-.9-5.2-2.4L51.8 62.1v23.4h-8.6V42.5h8.6l21.4 24.8V42.5h8.6v39.9h-5.6z"
            fill="#009639"
          />
        </svg>
      );

    case "supabase":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#131C18" rx="16" width="128" height="128" />
          <path
            d="M71.5 19.3c-1.8-2.8-5.9-2.3-7 .9L44.8 77.2c-.9 2.7 1.1 5.4 4 5.4h23.8l-16.1 26.1c-1.8 2.8 1.8 6.1 4.7 4.3l34.4-21.7 17.5-35.5c1.2-2.5-.6-5.4-3.4-5.4H83.8l12.4-25.7c1.3-2.6-.9-5.4-3.7-5.4h-21z"
            fill="#3ECF8E"
          />
        </svg>
      );

    case "flutter":
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect fill="#0A1826" rx="16" width="128" height="128" />
          <path d="M76.4 24L31.6 68.8l14.4 14.4L90.8 38.4H76.4V24z" fill="#42A5F5" />
          <path d="M60.4 74.8l16 16L46 120h14.4l22.8-22.8-8.4-8.4-14.4-14z" fill="#02569B" />
          <path d="M76.4 90.8L62 105.2 76.4 120h14.4L76.4 105.2l14.4-14.4H76.4z" fill="#0175C2" />
        </svg>
      );

    default:
      return (
        <div
          style={{ width: size, height: size }}
          className={`rounded-xl bg-charcoal-800 text-gold-400 font-mono text-xs font-bold flex items-center justify-center border border-charcoal-700 ${className}`}
        >
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
