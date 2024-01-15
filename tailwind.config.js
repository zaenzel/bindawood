/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00B444",
        "sekunder": "#FFFF00",
        "tersier": "#003D00",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
