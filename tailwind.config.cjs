/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#6C63FF',   
        },
        gray: {
          100: '#9C9AB6',
        },
    },
    fontFamily: {
      sans: 'Roboto, sans-serif',
    },  
  },
  plugins: [],
}
}