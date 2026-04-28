'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const links = [
  { label: 'Florals', href: '#florals' },
  { label: 'Events', href: '#events' },
  { label: 'Editorial', href: '#editorial' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(latest > prev && latest > 80)
    setAtTop(latest < 20)
  })

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        atTop ? 'bg-transparent' : 'bg-cinema/95 backdrop-blur-sm border-b border-gold/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a
          href="#"
          className="font-playfair text-lg tracking-widest text-ink hover:text-gold transition-colors"
        >
          Linger & Bloom
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-mono text-xs tracking-[0.2em] uppercase text-charcoal/50 hover:text-gold transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
        <MobileMenu />
      </div>
    </motion.header>
  )
}

function MobileMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-charcoal/60 hover:text-gold transition-colors p-1"
        aria-label="Toggle menu"
      >
        <span className="block w-5 h-px bg-current mb-1.5" />
        <span className="block w-5 h-px bg-current mb-1.5" />
        <span className="block w-3 h-px bg-current" />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-cinema/98 flex flex-col items-center justify-center gap-10 z-50"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-6 text-charcoal/40 text-2xl"
          >
            ×
          </button>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="font-playfair text-3xl text-ink hover:text-gold transition-colors"
            >
              {label}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  )
}
