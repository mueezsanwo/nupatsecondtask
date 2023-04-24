/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {  
          'sm': '750px',
         ...defaultTheme.screens, 
         'l': {'min': '360px', 'max': '1439px'},
        //  from a screen width of 3600px(because there is no mobile screen design) through 1280px to 1439px
        '2xl': {'min': '1440px', 'max': '1919px'},
        // from a screen width of 1439px to 1919px (from 1919px and above would take the default screen)
      },
      dropShadow: {
        '3xl': '0px 0px 100px rgba(0, 0, 0, 0.02)',
        '4xl': '0px 4px 148px rgba(0, 0, 0, 0.02)',
        
    },
}
}
