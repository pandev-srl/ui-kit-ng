/* eslint-env es6 */

const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./projects/**/*.{html,ts,scss}', './node_modules/@pandev-srl/ui-kit/**/*.{html,ts,scss}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xxxs: ['0.6rem', '0.65rem'],
        xxs: ['0.7rem', '0.75rem'],
      },
      borderWidth: {
        0.5: '0.5px',
        1: '1px',
        1.5: '1.5px',
      },
      height: {
        26: '6.5rem',
        38: '9.5rem',
      },
      minHeight: {
        '1/4': '25vh',
        '2/4': '50vh',
        '3/4': '75vh',
        '1/5': '20vh',
        '2/5': '40vh',
        '3/5': '60vh',
        '4/5': '80vh',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
      },
      maxHeight: {
        '1/4': '25vh',
        '2/4': '50vh',
        '3/4': '75vh',
        '1/5': '20vh',
        '2/5': '40vh',
        '3/5': '60vh',
        '4/5': '80vh',
      },
      borderRadius: {
        large: '20rem',
      },
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          ...colors.blue,
        },
        secondary: {
          ...colors.slate,
        },
        accent: {
          ...colors.slate,
        },
        danger: {
          ...colors.red,
        },
        warning: {
          ...colors.yellow,
        },
        success: {
          ...colors.green,
        },
        info: {
          ...colors.cyan,
        },
      },
      outline: {
        0.5: '0.5px',
      },
      zIndex: {
        1000: '1000',
      },
      maxWidth: {
        'for-page': '71.25rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
