/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rotar': {
          'primary-purple': '#8B5CF6',
          'secondary-purple': '#A78BFA',
          'light-purple': '#EDE9FE',
          'lighter-purple': '#F3F4F6',
          'primary-orange': '#F97316',
          'gradient-start': '#8B5CF6',
          'gradient-end': '#EC4899',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
