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
      keyframes: {
        "load-50": {
          "0%": { width: "0%" },
          "100%": { width: "50%" },
        },
        "load-60": {
          "0%": { width: "0%" },
          "100%": { width: "60%" },
        },
        "load-70": {
          "0%": { width: "0%" },
          "100%": { width: "70%" },
        },
        "load-75": {
          "0%": { width: "0%" },
          "100%": { width: "75%" },
        },
        "load-80": {
          "0%": { width: "0%" },
          "100%": { width: "80%" },
        },
        "load-85": {
          "0%": { width: "0%" },
          "100%": { width: "85%" },
        },
        "load-90": {
          "0%": { width: "0%" },
          "100%": { width: "90%" },
        },
        "load-95": {
          "0%": { width: "0%" },
          "100%": { width: "95%" },
        },
      },
    },
  },
  plugins: [],
};
