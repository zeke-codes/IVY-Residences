export default function VineDivider({ color = 'var(--brass-500)' }) {
  return (
    <div className="vine-divider" aria-hidden="true">
      <svg viewBox="0 0 340 28" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 14 C 40 2, 60 26, 100 14 S 160 2, 200 14 S 260 26, 300 14 S 320 8, 338 14"
          fill="none"
          stroke={color}
          strokeWidth="1.4"
        />
        <circle cx="60" cy="9" r="2.4" fill={color} />
        <circle cx="130" cy="19" r="2.4" fill={color} />
        <circle cx="200" cy="9" r="2.4" fill={color} />
        <circle cx="270" cy="19" r="2.4" fill={color} />
      </svg>
    </div>
  )
}
