/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Fredoka', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        menu: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}