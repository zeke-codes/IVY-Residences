import { useState } from 'react'
import { galleryImages } from '../data/site.js'
import Lightbox from './Lightbox.jsx'
import './GallerySection.css'

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Gallery</span>
          <h2>A Closer Look</h2>
          <p>Browse the architecture, interiors, and grounds of The Ivy Residences.</p>
        </div>

        <div className="gallery__grid">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              className={`gallery__item ${img.tall ? 'gallery__item--tall' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`View larger image: ${img.caption}`}
            >
              <img src={img.src} alt={img.caption} loading="lazy" />
              <span className="gallery__caption">{img.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={activeIndex}
          onChange={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  )
}
