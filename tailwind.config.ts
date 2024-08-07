/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,stories.@(js|jsx|mjs|ts|tsx)}",
  ],

  theme: {
    extend: {
      colors: {
        "primary-base": "#006340",
        "primary-dark": "#293632"
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}