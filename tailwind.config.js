/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbg: '#0D0D0D',
        primary: '#FFD2A4',
        btnTxtColor: '#1C1D28',
      },
      maxWidth: {
        'container': '1280px',
      },
      fontFamily: {
        robotoCondance: "Roboto Condensed, sans-serif",

      },
    },
  },
  plugins: [],
}
