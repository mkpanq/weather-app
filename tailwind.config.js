const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FBD477",
        secondary: "#FCD59C",
        accent: "#D36D58",
        secondAccent: "#75635E",
        whiteish: "#FEFEFE",
        title: "#333333",
        subtitle: "#6e6e6e",
        greyish: "#cbd5e1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), addDynamicIconSelectors()],
};
