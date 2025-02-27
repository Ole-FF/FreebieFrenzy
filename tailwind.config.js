/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          teal: '#008080',
          orange: '#FF6B35',
          yellow: '#FFB800',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};