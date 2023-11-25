/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-color': '#1D9EFF',
        'theme-bg': '#F8FCFF',
        'small-text': '#707070',

      }
    },
  },
  plugins: [require("daisyui")],
}

