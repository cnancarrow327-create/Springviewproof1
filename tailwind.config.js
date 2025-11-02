/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['"Inter Tight"', 'Inter', '"Segoe UI"', 'Roboto', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [],
}
