const { tailwindTransform } = require('postcss-lit')
console.log("Tailwind config running...")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    // TODO: Remove .js?
    files: ["./src/**/*.{ts,js,html}"],
    transform: {
      ts: tailwindTransform
    }
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
