/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"], 
  theme: {
    extend: {
      height:{
        '1000': '32rem',
      },
      backgroundSize:{
        'right-ovr' : '50% 100%',
        'left-ovr' : '-50% 100%',
      },  
    },
    fontFamily:{
      'headline': "DM Serif Display",
      'body' : '"Poppins", sans-serif;'
    },  
  },
  plugins: [
    require('flowbite/plugin')
  ],
}