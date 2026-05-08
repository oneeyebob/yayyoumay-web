'use client'

import { useState } from 'react'
import Link from 'next/link'
import { homeContent } from '../../content/home'
import { faqContent } from '../../content/faq'

const c = homeContent
const faq = faqContent

const NAVY      = '#1B2A4A'
const YELLOW    = '#F5C842'
const CREAM     = '#F7F3EB'
const FOOTER_BG = '#0F1A30'

const Logo = ({ height = 36, color = '#FFFFFF' }: { height?: number; color?: string }) => (
  <svg height={height} viewBox="0 0 879.53 530.27" xmlns="http://www.w3.org/2000/svg" style={{ fill: color, width: 'auto', display: 'block' }}>
    <path d="M417.64,304.28l-80.49,21.77-19.59,90.53c-3.98,18.41-47.01,7.61-60.86,2.63-6.51-2.34-11.41-9.64-9.8-16.98l12.13-55c-4.76-1.01-11.2-3.3-13.06-6.77-8.04-14.94-15.74-42.05,5.67-49.57l25.45-8.95c16.8-62.42,34.81-122.69,58.87-182.51,3.21-7.99,7.85-18.89,15.07-22.86,18.25-10.05,39.79-11.44,60.12-6.54,18.07,4.36,35.4,69.4,41.2,88.37l22.56,73.69c10.49-1.9,20.58-3.76,29.61-2.37,10.97,8.56,23.53,47.91,3.89,52.91l-18.61,4.74,23.26,79.38c6.11,20.85-38.11,28.66-51.69,31.04-11.66.3-20.03-5.47-23-16.52l-20.7-76.98ZM405.16,247.13l-23.8-90.37-28.71,104.36,52.5-13.99Z"/>
    <path d="M128.41,297.66l-42.7-53.6C56.72,207.66,29.45,171.36,3.14,132.95c-4.84-7.06-3.97-14.96,1.83-20.98,14.78-15.33,54.72-38.41,66.65-21.54l86.56,122.36c20.05-60.51,36.95-119.21,66.54-175.14,16.28-8.9,83.37,2.15,73.64,24.1-56.42,127.27-105.82,270.49-119.74,409.21-2.75,27.41-52.77,12.65-67.68,6.48-9.4-3.89-14.53-12.82-13.21-23.58,6.46-52.49,16.93-103.58,30.68-156.2Z"/>
    <path d="M549.96,383.26c4.5-43.85,14.69-83.31,26.26-125.17-40.93-57.03-76-116.61-105.56-180.24-10.14-21.83,39.57-37.67,55.03-37.66,7.3-.05,13.68,2.65,16.88,9.35,21.16,44.36,43.37,86.76,69.26,130.52,20.87-47.39,41.09-91.93,64.55-136.59,3.53-6.71,9.64-10.19,17.15-10.32,19.57,1.14,36.96,7.49,52.3,19.3,5.62,4.33,6.17,11.28,2.75,17.84-33.28,63.74-65.73,126.53-90.81,194.27-16.23,43.85-21.98,88.64-29.79,134.1-1.57,9.14-6.31,15.37-16.59,15.67-16.06.46-64.21-4.02-61.43-31.05Z"/>
    <path d="M797.83,270.89c-6,16.98-22.87,15.02-37.01,9.96-9.65-3.46-14.76-11.95-13.39-22.6,9.04-70.48,29.8-176.25,52.04-243.39,2.61-7.87,9.29-13.94,17.77-14.64,16.76-1.38,57.82,3.56,62.29,22.93-17.44,60.5-36.12,118.77-57.06,178.03l-24.63,69.71Z"/>
    <path d="M621.54,498.3c-128.46-39.01-272.04-20.11-394.14,31.62-2.78,1.18-8.96-.82-9.79-3.11s.9-8.38,3-9.61c19.36-11.39,37.52-21.2,58.57-29.74,79.58-32.29,164.51-47.87,250.61-46.04,24.15.51,110.16,7.92,121.37,28.67,4.85,8.97.53,17.94-4.98,23.9-5.97,6.46-15.72,7.02-24.65,4.31Z"/>
    <path d="M767.25,341.69c5.99,5.72,12.02,10.62,18.17,15.81,2.52,2.13,4.75,4.3,6.95,6.81,4.57,5.21,5.79,12.58,1.19,17-2.07,1.99-4.53,3.51-7.34,4.22l-11.23,2.85-21.74,5.61-4.56,1.08c-9.93,2.36-20.53,6.11-31.23,5.58-4.34-.21-8.63-2.86-10.88-7.22-1.57-3.04-1.88-6.34-1.37-9.48.86-5.32,2.29-10.26,3.47-15.51l4.59-20.42,3.38-13.54c1.04-4.16,2.34-8.01,4.18-11.72s4.4-6.48,8.23-7.58c6.46-1.84,12.78,3.06,18.05,7.62,2.46,2.12,4.76,4.2,7.13,6.46l13.01,12.43Z"/>
  </svg>
)

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <span style={{
      flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
      background: open ? NAVY : 'rgba(27,42,74,0.08)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'background 0.2s',
    }}>
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
        style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
        <path d="M1 3.5L5.5 8L10 3.5" stroke={open ? YELLOW : NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export default function FaqPage() {
  // key: "sectionIndex-itemIndex"
  const [openKey, setOpenKey] = useState<string | null>(null)

  const toggle = (key: string) => setOpenKey(prev => prev === key ? null : key)

  // Flat list of all Q&A for JSON-LD
  const allItems = faq.sections.flatMap(s => s.items)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allItems.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── NAV ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: NAVY, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo height={32} color="#FFFFFF" />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Forsiden</Link>
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Blog</Link>
          <a href="https://play.yayyoumay.dk/register" style={{ background: YELLOW, color: NAVY, padding: '8px 20px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
            {c.nav.cta}
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: NAVY, padding: '80px 40px 96px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
            Ofte stillede spørgsmål
          </div>
          <h1 className="font-heading" style={{ fontWeight: 400, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05, color: 'white', letterSpacing: -2, marginBottom: 24 }}>
            {faq.meta.title}
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', maxWidth: 560 }}>
            {faq.meta.description}
          </p>
        </div>
      </section>

      {/* ── FAQ SECTIONS ── */}
      <section style={{ background: CREAM, padding: '80px 40px 120px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

          {faq.sections.map((section, si) => (
            <div key={si} style={{ marginBottom: 64 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: NAVY, opacity: 0.45, marginBottom: 8 }}>
                {section.heading}
              </p>

              <div style={{ marginTop: 16 }}>
                {section.items.map((item, ii) => {
                  const key = `${si}-${ii}`
                  const isOpen = openKey === key
                  return (
                    <div key={ii} style={{ borderTop: '1px solid rgba(27,42,74,0.12)' }}>
                      <button
                        onClick={() => toggle(key)}
                        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 24 }}
                        aria-expanded={isOpen}
                      >
                        <span style={{ fontSize: 16, fontWeight: 600, color: NAVY, lineHeight: 1.4 }}>{item.q}</span>
                        <ChevronIcon open={isOpen} />
                      </button>
                      {isOpen && (
                        <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(27,42,74,0.65)', paddingBottom: 24, paddingRight: 52 }}>
                          {item.a}
                        </p>
                      )}
                    </div>
                  )
                })}
                <div style={{ borderTop: '1px solid rgba(27,42,74,0.12)' }} />
              </div>
            </div>
          ))}

          <div style={{ marginTop: 24, paddingTop: 40, borderTop: '1px solid rgba(27,42,74,0.08)' }}>
            <p style={{ fontSize: 15, color: 'rgba(27,42,74,0.5)', marginBottom: 8 }}>
              Fandt du ikke svar på dit spørgsmål?
            </p>
            <a href="mailto:kontakt@yayyoumay.dk" style={{ fontSize: 15, fontWeight: 700, color: NAVY, textDecoration: 'none' }}>
              Skriv til os på kontakt@yayyoumay.dk →
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: FOOTER_BG, padding: '48px 40px 32px', color: 'rgba(255,255,255,0.35)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <Link href="/" style={{ display: 'inline-flex' }}>
            <Logo height={26} color="#FFFFFF" />
          </Link>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 14 }}>Forsiden</Link>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 14 }}>Blog</Link>
            <Link href="/kontakt" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 14 }}>Kontakt</Link>
          </div>
        </div>
        <div style={{ maxWidth: 760, margin: '0 auto', paddingTop: 24, fontSize: 13 }}>
          <span>© {c.footer.copyright}</span>
        </div>
      </footer>
    </>
  )
}
