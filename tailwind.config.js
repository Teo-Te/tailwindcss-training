/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-mulish)'],
        mono: ['var(--font-rokkitt)'],
        bai: ['var(--font-bai-jamjuree)'],
        josefin: ['var(--font-josefin-sans)'],
        alata: ['var(--font-alata)'],
      },
      colors: {
        strongCyan: 'hsl(172, 67%, 45%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
      },
    },
  },
  plugins: [],
};
