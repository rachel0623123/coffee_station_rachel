export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdf8f6',
          100: '#f5ebe0',
          200: '#e3d5ca',
          300: '#d5bdaf',
          400: '#d6ccc2',
          500: '#c5a896',
          600: '#a68a76',
          700: '#8c705f', // Roast
          800: '#6f5643', // Dark Roast
          900: '#4a3b32', // Espresso
          950: '#2b211b',
        },
        primary: '#6b4f3a',
        'soft-coffee': '#8a6b55',
        cream: '#F4F1EA',
        beige: '#E6DCCF',
        terracotta: '#D1603D',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",

        // Custom font sizes
        display: "48px",
        subtitle: "22px",
      },
    },
  },
  plugins: [],
}