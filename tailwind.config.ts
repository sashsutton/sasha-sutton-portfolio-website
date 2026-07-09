import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surface + text tokens, driven by CSS variables so they can swap
        // between dark and light themes (see globals.css).
        void: "rgb(var(--void) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        raised: "rgb(var(--raised) / <alpha-value>)",
        mist: "rgb(var(--mist) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        faint: "rgb(var(--faint) / <alpha-value>)",
        hair: "var(--hair)",
        // Single accent, swapped per lens via CSS variable (see globals.css).
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Helvetica Neue", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        mega: ["clamp(3rem, 12vw, 11rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        hero: ["clamp(2.4rem, 7vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        display: ["clamp(1.9rem, 4vw, 3.25rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        content: "88rem",
        prose: "44rem",
      },
    },
  },
  plugins: [],
};

export default config;
