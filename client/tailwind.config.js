module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'white-1': '#EEEDF3',
        'white-2': '#BBB8C4',
        'white-3': '#5F5C5E',
        'brown-1': '#27110C',
        'brown-2': '#A7775C',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
