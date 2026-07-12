const typography = require('@tailwindcss/typography');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0A0A0A',
        surface: '#111111',
        elevated: '#1A1A1A',
        ink: '#F5F5F5',
        'ink-soft': '#A3A3A3',
        'ink-muted': '#737373',
        line: 'rgba(255,255,255,0.08)',
        accent: {
          DEFAULT: '#3B82F6',
          strong: '#2563EB',
        },
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', ...defaultTheme.fontFamily.sans],
        display: ['"Helvetica Neue"', 'Helvetica', 'Arial', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        shell: '96rem',
      },
    },
  },
  plugins: [typography],
};
