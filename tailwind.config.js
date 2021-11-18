module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    fontFamily: {
      serif: ["Yeseva One", "serif"],
      sans: ["Work Sans", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        green: {
          50: "#ECFDF5",
          100: "#eef3ec",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "last"],
  },
}
