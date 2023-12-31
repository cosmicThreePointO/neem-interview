/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neem-turquoise": "#70C4BB",
      },
      fontFamily: {
        rubik: ["var(--font-rubik)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
