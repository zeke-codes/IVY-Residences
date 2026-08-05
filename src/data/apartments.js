// Central data source for apartment listings.
// Add new units by appending an object to this array —
// every card, filter, and detail page reads from here.

export const apartments = [
  {
    id: '1-bed-classic',
    name: '1 Bedroom Apartment',
    type: '1 Bedroom',
    bedrooms: 1,
    bathrooms: 1,
    floorArea: 58,
    floorNumber: 'Ground – 3rd Floor',
    price: 3500000,
    status: 'available',
    dateListed: '2026-05-02',
    summary:
      'A bright, efficient one-bedroom home with a spacious living area and private balcony — ideal for young professionals or first-time buyers.',
    description:
      'Designed for easy, low-maintenance living, the 1 Bedroom Apartment at The Ivy Residences pairs an open-plan living and dining space with a well-appointed modern kitchen. Large windows draw in natural light throughout the day, while the private balcony offers a quiet spot to unwind above the landscaped courtyard.',
    features: [
      'Spacious living room',
      'Modern fitted kitchen',
      'Private balcony',
      'Built-in wardrobes',
      'Porcelain tile flooring',
      'Pre-wired for fibre internet',
    ],
    heroImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: '2-bed-garden',
    name: '2 Bedroom Apartment',
    type: '2 Bedroom',
    bedrooms: 2,
    bathrooms: 2,
    floorArea: 84,
    floorNumber: '2nd – 5th Floor',
    price: 5500000,
    status: 'available',
    dateListed: '2026-05-18',
    summary:
      'A well-proportioned two-bedroom home with two full bathrooms, made for small families and couples who want room to grow.',
    description:
      'The 2 Bedroom Apartment offers a generous living and dining area that opens onto a wide balcony, with a modern kitchen finished in durable, easy-clean surfaces. Both bedrooms are fitted with built-in storage, and the second bathroom adds everyday convenience for families or guests.',
    features: [
      'Two full bathrooms',
      'Open-plan living & dining',
      'Modern fitted kitchen',
      'Wide private balcony',
      'Built-in wardrobes',
      'Dedicated parking bay',
    ],
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: '3-bed-family',
    name: '3 Bedroom Apartment',
    type: '3 Bedroom',
    bedrooms: 3,
    bathrooms: 2,
    floorArea: 118,
    floorNumber: '3rd – 6th Floor',
    price: 7500000,
    status: 'limited',
    dateListed: '2026-06-01',
    summary:
      'A large family home with a master ensuite, expansive living area, and balcony views over the gardens — only a few units remain.',
    description:
      'Built for family life, the 3 Bedroom Apartment features a large living area that comfortably separates lounging and dining, a master bedroom with its own ensuite bathroom, and two further bedrooms served by a shared bathroom. The kitchen is fitted with ample counter and storage space, and the balcony extends the living area outdoors.',
    features: [
      'Master ensuite bathroom',
      'Large living & dining area',
      'Modern fitted kitchen',
      'Balcony with garden views',
      'Built-in wardrobes throughout',
      'Two dedicated parking bays',
    ],
    heroImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1591079632624-2c93e3b1ce78?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: '3-bed-premium',
    name: '3 Bedroom Premium Apartment',
    type: '3 Bedroom Premium',
    bedrooms: 3,
    bathrooms: 3,
    floorArea: 142,
    floorNumber: '6th – 8th Floor (Penthouse Level)',
    price: 9000000,
    status: 'sold-out',
    dateListed: '2026-04-10',
    summary:
      'Our flagship residence — three ensuite bedrooms, premium finishes, and the largest balcony in the development. Fully sold.',
    description:
      'The 3 Bedroom Premium Apartment is the signature residence at The Ivy Residences, occupying the upper floors with the widest views across the gardens and the lake horizon beyond. Every bedroom is ensuite, finishes are upgraded throughout in natural stone and hardwood accents, and the extra-large balcony is built for entertaining.',
    features: [
      'Three ensuite bedrooms',
      'Premium natural stone & hardwood finishes',
      'Extra-large entertaining balcony',
      'Private lobby access',
      'Upgraded kitchen appliances',
      'Two reserved parking bays',
    ],
    heroImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=80',
    ],
  },
]

export const statusMeta = {
  available: { label: 'Available', color: '#2b5038', bg: 'rgba(43, 80, 56, 0.1)' },
  limited: { label: 'Limited Availability', color: '#a97a3d', bg: 'rgba(169, 122, 61, 0.14)' },
  'sold-out': { label: 'Sold Out', color: '#8a3b3b', bg: 'rgba(138, 59, 59, 0.1)' },
}

export const formatPrice = (value) =>
  `KSh ${value.toLocaleString('en-KE')}`
