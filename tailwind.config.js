/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        right: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(10px)" },
        },
      },

      animation: {
        rightL: "right 1.2s infinite alternate",
      },

      keyframes: {
        topdown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        topdown1: "topdown 1.2s infinite alternate",
      },

      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },

      colors: {
        primary: "",
        secondary: "",
        tertiary: "",
        black: "#000",
        white: "#fff",
      },

      boxShadow: {
        card: "0px 0px 21px 5px rgba(238,161,54,0.59)",
      },
    },
  },
  plugins: [],
};
