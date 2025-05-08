/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins', 'sans-serif'], // Example font
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        cosima: ["Cosima Ultra Light", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
        krona: ['Krona One', 'sans-serif'], // Add Krona One font
        anton: ['Anton', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        sfpro: ['"SF Pro Display"', 'sans-serif'], // ✅ Added SF Pro Display
      },
      fontWeight: {
        light: '100',
        normal: '400',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
}