/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A98D4',
          hover: '#0886BB',
          active: '#0675A4',
        },
        accent: {
          DEFAULT: '#F8FAFC',
          hover: '#E6F3F9',
          active: '#DCEFF6',
        },
      }
    },
  },
  plugins: [],
}

