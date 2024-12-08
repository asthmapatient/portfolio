/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["Regular"],
      },
      colors: {
        grey: "#222222",
        orange: "#D3E97A",
      },
    },
  },
  plugins: [],
};
