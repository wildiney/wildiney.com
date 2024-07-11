/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'josefin': ["'Josefin Sans'", 'sans-serif']
    },
    extend: {
      colors: {
        "primary": '#fafafa',
        "secondary": '#83c3c2',
        "tertiary": '#633561',
        "quaternary": '#606F9B',
        "accent": '#613a45'
      }
    },
  },
  plugins: [],
}

