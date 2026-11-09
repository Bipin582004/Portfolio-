/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Colours come from CSS variables in src/styles/globals.css (design tokens).
      colors: {
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        charcoal: "rgb(var(--c-charcoal) / <alpha-value>)",
        graphite: "rgb(var(--c-graphite) / <alpha-value>)",
        ember: "rgb(var(--c-ember) / <alpha-value>)",
        vermilion: "rgb(var(--c-vermilion) / <alpha-value>)",
        terracotta: "rgb(var(--c-terracotta) / <alpha-value>)",
        paper: "rgb(var(--c-paper) / <alpha-value>)",
        ash: "rgb(var(--c-ash) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
