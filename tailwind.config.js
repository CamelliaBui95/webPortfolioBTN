/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "3xl": "1700px",
      },
      colors: {
        /* light-theme palette */
        peach: "#FFABAB",
        "cherryRed-300": "#D14D72",
        lightPink: "#FCC8D1",
        yellow: "#FFA732",
        creamyWhite: "#FEF2F4",
        "orange-400": "#FF9A8B",
        "redBrown-dark": "#4A0207",
        "redBrown-medium": "#781B22 ",
        /* dark theme palette */
        cyanBlue: "#2B86C5",
        electroPurple: "#784BA0",
        electroPink: "#FF3CAC",
        "black-1200": "#121212",
        "black-1000": "#181818",
        white: "#FFFFFF",
        "grey-medium": "#ADB7BE",
        "dark-grey": "#454343",
        /** global styles */
        "grad-from": "var(--grad-from)",
        "grad-via": "var(--grad-via)",
        "grad-to": "var(--grad-to)",
        primaryBg: "var(--primaryBg)",
        secondaryBg: "var(--secondaryBg)",
        primaryColor: "var(--primaryColor)",
        secondaryColor: "var(--secondaryColor)",
        borderDeco: "var(--borderDeco)",
        textDeco: "var(--textDeco)",
        bgDeco: "var(--bgDeco)",
        textUnderscore: "var(--textUnderscore)",
        inversePrimaryBg: "var(--inversePrimaryBg)",
      },
    },
  },
  plugins: [],
};
//background-color: #FF9A8B;
//background-image: linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);

//blue:from-[#2B86C5] purple:via-[#784BA0] pink:to-[#FF3CAC]
//secondaryBase: [#ADB7BE]

/**
 *  yellow: "#FEE140",
        salmonGrad: "#FA709A",
        orangeGrad: "#FF9A8B",
        mediumGrey: "#ADB7BE",
        darkGrey: "#454343",
        primaryFrom: "var(--primary-from)",
        primaryVia: "var(--primary-via)",
        primaryTo: "var(--primary-to)",
        primaryBg: "var(--primaryBg)",
        baseColor: "var(--base-color)",
        secondaryBaseColor: "var(--secondary-base-color)",
        borderDeco: "var(--borderDeco)",
        textDeco: "var(--textDeco)",
        secondaryBg: "var(--secondaryBg)",
 */

        // orange: #FFA732