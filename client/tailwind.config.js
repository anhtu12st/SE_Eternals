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
        'brown-3': '#F6EFEF',
        'brown-4': '#704332',
        'black-0.25': '#00000040',
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
        108: '27rem',
      },
      scale: {
        300: '3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
