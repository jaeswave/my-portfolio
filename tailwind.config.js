export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo:    ["Rubik Wet Paint", "sans-serif"],
        display: ["Syne", "sans-serif"],
        mono:    ["Space Mono", "monospace"],
        body:    ["DM Sans", "sans-serif"],
      },
      colors: {
        cyber: { cyan:"#00d4ff", green:"#00ff88", orange:"#ff6b35" },
      },
      backgroundImage: {
        heroBg: "url('/src/assets/hero.png')",
      },
    },
  },
  plugins: [],
};
