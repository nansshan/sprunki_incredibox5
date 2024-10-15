import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sprunki-blue': '#00b4d8',
        'sprunki-purple': '#8338ec',
        'sprunki-pink': '#ff006e',
        'sprunki-yellow': '#ffbe0b',
        'sprunki-green': '#3a86ff',
      },
    },
  },
  plugins: [],
};
export default config;