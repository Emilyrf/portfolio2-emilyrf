/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx}'],
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