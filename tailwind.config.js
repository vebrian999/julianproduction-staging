/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F6FBFF",
          100: "#B8D4ED",
          200: "#8AB8E1",
          300: "#5C9CD5",
          400: "#2E80C9",
          500: "#0059A7",
          600: "#004C8F",
          700: "#003E76",
          800: "#00305E",
          900: "#002246",
          DEFAULT: "#0059A7",
        },
        secondary: "#002246",
      },
      fontFamily: {
        sans: ["Instrument Sans", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [],
};
