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
      backgroundColor: {
        yellow: "#EFB441",
        blackMain: "#2A2A2D",
        whiteMain: "#DADADA",
      },
      colors: {
        yellow: "#EFB441",
        blackMain: "#2A2A2D",
        whiteMain: "#DADADA",
        blackLight: "#404042",
      },
      borderRadius: {
        signIn: "3rem",
      },
    },
  },
  plugins: [],
};
