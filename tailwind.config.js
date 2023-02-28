/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        xl: "1200px",
      },
    },
    fontFamily: {
      special: ["Playfair Display", "serif"],
    },
  },
  plugins: [],
};
