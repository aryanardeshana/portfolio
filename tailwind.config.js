/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06B6D4",
        "primary-hover": "#0891B2",

        secondary: "#38BDF8",

        background: "#020617",
        surface: "#0F172A",
        card: "#1E293B",

        border: "#334155",

        text: {
          DEFAULT: "#FFFFFF",
          secondary: "#CBD5E1",
          muted: "#94A3B8",
        },

        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
      },

      borderRadius: {
        md: "12px",
        lg: "16px",
        xl: "24px",
      },

      boxShadow: {
        card: "0 8px 20px rgba(0,0,0,0.20)",
        glow: "0 0 25px rgba(6,182,212,0.35)",
      },
    },
  },
  plugins: [],
};