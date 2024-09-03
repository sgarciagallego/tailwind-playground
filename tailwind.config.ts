import type { Config } from 'tailwindcss';

export default {
  content: [ './src/**/*.{js,ts,jsx,tsx,mdx}' ],
  theme: {
    fontFamily: {
      mono: ['var(--font-mono)'],
      sans: ['var(--font-sans)'],
    },
    extend: {
      
    },
  },
  plugins: [],
} satisfies Config;