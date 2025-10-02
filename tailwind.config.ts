
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        "2xs": "250px",
        xs: "300px",
        sm: "450px",
        md: "640px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#f59b00",
          "secondary": "#F0AC01",
          ".background-base": {
            "background-color": "#fdf9e6",
          }
        }
      }
    ]
  }
}