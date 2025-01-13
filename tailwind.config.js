/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-in': 'pulseIn 2s ease-in-out',
      },
      keyframes: {
        pulseIn: {
          '0%,100%': {
            transform: 'scale(1)',
            opacity: '0',
          },
          '12.5%,87.5%': {
            transform: 'scale(1.05)',
            opacity: '0.25',
          },
          '25%, 75%': {
            transform: 'scale(1.1)',
            opacity: '0.5',
          },
          '37.5%, 52.5%': {
            transform: 'scale(1.15)',
            opacity: '0.75',
          },
          '50%': {
            transform: 'scale(1.2)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}

