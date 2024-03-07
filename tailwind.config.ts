import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      orange: {
        "1": "#FEFCFB",
        "2": "#FFF7ED",
        "3": "#FFEFD6",
        "4": "#FFDFB5",
        "5": "#FFD19A",
        "6": "#FFC182",
        "7": "#F5AE73",
        "8": "#EC9455",
        "9": "#F76B15",
        "10": "#EF5F00",
        "11": "#CC4E00",
        "12": "#582D1D",
      },
      yellow: {
        "1": "#FEFDFB",
        "2": "#FEFBE9",
        "3": "#FFF7C2",
        "4": "#FFEE9C",
        "5": "#FBE577",
        "6": "#F3D673",
        "7": "#E9C162",
        "8": "#E2A336",
        "9": "#FFC53D",
        "10": "#FFBA18",
        "11": "#AB6400",
        "12": "#4F3422",
      },
      gray: {
        "1": "#FCFCFD",
        "2": "#F9F9FB",
        "3": "#F0F0F3",
        "4": "#E8E8EC",
        "5": "#E0E1E6",
        "6": "#D9D9E0",
        "7": "#CDCED6",
        "8": "#B9BBC6",
        "9": "#8B8D98",
        "10": "#80838D",
        "11": "#60646C",
        "12": "#1C2024",
      },
      white: "#ffffff",
      black: "#000000",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      spacing: {
        "224": "56rem",
      },
      objectPosition: {
        "1/2-3/4": "center 75%",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
