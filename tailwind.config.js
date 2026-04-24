/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F2EC',
        'warm-white': '#FAF8F4',
        blackish: '#1A1A18',
        'dark-gray': '#2C2C2A',
        'mid-gray': '#7A7A76',
        'light-gray': '#D8D5CE',
        'accent-taupe': '#B5A99A',
        'accent-brown': '#8C7B6A',
        'card-bg': '#EDEAE3',
      },
    },
  },
  plugins: [],
};
