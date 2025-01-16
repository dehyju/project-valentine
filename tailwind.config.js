/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-in': 'pulseIn 4s ease-in-out',
      },
      keyframes: {
        pulseIn: {
          '0%': {
            transform: 'scale(1)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.2)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1.4)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}

