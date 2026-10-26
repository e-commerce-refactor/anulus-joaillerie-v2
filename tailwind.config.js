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
          bg: '#0F0D15',
          surface: '#1A1724',
          border: '#2E283E',
          text: '#FBF8F3',
          muted: '#A89FA8',
          accent: '#E0A96D',
          accent2: '#B07D4C',
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
