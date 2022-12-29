/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily : {
      'vollkron' : ['Vollkorn'],
      'opensans' : ['Open Sans']
    },
    colors : {
      'orange' : '#FF5B00',
      'hijau' : '#57BD8B'
    }
  },
  plugins: [],
}
