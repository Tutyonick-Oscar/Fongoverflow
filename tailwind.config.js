/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#fcfffc",
      grey: "rgba(128, 128, 128, 0.897)",
      blue: "#2c3e50",
      gray: "gray",
      blue_f: " #2d3a3a64",
    },
    backgroundImage: {
      linear: "linear-gradient(#2c3e50f9, #2d3a3a, #2c3e50)",
    },
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
