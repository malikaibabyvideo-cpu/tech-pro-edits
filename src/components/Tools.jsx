const ICONS = {
  cut: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="6" cy="18" r="2.4" />
      <path d="M8.2 7.4 20 18M8.2 16.6 20 6" />
    </svg>
  ),
  grade: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M12 3a9 9 0 1 0 0 18c1.7 0 2.3-1.2 1.4-2.4-.9-1.2-.1-2.6 1.4-2.6H17a4 4 0 0 0 4-4c0-4.4-4-9-9-9Z" />
      <circle cx="8.4" cy="10" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="11.4" cy="7" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15.4" cy="8.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  captions: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M10 10.2a2.4 2.4 0 1 0 0 3.6M17.5 10.2a2.4 2.4 0 1 0 0 3.6" />
    </svg>
  ),
  cutout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M4 8.5V6a2 2 0 0 1 2-2h2.5M15.5 4H18a2 2 0 0 1 2 2v2.5M20 15.5V18a2 2 0 0 1-2 2h-2.5M8.5 20H6a2 2 0 0 1-2-2v-2.5" />
      <circle cx="12" cy="9.5" r="2.2" />
      <path d="M8.2 17c.6-2 2-3 3.8-3s3.2 1 3.8 3" />
    </svg>
  ),
  audio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M3 12h2M7 8.5v7M11 5.5v13M15 9v6M19 11h2" />
    </svg>
  ),
  shorts: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M10.6 12.4v3.2l2.8-1.6z" fill="currentColor" stroke="none" />
    </svg>
  ),
}

const TOOLS = [
  {
    icon: 'cut',
    title: 'Smart Cut',
    text: 'Best takes picked, dead air trimmed and rough cuts assembled from your raw footage.',
    tag: 'Assembly',
  },
  {
    icon: 'grade',
    title: 'Colour Grade',
    text: 'Film-grade looks matched to your brand palette, with skin tones kept honest.',
    tag: 'Colour',
  },
  {
    icon: 'captions',
    title: 'Captions & Subtitles',
    text: 'Frame-accurate subtitles in 30+ languages, styled to your channel.',
    tag: 'Text',
  },
  {
    icon: 'cutout',
    title: 'Background Removal',
    text: 'Clean cutouts for product and talking-head shots — no green screen needed.',
    tag: 'VFX',
  },
  {
    icon: 'audio',
    title: 'Audio Cleanup',
    text: 'Phone recordings turned into studio sound: noise removed, levels balanced.',
    tag: 'Sound',
  },
  {
    icon: 'shorts',
    title: 'Shorts Repurposer',
    text: 'One long video becomes ten vertical cutdowns, each with its own hook.',
    tag: 'Repurpose',
  },
]

export default function Tools() {
  return (
    <section className="section" id="tools">
      <div className="shell">
        <div className="section-head" data-reveal>
          <span className="eyebrow">What Sara handles</span>
          <h2>Every pass of the edit, under one roof.</h2>
          <p className="section-sub">
            The repetitive work runs on Sara's models. The judgement calls stay with our editors — so
            the result feels directed, not automated.
          </p>
        </div>

        <div className="tool-grid">
          {TOOLS.map((tool) => (
            <article className="tool-card" key={tool.title} data-reveal>
              <div className="tool-top">
                <span className="tool-icon">{ICONS[tool.icon]}</span>
                <span className="tool-tag">{tool.tag}</span>
              </div>
              <h3>{tool.title}</h3>
              <p>{tool.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
