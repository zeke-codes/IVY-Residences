import { useState } from 'react'
import Icon from './Icons.jsx'
import { apartments } from '../data/apartments.js'
import { WhatsAppInline } from './WhatsAppButton.jsx'
import './Form.css'
import './BookingSection.css'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const emptyForm = {
  name: '', phone: '', email: '', type: '', date: '', time: '', message: '',
}

export default function BookingSection() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your full name.'
    if (!/^[+0-9 ]{7,}$/.test(form.phone.trim())) errs.phone = 'Enter a valid phone number.'
    if (!emailRe.test(form.email.trim())) errs.email = 'Enter a valid email address.'
    if (!form.type) errs.type = 'Select an apartment type.'
    if (!form.date) errs.date = 'Choose a preferred date.'
    if (!form.time) errs.time = 'Choose a preferred time.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const submit = (e) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  return (
    <section id="book-viewing" className="section booking">
      <div className="container booking__grid">
        <div className="booking__intro">
          <span className="eyebrow">Book a Viewing</span>
          <h2>See Your Future Home in Person</h2>
          <p>
            Walk through the show unit, meet our team, and get every question answered on
            site. Choose a date and time that works for you — we'll confirm within one
            business day.
          </p>
          <ul className="booking__steps">
            <li><span>01</span>Tell us your preferred apartment type</li>
            <li><span>02</span>Pick a date and time that suits you</li>
            <li><span>03</span>Our consultant confirms your visit</li>
          </ul>
          <WhatsAppInline
            message="Hello, I'd like to book a viewing at The Ivy Residences."
            label="Or Book via WhatsApp"
            variant="dark"
          />
        </div>

        <div className="booking__form-card">
          {submitted ? (
            <div className="form-success">
              <span className="form-success__icon"><Icon name="check" width={26} height={26} /></span>
              <h3>Viewing Requested</h3>
              <p>
                Thank you for your interest in The Ivy Residences. Our property consultant
                will contact you shortly to confirm your viewing.
              </p>
              <button className="btn btn-dark" onClick={() => { setSubmitted(false); setForm(emptyForm) }}>
                Book Another Viewing
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="form-grid">
                <div className="form-grid form-grid--2col">
                  <div className={`field ${errors.name ? 'field--error' : ''}`}>
                    <label htmlFor="bk-name">Full Name</label>
                    <input id="bk-name" value={form.name} onChange={set('name')} placeholder="Jane Wanjiru" />
                    {errors.name && <span className="field__error">{errors.name}</span>}
                  </div>
                  <div className={`field ${errors.phone ? 'field--error' : ''}`}>
                    <label htmlFor="bk-phone">Phone Number</label>
                    <input id="bk-phone" value={form.phone} onChange={set('phone')} placeholder="07XX XXX XXX" />
                    {errors.phone && <span className="field__error">{errors.phone}</span>}
                  </div>
                </div>

                <div className={`field ${errors.email ? 'field--error' : ''}`}>
                  <label htmlFor="bk-email">Email Address</label>
                  <input id="bk-email" value={form.email} onChange={set('email')} placeholder="you@email.com" />
                  {errors.email && <span className="field__error">{errors.email}</span>}
                </div>

                <div className={`field ${errors.type ? 'field--error' : ''}`}>
                  <label htmlFor="bk-type">Preferred Apartment Type</label>
                  <select id="bk-type" value={form.type} onChange={set('type')}>
                    <option value="">Select apartment type</option>
                    {apartments.map((a) => (
                      <option key={a.id} value={a.type}>{a.type}</option>
                    ))}
                  </select>
                  {errors.type && <span className="field__error">{errors.type}</span>}
                </div>

                <div className="form-grid form-grid--2col">
                  <div className={`field ${errors.date ? 'field--error' : ''}`}>
                    <label htmlFor="bk-date">Preferred Date</label>
                    <input id="bk-date" type="date" value={form.date} onChange={set('date')} />
                    {errors.date && <span className="field__error">{errors.date}</span>}
                  </div>
                  <div className={`field ${errors.time ? 'field--error' : ''}`}>
                    <label htmlFor="bk-time">Preferred Time</label>
                    <input id="bk-time" type="time" value={form.time} onChange={set('time')} />
                    {errors.time && <span className="field__error">{errors.time}</span>}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="bk-message">Message (optional)</label>
                  <textarea id="bk-message" value={form.message} onChange={set('message')} placeholder="Anything you'd like us to know before your visit" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Schedule a Viewing</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
