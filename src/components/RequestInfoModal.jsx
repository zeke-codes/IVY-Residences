import { useState } from 'react'
import Modal from './Modal.jsx'
import Icon from './Icons.jsx'
import './Form.css'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function RequestInfoModal({ apartment, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!/^[+0-9 ]{7,}$/.test(form.phone.trim())) errs.phone = 'Enter a valid phone number.'
    if (!emailRe.test(form.email.trim())) errs.email = 'Enter a valid email address.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const submit = (e) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  return (
    <Modal onClose={onClose} labelledBy="request-info-title">
      {submitted ? (
        <div className="form-success">
          <span className="form-success__icon"><Icon name="check" width={26} height={26} /></span>
          <h3>Request Received</h3>
          <p>
            Thank you for your interest in the {apartment.name}. Our property consultant will
            be in touch shortly with more information.
          </p>
          <button className="btn btn-dark" onClick={onClose}>Close</button>
        </div>
      ) : (
        <>
          <span className="eyebrow">Request Information</span>
          <h3 id="request-info-title" style={{ marginTop: 8 }}>{apartment.name}</h3>
          <p style={{ color: 'var(--ink-700)', marginTop: 8, marginBottom: 22 }}>
            Tell us how to reach you and we'll send full details on pricing, availability, and floor plans.
          </p>

          <form onSubmit={submit} noValidate>
            <div className="form-grid">
              <div className={`field ${errors.name ? 'field--error' : ''}`}>
                <label htmlFor="ri-name">Name</label>
                <input id="ri-name" value={form.name} onChange={set('name')} placeholder="Your full name" />
                {errors.name && <span className="field__error">{errors.name}</span>}
              </div>
              <div className="form-grid form-grid--2col">
                <div className={`field ${errors.phone ? 'field--error' : ''}`}>
                  <label htmlFor="ri-phone">Phone</label>
                  <input id="ri-phone" value={form.phone} onChange={set('phone')} placeholder="07XX XXX XXX" />
                  {errors.phone && <span className="field__error">{errors.phone}</span>}
                </div>
                <div className={`field ${errors.email ? 'field--error' : ''}`}>
                  <label htmlFor="ri-email">Email</label>
                  <input id="ri-email" value={form.email} onChange={set('email')} placeholder="you@email.com" />
                  {errors.email && <span className="field__error">{errors.email}</span>}
                </div>
              </div>
              <div className="field">
                <label htmlFor="ri-type">Apartment Type</label>
                <input id="ri-type" value={apartment.type} disabled />
              </div>
              <div className="field">
                <label htmlFor="ri-message">Message (optional)</label>
                <textarea id="ri-message" value={form.message} onChange={set('message')} placeholder="Any questions for our team?" />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Request Information</button>
            </div>
          </form>
        </>
      )}
    </Modal>
  )
}
