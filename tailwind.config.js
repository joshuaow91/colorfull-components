/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGreen: "#e8f3d6",
        darkGreen: "#425f57",
        lightBeige: "#fff3e2",
        coral: "#f28181",
        offWhite: "#fcfcf9",
      },
      fontFamily: {
        righteous: ["Righteous"],
        sans: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      keyframes: {
        "bg-position": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "bg-position": "bg-position 5s ease infinite",
      },
      backgroundImage: {
        "colorfull-gradient":
          "linear-gradient(90deg, #F56F6C, #FDB769, #FDE086, #A0D8A1)",
        "colorfull-gradient-logo":
          "linear-gradient(90deg, rgba(245, 111, 108, 0.8), rgba(253, 183, 105, 0.8), rgba(253, 224, 134, 0.8), rgba(160, 216, 161, 0.8))",
      },
    },
  },

  plugins: [],
};
