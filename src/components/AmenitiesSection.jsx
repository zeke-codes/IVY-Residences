import Icon from './Icons.jsx'
import { amenities } from '../data/site.js'
import './AmenitiesSection.css'

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="section amenities">
      <div className="container">
        <div className="section-head amenities__head">
          <span className="eyebrow">Amenities</span>
          <h2>Everything You Need, Close to Home</h2>
          <p>
            Every residence comes with access to shared amenities built for comfort,
            security, and everyday convenience.
          </p>
        </div>

        <div className="amenities__grid">
          {amenities.map((a) => (
            <div key={a.label} className="amenities__item">
              <span className="amenities__icon"><Icon name={a.icon} width={26} height={26} /></span>
              <span>{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
