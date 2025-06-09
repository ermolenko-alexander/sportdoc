/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tg-theme-bg': 'var(--tg-theme-bg-color, #ffffff)',
        'tg-theme-text': 'var(--tg-theme-text-color, #000000)',
        'tg-theme-hint': 'var(--tg-theme-hint-color, #999999)',
        'tg-theme-link': 'var(--tg-theme-link-color, #2481cc)',
        'tg-theme-button': 'var(--tg-theme-button-color, #2481cc)',
        'tg-theme-button-text': 'var(--tg-theme-button-text-color, #ffffff)',
      },
    },
  },
  plugins: [],
} 