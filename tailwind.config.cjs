/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: "Poppins",
    },
    extend: {
      colors: {
        primary: "#E96479",
        secondary: "#865DFF",
        fourth: "#6C00FF",
        green: "#03C988",
        darkcolor: "#332C39",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
