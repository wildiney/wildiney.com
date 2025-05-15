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
        "secondary": '#004B6B',
        "tertiary": '#633561',
        "quaternary": '#363636',
        "accent": '#613a45'
      }
    },
  },
  plugins: [],
}

