import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/experience/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        blink: "blink 2s ease infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(0.5)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
