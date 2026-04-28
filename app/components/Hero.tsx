'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110">
        <Image
          src="/images/big-night-table.webp"
          alt="Linger & Bloom tablescape"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-parchment/50" />
      </motion.div>

      {/* Gold rule top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent z-10" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.4em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="font-mono text-xs text-gold uppercase tracking-[0.3em] mb-8 drop-shadow-sm"
        >
          Florals · Events · Editorial
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-playfair text-6xl md:text-8xl lg:text-[6.5rem] text-ink leading-none tracking-tight mb-8 drop-shadow-sm"
        >
          Linger
          <br />
          <em className="text-gold italic">&amp;</em>
          <br />
          Bloom
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
          className="font-cormorant text-xl md:text-2xl text-charcoal/80 italic tracking-wide max-w-xl mx-auto drop-shadow-sm"
        >
          Where every arrangement tells a story worth lingering in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-14 flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a
            href="#florals"
            className="inline-block font-mono text-xs tracking-[0.2em] uppercase border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-cinema transition-all duration-300 bg-cinema/60 backdrop-blur-sm"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-charcoal/70 px-8 py-4 hover:text-ink transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-charcoal/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent z-10" />
    </section>
  )
}
