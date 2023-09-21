/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,css,scss}',
  ],
  darkMode: 'class', // 'media' is the default, change to 'class' if you want to use dark mode in with class names
  theme: {
    extend: {
      fontSize: {
        xxs: '0.7rem',
      },
      colors: {
        transparent: 'transparent',
        neutral: {
          100: '#141414',
          200: '#292929',
          300: '#3B3B3B',
          400: '#595959',
          500: '#B4B4B4',
          600: '#E2E2E1',
          700: '#F6F6F6',
          800: '#FFFFFF',
        },
        primary: {
          200: '#b84040',
          300: '#007aa6',
          800: '#EAFB06',
          500: '#F8FF99',
        },
        secondary: {
          800: '#0809EC',
          500: '#8A8BFF',
        },
        warning: {
          800: '#EBA013',
          500: '#FFCF76',
        },
        error: {
          800: '#F35858',
          500: '#FF9292',
        },
        white: '#fff',
        black: '#000',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
