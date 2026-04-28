'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Pinterest', href: '#' },
  { label: 'Email', href: 'mailto:hello@lingerandbloom.com' },
]

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <footer id="contact" ref={ref} className="bg-cinema border-t border-gold/10">
      {/* Contact band */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold/50 mb-6">Begin a Conversation</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-cream mb-6 leading-tight">
              Let&rsquo;s create something worth lingering in.
            </h2>
            <p className="font-cormorant italic text-cream/50 text-lg max-w-sm">
              Whether you&rsquo;re planning an intimate dinner, a theatrical event, or an editorial commission — we&rsquo;d love to hear about it.
            </p>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[9px] tracking-[0.2em] uppercase text-cream/40 block mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border border-cream/10 text-cream placeholder-cream/20 px-4 py-3 font-cormorant text-base focus:outline-none focus:border-gold/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-[9px] tracking-[0.2em] uppercase text-cream/40 block mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-transparent border border-cream/10 text-cream placeholder-cream/20 px-4 py-3 font-cormorant text-base focus:outline-none focus:border-gold/40 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="font-mono text-[9px] tracking-[0.2em] uppercase text-cream/40 block mb-2">Interest</label>
                <select className="w-full bg-cinema border border-cream/10 text-cream/70 px-4 py-3 font-cormorant text-base focus:outline-none focus:border-gold/40 transition-colors appearance-none">
                  <option value="">Select a service...</option>
                  <option>Florals & Tablescapes</option>
                  <option>Supper & Cinema Series</option>
                  <option>Weddings</option>
                  <option>Private Events</option>
                  <option>Editorial & Still Life</option>
                  <option>Print Commission</option>
                </select>
              </div>
              <div>
                <label className="font-mono text-[9px] tracking-[0.2em] uppercase text-cream/40 block mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your vision..."
                  className="w-full bg-transparent border border-cream/10 text-cream placeholder-cream/20 px-4 py-3 font-cormorant text-base focus:outline-none focus:border-gold/40 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="self-start font-mono text-xs tracking-[0.2em] uppercase bg-gold text-cinema px-8 py-4 hover:bg-cream transition-colors duration-300"
              >
                Send Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-playfair text-sm text-cream/40 tracking-wider">
            Linger & Bloom
          </p>
          <div className="flex items-center gap-8">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-mono text-[10px] tracking-[0.2em] uppercase text-cream/30 hover:text-gold transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <p className="font-mono text-[10px] text-cream/20 tracking-wider">
            &copy; {new Date().getFullYear()} Linger & Bloom
          </p>
        </div>
      </div>
    </footer>
  )
}
