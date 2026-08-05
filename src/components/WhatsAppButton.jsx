import Icon from './Icons.jsx'
import { whatsappLink } from '../data/site.js'
import './WhatsAppButton.css'

export function WhatsAppInline({ message, label = 'WhatsApp Us', variant = 'dark', className = '' }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-${variant} whatsapp-inline ${className}`}
    >
      <Icon name="whatsapp" width={18} height={18} />
      {label}
    </a>
  )
}

export default function WhatsAppFloat() {
  const message = "Hello, I'm interested in The Ivy Residences and would like to know more about the available apartments."
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <Icon name="whatsapp" width={26} height={26} />
    </a>
  )
}
