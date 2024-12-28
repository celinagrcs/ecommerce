/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bookstore': "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/assets/bookstore.jpg')",
      },
      fontFamily: {
        'title': ['Courier Prime', 'monospace']
      }
    },
  },
  plugins: [],
}