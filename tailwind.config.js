/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { 
        'sm': {'min': '750px', 'max': '1280px' },  
        'lg': {'min': '1280px', 'max': '1440px'}, 
        '2xl': {'min': '1440px', 'max': '1700px'},
      },
      dropShadow: {
        '3xl': '0px 0px 100px rgba(0, 0, 0, 0.02)',
        '4xl': '0px 4px 148px rgba(0, 0, 0, 0.02)',
        
    },
  },
  plugins: [],
}
}
