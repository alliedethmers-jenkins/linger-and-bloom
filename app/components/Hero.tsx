'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative h-screen flex items-end overflow-hidden">
      {/* Full-screen background image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110">
        <Image
          src="/images/hero-florals.webp"
          alt="Linger & Bloom"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay — darker at bottom where text lives */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </motion.div>

      {/* Text — bottom left */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 px-8 md:px-12 pb-16 md:pb-20 max-w-xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
          className="font-script text-5xl md:text-6xl text-white/80 leading-none mb-3"
        >
          Linger &amp; Bloom
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-5"
        >
          Artist. Florist.{' '}
          <em className="italic text-white/70">Dinner Party Enthusiast.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="font-cormorant text-base text-white/60 leading-relaxed mb-8 max-w-sm"
        >
          A creative event studio that produces beautiful florals, tablescapes,
          and immersive event environments. Come to us with a vision.
        </motion.p>

        <motion.a
          href="#florals"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors border-b border-white/30 hover:border-white pb-0.5"
        >
          View the Work →
        </motion.a>
      </motion.div>
    </section>
  )
}
