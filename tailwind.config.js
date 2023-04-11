/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      container: "1520px",
      contentContainer: "1280px",
    },
    colors: {
      grey: "rgba(39,40,42,1)",
      blue: "#87CEEB",
      white: "#ffffff",
      "light-grey": "#A1A7AD",
    },
    screens: {
      xs: "320px",
      sm: "375px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "960px",
      lgl: "1024px",
      xl: "1280px",
    },
    extend: {
      boxShadow: {
        btnShadow: "0 2px 5px 0 rgba(213,217,217,.5)",
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
