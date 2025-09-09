import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        raleway: ["var(--font-quicksand)"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        "league-spartan": ["var(--font-league-spartan)"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
  // @ts-ignore
  daisyui: {
    // keep DaisyUI from setting body bg/text colors
    base: false,
    // use only your theme; avoids unwanted defaults
    themes: [
      {
        kavish: {
          // keep backgrounds transparent by default
          "primary": "#60a5fa",
          "secondary": "#a78bfa",
          "accent": "#f472b6",
          "neutral": "#1f2937",
          "info": "#38bdf8",
          "success": "#4ade80",
          "warning": "#fbbf24",
          "error": "#f87171",
          // these two control component backgrounds/containers
          "base-100": "transparent",
          "base-200": "transparent",
          "base-300": "transparent",
        },
      },
    ],
    darkTheme: "kavish",
    styled: true,
    utils: true,
    logs: true,
  }
};

export default config;