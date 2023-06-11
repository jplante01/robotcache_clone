/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      purple: '#200871',
    },
    extend: {
      gridTemplateRows: {
        layout: '80px 1fr auto;',
      },
    },
  },
  plugins: [],
};
