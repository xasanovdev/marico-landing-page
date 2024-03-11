/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    maxWidth: {
      large: "1640px",
    },
    extend: {
      colors: {
        primary: "#326CF9",
        secondary: "#707070",
      },
    },
  },
  plugins: [],
};
