/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "custom-mint": "#98fbcb",
      },
      fontFamily: {
        sans: ["Noto Sans Thai", "Kanit", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        noto: ["Noto Sans Thai", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
