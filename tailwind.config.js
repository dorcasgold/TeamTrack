/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepblue: '#222131',
        brightblue: '#6254ff',
        lightblue: '#39394b'
      },
    },
  },
  plugins: [],
}