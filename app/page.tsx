'use client'

import { useState } from 'react'
import Link from 'next/link'
import { homeContent } from '../content/home'

const c = homeContent

/* ── colour tokens ─────────────────────────────── */
const NAVY       = '#1B2A4A'
const YELLOW     = '#F5C842'
const RED        = '#E84C3D'
const CREAM      = '#F7F3EB'
const LIGHT_GRAY = '#F0EDE6'
const GRAY       = '#6B7280'
const FOOTER_BG  = '#0F1A30'

/* ── SVG logo ──────────────────────────────────── */
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

/* ── PLAY logo ─────────────────────────────────── */
const PlayLogo = ({ height = 28 }: { height?: number }) => (
  <svg height={height} viewBox="0 0 1071.84 403.22" xmlns="http://www.w3.org/2000/svg" style={{ width: 'auto', display: 'block' }}>
    <g fill="#F5C842">
      <path d="M688.24,265.07l-87.33,14.02-19.31,91.36c-1.91,9.05-8.36,14.81-17.73,14.4-19.22-.86-38.13-5.44-55-14.23-7.45-3.88-10.63-11.07-8.67-19.27l13.61-56.72c-7.29-.35-14.91-3.65-17.45-11.34-4.85-14.7-13.03-52.94,5.63-57.3l31.88-7.45,36.21-136.93c4.98-18.83,11.11-36.2,18.1-54.02,5-12.75,15.22-19.55,28.38-21.88,23.65-4.18,71.62-11.41,83.65,15.55,4.87,10.91,9.69,21.4,13.22,32.94l39.85,130.22,21.32-2.2c9.56-.98,17.96,4.92,20.46,14.36,3.89,14.65,8.82,31.55,2.25,46.04-3.7,8.15-15.87,7.73-24.38,10.26l27.31,94.29c2.64,9.1-.74,17.63-8.62,21.76-19.7,10.31-70.56,27.45-78.15-5.2l-25.25-98.66ZM617.38,204.81l54.73-9.47-27.92-99.2-15.88,61.11-10.94,47.56Z"/>
      <path d="M106.36,397.64c-20.95,4.33-67.79,15.87-70.63-16.44-4.24-48.23-6.43-95.13-6.34-143.83l.25-136.01C4.16,109.44.23,63.38,0,47.4c-.15-10.38,6.6-18.24,16.18-21.96C54.97,10.35,95.93,2.23,137.85,2.26c55.23.04,108.02,24.22,125.74,79.43,20.75,64.67-7.92,134.66-67.44,167.39-25.68,14.12-52.3,20.69-81.93,22.84,1.66,32.6,4.91,64.55,8.53,97.19,1.51,13.59-2.83,24.55-16.4,28.53ZM186.03,130.31c1.23-19.28-7.6-37.36-23.39-45.17-17.25-8.54-37.11-8.4-54.68-3.22l3.26,109.92c38.37,3.29,72.33-22.47,74.81-61.53Z"/>
      <path d="M847.28,366.13c7.66-45.49,17.18-87.86,30.52-131.29-41.97-58.13-77.78-119.05-108.53-183.77-5.06-10.65-4.91-20.02,5.9-26.9,16-10.19,61.06-30.64,73.26-4.65,21.61,46.03,45.48,89.77,71.36,134.17l35.87-73.16,35.63-69.83c12.33-23.9,58.63-1.86,73.99,9.65,6.74,5.05,8.41,13.54,4.46,21.03l-82.15,155.93c-32.05,60.83-42.56,120.45-53.98,187.62-1.31,7.7-6.55,14.36-15.18,15.07-18.74,1.54-76.21-3.8-71.15-33.85Z"/>
      <path d="M466.58,374.89l-164.33,15.54c-23.75,2.25-28.75-37.41-27.52-54.78.68-9.56,8.22-15.64,16.42-18.65l1.87-100.96,9.6-188.21c1.51-29.54,53.76-22.67,71.42-18.54,8.72,2.04,13.44,9.3,13.74,18.38l-10.2,177.63-4.07,99.04,82.57-7.8c12.07-1.14,21.42,4.06,24.83,16.15,2.96,13.7,9.39,59.95-14.35,62.2Z"/>
    </g>
    <polygon fill="#FFFFFF" points="617.38 204.81 628.32 157.25 644.19 96.13 672.11 195.33 617.38 204.81"/>
    <path fill="#FFFFFF" d="M186.03,130.31c-2.48,39.06-36.44,64.82-74.81,61.53l-3.26-109.92c17.57-5.18,37.42-5.31,54.68,3.22,15.79,7.81,24.61,25.88,23.39,45.17Z"/>
  </svg>
)

const navLinks = [
  { label: 'Hvad er YAY!', href: '#hvad' },
  { label: 'Kom i gang',   href: '#saadan' },
  { label: 'Blog',         href: '/blog' },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const closeMenu = () => setMenuOpen(false)

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── NAV ────────────────────────────────────────── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: NAVY,
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', height: 36 }}>
          <Logo height={36} color="#FFFFFF" />
        </a>

        {/* desktop links */}
        <ul className="hidden md:flex" style={{ listStyle: 'none', alignItems: 'center', gap: 32 }}>
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="https://play.yayyoumay.dk" style={{ display: 'inline-flex', alignItems: 'center' }} aria-label={c.nav.cta}>
              <PlayLogo height={26} />
            </a>
          </li>
        </ul>

        {/* hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5, width: 40, height: 40, padding: 4 }}
          aria-label="Åbn menu"
        >
          <span style={{ display: 'block', width: 24, height: 2, background: 'white', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: 'white', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: 'white', borderRadius: 2 }} />
        </button>
      </nav>

      {/* ── MOBILE MENU ────────────────────────────────── */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, bottom: 0, zIndex: 99,
          background: NAVY,
          display: 'flex', flexDirection: 'column',
          padding: '40px 24px',
          gap: 8,
          overflowY: 'auto',
        }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={closeMenu} style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: 22, fontWeight: 500, padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'block' }}>
              {l.label}
            </a>
          ))}
          <a href="https://play.yayyoumay.dk" onClick={closeMenu} style={{ marginTop: 24, background: YELLOW, color: NAVY, fontWeight: 700, textAlign: 'center', padding: 16, borderRadius: 100, textDecoration: 'none', fontSize: 17, display: 'block' }}>
            {c.nav.cta}
          </a>
        </div>
      )}

      {/* ── HERO ───────────────────────────────────────── */}
      <section style={{ minHeight: '100vh', background: NAVY, display: 'flex', alignItems: 'center', padding: '120px 40px 80px', position: 'relative', overflow: 'hidden' }}>
        {/* bg text */}
        <div aria-hidden style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400,
          fontSize: 'clamp(120px, 20vw, 280px)',
          color: 'rgba(255,255,255,0.03)',
          whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none', letterSpacing: -8,
        }}>
          YAY!
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}
             className="grid md:grid-cols-2 gap-[80px] items-center grid-cols-1 gap-y-10">

          {/* left: text */}
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(245,200,66,0.15)', border: '1px solid rgba(245,200,66,0.3)', color: YELLOW, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 16px', borderRadius: 100, marginBottom: 28 }}>
              {c.hero.tag}
            </div>
            <h1 className="font-heading" style={{ fontWeight: 400, fontSize: 'clamp(42px, 5vw, 72px)', lineHeight: 1.05, color: 'white', marginBottom: 28, letterSpacing: -2 }}>
              {c.hero.h1}<br />
              <em style={{ fontStyle: 'italic', color: YELLOW }}>{c.hero.h1em}</em>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,0.65)', marginBottom: 44, maxWidth: 460 }}>
              {c.hero.body}
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="https://play.yayyoumay.dk/register" style={{ background: YELLOW, color: NAVY, fontSize: 16, fontWeight: 700, padding: '16px 32px', borderRadius: 100, textDecoration: 'none', display: 'inline-block' }}>
                {c.hero.ctaPrimary}
              </a>
              <a href="#saadan" style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', fontSize: 16, fontWeight: 500, padding: '16px 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)', textDecoration: 'none', display: 'inline-block' }}>
                {c.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* right: tablet mockup */}
          <div className="flex md:flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              position: 'relative', maxWidth: 560, width: '100%',
              background: '#1a1f2e', borderRadius: 36, padding: '44px 22px 66px',
              boxShadow: '0 0 0 2px #2e3650, 0 40px 80px rgba(0,0,0,0.5)',
            }}>
              {/* camera dot */}
              <div style={{ position: 'absolute', top: 18, left: '50%', transform: 'translateX(-50%)', width: 8, height: 8, borderRadius: '50%', background: '#2e3650' }} />
              {/* home bar */}
              <div style={{ position: 'absolute', bottom: 25, left: '50%', transform: 'translateX(-50%)', width: 32, height: 4, borderRadius: 100, background: '#2e3650' }} />
              {/* app card */}
              <div style={{ background: 'white', borderRadius: 18, padding: '28px 28px 44px', overflow: 'hidden', width: '100%' }}>
                <div style={{ display: 'inline-block', background: CREAM, color: NAVY, fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '5px 12px', borderRadius: 100, marginBottom: 24 }}>
                  Juniormode
                </div>
                <div className="font-heading" style={{ fontWeight: 400, fontSize: 'clamp(22px, 3vw, 36px)', color: NAVY, letterSpacing: -1, lineHeight: 1.1, marginBottom: 12 }}>
                  Ingen algoritme, ingen shorts, ingen endeløst scroll.
                </div>
                <img src="/devices.png" alt="YAY! app" style={{ width: '100%', display: 'block', marginTop: 24 }} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── HVAD ER YAY ────────────────────────────────── */}
      <section id="hvad" style={{ background: YELLOW, padding: '120px 40px', position: 'relative', overflow: 'hidden' }}>
        {/* bg text */}
        <div aria-hidden style={{ position: 'absolute', top: 40, right: -20, fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400, fontSize: 'clamp(80px, 12vw, 160px)', color: 'rgba(0,0,0,0.05)', letterSpacing: -4, pointerEvents: 'none', userSelect: 'none', lineHeight: 1 }}>
          ALGORITMEN
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: NAVY, opacity: 0.5, marginBottom: 20 }}>
            {c.why.tag}
          </div>
          <h2 className="font-heading" style={{ fontWeight: 400, fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, color: NAVY, letterSpacing: -2, maxWidth: 760, marginBottom: 60 }}>
            {c.why.h2}
          </h2>
          <div style={{ maxWidth: 760 }}>
            {c.why.paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: 18, lineHeight: 1.7, color: 'rgba(27,42,74,0.75)', marginBottom: i < c.why.paragraphs.length - 1 ? 20 : 0 }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAADAN VIRKER DET ──────────────────────────── */}
      <section id="saadan" style={{ background: NAVY, padding: '120px 40px', position: 'relative', overflow: 'hidden' }}>
        {/* bg text */}
        <div aria-hidden style={{ position: 'absolute', bottom: -20, left: -10, fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400, fontSize: 'clamp(150px, 22vw, 320px)', color: 'rgba(255,255,255,0.03)', letterSpacing: -8, pointerEvents: 'none', userSelect: 'none', lineHeight: 1 }}>
          YAY
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
            {c.how.tag}
          </div>
          <h2 className="font-heading" style={{ fontWeight: 400, fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, color: 'white', letterSpacing: -2, maxWidth: 760, marginBottom: 72 }}>
            {c.how.h2line1}<br />{c.how.h2line2}
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', maxWidth: 680, marginBottom: 56 }}>
            {c.how.intro}
          </p>

          <div className="grid md:grid-cols-4 grid-cols-2 gap-7">
            {c.how.steps.map((step, i) => {
              const isBarn    = step.badge === 'Barnet'
              const badgeBg   = isBarn ? 'rgba(45,122,95,0.2)' : 'rgba(245,200,66,0.15)'
              const badgeFg   = isBarn ? '#4CAF85'              : YELLOW
              return (
                <div key={i} style={{ textAlign: 'center', padding: '0 8px' }}>
                  <div style={{ width: 68, height: 68, background: YELLOW, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <span className="font-heading" style={{ fontWeight: 400, fontSize: 28, color: NAVY, lineHeight: 1 }}>{step.number}</span>
                  </div>
                  <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', padding: '4px 12px', borderRadius: 100, marginBottom: 12, background: badgeBg, color: badgeFg }}>
                    {step.badge}
                  </div>
                  <p style={{ fontSize: 16, fontWeight: 700, color: 'white', marginBottom: 10 }}>
                    {step.title}
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,0.45)' }}>
                    {step.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TO SIDER ───────────────────────────────────── */}
      <section id="biblioteket" style={{ background: CREAM, padding: '120px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: NAVY, opacity: 0.5, marginBottom: 20 }}>
            {c.modes.tag}
          </div>
          <h2 className="font-heading" style={{ fontWeight: 400, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05, color: NAVY, letterSpacing: -2, maxWidth: 600, marginBottom: 64 }}>
            {c.modes.h2}
          </h2>
          <div className="grid md:grid-cols-2" style={{ gap: 24 }}>
            {c.modes.cards.map((card, i) => {
              const isNavyCard  = i === 0
              const cardBg      = isNavyCard ? NAVY   : YELLOW
              const cardFg      = isNavyCard ? 'white'  : NAVY
              const labelBg     = isNavyCard ? 'rgba(245,200,66,0.15)'  : 'rgba(27,42,74,0.12)'
              const labelFg     = isNavyCard ? YELLOW                   : NAVY
              const bodyOpacity = 0.7
              const bgTextColor = isNavyCard ? 'rgba(255,255,255,0.04)' : 'rgba(27,42,74,0.06)'
              return (
                <div key={i} style={{ background: cardBg, borderRadius: 24, padding: '48px 44px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 14px', borderRadius: 100, marginBottom: 24, background: labelBg, color: labelFg }}>
                    {card.label}
                  </div>
                  <h3 className="font-heading" style={{ fontWeight: 400, fontSize: 36, letterSpacing: -1, marginBottom: 16, lineHeight: 1.1, color: cardFg }}>
                    {card.h3}
                  </h3>
                  <p style={{ fontSize: 16, lineHeight: 1.65, opacity: bodyOpacity, maxWidth: 380, color: cardFg }}>
                    {card.body}
                  </p>
                  <div aria-hidden style={{ position: 'absolute', bottom: -20, right: -10, fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400, fontSize: 120, letterSpacing: -4, pointerEvents: 'none', userSelect: 'none', lineHeight: 1, color: bgTextColor }}>
                    {card.bgText}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── HISTORIEN ──────────────────────────────────── */}
      <section style={{ background: RED, padding: '120px 40px', position: 'relative', overflow: 'hidden' }}>
        {/* bg text */}
        <div aria-hidden style={{ position: 'absolute', bottom: -30, right: -20, fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400, fontSize: 'clamp(120px, 18vw, 240px)', color: 'rgba(255,255,255,0.05)', letterSpacing: -6, pointerEvents: 'none', userSelect: 'none', lineHeight: 1 }}>
          FAR?
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="grid md:grid-cols-2" style={{ gap: 80, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
                {c.story.tag}
              </div>
              <h2 className="font-heading" style={{ fontWeight: 400, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.1, color: 'white', letterSpacing: -1.5, marginBottom: 28 }}>
                {c.story.h2}
              </h2>
              {c.story.paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', marginBottom: 20 }}>
                  {p}
                </p>
              ))}
            </div>
            {/* right column intentionally empty to match reference layout */}
            <div />
          </div>
        </div>
      </section>

      {/* ── BLOG ───────────────────────────────────────── */}
      <section id="blog" style={{ background: LIGHT_GRAY, padding: '120px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: NAVY, opacity: 0.5, marginBottom: 20 }}>
            {c.blog.tag}
          </div>
          <h2 className="font-heading" style={{ fontWeight: 400, fontSize: 'clamp(36px, 4vw, 56px)', color: NAVY, letterSpacing: -1.5, marginBottom: 48 }}>
            {c.blog.h2}
          </h2>
          <div className="grid md:grid-cols-3" style={{ gap: 24 }}>
            {c.blog.posts.map((post, i) => {
              const bannerBgs  = [NAVY, YELLOW, RED]
              const tagBgs     = ['rgba(245,200,66,0.2)', 'rgba(27,42,74,0.15)', 'rgba(255,255,255,0.2)']
              const tagFgs     = [YELLOW, NAVY, 'white']
              const numColors  = ['rgba(255,255,255,0.08)', 'rgba(0,0,0,0.06)', 'rgba(255,255,255,0.08)']
              return (
                <Link key={i} href={post.href} style={{ display: 'flex', flexDirection: 'column', background: 'white', borderRadius: 20, overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}>
                  {/* banner */}
                  <div style={{ height: 160, display: 'flex', alignItems: 'flex-end', padding: 20, position: 'relative', overflow: 'hidden', background: bannerBgs[i] }}>
                    <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', padding: '5px 12px', borderRadius: 100, background: tagBgs[i], color: tagFgs[i] }}>
                      {post.tag}
                    </div>
                    <div aria-hidden style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400, fontSize: 80, color: numColors[i], letterSpacing: -3, lineHeight: 1 }}>
                      {post.number}
                    </div>
                  </div>
                  {/* body */}
                  <div style={{ padding: 28, flex: 1 }}>
                    <h3 className="font-heading" style={{ fontWeight: 400, fontSize: 20, color: NAVY, letterSpacing: -0.5, marginBottom: 10, lineHeight: 1.25 }}>
                      {post.h3}
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: GRAY }}>
                      {post.body}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, color: NAVY, marginTop: 20 }}>
                      Læs mere <span>→</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section id="faq" style={{ background: CREAM, padding: '120px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: NAVY, opacity: 0.5, marginBottom: 20 }}>
            {c.faq.tag}
          </div>
          <h2 className="font-heading" style={{ fontWeight: 400, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05, color: NAVY, letterSpacing: -1.5, maxWidth: 640, marginBottom: 56 }}>
            {c.faq.h2}
          </h2>

          <div style={{ maxWidth: 760 }}>
            {c.faq.items.map((item, i) => {
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

          <div style={{ marginTop: 40 }}>
            <Link href={c.faq.moreLink} style={{ fontSize: 15, fontWeight: 700, color: NAVY, textDecoration: 'none' }}>
              {c.faq.moreLinkLabel} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section style={{ background: NAVY, padding: '120px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* bg text */}
        <div aria-hidden style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400, fontSize: 'clamp(200px, 30vw, 420px)', color: 'rgba(255,255,255,0.025)', letterSpacing: -10, pointerEvents: 'none', userSelect: 'none' }}>
          JA!
        </div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="font-heading" style={{ fontWeight: 400, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 1.0, color: 'white', letterSpacing: -3, marginBottom: 24 }}>
            {c.cta.h2}
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', marginBottom: 48, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            {c.cta.body}
          </p>
          <a href="https://play.yayyoumay.dk/register" style={{ background: YELLOW, color: NAVY, fontSize: 16, fontWeight: 700, padding: '16px 32px', borderRadius: 100, textDecoration: 'none', display: 'inline-block' }}>
            {c.cta.btn}
          </a>
          <p style={{ marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
            {c.cta.note}
          </p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer style={{ background: FOOTER_BG, padding: '64px 40px 40px', color: 'rgba(255,255,255,0.35)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.06)' }}
             className="grid md:grid-cols-[2fr_1fr_1fr_1fr]" >
          <div>
            <a href="/" style={{ display: 'inline-flex', marginBottom: 16 }}>
              <Logo height={32} color="#FFFFFF" />
            </a>
            <p style={{ fontSize: 14, lineHeight: 1.6, maxWidth: 240 }}>
              YouTube-filter til de små
            </p>
          </div>

          {c.footer.cols.map((col, i) => (
            <div key={i}>
              <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 18 }}>
                {col.heading}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(link => (
                  <li key={link.href}>
                    {link.href.startsWith('/') ? (
                      <Link href={link.href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 14 }}>{link.label}</Link>
                    ) : (
                      <a href={link.href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 14 }}>{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, fontSize: 13 }}>
          <span>© {c.footer.copyright}</span>
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>Vibe coded efter sengetid - ræk ud hvis du vil høre nærmere</span>
        </div>
      </footer>
    </>
  )
}
