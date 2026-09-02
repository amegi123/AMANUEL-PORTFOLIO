/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#FAF8F5",
        foreground: "#18181B",
        gold: {
          50: "#FCF9EE",
          100: "#F7F0D8",
          200: "#EFE0B2",
          300: "#E3CB85",
          400: "#D4AF37",
          500: "#C59B27",
          600: "#A87E1C",
          700: "#866117",
          800: "#6B4C17",
          900: "#593F16",
        },
        surface: {
          50: "#FFFFFF",
          100: "#F7F4EE",
          200: "#EFEBE1",
          300: "#E5E0D4",
          border: "#E5E0D5",
          borderGold: "#DFCFB0",
          borderHover: "#C59B27",
        },
        charcoal: {
          900: "#121214",
          800: "#1C1C20",
          700: "#2B2B32",
          600: "#4B4B55",
          500: "#6E6E7A",
          400: "#9898A4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        "gold-sm": "0 2px 8px -1px rgba(197, 155, 39, 0.12)",
        "gold-md": "0 8px 24px -4px rgba(197, 155, 39, 0.16)",
        "gold-lg": "0 16px 36px -6px rgba(197, 155, 39, 0.20)",
        "card-subtle": "0 4px 20px -2px rgba(24, 24, 27, 0.05)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "marquee-fast": "marquee 25s linear infinite",
        "marquee-reverse-fast": "marquee-reverse 25s linear infinite",
      },
    },
  },
  plugins: [],
};
