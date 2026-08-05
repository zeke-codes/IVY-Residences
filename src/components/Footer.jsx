import { Link, useLocation, useNavigate } from 'react-router-dom'
import Icon from './Icons.jsx'
import { business, whatsappLink } from '../data/site.js'
import './Footer.css'

const quickLinks = [
  { label: 'Apartments', href: '#apartments' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'X', href: 'https://x.com' },
]

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  const goTo = (href) => (e) => {
    e.preventDefault()
    if (onHome) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    else navigate('/' + href)
  }

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__brand-name">
            <span className="footer__brand-mark">IR</span>
            The Ivy Residences
          </div>
          <p>
            A modern apartment development in Kisumu, Kenya — designed for comfortable,
            secure, and convenient living.
          </p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                {s.label[0]}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.href}><a href={l.href} onClick={goTo(l.href)}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li><Icon name="phone" width={15} height={15} /> {business.phoneDisplay}</li>
            <li><Icon name="mail" width={15} height={15} /> {business.email}</li>
            <li>
              <a href={whatsappLink('Hello, I found The Ivy Residences website and would like more information.')} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" width={15} height={15} /> WhatsApp Us
              </a>
            </li>
            <li><Icon name="pin" width={15} height={15} /> {business.address}</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} The Ivy Residences. All rights reserved.</span>
          <span className="footer__demo-note">Demo project — a portfolio example, not a live listing.</span>
        </div>
      </div>
    </footer>
  )
}
