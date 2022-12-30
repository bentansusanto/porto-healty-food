/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'navMobile': '10px 0 20px 0 rgba(0, 0, 0, 0.2)',
      }
    },
    fontFamily : {
      'vollkron' : ['Vollkorn'],
      'opensans' : ['Open Sans']
    },
    colors : {
      'orange' : '#FF5B00',
      'orangemuda' :'#FFF3ED',
      'hijau' : '#57BD8B',
      'black' : '#000000',
      'white' : '#ffffff',
      'gray' : '#ACACAC'
    }
  },
  plugins: [],
}
