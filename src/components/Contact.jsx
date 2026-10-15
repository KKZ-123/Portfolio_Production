import { useState } from 'react'
import './Contact.css'

const CONTACT_INFO = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@aungkyaw.dev',
    href: 'mailto:hello@aungkyaw.dev',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: '/in/aungkyaw',
    href: 'https://linkedin.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: '@aungkyaw',
    href: 'https://github.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Location',
    value: 'Yangon, Myanmar',
    href: null,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    // Simulate sending
    await new Promise(r => setTimeout(r, 1800))
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section className="contact section" id="contact">
      <div className="contact__orb" />

      <div className="container">
        <header className="section__header">
          <span className="section__label">Contact</span>
          <h2 className="section__title">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="section__subtitle">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's make something great.
          </p>
        </header>

        <div className="contact__grid">
          {/* Left: Info */}
          <div className="contact__info">
            <div className="contact__intro glass-card">
              <h3 className="contact__intro-title">Get in touch</h3>
              <p className="contact__intro-text">
                I'm currently available for freelance work and open to full-time opportunities.
                Whether you have a question or just want to say hi, my inbox is always open!
              </p>
              <div className="divider" style={{ margin: '24px 0', marginLeft: 0 }} />
              <ul className="contact__list">
                {CONTACT_INFO.map(item => (
                  <li className="contact__item" key={item.label}>
                    <span className="contact__item-icon">{item.icon}</span>
                    <div>
                      <span className="contact__item-label">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="contact__item-value contact__item-value--link"
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact__item-value">{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact__form-wrapper">
            <form className="contact__form glass-card" onSubmit={handleSubmit} noValidate>
              <div className="form__row">
                <div className="form__field">
                  <label className="form__label" htmlFor="name">Name</label>
                  <input
                    className="form__input"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form__field">
                  <label className="form__label" htmlFor="email">Email</label>
                  <input
                    className="form__input"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form__field">
                <label className="form__label" htmlFor="subject">Subject</label>
                <input
                  className="form__input"
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form__field">
                <label className="form__label" htmlFor="message">Message</label>
                <textarea
                  className="form__input form__textarea"
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn btn-primary form__submit ${status === 'sending' ? 'form__submit--loading' : ''}`}
                disabled={status === 'sending' || status === 'success'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="spinner" />
                    Sending…
                  </>
                ) : status === 'success' ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                    </svg>
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="form__success">
                  🎉 Thanks for reaching out! I'll get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
