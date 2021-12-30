const colors = {
  transparent: "transparent",
  current: "currentColor",
  white: "#FFFFFF",
  whiteTransparent: "#FFFFFF7F",
  "error-red": "#B00020",

  forrest: "#193C30",
  apricot: "#FF9E7D",
  aubergine: "#592141",
  corn: "#FFD394",
  earth: "#7E4239",
  frost: "#B2D3EA",
  grass: "#0E8D64",
  lavender: "#BBB7E2",
  mint: "#A4D6AF",
  mist: "#A0B4BB",
  ocean: "#00396F",
  orange: "#E7634C",
  raspberry: "#DA5E74",
  rose: "#FFB3AC",
  sand: "#DFB995",
  sky: "#3369B7",
  highlight: "#FFF5DA",

  plum: {
    DEFAULT: "#1E1928",
    80: "rgba(30, 25, 40, 0.8)",
    64: "rgba(30, 25, 40, 0.64)",
    40: "rgba(30, 25, 40, 0.4)",
    16: "rgba(30, 25, 40, 0.16)",
    8: "rgba(30, 25, 40, 0.08)",
    4: "rgba(30, 25, 40, 0.04)",
    2: "rgba(30, 25, 40, 0.02)"
  },

  beige: {
    DEFAULT: "#EDE6DD",
    64: "#F4EFE9",
    dark: "#dcd6ce"
  }
};

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx,mdx}","./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    fontSize: {},
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Empathy", "Georgia", "serif"]
      },
      outline: {
        blue: "2px solid #3369B7",
        plum: ["2px solid #1E1928", "2px"]
      },
      keyframes: {
        shake: {
          "10%, 90%": { transform: "translateX(-1px)" },
          "20%, 80%": { transform: "translateX(2px)" },
          "30%, 50%, 70%": { transform: "translateX(-4px)" },
          "40%, 60%": { transform: "translateX(4px)" }
        }
      },
      animation: {
        shake: "shake 1s ease-in-out both"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
