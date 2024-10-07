/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Specify where to look for classes
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          200: '#FAF3E0',  // Custom beige color
        },
      },
    },
  },
  plugins: [],
};
