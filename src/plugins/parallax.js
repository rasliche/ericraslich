// Parallax Plugin
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addComponents }) {
  const newParallaxComponents = {
    '.prlx': {
      'perspective': '1px',
      'overflow-x': 'hidden',
      'overflow-y': 'auto',
      'perspective-origin-x': '100%',
      'scroll-behavior': 'smooth', 
    },
    'prlx-group': {
      position: 'relative',
      transformStyle: 'preserve-3d',
    },
    '.prlx-layer': {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
    },
    '.prlx-base': {
      transform: 'translateZ(0)',
      transformOriginX: '100%',
    },
    '.prlx-back': {
      // scale = 1 + (translateZ * -1) / perspective
      transform: 'translateZ(-1px) scale(2)',
      transformOriginX: '100%',
    },
    '.prlx-back-deep': {
      // scale = 1 + (translateZ * -1) / perspective
      transform: 'translateZ(-3px) scale(4)',
      transformOriginX: '100%',
    },
    '.prlx-back-deeper': {
      // scale = 1 + (translateZ * -1) / perspective
      transform: 'translateZ(-7px) scale(8)',
      transformOriginX: '100%',
    },
    '.prlx-back-deepest': {
      // scale = 1 + (translateZ * -1) / perspective
      transform: 'translateZ(-15px) scale(16)',
      transformOriginX: '100%',
    },
    '.prlx-offset-25': {
      padding: '25vh 0'
    },
    '.prlx-offset-50': {
      padding: '50vh 0'
    },
    '.prlx-offset-100': {
      padding: '100vh 0'
    },
    '.prlx-offset-200': {
      padding: '200vh 0'
    },
  }

  addComponents(newParallaxComponents)
})

// // ./plugins/gradients.js
// const _ = require('lodash')
// const plugin = require('tailwindcss/plugin')

// module.exports = plugin(function({ addUtilities, e, theme, variants }) {
//   const gradients = theme('gradients', {})
//   const gradientVariants = variants('gradients', [])

//   const utilities = _.map(gradients, ([start, end], name) => ({
//     [`.bg-gradient-${e(name)}`]: {
//       backgroundImage: `linear-gradient(to right, ${start}, ${end})`
//     }
//   }))

//   addUtilities(utilities, gradientVariants)
// })