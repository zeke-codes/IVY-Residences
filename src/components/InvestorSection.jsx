import { WhatsAppInline } from './WhatsAppButton.jsx'
import './InvestorSection.css'

const cases = [
  { title: 'Home Ownership', desc: 'Move into a residence built for long-term comfort in a secure, well-managed community.' },
  { title: 'Rental Income', desc: 'Strong demand from tenants near town makes The Ivy Residences a dependable rental asset.' },
  { title: 'Long-Term Investment', desc: 'A growing Kisumu property market positions early buyers for steady capital appreciation.' },
]

export default function InvestorSection() {
  return (
    <section className="section investor">
      <div className="container investor__grid">
        <div className="investor__copy">
          <span className="eyebrow">For Investors</span>
          <h2>Invest in Your Future</h2>
          <p>
            Whether you're buying your first home or adding to a growing portfolio, The Ivy
            Residences is built to perform — for owner-occupiers, landlords, and long-term
            investors alike.
          </p>
          <WhatsAppInline
            message="Hello, I'd like to speak with a property consultant about investing in The Ivy Residences."
            label="Talk to a Property Consultant"
            variant="primary"
          />
        </div>

        <div className="investor__cases">
          {cases.map((c) => (
            <div key={c.title} className="investor__case">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
