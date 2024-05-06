/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-mulish)'],
        mono: ['var(--font-rokkitt)'],
        bai: ['var(--font-bai-jamjuree)'],
        josefin: ['var(--font-josefin-sans)'],
        alata: ['var(--font-alata)'],
        popins: ['var(--font-poppins)'],
        barlow: ['var(--font-barlow-semi-condensed)'],
        raleway: ['var(--font-raleway)'],
        opensans: ['var(--font-open-sans)'],
        rubik: ['var(--font-rubik)'],
      },
      colors: {
        strongCyan: 'hsl(172, 67%, 45%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
        cyan1: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 100%, 74%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',
        darkBlue: 'hsl(217, 28%, 15%)',
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: 'hsl(219, 30%, 18%)',
        accentCyan: 'hsl(176, 68%, 64%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)',
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue1: 'hsl(229, 8%, 60%)',
        veryDarkBlue1: 'hsl(229, 31%, 21%)',
      },
      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('/Fylo/logo-dark-mode.svg')",
        'logo-light-mode': "url('/Fylo/logo-light-mode.svg')",
        'curvy-dark-mode': "url('/Fylo/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('/Fylo/bg-curvy-light-mode.svg')",
      }),
      variants: {
        extend: {
          backgroundImage: ['dark'],
        }
      },
      spacing:{
        180: '32rem',
      },
    },
  },
  plugins: [],
};
