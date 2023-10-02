/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "neue-light": ["NeueLight", "sans-serif"],
        "neue-roman": ["NeueRoman", "sans-serif"],
      },
    },
  },
  plugins: [],
};
