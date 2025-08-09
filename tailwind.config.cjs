/**** Tailwind Config ****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        accent: {
          teal: "#14b8a6",
          neon: "#00ffc6",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg,#0f172a 0%,#062b36 40%,#052e4d 70%,#021f2d 100%)",
      },
    },
  },
  plugins: [],
};
