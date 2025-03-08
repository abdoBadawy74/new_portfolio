/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00318F",
        secondary: "#000E29",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #00318F, #000E29)",
      },
    },
  },
  plugins: [],
};
