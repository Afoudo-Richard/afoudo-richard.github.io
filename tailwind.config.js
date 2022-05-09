module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'cursive'],
        'dancingscript': ['Dancing Script'],
      },

      colors: {
        'primary': { DEFAULT: '#353A93', '50': '#A2A5DE', '100': '#9397D8', '200': '#757ACD', '300': '#575DC2', '400': '#4046B1', '500': '#353A93', '600': '#262A6A', '700': '#171941', '800': '#080917', '900': '#000000' },

      }
    },
  },
  plugins: [],
}