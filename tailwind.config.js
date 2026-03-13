/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // scans all html/js in src
  theme: {
    extend: {
      colors: {
        brandPrimary: '#1E40AF', // example brand color
        brandSecondary: '#FACC15'
      },
      fontFamily: {
        brand: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}