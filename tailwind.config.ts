import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cinema: '#faf7f2',
        cream: '#3d3530',
        gold: '#8a6d4a',
        rose: '#9e6b60',
        charcoal: '#3d3530',
        parchment: '#f2ede4',
        plum: '#5a3d4a',
        'tv-body': '#e8e0d0',
        'tv-bezel': '#3d3530',
        ink: '#2a2420',
        sage: '#8a9e8a',
        blush: '#e8d5cc',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', '"Courier New"', 'monospace'],
        script: ['var(--font-script)', 'cursive'],
      },
    },
  },
  plugins: [],
}

export default config
