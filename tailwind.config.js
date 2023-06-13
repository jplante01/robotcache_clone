/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      default: ['Montserrat', 'sans-serif'],
    },
    colors: {
      white: '#FFF',
      black: '#000',
      purple: '#200871',
      gold: '#fdc038',
    },
    extend: {
      gridTemplateRows: {
        layout: '80px 1fr auto;',
      },
    },
  },
  plugins: [],
};
