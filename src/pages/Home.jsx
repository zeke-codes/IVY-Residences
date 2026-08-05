import Hero from '../components/Hero.jsx'
import AboutSection from '../components/AboutSection.jsx'
import ApartmentsSection from '../components/ApartmentsSection.jsx'
import AmenitiesSection from '../components/AmenitiesSection.jsx'
import GallerySection from '../components/GallerySection.jsx'
import BookingSection from '../components/BookingSection.jsx'
import InvestorSection from '../components/InvestorSection.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import LocationSection from '../components/LocationSection.jsx'
import ContactSection from '../components/ContactSection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ApartmentsSection />
      <AmenitiesSection />
      <GallerySection />
      <BookingSection />
      <InvestorSection />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
    </>
  )
}
