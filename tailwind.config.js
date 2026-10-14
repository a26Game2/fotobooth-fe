/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#111111', wine: '#9d1018', cream: '#f5f2ee' },
      fontFamily: { display: ['Playfair Display', 'serif'], sans: ['Manrope', 'sans-serif'] },
      boxShadow: { card: '0 16px 50px rgba(17,17,17,.10)' }
    }
  },
  plugins: []
}
