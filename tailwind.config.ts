import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DC2626",
        secondary: "#09090B",
        accent: "#F59E0B",
        surface: "#F7F7F8"
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 70px rgba(220, 38, 38, 0.25)",
        amber: "0 20px 55px rgba(245, 158, 11, 0.22)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        shine: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "0.8" },
          "100%": { transform: "scale(1.5)", opacity: "0" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        shine: "shine 3s ease-in-out infinite",
        pulseRing: "pulseRing 1.8s ease-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
