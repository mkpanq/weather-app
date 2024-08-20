/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F8F8FF",
        primary: "#7284FF",
        secondary: "#9eaaff",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
