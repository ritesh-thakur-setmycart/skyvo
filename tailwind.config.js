/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cobalt: '#0047FF',
        indigo: '#4F46E5',
        amber: '#F59E0B',
        'text-primary': '#0F172A', // Slate 900
        'text-muted': '#475569',   // Slate 600
      },
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
