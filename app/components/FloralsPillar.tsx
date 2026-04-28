'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const cinemaScreenings = [
  {
    film: 'Before Sunrise',
    year: '1995',
    director: 'Richard Linklater',
    accent: '#9e6b60',
    description: 'Dusty roses and dried lavender. A wandering evening tablescape.',
    image: null,
    gradient: 'from-[#e8ddd5] to-[#d4c8bc]',
  },
  {
    film: 'North By Northwest',
    year: '1959',
    director: 'Alfred Hitchcock',
    accent: '#8a6d4a',
    description: 'Silver-grey foliage, black tulips, gold candlestick drama.',
    image: null,
    gradient: 'from-[#dde0e4] to-[#c8ccd2]',
  },
  {
    film: 'Big Night',
    year: '1996',
    director: 'Campbell Scott',
    accent: '#8a6d4a',
    description: 'Terracotta vessels, olive branches, candlelit abundance.',
    image: '/images/big-night-table.jpg',
    gradient: 'from-[#e8ddd5] to-[#d4c8bc]',
  },
  {
    film: 'Moulin Rouge',
    year: '2001',
    director: 'Baz Luhrmann',
    accent: '#9e6b60',
    description: 'Velvet reds, gilded stems, and theatrical excess.',
    image: '/images/moulin-rouge-florals.jpg',
    gradient: 'from-[#e8d5d0] to-[#d4bfba]',
  },
]

const weddingGallery = [
  { label: 'Garden Ceremony', image: null, gradient: 'from-[#d4e0d4] to-[#c0cfc0]' },
  { label: 'Reception Table', image: '/images/big-night-screening.jpg', gradient: 'from-[#e8ddd5] to-[#d4c8bc]' },
  { label: 'Bridal Bouquet', image: null, gradient: 'from-[#e8d5d0] to-[#d4bfba]' },
  { label: 'Altar Installation', image: null, gradient: 'from-[#d4e0d4] to-[#c0cfc0]' },
  { label: 'Cocktail Hour', image: null, gradient: 'from-[#e8e0d0] to-[#d4c8b4]' },
  { label: 'Cake Table', image: null, gradient: 'from-[#e8ddd5] to-[#d4c8bc]' },
]

function CRTScreen({ screening, isActive }: { screening: typeof cinemaScreenings[0], isActive: boolean }) {
  return (
    <div className="relative">
      {/* TV body */}
      <div className="bg-tv-body rounded-2xl p-4 shadow-lg border-4 border-tv-bezel/30">
        {/* TV bezel */}
        <div className="bg-tv-bezel/10 rounded-lg overflow-hidden relative border border-tv-bezel/20" style={{ aspectRatio: '4/3' }}>
          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.div
                key="active"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
              >
                {screening.image ? (
                  <Image
                    src={screening.image}
                    alt={screening.film}
                    fill
                    className="object-cover tv-scan-in"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${screening.gradient}`} />
                )}
                {/* Light scanlines overlay */}
                <div className="absolute inset-0 crt-scanlines opacity-15 pointer-events-none z-10" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 z-20 bg-gradient-to-t from-black/40 to-transparent">
                  <p className="font-mono text-[8px] tracking-[0.2em] uppercase mb-0.5" style={{ color: '#fff' + 'aa' }}>
                    Supper & Cinema
                  </p>
                  <h3 className="font-playfair text-base text-white leading-tight">{screening.film}</h3>
                  <p className="font-mono text-[8px] text-white/60 tracking-widest">{screening.year}</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="static"
                className={`absolute inset-0 bg-gradient-to-br ${screening.gradient} opacity-60`}
              />
            )}
          </AnimatePresence>
          {/* Screen glare */}
          <div className="absolute top-2 left-2 w-8 h-4 bg-white/20 rounded-full rotate-[-20deg] pointer-events-none z-30" />
        </div>
        {/* TV controls */}
        <div className="flex justify-end gap-2 mt-3 pr-1">
          <div className="w-2 h-2 rounded-full bg-tv-bezel/30" />
          <div className="w-2 h-2 rounded-full bg-tv-bezel/30" />
          <div className="w-4 h-2 rounded bg-tv-bezel/20" />
        </div>
      </div>
      <div className="mx-auto w-12 h-3 bg-tv-bezel/20 rounded-b-sm" />
      <div className="mx-auto w-20 h-1.5 bg-tv-bezel/15 rounded" />
    </div>
  )
}

export default function FloralsPillar() {
  const [activeScreen, setActiveScreen] = useState(2)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="florals" ref={sectionRef} className="py-32 bg-cinema">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold/70 mb-4">01 / Florals & Tablescapes</p>
          <h2 className="font-playfair text-5xl md:text-6xl text-ink mb-6">The Art of the Table</h2>
          <p className="font-cormorant text-xl text-charcoal/60 italic max-w-lg">
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
            <div className="h-px flex-1 bg-gold/20" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold/60">Supper & Cinema Series</span>
            <div className="h-px flex-1 bg-gold/20" />
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
              <p className="text-center font-mono text-[10px] text-charcoal/40 mt-3 tracking-widest uppercase">
                {screening.film}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          key={activeScreen}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="border border-gold/20 bg-parchment p-8 max-w-2xl"
        >
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-2">Now Screening</p>
          <h3 className="font-playfair text-3xl text-ink mb-1">{cinemaScreenings[activeScreen].film}</h3>
          <p className="font-cormorant italic text-charcoal/60 mb-4">{cinemaScreenings[activeScreen].description}</p>
          <a href="#contact" className="font-mono text-xs tracking-[0.2em] uppercase text-gold hover:text-ink transition-colors">
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
            <div className="h-px flex-1 bg-gold/20" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold/60">Weddings</span>
            <div className="h-px flex-1 bg-gold/20" />
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
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${item.gradient} group-hover:scale-105 transition-transform duration-700`} />
              )}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="font-cormorant text-sm italic text-white/70 group-hover:text-white transition-colors drop-shadow">
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
