import { useEffect, useRef } from 'react'
import './Hero.css'

const TYPED_STRINGS = [
  'Full Stack Developer',
  'UI/UX Designer',
  'React Enthusiast',
  'Open Source Contributor',
]

export default function Hero() {
  const typedRef = useRef(null)
  const indexRef = useRef(0)
  const charRef = useRef(0)
  const deletingRef = useRef(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const type = () => {
      const current = TYPED_STRINGS[indexRef.current]
      const el = typedRef.current
      if (!el) return

      if (!deletingRef.current) {
        el.textContent = current.slice(0, charRef.current + 1)
        charRef.current++
        if (charRef.current === current.length) {
          deletingRef.current = true
          timeoutRef.current = setTimeout(type, 1800)
          return
        }
      } else {
        el.textContent = current.slice(0, charRef.current - 1)
        charRef.current--
        if (charRef.current === 0) {
          deletingRef.current = false
          indexRef.current = (indexRef.current + 1) % TYPED_STRINGS.length
        }
      }
      timeoutRef.current = setTimeout(type, deletingRef.current ? 55 : 90)
    }
    timeoutRef.current = setTimeout(type, 700)
    return () => clearTimeout(timeoutRef.current)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      {/* Background orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      {/* Grid overlay */}
      <div className="hero__grid" />

      <div className="hero__inner container">
        {/* Availability badge */}
        <div className="hero__badge">
          <span className="badge__dot" />
          Available for work
        </div>

        {/* Headline */}
        <h1 className="hero__title">
          Hi, I'm{' '}
          <span className="gradient-text">Kgkhant</span>
        </h1>

        {/* Typed text */}
        <div className="hero__typed-wrapper">
          <span className="hero__typed-label">I'm a </span>
          <span className="hero__typed" ref={typedRef} />
          <span className="hero__cursor">|</span>
        </div>

        {/* Description */}
        <p className="hero__description">
          Crafting beautiful, performant web experiences with modern technologies.
          Passionate about clean code, pixel-perfect designs, and exceptional user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="hero__cta">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('projects')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
            View Projects
          </button>
          <button
            className="btn btn-outline"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Social Links */}
        <div className="hero__socials">
          {[
            { href: 'https://github.com', label: 'GitHub', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>) },
            { href: 'https://linkedin.com', label: 'LinkedIn', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>) },
            { href: 'https://twitter.com', label: 'Twitter', icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>) },
          ].map(s => (
            <a key={s.label} href={s.href} className="hero__social-link" aria-label={s.label} target="_blank" rel="noopener noreferrer">
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="hero__scroll" onClick={() => scrollToSection('about')} aria-label="Scroll down">
        <span className="scroll__mouse">
          <span className="scroll__dot" />
        </span>
        <span className="scroll__label">Scroll</span>
      </button>
    </section>
  )
}
