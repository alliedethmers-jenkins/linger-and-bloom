'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const editorials = [
  {
    title: 'Still Life No. 1',
    category: 'Tabletop',
    publication: 'Private Commission',
    size: 'large',
    image: '/images/editorial-squash.webp',
    gradient: 'from-[#c8d4c0] to-[#b8c4b0]',
    dark: false,
  },
  {
    title: 'The Sandy Hour',
    category: 'Objects',
    publication: 'Editorial',
    size: 'small',
    image: '/images/editorial-sandy.webp',
    gradient: 'from-[#e8dfc9] to-[#d8cfb9]',
    dark: true,
  },
  {
    title: 'Red Study',
    category: 'Arrangement',
    publication: 'Magazine Feature',
    size: 'small',
    image: '/images/red-arrangement.webp',
    gradient: 'from-[#e8d0c8] to-[#d8c0b8]',
    dark: false,
  },
  {
    title: 'Mirror Table',
    category: 'Tabletop',
    publication: 'Solo Study',
    size: 'small',
    image: '/images/mirror-table.webp',
    gradient: 'from-[#d4e0d4] to-[#c4d0c4]',
    dark: false,
  },
  {
    title: 'Form & Flower',
    category: 'Editorial',
    publication: 'Annual Collection',
    size: 'small',
    image: '/images/anthurium-editorial.webp',
    gradient: 'from-[#dde4dc] to-[#cdd4cc]',
    dark: false,
  },
  {
    title: 'Red Light',
    category: 'Portrait',
    publication: 'Editorial',
    size: 'large',
    image: '/images/red-portrait.webp',
    gradient: 'from-[#e8c0c0] to-[#d8b0b0]',
    dark: false,
  },
  {
    title: 'Night of Betrayal',
    category: 'Dark Florals',
    publication: 'Event Series',
    size: 'small',
    image: '/images/night-betrayal-florals.webp',
    gradient: 'from-[#c8d0c0] to-[#b8c0b0]',
    dark: false,
  },
  {
    title: 'Dinner, Overhead',
    category: 'Tabletop',
    publication: 'Private Commission',
    size: 'small',
    image: '/images/dinner-overhead.webp',
    gradient: 'from-[#e8e0d0] to-[#d8d0c0]',
    dark: true,
  },
]

function EditorialLabel({ item }: { item: typeof editorials[0] }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 to-transparent">
      <p className="font-mono text-[9px] tracking-[0.2em] uppercase mb-0.5 text-white/60">{item.category}</p>
      <p className="font-cormorant text-base italic text-white">{item.title}</p>
      <p className="font-mono text-[9px] tracking-wider mt-0.5 text-white/40">{item.publication}</p>
    </div>
  )
}

export default function EditorialPillar() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const large = editorials.filter((e) => e.size === 'large')
  const small = editorials.filter((e) => e.size === 'small')

  return (
    <section id="editorial" ref={sectionRef} className="py-32 bg-cinema">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-20"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold/70 mb-4">03 / Editorial & Still Life</p>
          <h2 className="font-playfair text-5xl md:text-6xl text-ink mb-6">The Quiet Work</h2>
          <p className="font-cormorant text-xl text-charcoal/60 italic max-w-lg">
            Still life studies, botanical arrangements, and object portraits — the meditative practice behind every event.
          </p>
          <div className="mt-8 h-px w-24 bg-gold/20" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {/* First large — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-2 row-span-2 relative group overflow-hidden cursor-pointer"
            style={{ aspectRatio: '1/1' }}
          >
            {large[0].image ? (
              <Image
                src={large[0].image}
                alt={large[0].title}
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${large[0].gradient}`} />
            )}
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
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${item.gradient}`} />
              )}
              <EditorialLabel item={item} />
            </motion.div>
          ))}

          {/* Second large — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="col-span-2 relative group overflow-hidden cursor-pointer"
            style={{ aspectRatio: '2/1' }}
          >
            {large[1].image ? (
              <Image
                src={large[1].image}
                alt={large[1].title}
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${large[1].gradient}`} />
            )}
            <EditorialLabel item={large[1]} />
          </motion.div>

          {/* Remaining small */}
          {small.slice(4).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05 * i + 0.5 }}
              className="relative group overflow-hidden cursor-pointer"
              style={{ aspectRatio: '1/1' }}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${item.gradient}`} />
              )}
              <EditorialLabel item={item} />
            </motion.div>
          ))}
        </div>

        {/* Print CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 border-t border-gold/20 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="font-playfair text-2xl text-ink mb-2">Available as Limited Prints</p>
            <p className="font-cormorant italic text-charcoal/50">Select works available for purchase. Custom commissions welcome.</p>
          </div>
          <a
            href="#contact"
            className="font-mono text-xs tracking-[0.2em] uppercase border border-gold/30 text-gold px-7 py-3 hover:bg-gold hover:text-cinema transition-all duration-300 shrink-0"
          >
            Enquire About Prints
          </a>
        </motion.div>
      </div>
    </section>
  )
}
