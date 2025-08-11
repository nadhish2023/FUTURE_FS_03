import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bmw-light-blue': '#0099ff',
        'bmw-dark-blue': '#0055a4',
        'bmw-red': '#ff2d2d',
        'base-dark': '#101010',
        'component-dark': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
        'grid-scroll': 'grid-scroll 60s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'grid-scroll': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-400px -400px' },
        }
      }
    },
  },
  plugins: [],
}
export default config