import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05080F",
          900: "#070B16",
          800: "#0B1120",
          700: "#0F172A",
          600: "#131C30",
          500: "#1B2438",
        },
        nexa: {
          teal: "#2DD4BF",
          tealDark: "#14B8A6",
          tealGlow: "#5EEAD4",
          blue: "#3B82F6",
          violet: "#8B5CF6",
          mint: "#6EE7B7",
        },
        muted: {
          DEFAULT: "#94A3B8",
          soft: "#CBD5E1",
          dim: "#64748B",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "nexa-gradient":
          "linear-gradient(135deg, #2DD4BF 0%, #3B82F6 50%, #8B5CF6 100%)",
        "nexa-gradient-soft":
          "linear-gradient(135deg, rgba(45,212,191,0.18) 0%, rgba(59,130,246,0.12) 50%, rgba(139,92,246,0.18) 100%)",
        "nexa-radial":
          "radial-gradient(60% 60% at 50% 0%, rgba(45,212,191,0.12) 0%, rgba(45,212,191,0) 60%)",
        "card-edge":
          "linear-gradient(180deg, rgba(45,212,191,0.55) 0%, rgba(59,130,246,0.35) 50%, rgba(139,92,246,0) 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(45,212,191,0.35), 0 12px 40px -8px rgba(45,212,191,0.45)",
        glowSoft: "0 8px 32px -8px rgba(45,212,191,0.35)",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(45,212,191,0.45)" },
          "50%": { boxShadow: "0 0 0 12px rgba(45,212,191,0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        pulseGlow: "pulseGlow 2.6s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
