/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'deer': "url('./assets/background.jpg')",
      }
    },
  },
  plugins: [],
}
