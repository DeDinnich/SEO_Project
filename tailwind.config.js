/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaries:{
          neutral: "#B7DCCC",
          light: "#DEEAC8",
        },
        secondaries:{
          neutral: "#E79197",
          light: "#ECACA9",
        },
        neutral: "#F8D6BA",
      }
    },
  },
  plugins: [],
}

