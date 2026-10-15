import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__left">
          <a href="#hero" className="footer__logo" onClick={e => { e.preventDefault(); scrollToTop() }}>
            <span className="logo__bracket">&lt;</span>KG<span className="logo__bracket">/&gt;</span>
          </a>
          <p className="footer__tagline">
            Building the web, one pixel at a time.
          </p>
        </div>

        <div className="footer__links">
          {['About', 'Skills', 'Projects', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="footer__link"
              onClick={e => {
                e.preventDefault()
                document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {item}
            </a>
          ))}
        </div>

        <button className="footer__back-top" onClick={scrollToTop} aria-label="Back to top">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className="footer__bottom">
        <p>© {year} . Designed &amp; built with ❤️ using React + Vite.</p>
      </div>
    </footer>
  )
}
