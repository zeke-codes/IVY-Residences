import { testimonials, testimonialsNote } from '../data/site.js'
import './TestimonialsSection.css'

export default function TestimonialsSection() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2>What Residents Are Saying</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="testimonial-card">
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="testimonial-card__name">{t.name}</span>
                <span className="testimonial-card__role">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="testimonials__note">{testimonialsNote}</p>
      </div>
    </section>
  )
}
