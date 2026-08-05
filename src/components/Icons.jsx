const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const icons = {
  shield: (p) => (
    <svg {...base} {...p}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/></svg>
  ),
  parking: (p) => (
    <svg {...base} {...p}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 16V7h3.2a2.8 2.8 0 010 5.6H9"/></svg>
  ),
  water: (p) => (
    <svg {...base} {...p}><path d="M12 3s6 6.4 6 11a6 6 0 01-12 0c0-4.6 6-11 6-11z"/></svg>
  ),
  generator: (p) => (
    <svg {...base} {...p}><rect x="3" y="8" width="18" height="10" rx="2"/><path d="M7 8V6h10v2M9 13h2M13 13h2M9 18v2M15 18v2"/></svg>
  ),
  wifi: (p) => (
    <svg {...base} {...p}><path d="M3 8.5a16 16 0 0118 0M6 12a11 11 0 0112 0M9.5 15.5a6 6 0 015 0"/><circle cx="12" cy="19" r="1" fill="currentColor" stroke="none"/></svg>
  ),
  camera: (p) => (
    <svg {...base} {...p}><path d="M4 8h3l1.5-2h7L17 8h3v10H4z"/><circle cx="12" cy="13" r="3.2"/></svg>
  ),
  elevator: (p) => (
    <svg {...base} {...p}><rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M10 8l1.5-2L13 8M10 14l1.5 2L13 14"/></svg>
  ),
  play: (p) => (
    <svg {...base} {...p}><circle cx="12" cy="6" r="2"/><path d="M5 21l3-7 3 2 2-5 3 4 3 6"/></svg>
  ),
  garden: (p) => (
    <svg {...base} {...p}><path d="M12 21V10"/><path d="M12 10c-4-1-6-4-6-7 4 0 7 2 7 6M12 10c4-1 6-4 6-7-4 0-7 2-7 6"/></svg>
  ),
  terrace: (p) => (
    <svg {...base} {...p}><path d="M3 21h18M4 21V11l8-6 8 6v10M9 21v-6h6v6"/></svg>
  ),
  bed: (p) => (
    <svg {...base} {...p}><path d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 18v2M21 18v2M3 12V8h7v4"/></svg>
  ),
  bath: (p) => (
    <svg {...base} {...p}><path d="M4 12h16v2a5 5 0 01-5 5H9a5 5 0 01-5-5v-2z"/><path d="M7 12V6a2 2 0 012-2 2 2 0 012 2M4 19v2M18 19v2"/></svg>
  ),
  area: (p) => (
    <svg {...base} {...p}><rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 9h4M9 4v4"/></svg>
  ),
  floor: (p) => (
    <svg {...base} {...p}><path d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-6h6v6"/></svg>
  ),
  pin: (p) => (
    <svg {...base} {...p}><path d="M12 21s7-6.6 7-11.5A7 7 0 105 9.5C5 14.4 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.3"/></svg>
  ),
  phone: (p) => (
    <svg {...base} {...p}><path d="M5 4h4l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5v4a2 2 0 01-2 2C10.5 21 3 13.5 3 6a2 2 0 012-2z"/></svg>
  ),
  mail: (p) => (
    <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
  ),
  clock: (p) => (
    <svg {...base} {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
  ),
  check: (p) => (
    <svg {...base} {...p}><path d="M4 12l5 5L20 6"/></svg>
  ),
  close: (p) => (
    <svg {...base} {...p}><path d="M5 5l14 14M19 5L5 19"/></svg>
  ),
  chevronLeft: (p) => (
    <svg {...base} {...p}><path d="M15 5l-7 7 7 7"/></svg>
  ),
  chevronRight: (p) => (
    <svg {...base} {...p}><path d="M9 5l7 7-7 7"/></svg>
  ),
  menu: (p) => (
    <svg {...base} {...p}><path d="M3 6h18M3 12h18M3 18h18"/></svg>
  ),
  whatsapp: (p) => (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor" {...p}>
      <path d="M16.02 3C9.4 3 4 8.36 4 15c0 2.36.66 4.55 1.8 6.43L3 29l7.77-2.7A12.9 12.9 0 0016.02 27C22.63 27 28 21.64 28 15S22.63 3 16.02 3zm0 22.1c-2.1 0-4.05-.62-5.68-1.68l-.4-.25-4.6 1.6 1.53-4.48-.27-.42A9.98 9.98 0 016.1 15c0-5.47 4.46-9.9 9.92-9.9 5.46 0 9.92 4.43 9.92 9.9 0 5.47-4.46 9.9-9.92 9.9zm5.6-7.42c-.3-.15-1.8-.9-2.08-1-.28-.1-.48-.15-.68.15-.2.3-.78 1-.96 1.2-.18.2-.35.23-.65.08-.3-.15-1.26-.47-2.4-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.65-.94-2.26-.25-.6-.5-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.15 4.56.72.31 1.28.5 1.72.63.72.23 1.37.2 1.89.12.58-.09 1.8-.73 2.05-1.44.25-.7.25-1.3.18-1.44-.07-.13-.27-.2-.57-.35z"/>
    </svg>
  ),
}

export default function Icon({ name, ...props }) {
  const Render = icons[name]
  if (!Render) return null
  return Render(props)
}
