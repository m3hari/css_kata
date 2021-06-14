module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    flexGrow: {
      0: 0,
      DEFAULT: 1,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
    },
    screens: {
      'desktop': '600px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
