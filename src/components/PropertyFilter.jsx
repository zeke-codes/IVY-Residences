import './PropertyFilter.css'

const bedroomOptions = [
  { value: 'all', label: 'All' },
  { value: '1', label: '1 Bed' },
  { value: '2', label: '2 Bed' },
  { value: '3', label: '3 Bed' },
]

const priceOptions = [
  { value: 'all', label: 'Any Price' },
  { value: '0-4000000', label: 'Under KSh 4M' },
  { value: '4000000-7000000', label: 'KSh 4M – 7M' },
  { value: '7000000-99000000', label: 'KSh 7M+' },
]

const availabilityOptions = [
  { value: 'all', label: 'Any Status' },
  { value: 'available', label: 'Available' },
  { value: 'limited', label: 'Limited Availability' },
  { value: 'sold-out', label: 'Sold Out' },
]

const sortOptions = [
  { value: 'newest', label: 'Newest Listings' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
]

export default function PropertyFilter({ filters, onChange }) {
  const update = (key) => (e) => onChange({ ...filters, [key]: e.target.value })

  return (
    <div className="property-filter">
      <div className="property-filter__group">
        <label htmlFor="f-bedrooms">Bedrooms</label>
        <select id="f-bedrooms" value={filters.bedrooms} onChange={update('bedrooms')}>
          {bedroomOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      <div className="property-filter__group">
        <label htmlFor="f-price">Price Range</label>
        <select id="f-price" value={filters.price} onChange={update('price')}>
          {priceOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      <div className="property-filter__group">
        <label htmlFor="f-status">Availability</label>
        <select id="f-status" value={filters.status} onChange={update('status')}>
          {availabilityOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      <div className="property-filter__group">
        <label htmlFor="f-sort">Sort By</label>
        <select id="f-sort" value={filters.sort} onChange={update('sort')}>
          {sortOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
    </div>
  )
}
