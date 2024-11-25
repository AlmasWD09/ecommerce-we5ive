/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "slow-spin": "spin 10s linear infinite",
        "slow-bounce": "bounce-x 4s  infinite",
      },

      keyframes: {
        "bounce-x": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
      },
      colors: {
        primary: "#7e53d4", 
        primaryGray: "#EEECFB",

        secondary: "#4681F4",
        secondaryGray: "#bbebff",
      },
    },
    fontFamily: {
      Manrope: "'Manrope', 'sans-serif'",
      Pacifico: "'Pacifico', 'cursive'",
    },
  },
  plugins: [],
};
