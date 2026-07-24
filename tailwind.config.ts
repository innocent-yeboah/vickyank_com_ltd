import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Industrial corporate palette — Fortune 500 industrial stack
        navy: {
          DEFAULT: "#1E3A5F",
          dark: "#14293F",
          darker: "#0C1B2A",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          light: "#2A2A2A",
        },
        base: {
          DEFAULT: "#111111",
          deep: "#0E0E0E",
          panel: "#151515",
        },
        gold: {
          DEFAULT: "#FFC107",
          dark: "#E0A800",
          soft: "#FFD54F",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Montserrat", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        // Very light left scrim — hero photo stays highly visible
        "hero-gradient":
          "linear-gradient(105deg, rgba(17,17,17,0.40) 0%, rgba(17,17,17,0.18) 45%, rgba(17,17,17,0.05) 100%)",
        "section-gradient":
          "linear-gradient(135deg, #111111 0%, #1A1A1A 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
