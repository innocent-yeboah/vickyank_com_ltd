import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1A1A2E",
          dark: "#12121F",
          darker: "#0D0D18",
          light: "#252542",
          ink: "#151528",
          cover: "#000c24",
        },
        "navy-ink": "#151528",
        "navy-cover": "#000c24",
        charcoal: {
          DEFAULT: "#2D2D2D",
          light: "#3D3D3D",
        },
        base: {
          DEFAULT: "#1A1A2E",
          deep: "#12121F",
          panel: "#22223A",
        },
        gold: {
          DEFAULT: "#D4AF37",
          dark: "#B8942D",
          soft: "#E8C95A",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Playfair Display", "Georgia", "serif"],
        lockup: ["var(--font-lockup)", "Libre Baskerville", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(105deg, rgba(26,26,46,0.55) 0%, rgba(26,26,46,0.28) 45%, rgba(26,26,46,0.08) 100%)",
        "section-gradient":
          "linear-gradient(135deg, #1A1A2E 0%, #12121F 100%)",
      },
      keyframes: {
        filmstrip: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "cinematic-still": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.1)" },
        },
        "construction-parade": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "construction-bob": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" },
        },
        "construction-hop": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-5px) rotate(-4deg)" },
        },
        "construction-float": {
          "0%, 100%": { transform: "translateY(0) rotate(-6deg)" },
          "50%": { transform: "translateY(-6px) rotate(6deg)" },
        },
        "construction-wave": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-18deg)" },
        },
        "construction-arm": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-12deg)" },
        },
        "construction-legs": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-1px)" },
          "75%": { transform: "translateX(1px)" },
        },
      },
      animation: {
        filmstrip: "filmstrip 55s linear infinite",
        "cinematic-still": "cinematic-still 32s ease-out forwards",
        "construction-parade": "construction-parade 18s linear infinite",
        "construction-bob": "construction-bob 0.7s ease-in-out infinite",
        "construction-bob-delay":
          "construction-bob 0.7s ease-in-out 0.35s infinite",
        "construction-hop": "construction-hop 0.9s ease-in-out infinite",
        "construction-hop-delay":
          "construction-hop 0.9s ease-in-out 0.45s infinite",
        "construction-float": "construction-float 1.4s ease-in-out infinite",
        "construction-wave": "construction-wave 0.8s ease-in-out infinite",
        "construction-arm":
          "construction-arm 1.6s ease-in-out infinite",
        "construction-legs": "construction-legs 0.45s ease-in-out infinite",
        "construction-roll": "construction-bob 0.55s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
