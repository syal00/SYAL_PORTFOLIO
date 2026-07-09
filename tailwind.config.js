/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [

    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    "./pages/**/*.{js,ts,jsx,tsx,mdx}",

    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],

  theme: {

    container: { padding: { DEFAULT: "15px" } },

    screens: { sm: "640px", md: "768px", lg: "960px", xl: "1200px" },

    extend: {

      colors: {

        primary: "#131424",

        secondary: "#393A47",

        accent: "#F13024",

        accent2: "#7a140f",

      },

      backgroundImage: {

        explosion: 'url("/bg-explosion.png")',

        circles: 'url("/bg-circles.png")',

        circleStar: 'url("/circle-star.svg")',

        site: 'url("/site-bg.svg")',

      },

      animation: { "spin-slow": "spin 6s linear infinite", "train-scroll": "train-scroll 55s linear infinite" },

      keyframes: {
        "train-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      fontFamily: {

        sora: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],

      },

    },

  },

  container: { padding: { DEFAULT: "15px" } },

  plugins: [require("tailwind-scrollbar")],

};

