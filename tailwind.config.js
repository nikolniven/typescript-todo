/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { 'custom-purple': '#d93fe7' },
      fontFamily: {
        awesome: ['Font Awesome 6 Free'],
      },
      fontWeight: { 900: '900' },
    },
  },
  plugins: [],
};
