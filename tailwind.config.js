/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#1f2937",
      },
      animation: {
        "animate-scroll": "scroll linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translate(0)" },
          "100%": { transform: "translate(-100vw)" },
        },
      },
    },
  },
  plugins: [],
};
