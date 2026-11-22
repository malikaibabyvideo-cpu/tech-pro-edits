const WAVE = [38, 62, 48, 84, 56, 92, 44, 70, 96, 58, 36, 76, 52, 88, 42, 66, 94, 50, 34, 72, 60, 86, 46, 64]

const STATS = [
  { value: '480+', label: 'Projects delivered' },
  { value: '12h', label: 'Average turnaround' },
  { value: '4.9/5', label: 'Client rating' },
  { value: '38M', label: 'Views generated' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="shell hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            AI-assisted editing studio
          </span>
          <h1>
            Cinematic edits,
            <br />
            delivered <span className="accent-word">overnight</span>.
          </h1>
          <p className="lead">
            Sara is the editing studio for creators and brands. Send the footage, get back a finished
            cut — colour, sound, captions and vertical cutdowns, polished by humans who care about
            the details.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#contact">
              Start a project
            </a>
            <a className="btn btn-ghost" href="#work">
              See the work
            </a>
          </div>
          <dl className="stats">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="editor-card" aria-hidden="true">
          <div className="editor-bar">
            <span className="editor-dots">
              <i />
              <i />
              <i />
            </span>
            <span className="editor-file">sara_grade_v3.prproj</span>
            <span className="editor-chip">AI grade applied</span>
          </div>

          <div className="editor-preview">
            <div className="preview-frame">
              <button className="play" type="button" tabIndex={-1}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
              </button>
              <span className="preview-tag">4K · 24 fps</span>
            </div>
            <div className="preview-meta">
              <span>00:01:24:08</span>
              <span className="preview-scrub">
                <i />
              </span>
              <span>00:03:12:00</span>
            </div>
          </div>

          <div className="timeline">
            <div className="track">
              <span className="track-label">V1</span>
              <span className="clip clip-a" style={{ width: '34%' }} />
              <span className="clip clip-b" style={{ width: '22%' }} />
              <span className="clip clip-c" style={{ width: '38%' }} />
            </div>
            <div className="track">
              <span className="track-label">V2</span>
              <span className="clip clip-d" style={{ width: '18%', marginLeft: '26%' }} />
              <span className="clip clip-e" style={{ width: '30%', marginLeft: '6%' }} />
            </div>
            <div className="track">
              <span className="track-label">A1</span>
              <span className="wave">
                {WAVE.map((height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
