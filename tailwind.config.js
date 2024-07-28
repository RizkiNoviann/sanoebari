/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"], 
  theme: {
    extend: {
      height:{
        '1000': '100%',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}