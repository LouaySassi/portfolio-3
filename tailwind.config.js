const typography = require('@tailwindcss/typography');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FFF8F1',
        surface: '#FFFFFF',
        ink: '#111111',
        'ink-soft': '#3D3D3D',
        'ink-muted': '#6B6B6B',
        line: '#E8E0D6',
        accent: {
          DEFAULT: '#2563EB',
          strong: '#1D4ED8',
        },
      },
      fontFamily: {
        sans: ['Archivo', ...defaultTheme.fontFamily.sans],
        display: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        editorial: '72rem',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink-soft'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-links': theme('colors.accent.DEFAULT'),
            maxWidth: 'none',
          },
        },
      }),
    },
  },
  plugins: [typography],
};
