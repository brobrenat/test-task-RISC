module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#1E1E1E', 
      },
      fontFamily: {
        'sans-serif': ['Helvetica Neue', 'Arial', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
        'bebask': ['Bebas Neue', 'cursive'],
      },
      screens: {
        'sm': '300px', 
        'md': '768px',
        'lg': '1024px',
      },
        maxWidth: {
        '2xl': '42rem', 
        'banner': '48rem', 
      },
    },
  },
  plugins: [],
}