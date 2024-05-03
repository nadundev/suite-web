import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "rgb(var(--color-dark-blue))",
        gray: "rgb(var(--color-dark-gray))",
        white: "rgb(var(--color-bg-white))",
        cream: "rgb(var(--color-off-white))",
        purple: "rgb(var(--color-purple))",
        pink: "rgb(var(--color-pink))",
        orange: "rgb(var(--color-orange))",
      }
    },
  },
  plugins: [],
};
export default config;
