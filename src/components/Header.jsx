import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#tools', label: 'Tools' },
  { href: '#work', label: 'Work' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
      <div className="shell header-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            S
          </span>
          <span className="brand-text">
            <strong>Sara</strong>
            <small>Tech Pro Edits</small>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="Main">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-small header-cta" href="#contact">
          Start a project
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="nav-mobile" aria-label="Mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-small" href="#contact" onClick={() => setOpen(false)}>
            Start a project
          </a>
        </nav>
      )}
    </header>
  )
}
