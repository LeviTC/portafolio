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
      breakpoints: {
        "mobile-xs": "320px",
        "mobile-sm": "360px",
        mobile: "375px",
        "mobile-lg": "425px",
        "mobile-xl": "540px",
        "tablet-sm": "672px",
        tablet: "720px",
        "tablet-md": "768px",
        "tablet-lg": "1024px",
        "laptop-sm": "1280px",
        "laptop-lg": "1440px",
        "laptop-xl": "1500px",
        "desktop-sm": "1600px",
        desktop: "1728px",
        "desktop-lg": "1920px",
      }
    },
  },
  outdir: "styled-system",
});