import { useEffect } from 'react'
import Icon from './Icons.jsx'
import './Modal.css'

export default function Modal({ onClose, children, labelledBy, className = '' }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className={`modal ${className}`} role="dialog" aria-modal="true" aria-labelledby={labelledBy}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <Icon name="close" width={20} height={20} />
        </button>
        {children}
      </div>
    </div>
  )
}
