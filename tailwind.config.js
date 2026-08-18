/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bone: {
          50: '#FBFAF6',
          100: '#F5F2EA',
          200: '#EBE5D6',
          300: '#DDD4BE',
        },
        forest: {
          50: '#F0F4F1',
          100: '#D9E3DC',
          200: '#AFC4B5',
          300: '#7A9C85',
          400: '#4A7558',
          500: '#2D5739',
          600: '#1F4129',
          700: '#173321',
          800: '#102517',
          900: '#0A1A0F',
          950: '#050F08',
        },
        brass: {
          50: '#FBF6EA',
          100: '#F5EAC8',
          200: '#EBD49B',
          300: '#DBB866',
          400: '#C89A3E',
          500: '#A87D2A',
          600: '#876322',
          700: '#6B4F20',
          800: '#54401F',
          900: '#46361E',
        },
        charcoal: {
          50: '#F6F6F5',
          100: '#E8E8E6',
          200: '#C9C9C6',
          300: '#9E9E9A',
          400: '#6F6F6B',
          500: '#4D4D49',
          600: '#3A3A36',
          700: '#2A2A27',
          800: '#1C1C1A',
          900: '#111110',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.3em',
        mega: '0.45em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 1s ease forwards',
      },
    },
  },
  plugins: [],
};
