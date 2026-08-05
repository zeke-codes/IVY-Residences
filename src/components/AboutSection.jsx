import Icon from './Icons.jsx'
import VineDivider from './VineDivider.jsx'
import './AboutSection.css'

const highlights = [
  { icon: 'floor', label: 'Modern architecture' },
  { icon: 'area', label: 'Spacious interiors' },
  { icon: 'shield', label: 'Secure environment' },
  { icon: 'pin', label: 'Convenient location' },
  { icon: 'check', label: 'Quality finishes' },
  { icon: 'water', label: 'Reliable utilities' },
]

export default function AboutSection() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__image">
          <img
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
            alt="The Ivy Residences building exterior"
          />
          <div className="about__image-tag">
            <span className="eyebrow">Est. 2026</span>
            <p>Kisumu's newest address for modern living</p>
          </div>
        </div>

        <div className="about__copy">
          <span className="eyebrow">About the Development</span>
          <h2>A Place to Call Home</h2>
          <p>
            The Ivy Residences offers modern apartments designed for individuals, couples,
            families, and investors who want more from where they live. Every residence is
            planned around natural light, generous proportions, and everyday comfort, set
            within a secure, landscaped compound minutes from the heart of Kisumu.
          </p>
          <p>
            From first-time buyers to seasoned investors, the development balances thoughtful
            architecture with dependable infrastructure — so life inside The Ivy Residences
            feels effortless from the day you move in.
          </p>

          <ul className="about__list">
            {highlights.map((h) => (
              <li key={h.label}>
                <span className="about__list-icon"><Icon name={h.icon} width={18} height={18} /></span>
                {h.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="about__vine"><VineDivider /></div>
    </section>
  )
}
