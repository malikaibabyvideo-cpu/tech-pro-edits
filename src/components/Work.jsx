const PROJECTS = [
  {
    title: 'Nova Athletics — Product film',
    category: 'Brand film · 4K',
    metric: '2.1M views in 3 weeks',
    tone: 'tone-ember',
  },
  {
    title: 'Karachi Nights — Travel series',
    category: 'Series · 6 episodes',
    metric: 'Edited in 9 days',
    tone: 'tone-violet',
  },
  {
    title: 'Lumen Skincare — Ad set',
    category: 'Performance ads · 12 cutdowns',
    metric: '3.4× ROAS lift',
    tone: 'tone-teal',
  },
  {
    title: 'Founder Diaries — Podcast clips',
    category: 'Short-form · 40 clips',
    metric: '1.2M views monthly',
    tone: 'tone-amber',
  },
]

export default function Work() {
  return (
    <section className="section section-alt" id="work">
      <div className="shell">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Selected work</span>
          <h2>Edits that earn the watch.</h2>
          <p className="section-sub">
            A few recent projects from creators, D2C brands and studios that trust Sara with the
            final cut.
          </p>
        </div>

        <div className="work-grid">
          {PROJECTS.map((project, index) => (
            <article className="work-card" key={project.title} data-reveal>
              <div className={`work-thumb ${project.tone}`}>
                <span className="work-index">0{index + 1}</span>
                <span className="work-play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M8 5.5v13l11-6.5z" />
                  </svg>
                </span>
              </div>
              <div className="work-body">
                <span className="work-category">{project.category}</span>
                <h3>{project.title}</h3>
                <span className="work-metric">{project.metric}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
