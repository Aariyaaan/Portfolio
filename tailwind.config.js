/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#060810",
        surface: "#0b0f19",
        surface2: "#111726",
        accent: "#c8a96e",
        accentMuted: "rgba(200, 169, 110, 0.15)",
        muted: "#8f9bb3",
        muted2: "#6b7791",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
