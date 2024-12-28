/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "popin": "Poppins , sans-serif",
        'opsans': "Open Sans, sans-serif"
      },
      screens: {
        "mb": { min: "0", max: "1024px" }
      },
      colors: {
        "pink": "hsl(322, 100%, 66%)",
        "light_pink": "hsl(321, 100%, 78%)",
        "light_red": "hsl(0, 100%, 63%)",
        "very_dark_cyan": "hsl(192, 100%, 9%)",
        "very_pale_blue": "hsl(207, 100%, 98%)"
      }
    },
  },
  plugins: [],
}

