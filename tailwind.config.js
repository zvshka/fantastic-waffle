module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#303952",
        secondary: "#546de5",
        white: "#fff"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
