import Icon from './Icons.jsx'
import { business, whatsappLink } from '../data/site.js'
import './LocationSection.css'

const proximity = [
  { label: 'Kisumu CBD', detail: '12 minutes drive' },
  { label: 'Aga Khan Hospital, Kisumu', detail: '9 minutes drive' },
  { label: 'Kisumu International Airport', detail: '18 minutes drive' },
  { label: 'Nyanza Club & Lake Victoria shoreline', detail: '7 minutes drive' },
]

const nearby = {
  schools: ['Xavarian Primary School', 'Kisumu Junior Academy', 'St. Anne\'s Girls Secondary'],
  hospitals: ['Aga Khan Hospital, Kisumu', 'Jaramogi Oginga Odinga Teaching & Referral Hospital'],
  shopping: ['West End Shopping Mall', 'Kisumu City Mall', 'Mega Plaza'],
}

export default function LocationSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapsQuery)}`

  return (
    <section id="location" className="section location">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Location</span>
          <h2>Prime Location</h2>
          <p>
            The Ivy Residences sits on Riat Hills Road, just off Kakamega Road — close enough
            to town for convenience, quiet enough to feel like home.
          </p>
        </div>

        <div className="location__grid">
          <div className="location__map">
            <div className="location__map-placeholder">
              <Icon name="pin" width={34} height={34} />
              <p>Map preview — Riat Hills Road, Kisumu</p>
              <span>(Interactive map embed goes here in production)</span>
            </div>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary location__directions">
              <Icon name="pin" width={17} height={17} /> Get Directions
            </a>
          </div>

          <div className="location__info">
            <div className="location__address">
              <span className="eyebrow">Address</span>
              <p>{business.address}</p>
            </div>

            <ul className="location__proximity">
              {proximity.map((p) => (
                <li key={p.label}>
                  <span>{p.label}</span>
                  <span className="location__proximity-time">{p.detail}</span>
                </li>
              ))}
            </ul>

            <div className="location__nearby">
              <div>
                <h4>Schools</h4>
                <ul>{nearby.schools.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
              <div>
                <h4>Hospitals</h4>
                <ul>{nearby.hospitals.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
              <div>
                <h4>Shopping</h4>
                <ul>{nearby.shopping.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            </div>

            <div className="location__contact-strip">
              <a href={`tel:${business.phone.replace(/\s/g, '')}`}>
                <Icon name="phone" width={16} height={16} /> {business.phoneDisplay}
              </a>
              <a href={`mailto:${business.email}`}>
                <Icon name="mail" width={16} height={16} /> {business.email}
              </a>
              <a href={whatsappLink('Hello, I\'d like directions and more information about The Ivy Residences.')} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" width={16} height={16} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
