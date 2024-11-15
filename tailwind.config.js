module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f3f4f6',
        primary: '#4f46e5',
        secondary: '#ec4899',
        accent: '#38bdf8',
        dark: '#1f2937',
        light: '#f9fafb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        blob: "blob 7s infinite",
        gradient: 'gradient 15s ease infinite',
      },
      backgroundSize: {
        '400': '400% 400%',
      },
    },
  },
  plugins: [],
};