// Replaceable business details — swap these for the client's real info.
export const business = {
  name: 'The Ivy Residences',
  phone: '+254 700 123 456',
  phoneDisplay: '0700 123 456',
  whatsapp: '254700123456',
  email: 'hello@theivyresidences.co.ke',
  address: 'Ivy Residences, Riat Hills Road, off Kakamega Road, Kisumu, Kenya',
  officeHours: 'Mon – Sat, 8:00 AM – 6:00 PM',
  mapsQuery: 'The Ivy Residences, Riat Hills Road, Kisumu, Kenya',
}

export const whatsappLink = (message) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`

export const amenities = [
  { icon: 'shield', label: '24/7 Security' },
  { icon: 'parking', label: 'Secure Parking' },
  { icon: 'water', label: 'Reliable Water Supply' },
  { icon: 'generator', label: 'Backup Generator' },
  { icon: 'wifi', label: 'High-Speed Internet' },
  { icon: 'camera', label: 'CCTV Surveillance' },
  { icon: 'elevator', label: 'Elevator' },
  { icon: 'play', label: "Children's Play Area" },
  { icon: 'garden', label: 'Landscaped Gardens' },
  { icon: 'terrace', label: 'Rooftop Terrace' },
]

export const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80', tall: true, caption: 'Exterior architecture' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', caption: 'Living room' },
  { src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80', caption: 'Bedroom' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', caption: 'Kitchen', tall: true },
  { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80', caption: 'Bathroom' },
  { src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80', caption: 'Balcony views' },
  { src: 'https://images.unsplash.com/photo-1573349072826-3fa6e0f95f68?auto=format&fit=crop&w=1200&q=80', caption: 'Resident parking', tall: true },
  { src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80', caption: 'Landscaped gardens' },
  { src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80', caption: 'Surrounding Kisumu' },
]

export const testimonials = [
  {
    name: 'Achieng Otieno',
    role: 'Homeowner',
    quote:
      'Moving into The Ivy Residences felt like an upgrade in every sense — the finishes, the security, the quiet. My kids finally have a proper garden to play in.',
  },
  {
    name: 'Brian Mwangi',
    role: 'Property Investor',
    quote:
      'I bought two units here as rental investments. Occupancy has been strong from day one, and the management team makes the whole process painless.',
  },
  {
    name: 'Naomi Achola',
    role: 'Tenant',
    quote:
      'Reliable water and power alone make this place worth it, but the location near town and the friendly community sealed it for me.',
  },
]

// Demo content notice used near the testimonials section.
export const testimonialsNote =
  'Testimonials shown are illustrative demo content created for this presentation.'
