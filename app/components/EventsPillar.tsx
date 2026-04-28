'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const events = [
  {
    title: 'Regency Study',
    subtitle: 'A Literary Dinner',
    description:
      'Moss-covered urns, quill-and-ink arrangements, and candlelit reading corners. An evening drawn from Jane Austen and set in a candlelit drawing room.',
    details: ['20–40 Guests', 'Private Residence / Estate', 'Full Styling & Florals'],
    accent: '#b8976a',
    palette: 'from-[#1c1810] via-[#12100c] to-[#0a0908]',
    lookbook: [
      { label: 'Entry Arch', g: 'from-[#2a2010] to-[#0a0908]' },
      { label: 'Dining Table', g: 'from-[#1c1810] to-[#12100c]' },
      { label: 'Candle Bank', g: 'from-[#2e2010] to-[#0a0908]' },
      { label: 'Reading Nook', g: 'from-[#12100c] to-[#1c1810]' },
    ],
  },
  {
    title: 'Night of Betrayal',
    subtitle: 'A Murder Mystery Dinner',
    description:
      'Dark florals, blood-red roses in tarnished silver, and theatrical fog. A night of suspense wrapped in gothic glamour.',
    details: ['12–60 Guests', 'Ballroom / Private Venue', 'Theming, Props & Florals'],
    accent: '#c4968a',
    palette: 'from-[#1e0d0d] via-[#1e1520] to-[#0a0908]',
    lookbook: [
      { label: 'Gothic Arch', g: 'from-[#2e0d0d] to-[#1e1520]' },
      { label: 'Centrepiece', g: 'from-[#1e0d1a] to-[#0a0908]' },
      { label: 'Candelabra', g: 'from-[#1e1520] to-[#2e0d0d]' },
      { label: 'Place Setting', g: 'from-[#2a1a1a] to-[#0a0908]' },
    ],
  },
]

const testimonials = [
  {
    quote: 'The Regency Study dinner was unlike anything our guests had experienced. Every detail felt considered, intentional, otherworldly.',
    name: 'Catherine M.',
    event: 'Regency Study · Private Residence',
  },
  {
    quote: 'Our Night of Betrayal was the most talked-about event of the year. Linger & Bloom created an atmosphere that transported everyone.',
    name: 'James & Priya K.',
    event: 'Night of Betrayal · The Manor House',
  },
  {
    quote: 'I cannot overstate how transformative the floral design was. Guests were genuinely moved the moment they walked in.',
    name: 'Sophie L.',
    event: 'Regency Study · Country Estate',
  },
]

function LookbookGrid({ items, accent }: { items: { label: string; g: string }[], accent: string }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {items.map((item) => (
        <div key={item.label} className="relative group overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <div className={`w-full h-full bg-gradient-to-br ${item.g} group-hover:scale-105 transition-transform duration-700`} />
          <div className="absolute inset-0 flex items-end p-2">
            <span className="font-mono text-[9px] tracking-[0.15em] uppercase" style={{ color: accent + '99' }}>
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

function TestimonialCarousel() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="border-t border-gold/15 pt-16 mt-16">
      <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold/40 mb-10 text-center">What Guests Say</p>
      <div className="relative max-w-2xl mx-auto min-h-[10rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="font-cormorant text-2xl italic text-cream/80 leading-relaxed mb-6">
              &ldquo;{testimonials[idx].quote}&rdquo;
            </p>
            <p className="font-mono text-xs text-gold/60 tracking-widest">{testimonials[idx].name}</p>
            <p className="font-mono text-[10px] text-cream/30 tracking-wider mt-1">{testimonials[idx].event}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'bg-gold w-6' : 'bg-gold/25'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function EventsPillar() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const event = events[active]

  return (
    <section id="events" ref={sectionRef} className="py-32 bg-charcoal/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-20"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold/60 mb-4">02 / Private Events</p>
          <h2 className="font-playfair text-5xl md:text-6xl text-cream mb-6">
            Evenings By Design
          </h2>
          <p className="font-cormorant text-xl text-cream/50 italic max-w-lg">
            Immersive private events styled around a narrative, from intimate dinners to theatrical gatherings.
          </p>
        </motion.div>

        {/* Event selector */}
        <div className="flex gap-2 mb-12">
          {events.map((e, i) => (
            <button
              key={e.title}
              onClick={() => setActive(i)}
              className={`font-mono text-xs tracking-[0.15em] uppercase px-5 py-3 border transition-all duration-300 ${
                active === i
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-cream/10 text-cream/40 hover:border-cream/30 hover:text-cream/70'
              }`}
            >
              {e.title}
            </button>
          ))}
        </div>

        {/* Magazine spread */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-0 border border-gold/15"
          >
            {/* Left — hero visual */}
            <div
              className={`relative bg-gradient-to-br ${event.palette} min-h-[420px] flex flex-col justify-end p-10`}
            >
              <div className="crt-scanlines absolute inset-0 opacity-10 pointer-events-none" />
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: event.accent + '80' }}>
                {event.subtitle}
              </p>
              <h3 className="font-playfair text-4xl md:text-5xl text-cream mb-4">{event.title}</h3>
              <p className="font-cormorant italic text-cream/60 text-lg max-w-sm">{event.description}</p>
              <ul className="mt-6 flex flex-col gap-1">
                {event.details.map((d) => (
                  <li key={d} className="font-mono text-[10px] tracking-widest uppercase text-cream/40">
                    — {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — lookbook grid */}
            <div className="bg-cinema p-8 flex flex-col justify-between">
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold/40 mb-4">Lookbook Detail</p>
                <LookbookGrid items={event.lookbook} accent={event.accent} />
              </div>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-block font-mono text-xs tracking-[0.2em] uppercase border px-7 py-3 transition-all duration-300 hover:bg-gold hover:text-cinema"
                  style={{ borderColor: event.accent + '40', color: event.accent }}
                >
                  Enquire About This Event
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Testimonial carousel */}
        <TestimonialCarousel />
      </div>
    </section>
  )
}
