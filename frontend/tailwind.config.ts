import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ff00", // Verde Monster
        secondary: "#111111", // Preto Monster
        darkGray: "#1f1f1f", // Cinza escuro para fundo
        lightGray: "#e5e5e5", // Cinza claro para contrastes
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Fonte moderna e clean
      },
    },
  },
  plugins: [],
};

export default config;