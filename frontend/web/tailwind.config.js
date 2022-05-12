const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}