/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#525EE3",
        back: "#252833",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
