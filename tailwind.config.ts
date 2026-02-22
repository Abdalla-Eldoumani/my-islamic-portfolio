import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0F1C",
          secondary: "#111827",
          tertiary: "#1A2235",
        },
        gold: {
          primary: "#D4A843",
          light: "#E8C97A",
          muted: "#8B7A3E",
          dark: "#5C4E2A",
        },
        text: {
          primary: "#F1EDE4",
          secondary: "#9CA3AF",
          muted: "#6B7280",
        },
        accent: {
          teal: "#2DD4BF",
          emerald: "#059669",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        body: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        arabic: ["var(--font-amiri)", "Amiri", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2" }],
        "display-sm": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.3" }],
      },
      spacing: {
        "section": "6rem",
        "section-sm": "4rem",
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slow-spin": "spin 60s linear infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4A843 0%, #E8C97A 50%, #D4A843 100%)",
        "dark-gradient": "linear-gradient(180deg, #0A0F1C 0%, #111827 100%)",
        "card-gradient": "linear-gradient(145deg, rgba(26, 34, 53, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)",
      },
      boxShadow: {
        "card": "0 4px 24px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)",
        "gold-glow": "0 0 30px rgba(212, 168, 67, 0.15)",
        "gold-glow-strong": "0 0 50px rgba(212, 168, 67, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
