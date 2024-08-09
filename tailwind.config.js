/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'red-gradient': 'linear-gradient(to bottom, #E30613, #9A1915, #8A090B)',
        'white-90': 'rgba(255, 255, 255, 0.9)',
      },
    },
  },
  plugins: [],
}

