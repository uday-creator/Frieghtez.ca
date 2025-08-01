/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-medium": "spin 6s linear infinite",
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "translateX(-50%) rotate(0deg)" },
          "100%": { transform: "translateX(-50%) rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
