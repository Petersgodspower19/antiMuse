/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
       PrimaryColor: "#f5ebe0",
       SecondaryColor: "#e3d5ca",
       DarkColor: "#c88a4c",
       ExtraDarkColor: "#a98497",
       white: "#FFF",
       red: "red"
    },
    extend: {},
  },
  plugins: [],
}