/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        'neon-pink': '#ff69b4',
        'soft-pink': '#ffd1dc',
        'deep-pink': '#ff1493',
      },
      animation: {
        'pulse-soft': 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
};