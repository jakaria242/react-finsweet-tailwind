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
        subHeadingColor: '#161722',
        relevantColor: '#FFF5EB',
        watchBg: '#F5F2F0',
      },
      maxWidth: {
        'container': '1280px',
      },
      fontFamily: {
        robotoCondance: "Roboto Condensed, sans-serif",
      },
      backgroundImage: {
        'homeBanner': "url('assets/images/homeBanner.jpg')",
        overly: 'linear-gradient(357deg, #060606 16.68%, rgba(0,0,0,0.02) 96.44%);',
        visitimg: "url('assets/images/visit.jpg')"
      },
      fontSize: {
        bannerHeading: '64px',
        reletaveHeading: '32px'
      },
      lineHeight: {
        'SecHLineHight': '64px',
        '12': '3rem',
      },
    },
  },
  plugins: [],
}
