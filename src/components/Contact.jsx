import { useState } from 'react'

const EMPTY = { name: '', email: '', brief: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const submit = (event) => {
    event.preventDefault()
    setSent(true)
    setForm(EMPTY)
  }

  return (
    <section className="section section-contact" id="contact">
      <div className="shell contact-grid">
        <div className="contact-copy" data-reveal>
          <span className="eyebrow">Start a project</span>
          <h2>Send the footage. We'll send back the cut.</h2>
          <p className="section-sub">
            Tell us what you're making and when it needs to land. Most projects start within a day.
          </p>
          <ul className="contact-points">
            <li>
              <span>Email</span>
              <a href="mailto:hello@sara.studio">hello@sara.studio</a>
            </li>
            <li>
              <span>Studio hours</span>
              <strong>Mon–Sat, 9am – 9pm PKT</strong>
            </li>
            <li>
              <span>Turnaround</span>
              <strong>24–48 hours on most edits</strong>
            </li>
          </ul>
        </div>

        <div className="contact-card" data-reveal>
          {sent ? (
            <div className="form-sent" role="status">
              <span className="sent-mark" aria-hidden="true">
                ✓
              </span>
              <h3>Brief received.</h3>
              <p>We'll reply within one working day with a quote and a delivery date.</p>
              <button className="btn btn-ghost" type="button" onClick={() => setSent(false)}>
                Send another brief
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <h3>Project brief</h3>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={update('name')}
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@studio.com"
                  value={form.email}
                  onChange={update('email')}
                />
              </label>
              <label>
                <span>What are you making?</span>
                <textarea
                  name="brief"
                  rows="4"
                  required
                  placeholder="A 60-second launch film, delivery by Friday…"
                  value={form.brief}
                  onChange={update('brief')}
                />
              </label>
              <button className="btn btn-full" type="submit">
                Send brief
              </button>
              <p className="form-note">We reply within one working day.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
