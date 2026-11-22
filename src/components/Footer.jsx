export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            S
          </span>
          <span className="brand-text">
            <strong>Sara</strong>
            <small>Tech Pro Edits</small>
          </span>
        </div>
        <nav aria-label="Footer">
          <a href="#tools">Tools</a>
          <a href="#work">Work</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <p>© {new Date().getFullYear()} Sara · Tech Pro Edits. All rights reserved.</p>
      </div>
    </footer>
  )
}
