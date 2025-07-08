/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1280px',
        '3xl': '1920px',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        smartani: {
          "primary": "#096f26",
          "secondary": "#131a46",
          "accent": "#d8ec66",
          "neutral": "#000000",
          "base-100": "#e6f9fa",
          "info": "#ffb903",
          "success": "#647b54",
          "warning": "#fce22c",
          "error": "#ec8aca",
        },
      },
    ],
  },
}
