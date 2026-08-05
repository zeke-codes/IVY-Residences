import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__media">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Modern apartment living room at The Ivy Residences"
        />
        <div className="hero__scrim" />
      </div>

      <div className="container hero__content">
        <span className="eyebrow hero__eyebrow">Kisumu, Kenya · Now Selling</span>
        <h1 className="hero__title">
          The Ivy Residences
        </h1>
        <p className="hero__tagline">Modern Living. Designed for You.</p>
        <p className="hero__sub">
          Discover thoughtfully designed apartments offering comfort, convenience, and modern
          living in the heart of Kisumu.
        </p>
        <div className="hero__actions">
          <a href="#apartments" className="btn btn-primary">Explore Apartments</a>
          <a href="#book-viewing" className="btn btn-outline hero__outline">Book a Viewing</a>
        </div>
      </div>

      <div className="hero__stats">
        <div className="container hero__stats-grid">
          <div className="hero__stat">
            <span className="hero__stat-num">12</span>
            <span className="hero__stat-label">Available Units</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">1–3</span>
            <span className="hero__stat-label">Bedroom Options</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">From KSh 3.5M</span>
            <span className="hero__stat-label">Starting Price</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">Kisumu</span>
            <span className="hero__stat-label">Prime Location</span>
          </div>
        </div>
      </div>
    </section>
  )
}
