/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: "#87CEEB",
      white: "#ffffff",
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
      testShadow: "0px 0px 32px 1px rgba(199,199,199,1)",
      btnShadow: "0 2px 5px 0 rgba(213,217,217,.5)",
    },
  },
  plugins: [],
};