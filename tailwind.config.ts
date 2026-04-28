import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cinema: '#0a0908',
        cream: '#f2ebe0',
        gold: '#b8976a',
        rose: '#c4968a',
        charcoal: '#1c1a17',
        parchment: '#f5f0e6',
        plum: '#1e1520',
        'tv-body': '#ddd5c4',
        'tv-bezel': '#1e160e',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', '"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
