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
        bgFirstLayer: "var(--bg-first-layer)",
        bgSecondLayer: "var(--bg-second-layer)",
        bgThirdLayer: "var(--bg-third-layer)",
        bgGradient: "var(--bg-gradient)",
        bgGradientFrom: withOpacity("--bg-gradient-from"),
        bgGradientVia: withOpacity("--bg-gradient-via"),
        bgGradientTo: withOpacity("--bg-gradient-to"),
        iconGithub: "var(--icon-github)",
        iconLinkedIn: "var(--icon-linkedIn)"
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
        secondaryTextDeco: withOpacity("--secondaryTextDeco"),
        bgDeco: withOpacity("--bgDeco"),
        textUnderscore: withOpacity("--textUnderscore"),
        inversePrimaryBg: withOpacity("--inversePrimaryBg"),
      },
    },
  },
  plugins: [],
};
