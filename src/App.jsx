import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Tools from './components/Tools.jsx'
import Work from './components/Work.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function useRevealOnScroll() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useRevealOnScroll()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Tools />
        <Work />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
