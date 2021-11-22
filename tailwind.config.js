// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      backgroundImage: {
        'last-banner-img':
          "url('https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/offer-image/offer_bg.jpg')",
      },
      height:{
        thirtyRem:'30rem',
        thirtyFiveRem:'35rem',
        fortyRem:'40rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
