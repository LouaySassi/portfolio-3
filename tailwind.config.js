// tailwind.config.js

// Use 'require' for plugins and defaultTheme
const typography = require('@tailwindcss/typography'); // <--- Revert to require
const defaultTheme = require('tailwindcss/defaultTheme'); // <--- Revert to require

/** @type {import('tailwindcss').Config} */ // This JSDoc is fine to keep
module.exports = { // <--- Revert to module.exports
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue-montreal': ['"Neue Montreal"', ...defaultTheme.fontFamily.sans],
        'gloock': ['Gloock', 'Georgia', 'serif'],
      },
      typography: ({ theme }) => ({
        invert: {
          css: {
            // Your --tw-prose-* color variables
            '--tw-prose-body': theme('colors.gray.300'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-lead': theme('colors.gray.400'),
            '--tw-prose-links': theme('colors.blue.400'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.gray.400'),
            '--tw-prose-bullets': theme('colors.gray.400'),
            '--tw-prose-hr': theme('colors.gray.700'),
            '--tw-prose-quotes': theme('colors.gray.400'),
            '--tw-prose-quote-borders': theme('colors.gray.700'),
            '--tw-prose-captions': theme('colors.gray.500'),
            '--tw-prose-code': theme('colors.white'),
            '--tw-prose-pre-code': theme('colors.gray.300'),
            '--tw-prose-pre-bg': theme('colors.gray.800'),
            '--tw-prose-th-borders': theme('colors.gray.700'),
            '--tw-prose-td-borders': theme('colors.gray.800'),

            // Your h3, h4, p, ul, li styles
            'h3': {
              fontSize: theme('fontSize.2xl'),
              fontWeight: theme('fontWeight.semibold'),
              marginTop: theme('spacing.12'),
              marginBottom: theme('spacing.4'),
              lineHeight: theme('lineHeight.tight'),
              color: theme('colors.white'),
            },
            'h4': {
              fontSize: theme('fontSize.xl'),
              fontWeight: theme('fontWeight.medium'),
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.3'),
              lineHeight: theme('lineHeight.snug'),
              color: theme('colors.gray.100'),
            },
            'p': {
              fontSize: theme('fontSize.base'),
              lineHeight: theme('lineHeight.relaxed'),
              color: theme('colors.gray.300'),
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.4'),
            },
            'ul': {
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.4'),
              'li': {
                fontSize: theme('fontSize.base'),
                color: theme('colors.gray.300'),
                marginTop: theme('spacing.2'),
                marginBottom: theme('spacing.2'),
              },
            },
            '> :first-child': {
              marginTop: '0',
            },
            '> :last-child': {
              marginBottom: '0',
            },
          },
        },
      }),
    },
  },
  plugins: [
    typography, // <--- Use the variable directly
  ],
};