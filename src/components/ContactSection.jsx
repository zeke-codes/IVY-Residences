import { useState } from 'react'
import Icon from './Icons.jsx'
import { business, whatsappLink } from '../data/site.js'
import './Form.css'
import './ContactSection.css'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const emptyForm = { name: '', email: '', phone: '', message: '' }

export default function ContactSection() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!emailRe.test(form.email.trim())) errs.email = 'Enter a valid email address.'
    if (!/^[+0-9 ]{7,}$/.test(form.phone.trim())) errs.phone = 'Enter a valid phone number.'
    if (!form.message.trim()) errs.message = 'Please add a short message.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const submit = (e) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="eyebrow">Contact</span>
          <h2>Let's Talk</h2>
          <p>Have a question about The Ivy Residences? Reach us directly or send an inquiry.</p>

          <ul className="contact__details">
            <li>
              <Icon name="phone" width={18} height={18} />
              <div><span>Phone</span><a href={`tel:${business.phone.replace(/\s/g, '')}`}>{business.phoneDisplay}</a></div>
            </li>
            <li>
              <Icon name="whatsapp" width={18} height={18} />
              <div><span>WhatsApp</span><a href={whatsappLink('Hello, I have a question about The Ivy Residences.')} target="_blank" rel="noopener noreferrer">{business.phoneDisplay}</a></div>
            </li>
            <li>
              <Icon name="mail" width={18} height={18} />
              <div><span>Email</span><a href={`mailto:${business.email}`}>{business.email}</a></div>
            </li>
            <li>
              <Icon name="pin" width={18} height={18} />
              <div><span>Address</span><p>{business.address}</p></div>
            </li>
            <li>
              <Icon name="clock" width={18} height={18} />
              <div><span>Office Hours</span><p>{business.officeHours}</p></div>
            </li>
          </ul>
        </div>

        <div className="contact__form-card">
          {submitted ? (
            <div className="form-success">
              <span className="form-success__icon"><Icon name="check" width={26} height={26} /></span>
              <h3>Inquiry Sent</h3>
              <p>Thanks for reaching out — a member of our team will respond shortly.</p>
              <button className="btn btn-dark" onClick={() => { setSubmitted(false); setForm(emptyForm) }}>Send Another Message</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="form-grid">
                <div className={`field ${errors.name ? 'field--error' : ''}`}>
                  <label htmlFor="ct-name">Name</label>
                  <input id="ct-name" value={form.name} onChange={set('name')} placeholder="Your full name" />
                  {errors.name && <span className="field__error">{errors.name}</span>}
                </div>
                <div className="form-grid form-grid--2col">
                  <div className={`field ${errors.email ? 'field--error' : ''}`}>
                    <label htmlFor="ct-email">Email</label>
                    <input id="ct-email" value={form.email} onChange={set('email')} placeholder="you@email.com" />
                    {errors.email && <span className="field__error">{errors.email}</span>}
                  </div>
                  <div className={`field ${errors.phone ? 'field--error' : ''}`}>
                    <label htmlFor="ct-phone">Phone</label>
                    <input id="ct-phone" value={form.phone} onChange={set('phone')} placeholder="07XX XXX XXX" />
                    {errors.phone && <span className="field__error">{errors.phone}</span>}
                  </div>
                </div>
                <div className={`field ${errors.message ? 'field--error' : ''}`}>
                  <label htmlFor="ct-message">Message</label>
                  <textarea id="ct-message" value={form.message} onChange={set('message')} placeholder="How can we help?" />
                  {errors.message && <span className="field__error">{errors.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Inquiry</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
