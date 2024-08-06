/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1': '#204b5e',
        'color2': '#426b65',
        'color3': '#baab6a',
        'color4': '#fbea80',
        'color5': '#fdfac7',
        'color-block': '#f6f5f4',
        'color-text': '#1d1e20',
      },
      screens: {
        'sm-max': { 'max': '710px' },
      },
    },
  },
  plugins: [],
}