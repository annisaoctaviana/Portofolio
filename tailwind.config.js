/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        sun:    '#FFD93D',
        rose:   '#FF6B6B',
        mint:   '#6BCB77',
        sky:    '#4D96FF',
        peach:  '#FF9A3C',
        lavender:'#C77DFF',
        cream:  '#FFFBF0',
        ink:    '#1a1a2e',
        'cream-2': '#FFF5E0',
        'cream-3': '#FFE9C8',
      },
    },
  },
  plugins: [],
}
