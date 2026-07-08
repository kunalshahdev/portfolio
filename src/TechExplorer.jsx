import { useState } from 'react'

const techs = [
  {
    name: 'React',
    desc: 'Building interactive UIs with reusable components and hooks. This section is built with it.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx={12} cy={12} r={2} />
        <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10" />
        <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10" />
        <path d="M4.93 4.93a10 10 0 0 1 14.14 0" />
        <path d="M4.93 19.07a10 10 0 0 1 14.14 0" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    desc: 'A full-stack React framework with routing, SSR, and the newer App Router approach.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3h18v18H3z" />
        <path d="M3 3l18 18" />
        <path d="M3 21L21 3" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    desc: 'Type-safe JavaScript. Helps catch bugs early and makes code easier to work with on bigger projects.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x={2} y={2} width={20} height={20} rx={2} />
        <path d="M9 12h6" />
        <path d="M12 9v6" />
      </svg>
    ),
  },
  {
    name: 'Tailwind',
    desc: 'A utility-first CSS framework. Makes it faster to build responsive layouts without writing custom styles.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
]

export default function TechExplorer() {
  const [active, setActive] = useState(null)

  return (
    <section className="exploring">
      <div className="section-header">
        <span className="section-number">03</span>
        <h2 className="section-title">Currently Exploring</h2>
      </div>
      <p className="exploring-intro">Technologies I'm learning and playing with right now.</p>
      <div className="exploring-grid">
        {techs.map((t, i) => (
          <button
            key={t.name}
            className={'explore-card' + (active === i ? ' active' : '')}
            onClick={() => setActive(active === i ? null : i)}
          >
            <div className="explore-icon">{t.icon}</div>
            <h3>{t.name}</h3>
            {active === i && <p className="explore-desc">{t.desc}</p>}
          </button>
        ))}
      </div>
    </section>
  )
}
