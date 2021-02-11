const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      "serif":['Montserrat', 'Georgia']
    },screens: {
      'sm': '700px',
      // => @media (min-width: 640px) { ... }
      'random': '800px',
      //trying
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
       
    extend: {
      gridTemplateRows:{
        'layout': '30% 100px;'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [
  ],
  
    
    

}
