import './About.css'

const STATS = [
  { value: '3+', label: 'Years Experience' },
  { value: '40+', label: 'Projects Completed' },
  { value: '15+', label: 'Happy Clients' },
  { value: '5+', label: 'Open Source Repos' },
]

export default function About() {
  return (
    <section className="about section" id="about">
      {/* Subtle background glow */}
      <div className="about__glow" />

      <div className="container">
        <div className="about__grid">
          {/* Left: Visual */}
          <div className="about__visual">
            <div className="avatar-wrapper">
              <div className="avatar">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="avatar__svg">
                  {/* Simple abstract dev illustration */}
                  <circle cx="100" cy="100" r="90" fill="url(#bg)" />
                  <circle cx="100" cy="78" r="34" fill="url(#face)" />
                  <path d="M40 160 Q100 130 160 160 Q160 190 100 200 Q40 190 40 160Z" fill="url(#body)" />
                  {/* Code lines decoration */}
                  <rect x="60" y="110" width="36" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
                  <rect x="60" y="120" width="24" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
                  <defs>
                    <linearGradient id="bg" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#1a1a28" />
                      <stop offset="100%" stopColor="#13131e" />
                    </linearGradient>
                    <linearGradient id="face" x1="70" y1="50" x2="130" y2="110" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#7c6ef2" />
                      <stop offset="100%" stopColor="#e879f9" />
                    </linearGradient>
                    <linearGradient id="body" x1="40" y1="130" x2="160" y2="200" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#5b50c9" />
                      <stop offset="100%" stopColor="#9d90f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* Floating badges */}
              <div className="float-badge float-badge--1">
                <span>⚡</span> React Expert
              </div>
              <div className="float-badge float-badge--2">
                <span>🎨</span> UI/UX
              </div>
              <div className="float-badge float-badge--3">
                <span>🚀</span> Node.js
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about__content">
            <span className="section__label">About Me</span>
            <h2 className="about__title">
              Turning ideas into{' '}
              <span className="gradient-text">digital reality</span>
            </h2>
            <div className="about__text">
              <p>
                I'm a Full Stack Developer and UI/UX Designer based in Myanmar, with a passion
                for building beautiful, functional web applications. I love bridging the gap
                between design and engineering to create seamless user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing
                to open-source projects, or mentoring budding developers. I believe great
                software is as much about the user as it is about the code.
              </p>
            </div>

            {/* Stats */}
            <div className="about__stats">
              {STATS.map(stat => (
                <div className="stat" key={stat.label}>
                  <span className="stat__value gradient-text">{stat.value}</span>
                  <span className="stat__label">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="about__actions">
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={e => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Let's Talk
              </a>
              <a
                href="/resume.pdf"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
