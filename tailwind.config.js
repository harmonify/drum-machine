const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'app': "url('/src/assets/img/background.jpg')",
      },
      colors: {
        'cyan': colors.cyan,
      },
      fontFamily: {
        'ds': ['"Dancing Script"', 'cursive'],
      },
      minWidth: {
        '40': '10em',
      },
      minHeight: {
        '8': '2em',
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
