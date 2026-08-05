import { Link } from 'react-router-dom'
import Icon from './Icons.jsx'
import { statusMeta, formatPrice } from '../data/apartments.js'
import { WhatsAppInline } from './WhatsAppButton.jsx'
import './PropertyCard.css'

export default function PropertyCard({ apartment, onRequestInfo }) {
  const meta = statusMeta[apartment.status]
  const soldOut = apartment.status === 'sold-out'

  return (
    <article className={`property-card ${soldOut ? 'property-card--soldout' : ''}`}>
      <div className="property-card__media">
        <img src={apartment.heroImage} alt={apartment.name} />
        <span className="property-card__status" style={{ color: meta.color, background: meta.bg }}>
          {meta.label}
        </span>
        <span className="property-card__price">{formatPrice(apartment.price)}</span>
      </div>

      <div className="property-card__body">
        <h3>{apartment.name}</h3>
        <p className="property-card__summary">{apartment.summary}</p>

        <div className="property-card__specs">
          <span><Icon name="bed" width={16} height={16} /> {apartment.bedrooms} Bed</span>
          <span><Icon name="bath" width={16} height={16} /> {apartment.bathrooms} Bath</span>
          <span><Icon name="area" width={16} height={16} /> {apartment.floorArea} m²</span>
        </div>

        <div className="property-card__actions">
          <Link to={`/apartments/${apartment.id}`} className="btn btn-dark btn-sm btn-block">
            View Details
          </Link>
          {soldOut ? (
            <button className="btn btn-ghost btn-sm btn-block" disabled>
              Sold Out
            </button>
          ) : (
            <button className="btn btn-ghost btn-sm btn-block" onClick={() => onRequestInfo(apartment)}>
              Request Information
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
