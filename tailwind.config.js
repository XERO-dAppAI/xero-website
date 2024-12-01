/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['var(--font-raleway)', 'sans-serif'],
        syne: ['var(--font-syne)', 'sans-serif'],
      },
      keyframes: {
        windshield: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        'windshield': 'windshield 3s linear infinite'
      }
    },
  },
  plugins: [],
} 