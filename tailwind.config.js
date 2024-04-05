/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
    },
    animation: {
      "waving-hand": "wave 2s linear infinite",
    },

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
  },
  plugins: [],
};
