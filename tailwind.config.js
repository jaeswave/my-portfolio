/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('./assets/hero.png')",
      },
      fontFamily: {
        logo: ["Rubik Wet Paint", "sans-serif"],
      },
    },
  },
  plugins: [],
};
