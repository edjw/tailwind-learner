module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        "full": "100%"
      },
      gridTemplateRows: {
        "auto-1-auto": "auto 1fr auto"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
