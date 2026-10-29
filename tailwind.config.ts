import type { Config } from 'tailwindcss';

// Colors read from CSS variables in app/globals.css.
// To re-brand, change the RGB values there. Nothing else needs to change.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: token('c-charcoal'),
        steel: token('c-steel'),
        amber: token('c-amber'),
        signal: token('c-signal'),
        offwhite: token('c-offwhite'),
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Impact', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
