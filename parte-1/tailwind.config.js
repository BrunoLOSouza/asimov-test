/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B9FF66',
        dark: '#191A23',
        gray: {
          light: '#F3F3F3'
        }
      },
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '45px',
      }
    },
  },
  plugins: [],
}
