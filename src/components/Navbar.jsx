import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Icon from './Icons.jsx'
import './Navbar.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Apartments', href: '#apartments' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  const goTo = (href) => (e) => {
    e.preventDefault()
    setOpen(false)
    if (onHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/' + href)
    }
  }

  return (
    <header className={`navbar ${scrolled || !onHome ? 'navbar--solid' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          <span className="navbar__brand-mark">IR</span>
          <span className="navbar__brand-text">
            The Ivy Residences
            <small>Kisumu, Kenya</small>
          </span>
        </Link>

        <nav className="navbar__links">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={goTo(l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="navbar__cta">
          <a href="#book-viewing" onClick={goTo('#book-viewing')} className="btn btn-primary btn-sm">
            Book a Viewing
          </a>
        </div>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={goTo(l.href)}>
              {l.label}
            </a>
          ))}
          <a href="#book-viewing" onClick={goTo('#book-viewing')} className="btn btn-primary btn-block">
            Book a Viewing
          </a>
        </div>
      )}
    </header>
  )
}
