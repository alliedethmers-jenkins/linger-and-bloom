'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const editorials = [
  {
    title: 'Still Life No. 1',
    category: 'Tabletop',
    publication: 'Private Commission',
    size: 'large',
    gradient: 'from-[#f5f0e6] via-[#e8dfc9] to-[#ddd5c4]',
    textDark: true,
  },
  {
    title: 'The White Study',
    category: 'Still Life',
    publication: 'Editorial',
    size: 'small',
    gradient: 'from-[#f0ebe0] to-[#e0d8c8]',
    textDark: true,
  },
  {
    title: 'Dried & Gilded',
    category: 'Botanicals',
    publication: 'Magazine Feature',
    size: 'small',
    gradient: 'from-[#2a2010] to-[#1c1810]',
    textDark: false,
  },
  {
    title: 'Vessel Series III',
    category: 'Objects',
    publication: 'Solo Study',
    size: 'small',
    gradient: 'from-[#e8dfc9] via-[#d4cbb8] to-[#c4b8a0]',
    textDark: true,
  },
  {
    title: 'Winter Bloom',
    category: 'Seasonal',
    publication: 'Annual Collection',
    size: 'small',
    gradient: 'from-[#1e1520] to-[#2d1b1b]',
    textDark: false,
  },
  {
    title: 'The Amber Hour',
    category: 'Light Study',
    publication: 'Editorial',
    size: 'large',
    gradient: 'from-[#3a2810] via-[#2a1e0c] to-[#1a1208]',
    textDark: false,
  },
  {
    title: 'Petal & Paper',
    category: 'Flat Lay',
    publication: 'Private Commission',
    size: 'small',
    gradient: 'from-[#f5f0e6] to-[#e8dfc9]',
    textDark: true,
  },
  {
    title: 'Midnight Garden',
    category: 'Dark Still Life',
    publication: 'Gallery Print',
    size: 'small',
    gradient: 'from-[#0d1a0d] to-[#1a2a1a]',
    textDark: false,
  },
]

export default function EditorialPillar() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const large = editorials.filter((e) => e.size === 'large')
  const small = editorials.filter((e) => e.size === 'small')

  return (
    <section id="editorial" ref={sectionRef} className="py-32 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-20"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-charcoal/40 mb-4">03 / Editorial & Still Life</p>
          <h2 className="font-playfair text-5xl md:text-6xl text-charcoal mb-6">
            The Quiet Work
          </h2>
          <p className="font-cormorant text-xl text-charcoal/50 italic max-w-lg">
            Still life studies, botanical arrangements, and object portraits — the meditative practice behind every event.
          </p>
          <div className="mt-8 h-px w-24 bg-charcoal/20" />
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {/* First large piece — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-2 row-span-2 relative group overflow-hidden cursor-pointer"
            style={{ aspectRatio: '1/1' }}
          >
            <div className={`w-full h-full bg-gradient-to-br ${large[0].gradient} group-hover:scale-103 transition-transform duration-700`} />
            <EditorialLabel item={large[0]} />
          </motion.div>

          {/* Small pieces */}
          {small.slice(0, 4).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05 * i + 0.2 }}
              className="relative group overflow-hidden cursor-pointer"
              style={{ aspectRatio: '1/1' }}
            >
              <div className={`w-full h-full bg-gradient-to-br ${item.gradient} group-hover:scale-105 transition-transform duration-700`} />
              <EditorialLabel item={item} />
            </motion.div>
          ))}

          {/* Second large piece — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="col-span-2 relative group overflow-hidden cursor-pointer"
            style={{ aspectRatio: '2/1' }}
          >
            <div className={`w-full h-full bg-gradient-to-br ${large[1].gradient} group-hover:scale-103 transition-transform duration-700`} />
            <EditorialLabel item={large[1]} />
          </motion.div>

          {/* Remaining small pieces */}
          {small.slice(4).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05 * i + 0.5 }}
              className="relative group overflow-hidden cursor-pointer"
              style={{ aspectRatio: '1/1' }}
            >
              <div className={`w-full h-full bg-gradient-to-br ${item.gradient} group-hover:scale-105 transition-transform duration-700`} />
              <EditorialLabel item={item} />
            </motion.div>
          ))}
        </div>

        {/* Print / commission CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 border-t border-charcoal/15 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="font-playfair text-2xl text-charcoal mb-2">Available as Limited Prints</p>
            <p className="font-cormorant italic text-charcoal/50">Select works available for purchase. Custom commissions welcome.</p>
          </div>
          <a
            href="#contact"
            className="font-mono text-xs tracking-[0.2em] uppercase border border-charcoal/30 text-charcoal px-7 py-3 hover:bg-charcoal hover:text-parchment transition-all duration-300 shrink-0"
          >
            Enquire About Prints
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function EditorialLabel({ item }: { item: typeof editorials[0] }) {
  return (
    <div
      className={`absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        item.textDark ? 'bg-gradient-to-t from-black/30 to-transparent' : 'bg-gradient-to-t from-black/50 to-transparent'
      }`}
    >
      <p className={`font-mono text-[9px] tracking-[0.2em] uppercase mb-0.5 ${item.textDark ? 'text-charcoal/70' : 'text-cream/60'}`}>
        {item.category}
      </p>
      <p className={`font-cormorant text-base italic ${item.textDark ? 'text-charcoal' : 'text-cream'}`}>{item.title}</p>
      <p className={`font-mono text-[9px] tracking-wider mt-0.5 ${item.textDark ? 'text-charcoal/40' : 'text-cream/40'}`}>
        {item.publication}
      </p>
    </div>
  )
}
