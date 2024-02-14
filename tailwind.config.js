/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futurespore: ['futurespore']
      },
      backgroundImage: {
        backgroundArt: "url('src/images/fondo_bw.png')",
      },
    },
  },
  plugins: [ plugin(function ({ addBase}) {
    const fonts = {
      '@font-face': [
        {
          fontFamily: 'futurespore',
          fontStyle: 'normal',
          fontWeight: 'normal',
          src:
            'url("./fonts/Porto\ Qastelo.ttf") format("truetype");'
        },
      ]
    };
    addBase(fonts);
  }),
  require('tailwindcss-animated')],
}