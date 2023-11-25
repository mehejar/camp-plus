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
        'theme-bg': '#F1F8FE',

      }
    },
  },
  plugins: [require("daisyui")],
}

