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
        primary: "#124559",
        primary_light: "#598392",
        primary_dark: "#01161e",
        secondary: "#aec3b0",
        highlight: "#eff6e0",
      },
    },
  },
  plugins: [],
} satisfies Config;
