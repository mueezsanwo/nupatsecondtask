/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {  
          's': '50px',
         ...defaultTheme.screens, 
         'ss': {'min': '51px', 'max': '767px'},
         'm': {'min': '768px', 'max': '1024px'},
         'l': {'min': '1025px', 'max': '1439px'},
        //  from a screen width of 3600px(because there is no mobile screen design) through 1280px to 1439px
        '2xl': {'min': '1440px', 'max': '1700px'},
        // from a screen width of 1439px to 1700px (from 1700px and above would take the default screen)
      },
      dropShadow: {
        '3xl': '0px 0px 100px rgba(0, 0, 0, 0.02)',
        '4xl': '0px 4px 148px rgba(0, 0, 0, 0.02)',
        
    },
}
}
