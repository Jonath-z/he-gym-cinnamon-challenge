/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/noise.png')",
      },

      keyframes: {
        fadin: {
          from: {
            opacity: 0,
          },

          to: {
            opacity: 1,
          },
        },
      },

      animation: {
        fadin: "fadin 2s ease-in-out",
      },

      colors: {
        "semi-gray": "#CFCFCF",
        "text-primary": "#525252",
        "dark-semi-gray": "#666666",
        "button-blue": "rgb(81, 53, 255)",
        "blue-primary": "#5135FF",
        "double-quote": "rgba(81, 53, 255, 0.1)",
        "light-gray": "#F6F6F6",
      },
      lineHeight: {
        large: "56px",
        "extra-large": "105px",
      },
      transitionProperty: {
        width: "width",
        "box-shadow": "box-shadow",
      },
      fontFamily: {
        montHavy: "Monthavy",
        "montHavy-extralight": "Monthavy-extralight",
        montSemiBold: "MontsemiBold",
        montBold: "MontBold",
      },

      boxShadow: {
        button: "0 0 20px 20px #5135FF inset",
      },

      fontSize: {
        "4.5xl": "40px",
        xsm: "12px",
        slg: "20px",
        large: "54px",
        "extra-large": "80px",
      },
    },
  },
  plugins: [],
};
