/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FDFBF7',
          surface: '#FFFFFF',
          border: '#EAE3D2',
          text: '#0F172A',
          muted: '#64748B',
          accent: '#D4AF37',
          accent2: '#8C701B',
        }
      },
      keyframes: {

        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.2) rotate(90deg)' },
        },
        gold_sheen: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
        
      },
      animation: {

        'diamond-sparkle': 'sparkle 2.5s ease-in-out infinite',
        'gold-sheen': 'gold_sheen 4s linear infinite',
        
      }
    },
  },
  plugins: [],
}
