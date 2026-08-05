# The Ivy Residences — Real Estate Website (Demo)

A premium, fully responsive real estate marketing site for a fictional apartment
development, "The Ivy Residences," in Kisumu, Kenya. Built as a portfolio-quality
demo for real property developers — showcasing units, amenities, filtering,
inquiries, viewings, and WhatsApp contact.

## Tech Stack
- React 18 + Vite
- React Router (page navigation + apartment detail routes)
- Plain CSS with design tokens (no UI framework) — see `src/index.css`

## Getting Started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  components/     Reusable UI: Navbar, Hero, PropertyCard, PropertyFilter,
                  AmenitiesSection, GallerySection, Lightbox, BookingSection,
                  ContactSection, RequestInfoModal, Footer, WhatsAppButton, Icons...
  pages/
    Home.jsx            Composes all landing page sections
    ApartmentDetails.jsx  Dedicated apartment detail route (/apartments/:id)
  data/
    apartments.js   Sample listing data — add new units here
    site.js         Business info, amenities, gallery images, testimonials
  App.jsx           Routes + layout
  index.css         Design tokens (colors, type, spacing) and base styles
```

## Editing Content

- **Apartment listings**: edit `src/data/apartments.js`. Each object in the
  `apartments` array becomes a card, a filterable listing, and a detail page —
  no other file needs to change to add a new unit.
- **Business info (phone, WhatsApp, email, address, office hours)**: edit
  `src/data/site.js` → `business` object. The WhatsApp number is in
  international format without the leading `+` (e.g. `254700123456`).
- **Amenities, gallery photos, testimonials**: also in `src/data/site.js`.
- **Colors and fonts**: edit the CSS variables at the top of `src/index.css`.

## Deploying

This is a static Vite build — deploys cleanly to Vercel, Netlify, or any static
host:

1. `npm run build` → outputs to `dist/`
2. Push to GitHub and connect the repo to Vercel/Netlify (framework preset: Vite),
   or drag-and-drop the `dist/` folder into Netlify's manual deploy.

## Notes

- Property photos are placeholder stock images from Unsplash — replace with the
  client's real photography before going live.
- Forms (Book a Viewing, Request Information, Contact) simulate submission in
  the browser only; no backend is wired up. Connect to a form service, email
  API, or your own backend endpoint before production use.
- Testimonials are clearly demo content — replace with real resident quotes.
