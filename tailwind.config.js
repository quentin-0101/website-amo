/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'amo-primary': '#ef4444', // Red 500
        'amo-primary-light': '#f87171', // Red 400
        'amo-primary-dark': '#dc2626', // Red 600
        'amo-dark': '#0f172a', /* Slate 900 for deep backgrounds */
        'amo-dark-lighter': '#1e293b', /* Slate 800 for cards */
        'amo-gold': '#f59e0b', // Amber 500
        'amo-gold-glow': '#fbbf24', // Amber 400
        'amo-accent': '#ef4444', // Red for highlights
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
