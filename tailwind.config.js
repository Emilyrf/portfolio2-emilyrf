/** @type {import('tailwindcss').Config} */
export default {
    content: ['./components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
      themes: [
        {
          dracula: {
            ...require("daisyui/src/theming/themes")["dracula"],
    
          },
        },
      ],
    },
  };