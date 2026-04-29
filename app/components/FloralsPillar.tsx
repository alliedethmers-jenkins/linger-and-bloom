'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'

const films = [
  {
    index: '01',
    film: 'Moulin Rouge',
    year: '2001',
    director: 'Baz Luhrmann',
    tagline: 'Velvet reds, gilded stems, and theatrical excess.',
    description:
      'An evening of decadent florals and theatrical glamour. Crimson roses spill from gilded urns; candlelight catches on sequined table runners. An immersive dinner that dazzles.',
    images: ['/images/moulin-rouge-menu.webp', '/images/moulin-rouge-table.webp'],
    gradient: 'from-[#1a0505] via-[#2d0c0c] to-[#0a0202]',
    overlay: 'bg-black/40',
    accent: '#c06050',
  },
  {
    index: '02',
    film: 'Big Night',
    year: '1996',
    director: 'Stanley Tucci & Campbell Scott',
    tagline: 'Terracotta vessels, olive branches, candlelit abundance.',
    description:
      'A feast for the eyes. Warm terracotta, generous olive branches, and the kind of candlelit table that makes every guest feel like family. A love letter to the Italian table.',
    images: ['/images/big-night-menu.webp', '/images/big-night-screening.webp'],
    gradient: 'from-[#1e1508] via-[#2d2010] to-[#0f0a04]',
    overlay: 'bg-black/30',
    accent: '#c09060',
  },
  {
    index: '03',
    film: 'North by Northwest',
    year: '1959',
    director: 'Alfred Hitchcock',
    tagline: 'Silver-grey foliage, black tulips, gold candlestick drama.',
    description:
      'Hitchcockian tension rendered in florals. Steel-grey eucalyptus and dramatic black tulips create a table of suspense and sophistication. An evening of intrigue.',
    images: ['/images/north-by-northwest-menu.webp', '/images/north-by-northwest-table.webp'],
    gradient: 'from-[#0e121a] via-[#1a2030] to-[#080c12]',
    overlay: 'bg-black/35',
    accent: '#8090a8',
  },
  {
    index: '04',
    film: 'Before Sunrise',
    year: '1995',
    director: 'Richard Linklater',
    tagline: 'Dusty roses and dried lavender. A wandering evening tablescape.',
    description:
      'The golden hour of a chance encounter. Dried lavender and blush roses left to wander naturally, with the gentle warmth of an unhurried evening in Vienna.',
    images: ['/images/before-sunrise-menu.webp', '/images/before-sunrise-table.webp'],
    gradient: 'from-[#1e1a10] via-[#2d2818] to-[#100e08]',
    overlay: 'bg-black/25',
    accent: '#c0a070',
  },
]

const weddingGallery = [
  { label: 'Garden Ceremony', image: null, gradient: 'from-[#d4e0d4] to-[#c0cfc0]' },
  { label: 'Reception Table', image: '/images/big-night-screening.webp', gradient: 'from-[#e8ddd5] to-[#d4c8bc]' },
  { label: 'Bridal Bouquet', image: null, gradient: 'from-[#e8d5d0] to-[#d4bfba]' },
  { label: 'Altar Installation', image: null, gradient: 'from-[#d4e0d4] to-[#c0cfc0]' },
  { label: 'Cocktail Hour', image: null, gradient: 'from-[#e8e0d0] to-[#d4c8b4]' },
  { label: 'Cake Table', image: null, gradient: 'from-[#e8ddd5] to-[#d4c8bc]' },
]

function FilmPanel({ film }: { film: typeof films[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const isInView = useInView(ref, { once: false, margin: '-15%' })

  const hasTwoImages = film.images.length >= 2

  return (
    <div ref={ref} className="relative h-screen overflow-hidden bg-black">
      {/* Cinematic letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-[9vh] bg-black z-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[9vh] bg-black z-30 pointer-events-none" />

      {/* Background image(s) with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 scale-[1.18]">
        {hasTwoImages ? (
          <div className="absolute inset-0 flex">
            <div className="relative flex-1 overflow-hidden">
              <Image
                src={film.images[0]}
                alt={film.film}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative flex-1 overflow-hidden">
              <Image
                src={film.images[1]}
                alt={`${film.film} detail`}
                fill
                className="object-cover"
                sizes="50vw"
              />
              {/* center seam shadow */}
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/50 to-transparent z-10" />
            </div>
          </div>
        ) : film.images[0] ? (
          <Image
            src={film.images[0]}
            alt={film.film}
            fill
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${film.gradient}`} />
        )}
      </motion.div>

      {/* Cinematic color grade overlay */}
      <div className={`absolute inset-0 z-10 ${film.overlay}`} />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Film grain */}
      <div className="film-grain absolute inset-0 z-20 pointer-events-none opacity-30" />

      {/* Film number — top right */}
      <div className="absolute top-[11vh] right-8 md:right-12 z-40">
        <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-white/30">
          {film.index} / 04
        </span>
      </div>

      {/* Supper & Cinema label — top left */}
      <div className="absolute top-[11vh] left-8 md:left-16 z-40">
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/30">
          Supper &amp; Cinema Series
        </span>
      </div>

      {/* Film info — bottom left */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[12vh] left-8 md:left-16 z-40 max-w-lg"
      >
        <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/40 mb-3">
          {film.year} &nbsp;·&nbsp; {film.director}
        </p>
        <h3 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-4">
          {film.film}
        </h3>
        <p className="font-cormorant text-lg italic text-white/65 mb-7 max-w-sm leading-relaxed">
          {film.tagline}
        </p>
        <a
          href="#contact"
          className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5"
        >
          Book This Experience →
        </a>
      </motion.div>

      {/* Scroll cue — only on first panel */}
      {film.index === '01' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-[11vh] right-8 md:right-12 z-40 flex flex-col items-center gap-1.5"
        >
          <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-white/25 rotate-90 mb-2">
            Scroll
          </span>
          <div className="w-px h-8 bg-white/20" />
        </motion.div>
      )}
    </div>
  )
}

export default function FloralsPillar() {
  const headerRef = useRef<HTMLDivElement>(null)
  const weddingRef = useRef<HTMLDivElement>(null)
  const isWeddingInView = useInView(weddingRef, { once: true, margin: '-80px' })

  return (
    <section id="florals">
      {/* Section header */}
      <div ref={headerRef} className="py-20 bg-cinema px-8 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold/70 mb-4">01 / Florals & Tablescapes</p>
          <h2 className="font-playfair text-5xl md:text-6xl text-ink mb-6">The Art of the Table</h2>
          <p className="font-cormorant text-xl text-charcoal/60 italic max-w-lg">
            Cinematic tablescapes that transform an evening into a scene worth remembering.
          </p>
        </motion.div>
      </div>

      {/* Supper & Cinema — film panels */}
      <div>
        <div className="bg-black py-6 px-8 md:px-16">
          <div className="max-w-7xl mx-auto flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/40">
              Supper &amp; Cinema Series
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </div>

        {films.map((film) => (
          <FilmPanel key={film.film} film={film} />
        ))}

        {/* Inter-panel CTA */}
        <div className="bg-black py-20 px-8 md:px-16 text-center">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6">
            Four films. Four evenings. One experience.
          </p>
          <a
            href="#contact"
            className="inline-block font-mono text-xs tracking-[0.2em] uppercase border border-white/20 text-white/60 hover:text-white hover:border-white/50 px-8 py-4 transition-all duration-300"
          >
            Enquire About Supper &amp; Cinema
          </a>
        </div>
      </div>

      {/* Weddings — Letterbox Gallery */}
      <div ref={weddingRef} className="py-28 bg-cinema px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isWeddingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
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
                animate={isWeddingInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.05 * i + 0.2 }}
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
                  <div
                    className={`w-full h-full bg-gradient-to-br ${item.gradient} group-hover:scale-105 transition-transform duration-700`}
                  />
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
      </div>
    </section>
  )
}
