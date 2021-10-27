module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'app': "url('/src/assets/img/background.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
