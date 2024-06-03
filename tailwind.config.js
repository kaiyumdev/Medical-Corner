/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#00a6fb',
      },
      colors: {
        customLightBlue: '#e0f5ff',
      },
      animation: {
        fadeInRight: 'fadeInRight 1s ease-in-out',
      },
      keyframes: {
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [  require('daisyui'),],
}

