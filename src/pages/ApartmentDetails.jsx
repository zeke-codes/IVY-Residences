import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Icon from '../components/Icons.jsx'
import Lightbox from '../components/Lightbox.jsx'
import RequestInfoModal from '../components/RequestInfoModal.jsx'
import { WhatsAppInline } from '../components/WhatsAppButton.jsx'
import { apartments, statusMeta, formatPrice } from '../data/apartments.js'
import { amenities } from '../data/site.js'
import './ApartmentDetails.css'

export default function ApartmentDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const apartment = apartments.find((a) => a.id === id)

  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [showRequestInfo, setShowRequestInfo] = useState(false)

  if (!apartment) {
    return (
      <div className="details-missing">
        <h2>Apartment not found</h2>
        <p>The listing you're looking for may have been moved or sold.</p>
        <Link to="/#apartments" className="btn btn-primary">Back to Apartments</Link>
      </div>
    )
  }

  const meta = statusMeta[apartment.status]
  const soldOut = apartment.status === 'sold-out'

  const goBookViewing = () => {
    navigate('/#book-viewing')
    setTimeout(() => document.querySelector('#book-viewing')?.scrollIntoView({ behavior: 'smooth' }), 60)
  }

  return (
    <div className="details">
      <div className="details__hero">
        <img src={apartment.heroImage} alt={apartment.name} />
        <div className="details__hero-scrim" />
        <div className="container details__hero-content">
          <Link to="/#apartments" className="details__back">&larr; Back to Apartments</Link>
          <span className="tag" style={{ color: meta.color, background: meta.bg }}>{meta.label}</span>
          <h1>{apartment.name}</h1>
          <span className="details__price">{formatPrice(apartment.price)}</span>
        </div>
      </div>

      <div className="container details__body">
        <div className="details__gallery">
          {apartment.gallery.map((src, i) => (
            <button key={src} className="details__gallery-item" onClick={() => setLightboxIndex(i)} aria-label={`View image ${i + 1} of ${apartment.name}`}>
              <img src={src} alt={`${apartment.name} view ${i + 1}`} />
            </button>
          ))}
        </div>

        <div className="details__grid">
          <div className="details__main">
            <div className="details__specs-bar">
              <div><Icon name="bed" /><span>{apartment.bedrooms}</span><small>Bedrooms</small></div>
              <div><Icon name="bath" /><span>{apartment.bathrooms}</span><small>Bathrooms</small></div>
              <div><Icon name="area" /><span>{apartment.floorArea} m²</span><small>Floor Area</small></div>
              <div><Icon name="floor" /><span>{apartment.floorNumber}</span><small>Floor</small></div>
            </div>

            <h2>Description</h2>
            <p className="details__description">{apartment.description}</p>

            <h2>Features</h2>
            <ul className="details__features">
              {apartment.features.map((f) => (
                <li key={f}><Icon name="check" width={16} height={16} /> {f}</li>
              ))}
            </ul>

            <h2>Amenities Included</h2>
            <ul className="details__amenities">
              {amenities.map((a) => (
                <li key={a.label}><Icon name={a.icon} width={16} height={16} /> {a.label}</li>
              ))}
            </ul>
          </div>

          <aside className="details__sidebar">
            <div className="details__sidebar-card">
              <span className="eyebrow">{apartment.type}</span>
              <p className="details__sidebar-price">{formatPrice(apartment.price)}</p>
              <p className="details__sidebar-status" style={{ color: meta.color }}>{meta.label}</p>

              <button className="btn btn-primary btn-block" onClick={goBookViewing} disabled={soldOut}>
                Book a Viewing
              </button>
              <button className="btn btn-dark btn-block" onClick={() => setShowRequestInfo(true)}>
                Request More Information
              </button>
              <WhatsAppInline
                className="btn-block"
                message={`Hello, I'm interested in the ${apartment.name} at The Ivy Residences. Could you share more details?`}
                label="WhatsApp Us"
              />
            </div>
          </aside>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={apartment.gallery}
          index={lightboxIndex}
          onChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {showRequestInfo && (
        <RequestInfoModal apartment={apartment} onClose={() => setShowRequestInfo(false)} />
      )}
    </div>
  )
}
