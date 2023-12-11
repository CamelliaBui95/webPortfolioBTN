/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

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
        "grad-from": withOpacity("--grad-from"),
        "grad-via": withOpacity("--grad-via"),
        "grad-to": withOpacity("--grad-to"),
        primaryBg: withOpacity("--primaryBg"),
        secondaryBg: withOpacity("--secondaryBg"),
        primaryColor: withOpacity("--primaryColor"),
        secondaryColor: withOpacity("--secondaryColor"),
        borderDeco: withOpacity("--borderDeco"),
        textDeco: withOpacity("--textDeco"),
        bgDeco: withOpacity("--bgDeco"),
        textUnderscore: withOpacity("--textUnderscore"),
        inversePrimaryBg: withOpacity("--inversePrimaryBg"),
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