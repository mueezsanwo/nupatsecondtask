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
         'l': {'min': '1280px', 'max': '1439px'},
        '2xl': {'min': '1440px', 'max': '1700px'},
      },
      dropShadow: {
        '3xl': '0px 0px 100px rgba(0, 0, 0, 0.02)',
        '4xl': '0px 4px 148px rgba(0, 0, 0, 0.02)',
        
    },
}
}
