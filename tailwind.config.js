/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gold: '#dbbc65',
        greenDark: '#626f47',
        greenLight: '#798645',
      },
      fontFamily :{
        montserrat: ['Montserrat', 'sans-serif'],
        palanquin: ['Palanquin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{html,js}',
//     './components/**/*.{html,js}',
//   ],
//   theme: {
//         extend: {
//           colors:{
//             gold: '#bd9c6f',
//             greenDark: '#626f47',
//             greenLight: '#798645',
//           },
//           fontFamily :{
//             montserrat: ['Montserrat', 'sans-serif'],
//             palanquin: ['Palanquin', 'sans-serif'],
//           },
//         },
//       },
//       plugins: [],
// }
