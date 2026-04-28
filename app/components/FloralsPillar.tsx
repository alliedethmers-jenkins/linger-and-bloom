'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const cinemaScreenings = [
  {
    film: 'Before Sunrise',
    year: '1995',
    director: 'Richard Linklater',
    palette: 'from-[#2d1b1b] to-[#0d0808]',
    accent: '#c4968a',
    description: 'Dusty roses and dried lavender. A wandering evening tablescape.',
  },
  {
    film: 'North By Northwest',
    year: '1959',
    director: 'Alfred Hitchcock',
    palette: 'from-[#1a1a2e] to-[#0a0908]',
    accent: '#b8976a',
    description: 'Silver-grey foliage, black tulips, gold candlestick drama.',
  },
  {
    film: 'Big Night',
    year: '1996',
    director: 'Campbell Scott',
    palette: 'from-[#2e1f0e] to-[#0a0908]',
    accent: '#d4a96a',
    description: 'Terracotta vessels, olive branches, candlelit abundance.',
  },
  {
    film: 'Moulin Rouge',
    year: '2001',
    director: 'Baz Luhrmann',
    palette: 'from-[#2e0d1a] to-[#1e1520]',
    accent: '#e07090',
    description: 'Velvet reds, gilded stems, and theatrical excess.',
  },
]

const weddingGallery = [
  { label: 'Garden Ceremony', gradient: 'from-[#1a2a1a] via-[#0d1a0d] to-[#0a0908]' },
  { label: 'Reception Table', gradient: 'from-[#1e1520] via-[#2d1b1b] to-[#0a0908]' },
  { label: 'Bridal Bouquet', gradient: 'from-[#2a1a1a] via-[#1e1520] to-[#0a0908]' },
  { label: 'Altar Installation', gradient: 'from-[#0d1a0d] via-[#1a2a1a] to-[#0a0908]' },
  { label: 'Cocktail Hour', gradient: 'from-[#2e1f0e] via-[#1c1a17] to-[#0a0908]' },
  { label: 'Cake Table', gradient: 'from-[#1e1520] via-[#2a1a1a] to-[#0a0908]' },
]

function CRTScreen({ screening, isActive }: { screening: typeof cinemaScreenings[0], isActive: boolean }) {
  return (
    <div className="relative">
      {/* TV body */}
      <div className="bg-tv-body rounded-2xl p-4 shadow-2xl border-4 border-tv-bezel">
        {/* TV bezel */}
        <div className="bg-tv-bezel rounded-lg overflow-hidden relative" style={{ aspectRatio: '4/3' }}>
          {/* Screen content */}
          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.div
                key="active"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`absolute inset-0 bg-gradient-to-br ${screening.palette} tv-flicker`}
              >
                {/* CRT scanlines overlay */}
                <div className="absolute inset-0 crt-scanlines opacity-30 pointer-events-none z-10" />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 z-20 tv-scan-in">
                  <p className="font-mono text-[9px] tracking-[0.2em] uppercase mb-1" style={{ color: screening.accent + 'aa' }}>
                    Supper & Cinema Series
                  </p>
                  <h3 className="font-playfair text-xl text-cream leading-tight mb-1">{screening.film}</h3>
                  <p className="font-mono text-[9px] text-cream/40 tracking-widest">{screening.year} · {screening.director}</p>
                  <p className="font-cormorant italic text-sm mt-2" style={{ color: screening.accent }}>{screening.description}</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="static"
                className="absolute inset-0 tv-static-noise opacity-30"
                style={{ background: '#111' }}
              />
            )}
          </AnimatePresence>
          {/* Screen glare */}
          <div className="absolute top-2 left-2 w-8 h-4 bg-white/5 rounded-full rotate-[-20deg] pointer-events-none z-30" />
        </div>
        {/* TV controls */}
        <div className="flex justify-end gap-2 mt-3 pr-1">
          <div className="w-2 h-2 rounded-full bg-tv-bezel/60" />
          <div className="w-2 h-2 rounded-full bg-tv-bezel/60" />
          <div className="w-4 h-2 rounded bg-tv-bezel/40" />
        </div>
      </div>
      {/* TV stand */}
      <div className="mx-auto w-12 h-3 bg-tv-bezel/80 rounded-b-sm" />
      <div className="mx-auto w-20 h-1.5 bg-tv-bezel/60 rounded" />
    </div>
  )
}

export default function FloralsPillar() {
  const [activeScreen, setActiveScreen] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="florals" ref={sectionRef} className="py-32 bg-cinema">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold/60 mb-4">01 / Florals & Tablescapes</p>
          <h2 className="font-playfair text-5xl md:text-6xl text-cream mb-6">
            The Art of the Table
          </h2>
          <p className="font-cormorant text-xl text-cream/50 italic max-w-lg">
            Cinematic tablescapes that transform an evening into a scene worth remembering.
          </p>
        </motion.div>
      </div>

      {/* Supper & Cinema Series */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gold/15" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold/50">Supper & Cinema Series</span>
            <div className="h-px flex-1 bg-gold/15" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
          {cinemaScreenings.map((screening, i) => (
            <motion.div
              key={screening.film}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i + 0.3 }}
              className="cursor-pointer"
              onClick={() => setActiveScreen(i)}
            >
              <CRTScreen screening={screening} isActive={activeScreen === i} />
              <p className="text-center font-mono text-[10px] text-cream/40 mt-3 tracking-widest uppercase">
                {screening.film}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Active film detail */}
        <motion.div
          key={activeScreen}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="border border-gold/15 p-8 max-w-2xl"
        >
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold/50 mb-2">
            Now Screening
          </p>
          <h3 className="font-playfair text-3xl text-cream mb-1">{cinemaScreenings[activeScreen].film}</h3>
          <p className="font-cormorant italic text-cream/50 mb-4">
            {cinemaScreenings[activeScreen].description}
          </p>
          <a href="#contact" className="font-mono text-xs tracking-[0.2em] uppercase text-gold hover:text-cream transition-colors">
            Book This Experience →
          </a>
        </motion.div>
      </div>

      {/* Weddings — Letterbox Gallery */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gold/15" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold/50">Weddings</span>
            <div className="h-px flex-1 bg-gold/15" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {weddingGallery.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.05 * i + 0.5 }}
              className="letterbox group cursor-pointer overflow-hidden"
              style={{ aspectRatio: '16/9' }}
            >
              {/* Placeholder — swap for real photo */}
              <div className={`w-full h-full bg-gradient-to-br ${item.gradient} group-hover:scale-105 transition-transform duration-700`} />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="font-cormorant text-sm italic text-cream/50 group-hover:text-cream/80 transition-colors">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
