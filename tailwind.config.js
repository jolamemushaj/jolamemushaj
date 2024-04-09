/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['PlayfairDisplay', 'serif'],
        'secondary': ['PoppinsLight', 'sans'],

        'ternary': ['Poppins', 'sans'],
      },
      colors: {
        'primary': '#DCD4CB',
        'secondary': '#F7F1E3',
        'ternary': 'rgba(220,210,208,0.61)',
        'neutral': '#F4F1F1',
      },
    },

  },
  plugins: [],
}
