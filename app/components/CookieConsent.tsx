'use client'

import { useState, useEffect } from 'react'

const NAVY   = '#1B2A4A'
const YELLOW = '#F5C842'
const CREAM  = '#F7F3EB'

export type CookiePreferences = {
  necessary: true
  statistics: boolean
  marketing: boolean
}

const DEFAULT_PREFS: CookiePreferences = {
  necessary: true,
  statistics: false,
  marketing: false,
}

export function getCookiePreferences(): CookiePreferences | null {
  if (typeof window === 'undefined') return null
  const raw = localStorage.getItem('yay_cookie_consent')
  if (!raw) return null
  try { return JSON.parse(raw) } catch { return null }
}

function savePreferences(prefs: CookiePreferences) {
  localStorage.setItem('yay_cookie_consent', JSON.stringify(prefs))
  localStorage.setItem('yay_cookie_consent_date', new Date().toISOString())
}

export default function CookieConsent() {
  const [visible, setVisible]     = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [prefs, setPrefs]         = useState<CookiePreferences>({ ...DEFAULT_PREFS })

  useEffect(() => {
    if (!getCookiePreferences()) setVisible(true)
  }, [])

  const acceptAll = () => {
    const p = { necessary: true as const, statistics: true, marketing: true }
    savePreferences(p)
    setVisible(false)
    setModalOpen(false)
  }

  const acceptNecessary = () => {
    savePreferences({ ...DEFAULT_PREFS })
    setVisible(false)
    setModalOpen(false)
  }

  const saveCustom = () => {
    savePreferences(prefs)
    setVisible(false)
    setModalOpen(false)
  }

  if (!visible) return null

  return (
    <>
      {/* Backdrop */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999 }}
        />
      )}

      {/* Modal */}
      {modalOpen && (
        <div style={{
          position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          background: 'white', borderRadius: 20, padding: '40px 36px', maxWidth: 480, width: 'calc(100% - 48px)',
          zIndex: 1000, boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
        }}>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 400, fontSize: 26, color: NAVY, letterSpacing: -0.5, marginBottom: 8 }}>
            Cookieindstillinger
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(27,42,74,0.6)', marginBottom: 28 }}>
            Vælg hvilke cookies du vil tillade. Du kan altid ændre dit valg på vores <a href="/cookies" style={{ color: NAVY, textDecoration: 'underline' }}>cookieside</a>.
          </p>

          {[
            {
              key: 'necessary',
              label: 'Nødvendige',
              desc: 'Kræves for at sitet virker. Kan ikke slås fra.',
              locked: true,
              value: true,
            },
            {
              key: 'statistics',
              label: 'Statistik',
              desc: 'Hjælper os med at forstå hvordan sitet bruges (fx Google Analytics).',
              locked: false,
              value: prefs.statistics,
            },
            {
              key: 'marketing',
              label: 'Marketing',
              desc: 'Bruges til målrettet annoncering (fx Meta Pixel).',
              locked: false,
              value: prefs.marketing,
            },
          ].map(item => (
            <div key={item.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '16px 0', borderTop: '1px solid rgba(27,42,74,0.08)' }}>
              <div style={{ flex: 1, paddingRight: 24 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 13, lineHeight: 1.55, color: 'rgba(27,42,74,0.55)' }}>{item.desc}</div>
              </div>
              <button
                disabled={item.locked}
                onClick={() => {
                  if (item.locked) return
                  setPrefs(p => ({ ...p, [item.key]: !p[item.key as keyof CookiePreferences] }))
                }}
                style={{
                  flexShrink: 0, width: 44, height: 26, borderRadius: 100, border: 'none', cursor: item.locked ? 'default' : 'pointer',
                  background: item.value ? YELLOW : 'rgba(27,42,74,0.15)',
                  transition: 'background 0.2s',
                  position: 'relative',
                }}
                aria-label={item.label}
              >
                <span style={{
                  position: 'absolute', top: 3, left: item.value ? 21 : 3,
                  width: 20, height: 20, borderRadius: '50%', background: item.value ? NAVY : 'white',
                  transition: 'left 0.2s',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                }} />
              </button>
            </div>
          ))}

          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <button onClick={saveCustom} style={{ flex: 1, minWidth: 120, background: NAVY, color: 'white', border: 'none', borderRadius: 100, padding: '12px 20px', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
              Gem valg
            </button>
            <button onClick={acceptAll} style={{ flex: 1, minWidth: 120, background: YELLOW, color: NAVY, border: 'none', borderRadius: 100, padding: '12px 20px', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
              Accepter alle
            </button>
          </div>
        </div>
      )}

      {/* Banner */}
      {!modalOpen && (
        <div style={{
          position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          background: NAVY, borderRadius: 16, padding: '20px 24px',
          maxWidth: 560, width: 'calc(100% - 48px)',
          zIndex: 998, boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16,
        }}>
          <p style={{ flex: 1, minWidth: 200, fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,0.75)', margin: 0 }}>
            Vi bruger cookies til at få sitet til at virke og til at forstå hvordan det bruges.{' '}
            <a href="/cookies" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>Læs mere</a>
          </p>
          <div style={{ display: 'flex', gap: 10, flexShrink: 0, flexWrap: 'wrap' }}>
            <button onClick={() => setModalOpen(true)} style={{ background: 'transparent', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 100, padding: '9px 18px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              Indstillinger
            </button>
            <button onClick={acceptNecessary} style={{ background: 'transparent', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 100, padding: '9px 18px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              Kun nødvendige
            </button>
            <button onClick={acceptAll} style={{ background: YELLOW, color: NAVY, border: 'none', borderRadius: 100, padding: '9px 18px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
              Accepter alle
            </button>
          </div>
        </div>
      )}
    </>
  )
}
