/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "16px",
          lineHeight: "24px",
        },
        h1: {
          fontFamily: "PT Sans",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "54px",
          lineHeight: "64px",
        },
        h2: {
          fontFamily: "PT Sans",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "48px",
          lineHeight: "58px",
        },
        h3: {
          fontFamily: "PT Sans",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "40px",
          lineHeight: "50px",
        },
        h4: {
          fontFamily: "PT Sans",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "32px",
          lineHeight: "40px",
        },
        h5: {
          fontFamily: "PT Sans",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "24px",
          lineHeight: "32px",
        },
        h6: {
          fontFamily: "PT Sans",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "20px",
          lineHeight: "26px",
        },
      });
    }),
  ],
};
