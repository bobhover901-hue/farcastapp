/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        backgroundDark: "#000000",
        primary: "#6A3CFF",
        primaryDark: "#5b2ee0",
        surface: "#f3f4f6",
        surfaceDark: "#111111",
        text: "#1e2329",
        textDark: "#ffffff",
        muted: "#474d57",
        mutedDark: "#9ca3af",
        border: "#e5e7eb",
        borderDark: "#2d3035"
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      animation: { 'fade-in': 'fadeIn 0.6s ease-out' },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}