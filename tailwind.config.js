/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2C5530',
        'navy-blue': '#1B4B5A',
        'cream': '#F5F1E8',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'soft': '12px',
        'softer': '16px',
      },
    },
  },
  plugins: [],
}

