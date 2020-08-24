module.exports = {
  theme: {
    extend: {
      colors: {
        // simple-price-grid-component
        'bright-yellow': 'hsl(71, 73%, 54%)'
      }
    },
    typography: theme => ({
      default: {
        css: {
          color: theme('colors.gray.700'),
          a: {
            color: theme('colors.blue.600'),
            '&:hover': {
              color: theme('colors.blue.800')
            }
          }
        }
      }
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    // require('.src/plugins/parallax')
  ]
}
