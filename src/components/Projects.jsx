import { useState } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    title: 'DevFlow — Project Manager',
    description: 'A full-stack Agile project management tool with real-time collaboration, Kanban boards, and sprint tracking. Built for remote teams.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'fullstack',
    gradient: 'from-purple',
    live: 'https://example.com',
    code: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'ShopSphere — E-Commerce',
    description: 'Modern e-commerce platform with product search, cart management, Stripe payments, and an admin dashboard.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
    category: 'fullstack',
    gradient: 'from-blue',
    live: 'https://example.com',
    code: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'AuraUI — Component Library',
    description: 'An accessible, dark-mode-first React component library with 40+ components, animations, and full TypeScript support.',
    tags: ['React', 'TypeScript', 'Storybook', 'CSS'],
    category: 'frontend',
    gradient: 'from-pink',
    live: 'https://example.com',
    code: 'https://github.com',
    featured: false,
  },
  {
    id: 4,
    title: 'WeatherLens',
    description: 'A beautiful weather app using OpenWeather API with location-based forecasts, animated conditions, and offline support.',
    tags: ['React', 'PWA', 'API', 'CSS'],
    category: 'frontend',
    gradient: 'from-teal',
    live: 'https://example.com',
    code: 'https://github.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Nexus API Gateway',
    description: 'High-performance REST & GraphQL API gateway with rate-limiting, JWT auth, caching layer, and comprehensive logging.',
    tags: ['Node.js', 'Express', 'Redis', 'GraphQL'],
    category: 'backend',
    gradient: 'from-orange',
    live: null,
    code: 'https://github.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Analytiq Dashboard',
    description: 'Real-time analytics dashboard with interactive charts, filterable data tables, and CSV export functionality.',
    tags: ['React', 'D3.js', 'WebSocket', 'Node.js'],
    category: 'fullstack',
    gradient: 'from-purple',
    live: 'https://example.com',
    code: 'https://github.com',
    featured: false,
  },
]

const FILTERS = ['all', 'fullstack', 'frontend', 'backend']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = PROJECTS.filter(p =>
    activeFilter === 'all' ? true : p.category === activeFilter
  )

  return (
    <section className="projects section" id="projects">
      <div className="projects__orb" />

      <div className="container">
        <header className="section__header">
          <span className="section__label">Portfolio</span>
          <h2 className="section__title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section__subtitle">
            A selection of work I'm proud of — from full-stack apps to open-source libraries.
          </p>
        </header>

        {/* Filter tabs */}
        <div className="projects__filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map(project => (
            <article className={`project-card glass-card project-card--${project.gradient}`} key={project.id}>
              {/* Header / Mock Preview */}
              <div className={`project-card__preview project-card__preview--${project.gradient}`}>
                {project.featured && (
                  <span className="project-card__featured">✦ Featured</span>
                )}
                <div className="preview__dots">
                  <span /><span /><span />
                </div>
                <div className="preview__title">{project.title.split(' — ')[0]}</div>
              </div>

              {/* Content */}
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                {/* Tags */}
                <div className="project-card__tags">
                  {project.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-card__links">
                  <a href={project.code} className="project-link" target="_blank" rel="noopener noreferrer" aria-label="Source code">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  {project.live && (
                    <a href={project.live} className="project-link project-link--primary" target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
