/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Firmenaktie: Dunkelgrün + Champagner + Kupfer — professionell, seriös, kapitalkräftig
        ink:    { DEFAULT: '#0f1a12', 2: '#162019', 3: '#1e2e21' },
        fern:   { DEFAULT: '#2d5a3d', lt: '#3d7a52', dark: '#1e3d29' },
        champ:  { DEFAULT: '#d4b896', lt: '#e8d5bc', dark: '#b89870' },
        copper: { DEFAULT: '#b87333', lt: '#d4944a' },
        mist:   { DEFAULT: '#8fa89a' },
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        body:    ['system-ui', '-apple-system', 'sans-serif'],
        mono:    ['ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
