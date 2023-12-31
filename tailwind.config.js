/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        "sm":"480px",
        "smm":"580px"
      },
      spacing:{
        "big":"45rem"
      }
    },
    fontFamily:{
      nunito:['Nunito' , 'sans-serif']
    }
  },
  plugins: [],
}

