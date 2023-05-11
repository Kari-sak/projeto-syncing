/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx, js, ts, tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: 'Poppins, sans-serif',
        body: 'DM Sans, sans-serif',
        cite: 'Times New Roman, serif'
      },
      colors: {
        purple: {
          300: '#a152ef',
          500: '#6616d0',
          700: '#261932'
        },
        orange: {
          500: '#fca94b'
        },
        gray: {
          100: '#ffffff',
          300: '#f9f9f9',
          500: '#e4e4e4',
          700: '#d3cadd',
          900: '#767676'
        }
      }
    },
  },
  plugins: [],
}
