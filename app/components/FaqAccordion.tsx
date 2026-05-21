'use client'

import { useState } from 'react'

const NAVY   = '#1B2A4A'
const YELLOW = '#F5C842'

type Item = { q: string; a: string }

type Props = {
  items: Item[]
}

export default function FaqAccordion({ items }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ maxWidth: 760 }}>
      {items.map((item, i) => {
        const isOpen = openFaq === i
        return (
          <div key={i} style={{ borderTop: '1px solid rgba(27,42,74,0.12)' }}>
            <button
              onClick={() => setOpenFaq(isOpen ? null : i)}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 24 }}
              aria-expanded={isOpen}
            >
              <span style={{ fontSize: 17, fontWeight: 600, color: NAVY, lineHeight: 1.4 }}>{item.q}</span>
              <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', background: isOpen ? NAVY : 'rgba(27,42,74,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                  <path d="M1 3L5 7L9 3" stroke={isOpen ? YELLOW : NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(27,42,74,0.65)', paddingBottom: 24, paddingRight: 48 }}>
                {item.a}
              </p>
            )}
          </div>
        )
      })}
      <div style={{ borderTop: '1px solid rgba(27,42,74,0.12)' }} />
    </div>
  )
}
