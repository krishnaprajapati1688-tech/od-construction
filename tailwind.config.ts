import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0A1628',
          50: '#EBF0F7',
          100: '#D3DEEC',
          200: '#A7BDDA',
          300: '#7B9CC7',
          400: '#4F7BB5',
          500: '#2C5590',
          600: '#1C3A66',
          700: '#132846',
          800: '#0F2138',
          900: '#0A1628',
          950: '#060D18',
        },
        gold: {
          DEFAULT: '#C9A24B',
          50: '#FBF6E9',
          100: '#F5E9C8',
          200: '#EBD498',
          300: '#DFBE6A',
          400: '#D4B155',
          500: '#C9A24B',
          600: '#AD8635',
          700: '#8A6A29',
          800: '#664D1E',
          900: '#453413',
        },
        concrete: {
          DEFAULT: '#8A8D91',
          50: '#F7F7F7',
          100: '#EDEDED',
          200: '#D9DADB',
          300: '#C0C2C4',
          400: '#A6A9AC',
          500: '#8A8D91',
          600: '#6E7175',
          700: '#55575A',
          800: '#3A3C3E',
          900: '#232425',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'blueprint-grid':
          'linear-gradient(rgba(201,162,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,75,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        rise: 'rise 1.2s cubic-bezier(0.16,1,0.3,1) forwards',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
