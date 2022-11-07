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
        72: "72px",
        44: "44px",
        27: "27px",
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

      width: {
        67: "67px",
        175: "175px",
        200: "200px",
        218: "218px",
        254: "254px",
        266: "266px",
        340: "340px",
        352: "352px",
        388: "338px",
        512: "512px",
        544: "544px",
        smaller: "6px",
        "relative-26": "26rem",
      },

      height: {
        107: "107px",
        132: "132px",
        169: "169px",
        173: "173px",
        215: "215px",
        220: "288px",
        333: "333px",
        458: "458px",
        539: "539px",
        smaller: "6px",
        "percentage-70": "70%",
      },

      maxWidth: {
        "relative-11": "11rem",
        256: "256px",
      },

      boxShadow: {
        button: "0 0 20px 20px #5135FF inset",
      },

      fontSize: {
        "4.5xl": "40px",
        xsm: "12px",
        slg: "20px",
        large: "54px",
        "medium-large": "32px",
        "extra-large": "80px",
        175: "175px",
        258: "258px",
      },
    },
  },
  plugins: [],
};
