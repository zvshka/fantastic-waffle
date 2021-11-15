const {asColor} = require("tailwindcss/lib/util/pluginUtils");
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  mode: "jit",
  theme: {
    colors: {
      primary: "#303952",
      secondary: "#546de5",
      white: "#fff"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
