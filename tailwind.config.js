const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        custom: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        header: '0px 4px 4px rgba(0, 0, 0, 0.1)',
      },
      colors: {},
      borderRadius: {
        "4xl": "3rem",
      },
      screens: {
        xxs: "415px",
        xs: "475px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        // portrait: { raw: "(orientation: portrait)" },
        dxl: { max: "1535px" },
        dlg: { max: "1279px" },
        dmd: { max: "1023px" },
        dsm: { max: "767px" },
        dxs: { max: "474px" },
        osm: { min: "640px", max: "767px" },
        omd: { min: "768px", max: "1023px" },
        olg: { min: "1024px", max: "1279px" },
        oxl: { min: "1280px", max: "1535px" },
      },
    },
  },
  variants: {},
  plugins: [],
};
