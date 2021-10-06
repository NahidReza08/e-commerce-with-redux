module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
      screens: {
        'xs': '365px',
      },
      fontSize: {
        'xxs': '.5rem',
        'vh-1':'1.6vh',
        'vw-1':'2.1vw',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
