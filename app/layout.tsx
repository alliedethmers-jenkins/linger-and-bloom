import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, IBM_Plex_Mono, Great_Vibes } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Linger & Bloom | Florals · Events · Editorial',
  description:
    'Immersive floral design, cinematic tablescapes, and editorial still life by Linger & Bloom.',
  openGraph: {
    title: 'Linger & Bloom',
    description: 'Florals · Events · Editorial',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${ibmMono.variable} ${greatVibes.variable}`}
    >
      <body className="bg-cinema text-ink antialiased">{children}</body>
    </html>
  )
}
