import { useEffect, useCallback } from 'react'
import Icon from './Icons.jsx'
import './Lightbox.css'

export default function Lightbox({ images, index, onClose, onChange }) {
  const goPrev = useCallback(() => onChange((index - 1 + images.length) % images.length), [index, images.length, onChange])
  const goNext = useCallback(() => onChange((index + 1) % images.length), [index, images.length, onChange])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, goPrev, goNext])

  const current = images[index]

  return (
    <div className="lightbox" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close gallery">
        <Icon name="close" width={22} height={22} />
      </button>

      <button className="lightbox__nav lightbox__nav--prev" onClick={goPrev} aria-label="Previous image">
        <Icon name="chevronLeft" width={26} height={26} />
      </button>

      <figure className="lightbox__figure">
        <img src={typeof current === 'string' ? current : current.src} alt={typeof current === 'string' ? 'Property photo' : current.caption} />
        {typeof current !== 'string' && current.caption && <figcaption>{current.caption}</figcaption>}
      </figure>

      <button className="lightbox__nav lightbox__nav--next" onClick={goNext} aria-label="Next image">
        <Icon name="chevronRight" width={26} height={26} />
      </button>

      <div className="lightbox__count">{index + 1} / {images.length}</div>
    </div>
  )
}
