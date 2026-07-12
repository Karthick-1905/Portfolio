import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        coral: "#FF5B4D",
        amber: "#FFD166",
        ink: "#111111"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glass: "0 26px 70px rgba(68, 20, 12, 0.22)",
        glow: "0 0 44px rgba(255, 209, 102, 0.34)"
      }
    }
  },
  plugins: []
};

export default config;
