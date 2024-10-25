/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //"azulPrincipal": "#0c0b52"
        "azulPrincipal": "#FBFBFB",
        "amareloPrincipal": "#fbca01",
        "cinzaPrincipal": "#363633"
      },
      fontFamily: {
        "Mont": "'Montserrat', system-ui",
        "Garamond": "'EB Garamond', serif",
        "Spectral": "'Fraunces', serif"
      },
      keyframes: {
        rotacaoGBase: {
          "0%": {rotate: "0deg"},
          "100%": {rotate: "-360deg"},
        }
      },
      animation: {
        rotacaoGBase: "rotacaoGBase 5s linear infinite"
      }
    },
  },
  plugins: [],
}

