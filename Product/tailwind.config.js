/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: { center: true },
    colors: {
      primary: "#0cb8b6",
      secondary: "#02646f",
      text: "#666",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      red: colors.red,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
    },
    extend: {
      boxShadow: {
        "3xl": "0px 5px 10px 0px rgba(106,106,106,0.15)",
      },
      keyframes: {
        spark: {
          "0%": { maxWidth: "0%" },
          "100%": { maxWidth: "100%" },
        },
        rotateAnimation: {
          "0%": { transform: "rotateX(-20deg) rotateY(0deg)" },
          "75%": { transform: "rotateX(-20deg) rotateY(360deg)" },
          "100%": { transform: "rotateX(-20deg) rotateY(360deg)" },
        },
        videoAnimaion: {
          "0%": { transform: "scale(1)", opacity: "1.00" },
          "50%:": { transform: "scale(1.25)", opacity: "0.75" },
          "100%": { transform: "scale(1.5)", opacity: "0.00" },
        },
      },
      animation: {
        spark: "spark 1.25s linear infinite",
        rotateAnimation: "rotateAnimation 6s linear infinite",
        videoAnimaion: "videoAnimaion 2s linear infinite",
      },
    },
  },
  plugins: [],
};
