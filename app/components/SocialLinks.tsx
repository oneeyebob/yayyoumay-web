'use client'

type Link = { href: string; label: string; icon: React.ReactNode }

type Props = { links: Link[] }

export default function SocialLinks({ links }: Props) {
  return (
    <div style={{ display: 'flex', gap: 14 }}>
      {links.map(s => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          style={{ color: 'rgba(255,255,255,0.35)', transition: 'color 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
        >
          {s.icon}
        </a>
      ))}
    </div>
  )
}
