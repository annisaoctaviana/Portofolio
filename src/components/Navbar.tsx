import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream/90 backdrop-blur-md border-b-2 border-ink/10' : ''}`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-2xl text-ink flex items-center gap-2">
          <span className="w-8 h-8 bg-sun rounded-full border-2 border-ink flex items-center justify-center text-sm">✦</span>
          Annisa <span className="text-rose">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="font-body font-600 text-sm text-ink/70 hover:text-ink transition-colors hover:underline decoration-rose decoration-2 underline-offset-4">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex btn-happy bg-rose text-white px-5 py-2 text-sm font-body">
          Hire Me 🎉
        </a>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div className={`w-6 h-0.5 bg-ink mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-ink mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-ink transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-72' : 'max-h-0'}`}>
        <ul className="flex flex-col gap-1 px-6 pb-6 bg-cream/95 backdrop-blur-md border-t-2 border-ink/10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="block py-3 font-body font-semibold text-ink/70 hover:text-rose transition-colors border-b border-ink/10" onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a href="#contact" className="btn-happy bg-rose text-white px-5 py-2 text-sm font-body w-full justify-center">Hire Me 🎉</a>
          </li>
        </ul>
      </div>
    </header>
  )
}
