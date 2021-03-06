// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      gridTemplateRows: {
        hero: "1fr",
        "hero-sm": "repeat(2, 60px)",
      },
      fontFamily: {
        sans: ["SF UI Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
