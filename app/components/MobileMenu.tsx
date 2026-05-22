'use client'

import { useState } from 'react'

const CREAM  = '#fffff5'
const TEXT   = '#22221e'
const MUTED  = '#6f6a5f'
const ACCENT = '#496a51'

type NavLink = { label: string; href: string }

type Props = {
  navLinks: NavLink[]
  ctaLabel: string
}

export default function MobileMenu({ navLinks, ctaLabel }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <>
      {/* hamburger */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(o => !o)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', justifyContent: 'center', gap: 5, width: 40, height: 40, padding: 4 }}
        aria-label="Åbn menu"
      >
        <span style={{ display: 'block', width: 24, height: 2, background: TEXT, borderRadius: 2 }} />
        <span style={{ display: 'block', width: 24, height: 2, background: TEXT, borderRadius: 2 }} />
        <span style={{ display: 'block', width: 24, height: 2, background: TEXT, borderRadius: 2 }} />
      </button>

      {/* mobile overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, bottom: 0, zIndex: 99,
          background: CREAM,
          borderTop: '1px solid rgba(34,34,30,0.08)',
          display: 'flex', flexDirection: 'column',
          padding: '40px 24px',
          gap: 8,
          overflowY: 'auto',
        }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={close} style={{ color: MUTED, textDecoration: 'none', fontSize: 22, fontWeight: 500, padding: '14px 0', borderBottom: '1px solid rgba(34,34,30,0.07)', display: 'block' }}>
              {l.label}
            </a>
          ))}
          <a href="https://play.yayyoumay.dk/register" onClick={close} style={{ marginTop: 24, background: ACCENT, color: '#fffdf4', fontWeight: 700, textAlign: 'center', padding: 16, borderRadius: 100, textDecoration: 'none', fontSize: 17, display: 'block' }}>
            Opret konto
          </a>
        </div>
      )}
    </>
  )
}
