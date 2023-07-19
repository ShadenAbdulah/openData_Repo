/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          header: ['#334155', '#0369a1', '#074871', '#fcfcfc', '#04abab'] //1&2 for header, 3 for search bar bg, 4 for main bg
        }
      },
      fontFamily: {
        tajawal: ['Tajawal']
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))'
      },
      screens: {
        'xs': {'max': '374px'},
        'small': {'max': '425px'},
        'other': {'min': '426px'},
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

