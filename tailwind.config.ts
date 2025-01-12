import { collectRoutesUsingEdgeRuntime } from "next/dist/build/utils";
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: "#457b9d",
        primary_light: "#a8dadc",
        primary_dark: "#1d3557",
        secondary: "#f1faee",
        highlight: "#e63946",
      },
    },
  },
  plugins: [],
} satisfies Config;
