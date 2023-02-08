/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      clash_medium: "clash medium",
      syne: "syne",
      clash_semibold: "clash semibold",
      satoshi_light: "satoshi medium",
    },
    screens: {
      xl: { max: "1850px" },
      l: { max: "1600px" },
    },
  },
  plugins: [],
};
