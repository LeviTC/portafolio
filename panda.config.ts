import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "#EB4A4A" },
          secondary: { value: "#969696" },
          tertiary: { value: "#151515"}
        },
      },
    },
  },
  outdir: "styled-system",
});