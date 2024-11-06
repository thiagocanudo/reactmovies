/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'brand-dark': '#00030A',
        'brand-blue-dark': '#000E2A',
        'brand-blue-light': '#00B1E9',
        'brand-yellow': '#FAFF00',
      },

      width: {
        'container-site' : '1140px'
      }

    },
  },
  plugins: [],
}