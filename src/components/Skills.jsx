import './Skills.css'

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'purple',
    skills: [
      { name: 'React', level: 92 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 88 },
    ]
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'blue',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'Python', level: 70 },
      { name: 'REST APIs', level: 87 },
      { name: 'GraphQL', level: 65 },
    ]
  },
  {
    title: 'Database & Cloud',
    icon: '🗄️',
    color: 'pink',
    skills: [
      { name: 'MongoDB', level: 78 },
      { name: 'PostgreSQL', level: 72 },
      { name: 'Firebase', level: 80 },
      { name: 'Supabase', level: 68 },
      { name: 'AWS (basics)', level: 55 },
    ]
  },
  {
    title: 'Tools & Workflow',
    icon: '🛠️',
    color: 'teal',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Figma', level: 75 },
      { name: 'Vite / Webpack', level: 80 },
      { name: 'Docker', level: 58 },
      { name: 'CI/CD', level: 62 },
    ]
  }
]

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="skills__orb" />

      <div className="container">
        <header className="section__header">
          <span className="section__label">My Toolkit</span>
          <h2 className="section__title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section__subtitle">
            A curated set of tools and technologies I use to build modern products.
          </p>
        </header>

        <div className="skills__grid">
          {SKILL_CATEGORIES.map(cat => (
            <div className={`skill-card glass-card skill-card--${cat.color}`} key={cat.title}>
              <div className="skill-card__header">
                <span className="skill-card__icon">{cat.icon}</span>
                <h3 className="skill-card__title">{cat.title}</h3>
              </div>
              <div className="skill-card__list">
                {cat.skills.map(skill => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-item__meta">
                      <span className="skill-item__name">{skill.name}</span>
                      <span className="skill-item__pct">{skill.level}%</span>
                    </div>
                    <div className="skill-item__bar">
                      <div
                        className="skill-item__fill"
                        style={{ '--pct': `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
