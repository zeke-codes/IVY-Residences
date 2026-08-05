import { useMemo, useState } from 'react'
import { apartments } from '../data/apartments.js'
import PropertyCard from './PropertyCard.jsx'
import PropertyFilter from './PropertyFilter.jsx'
import RequestInfoModal from './RequestInfoModal.jsx'
import './ApartmentsSection.css'

const defaultFilters = { bedrooms: 'all', price: 'all', status: 'all', sort: 'newest' }

export default function ApartmentsSection() {
  const [filters, setFilters] = useState(defaultFilters)
  const [infoApartment, setInfoApartment] = useState(null)

  const filtered = useMemo(() => {
    let list = [...apartments]

    if (filters.bedrooms !== 'all') {
      list = list.filter((a) => String(a.bedrooms) === filters.bedrooms)
    }
    if (filters.price !== 'all') {
      const [min, max] = filters.price.split('-').map(Number)
      list = list.filter((a) => a.price >= min && a.price <= max)
    }
    if (filters.status !== 'all') {
      list = list.filter((a) => a.status === filters.status)
    }

    if (filters.sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    else if (filters.sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    else list.sort((a, b) => new Date(b.dateListed) - new Date(a.dateListed))

    return list
  }, [filters])

  return (
    <section id="apartments" className="section apartments">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Apartments</span>
          <h2>Find Your Ideal Home</h2>
          <p>
            Twelve residences across four thoughtfully designed layouts. Filter by bedrooms,
            price, or availability to find the unit that fits your life.
          </p>
        </div>

        <PropertyFilter filters={filters} onChange={setFilters} />

        {filtered.length === 0 ? (
          <div className="apartments__empty">
            <p>No apartments match your selected filters right now.</p>
            <button className="btn btn-outline" onClick={() => setFilters(defaultFilters)}>
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="apartments__grid">
            {filtered.map((apt) => (
              <PropertyCard key={apt.id} apartment={apt} onRequestInfo={setInfoApartment} />
            ))}
          </div>
        )}
      </div>

      {infoApartment && (
        <RequestInfoModal apartment={infoApartment} onClose={() => setInfoApartment(null)} />
      )}
    </section>
  )
}
