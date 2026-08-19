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
      },
      animation: {
        filmstrip: "filmstrip 55s linear infinite",
        "cinematic-still": "cinematic-still 32s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
