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
const FOOTER_BG  = '#0F1A30'

/* ── shared style helpers ──────────────────────── */
const tag = (light: boolean): React.CSSProperties => ({
  display: 'block',
  fontSize: '0.65rem',
  fontWeight: 700,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  marginBottom: '1.25rem',
  color: light ? 'rgba(27,42,74,0.45)' : 'rgba(255,255,255,0.35)',
})

const sectionWrap: React.CSSProperties = {
  maxWidth: 1000,
  margin: '0 auto',
  padding: '0 1.5rem',
}

/* ── SVG logo ──────────────────────────────────── */
const Logo = ({ height = 28, color = 'currentColor' }: { height?: number; color?: string }) => (
  <svg height={height} viewBox="0 0 879.53 530.27" xmlns="http://www.w3.org/2000/svg" style={{ fill: color, display: 'block' }}>
    <path d="M417.64,304.28l-80.49,21.77-19.59,90.53c-3.98,18.41-47.01,7.61-60.86,2.63-6.51-2.34-11.41-9.64-9.8-16.98l12.13-55c-4.76-1.01-11.2-3.3-13.06-6.77-8.04-14.94-15.74-42.05,5.67-49.57l25.45-8.95c16.8-62.42,34.81-122.69,58.87-182.51,3.21-7.99,7.85-18.89,15.07-22.86,18.25-10.05,39.79-11.44,60.12-6.54,18.07,4.36,35.4,69.4,41.2,88.37l22.56,73.69c10.49-1.9,20.58-3.76,29.61-2.37,10.97,8.56,23.53,47.91,3.89,52.91l-18.61,4.74,23.26,79.38c6.11,20.85-38.11,28.66-51.69,31.04-11.66.3-20.03-5.47-23-16.52l-20.7-76.98ZM405.16,247.13l-23.8-90.37-28.71,104.36,52.5-13.99Z"/>
    <path d="M128.41,297.66l-42.7-53.6C56.72,207.66,29.45,171.36,3.14,132.95c-4.84-7.06-3.97-14.96,1.83-20.98,14.78-15.33,54.72-38.41,66.65-21.54l86.56,122.36c20.05-60.51,36.95-119.21,66.54-175.14,16.28-8.9,83.37,2.15,73.64,24.1-56.42,127.27-105.82,270.49-119.74,409.21-2.75,27.41-52.77,12.65-67.68,6.48-9.4-3.89-14.53-12.82-13.21-23.58,6.46-52.49,16.93-103.58,30.68-156.2Z"/>
    <path d="M549.96,383.26c4.5-43.85,14.69-83.31,26.26-125.17-40.93-57.03-76-116.61-105.56-180.24-10.14-21.83,39.57-37.67,55.03-37.66,7.3-.05,13.68,2.65,16.88,9.35,21.16,44.36,43.37,86.76,69.26,130.52,20.87-47.39,41.09-91.93,64.55-136.59,3.53-6.71,9.64-10.19,17.15-10.32,19.57,1.14,36.96,7.49,52.3,19.3,5.62,4.33,6.17,11.28,2.75,17.84-33.28,63.74-65.73,126.53-90.81,194.27-16.23,43.85-21.98,88.64-29.79,134.1-1.57,9.14-6.31,15.37-16.59,15.67-16.06.46-64.21-4.02-61.43-31.05Z"/>
    <path d="M797.83,270.89c-6,16.98-22.87,15.02-37.01,9.96-9.65-3.46-14.76-11.95-13.39-22.6,9.04-70.48,29.8-176.25,52.04-243.39,2.61-7.87,9.29-13.94,17.77-14.64,16.76-1.38,57.82,3.56,62.29,22.93-17.44,60.5-36.12,118.77-57.06,178.03l-24.63,69.71Z"/>
    <path d="M621.54,498.3c-128.46-39.01-272.04-20.11-394.14,31.62-2.78,1.18-8.96-.82-9.79-3.11s.9-8.38,3-9.61c19.36-11.39,37.52-21.2,58.57-29.74,79.58-32.29,164.51-47.87,250.61-46.04,24.15.51,110.16,7.92,121.37,28.67,4.85,8.97.53,17.94-4.98,23.9-5.97,6.46-15.72,7.02-24.65,4.31Z"/>
    <path d="M767.25,341.69c5.99,5.72,12.02,10.62,18.17,15.81,2.52,2.13,4.75,4.3,6.95,6.81,4.57,5.21,5.79,12.58,1.19,17-2.07,1.99-4.53,3.51-7.34,4.22l-11.23,2.85-21.74,5.61-4.56,1.08c-9.93,2.36-20.53,6.11-31.23,5.58-4.34-.21-8.63-2.86-10.88-7.22-1.57-3.04-1.88-6.34-1.37-9.48.86-5.32,2.29-10.26,3.47-15.51l4.59-20.42,3.38-13.54c1.04-4.16,2.34-8.01,4.18-11.72s4.4-6.48,8.23-7.58c6.46-1.84,12.78,3.06,18.05,7.62,2.46,2.12,4.76,4.2,7.13,6.46l13.01,12.43Z"/>
  </svg>
)

const navLinks = [
  { label: c.nav.links[0], href: '#hvad'       },
  { label: c.nav.links[1], href: '#saadan'      },
  { label: c.nav.links[2], href: '#biblioteket' },
  { label: c.nav.links[3], href: '/blog'        },
]

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const style: React.CSSProperties = {
    fontSize: '0.7rem',
    fontWeight: 500,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.55)',
    textDecoration: 'none',
  }
  if (href.startsWith('/')) {
    return <Link href={href} style={style} onClick={onClick}>{label}</Link>
  }
  return <a href={href} style={style} onClick={onClick}>{label}</a>
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <>
      {/* ── NAV ────────────────────────────────────────── */}
      <header style={{ background: NAVY, position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ ...sectionWrap, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          <a href="/" style={{ display: 'flex', color: 'white' }}>
            <Logo height={26} color="white" />
          </a>

          {/* desktop links */}
          <nav className="hidden md:flex" style={{ gap: '2.5rem', alignItems: 'center', listStyle: 'none' }}>
            {navLinks.map(l => <NavLink key={l.href} href={l.href} label={l.label} />)}
          </nav>

          <a href="https://play.yayyoumay.dk" className="hidden md:block" style={{ background: YELLOW, color: NAVY, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '0.55rem 1.2rem', textDecoration: 'none' }}>
            {c.nav.cta}
          </a>

          {/* hamburger */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 4 }} aria-label="Menu">
            <span style={{ display: 'block', width: 22, height: 2, background: 'white' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'white' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'white' }} />
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU ────────────────────────────────── */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, background: NAVY, zIndex: 100, display: 'flex', flexDirection: 'column', padding: '5rem 1.5rem 2rem' }}>
          <button onClick={close} style={{ position: 'absolute', top: '1rem', right: '1.5rem', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: '2rem', lineHeight: 1, cursor: 'pointer' }}>&#215;</button>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {navLinks.map(l => (
              <NavLink key={l.href} href={l.href} label={l.label} onClick={close} />
            ))}
            <a href="https://play.yayyoumay.dk" onClick={close} style={{ marginTop: '2rem', display: 'inline-block', background: YELLOW, color: NAVY, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '0.8rem 1.5rem', textDecoration: 'none', alignSelf: 'flex-start' }}>
              {c.nav.cta}
            </a>
          </div>
        </div>
      )}

      {/* ── HERO ───────────────────────────────────────── */}
      <section style={{ background: NAVY }}>
        <div style={{ ...sectionWrap, paddingTop: '5rem', paddingBottom: '5rem', display: 'grid', gap: '3rem', alignItems: 'center' }} className="md:grid-cols-2 md:py-28">

          <div>
            <span style={tag(false)}>{c.hero.tag}</span>
            <h1 className="font-heading" style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', lineHeight: 1.08, color: 'white', marginBottom: '1.5rem' }}>
              {c.hero.h1}<br />
              <span style={{ color: YELLOW }}>{c.hero.h1em}</span>
            </h1>
            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', maxWidth: '42ch', marginBottom: '2.5rem' }}>
              {c.hero.body}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="https://play.yayyoumay.dk/register" style={{ background: YELLOW, color: NAVY, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.9rem 1.75rem', textDecoration: 'none', display: 'inline-block' }}>
                {c.hero.ctaPrimary}
              </a>
              <a href="#saadan" style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.75)', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.9rem 1.75rem', textDecoration: 'none', display: 'inline-block' }}>
                {c.hero.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="hidden md:flex" style={{ justifyContent: 'center' }}>
            <img
              src="/devices.png"
              alt="YAY! pa tablet og telefon"
              style={{ width: '100%', maxWidth: 400, height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── HVAD ER YAY ────────────────────────────────── */}
      <section id="hvad" style={{ background: YELLOW }}>
        <div style={{ ...sectionWrap, paddingTop: '4.5rem', paddingBottom: '4.5rem' }} className="md:py-24">
          <span style={tag(true)}>{c.why.tag}</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', lineHeight: 1.1, color: NAVY, marginBottom: '2.5rem', maxWidth: '20ch' }}>
            {c.why.h2}
          </h2>
          <div style={{ display: 'grid', gap: '1.75rem' }} className="md:grid-cols-3">
            {c.why.paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(27,42,74,0.72)' }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAADAN VIRKER DET ──────────────────────────── */}
      <section id="saadan" style={{ background: NAVY }}>
        <div style={{ ...sectionWrap, paddingTop: '4.5rem', paddingBottom: '4.5rem' }} className="md:py-24">
          <span style={tag(false)}>{c.how.tag}</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', lineHeight: 1.1, color: 'white', marginBottom: '1.25rem' }}>
            {c.how.h2line1}<br />{c.how.h2line2}
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', maxWidth: '52ch', marginBottom: '3.5rem' }}>
            {c.how.intro}
          </p>

          <div>
            {c.how.steps.map((step, i) => {
              const isParent  = step.badge === 'Forældre'
              const isChild   = step.badge === 'Barnet'
              const badgeBg   = isParent ? YELLOW  : isChild ? CREAM : 'rgba(255,255,255,0.1)'
              const badgeFg   = isParent ? NAVY    : isChild ? NAVY  : 'rgba(255,255,255,0.45)'
              return (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '2.5rem 1fr', gap: '1.25rem', padding: '1.5rem 0', borderTop: '1px solid rgba(255,255,255,0.08)', alignItems: 'start' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 300, color: 'rgba(255,255,255,0.2)', lineHeight: 1, paddingTop: '0.15rem' }}>
                    {step.number}
                  </span>
                  <div>
                    <span style={{ display: 'inline-block', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '0.2rem 0.5rem', marginBottom: '0.6rem', background: badgeBg, color: badgeFg }}>
                      {step.badge}
                    </span>
                    <p style={{ fontSize: '0.97rem', fontWeight: 500, color: 'white', marginBottom: '0.3rem' }}>{step.title}</p>
                    <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.48)' }}>{step.body}</p>
                  </div>
                </div>
              )
            })}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />
          </div>
        </div>
      </section>

      {/* ── TO SIDER ───────────────────────────────────── */}
      <section id="biblioteket" style={{ background: CREAM }}>
        <div style={{ ...sectionWrap, paddingTop: '4.5rem', paddingBottom: '4.5rem' }} className="md:py-24">
          <span style={tag(true)}>{c.modes.tag}</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', lineHeight: 1.1, color: NAVY, marginBottom: '3rem', maxWidth: '22ch' }}>
            {c.modes.h2}
          </h2>
          <div style={{ display: 'grid', gap: '1.25rem' }} className="md:grid-cols-2">
            {c.modes.cards.map((card, i) => (
              <div key={i} style={{ background: 'white', padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                <span style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(27,42,74,0.35)', marginBottom: '1.25rem' }}>
                  {card.label}
                </span>
                <h3 className="font-heading" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)', lineHeight: 1.2, color: NAVY, marginBottom: '1rem' }}>
                  {card.h3}
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'rgba(27,42,74,0.58)' }}>
                  {card.body}
                </p>
                <span style={{ position: 'absolute', bottom: '-0.5rem', right: '1.25rem', fontSize: '5.5rem', fontWeight: 900, color: 'rgba(27,42,74,0.05)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
                  {card.bgText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HISTORIEN ──────────────────────────────────── */}
      <section style={{ background: RED }}>
        <div style={{ ...sectionWrap, paddingTop: '4.5rem', paddingBottom: '4.5rem' }} className="md:py-24">
          <span style={tag(false)}>{c.story.tag}</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.8rem)', lineHeight: 1.15, color: 'white', marginBottom: '2.5rem', maxWidth: '28ch' }}>
            {c.story.h2}
          </h2>
          <div style={{ display: 'grid', gap: '1.5rem' }} className="md:grid-cols-2 md:gap-16">
            <div>
              {c.story.paragraphs.slice(0, 2).map((p, i) => (
                <p key={i} style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.72)', marginBottom: '1.1rem' }}>{p}</p>
              ))}
            </div>
            <div>
              {c.story.paragraphs.slice(2).map((p, i) => (
                <p key={i} style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.72)', marginBottom: '1.1rem' }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG ───────────────────────────────────────── */}
      <section id="blog" style={{ background: LIGHT_GRAY }}>
        <div style={{ ...sectionWrap, paddingTop: '4.5rem', paddingBottom: '4.5rem' }} className="md:py-24">
          <span style={tag(true)}>{c.blog.tag}</span>
          <h2 className="font-heading" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', lineHeight: 1.1, color: NAVY, marginBottom: '3rem' }}>
            {c.blog.h2}
          </h2>
          <div style={{ display: 'grid', gap: '0' }} className="md:grid-cols-3">
            {c.blog.posts.map((post, i) => (
              <Link key={i} href={post.href} style={{ display: 'block', textDecoration: 'none', color: 'inherit', padding: '1.75rem 0', borderTop: '1px solid rgba(27,42,74,0.14)' }} className="md:border-t md:border-r-0 md:pr-8 last:pr-0">
                <span style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(27,42,74,0.38)', marginBottom: '0.75rem' }}>
                  {post.tag}
                </span>
                <p style={{ fontSize: '0.97rem', fontWeight: 500, lineHeight: 1.45, color: NAVY, marginBottom: '0.65rem' }}>
                  {post.h3}
                </p>
                <p style={{ fontSize: '0.87rem', lineHeight: 1.7, color: 'rgba(27,42,74,0.55)', marginBottom: '1.1rem' }}>
                  {post.body}
                </p>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: RED, letterSpacing: '0.04em' }}>
                  Las mere &rarr;
                </span>
              </Link>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(27,42,74,0.14)' }} className="hidden md:block" />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section id="faq" style={{ background: NAVY }}>
        <div style={{ ...sectionWrap, paddingTop: '5rem', paddingBottom: '5rem', textAlign: 'center', maxWidth: 640 }} className="md:py-32">
          <h2 className="font-heading" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.8rem)', lineHeight: 1.15, color: 'white', marginBottom: '1.25rem' }}>
            {c.cta.h2}
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.52)', marginBottom: '2.5rem' }}>
            {c.cta.body}
          </p>
          <a href="https://play.yayyoumay.dk/register" style={{ display: 'inline-block', background: YELLOW, color: NAVY, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '1rem 2.5rem', textDecoration: 'none', marginBottom: '1.1rem' }}>
            {c.cta.btn}
          </a>
          <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.28)' }}>
            {c.cta.note}
          </p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer style={{ background: FOOTER_BG, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ ...sectionWrap, paddingTop: '3.5rem', paddingBottom: '3.5rem', display: 'grid', gap: '2.5rem' }} className="md:grid-cols-4 md:py-16">

          <div>
            <Logo height={22} color="white" />
            <p style={{ fontSize: '0.8rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.32)', marginTop: '1rem', maxWidth: '24ch' }}>
              {c.footer.tagline}
            </p>
          </div>

          {c.footer.cols.map((col, i) => (
            <div key={i}>
              <p style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: '1.1rem' }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: 'none' }}>
                {col.links.map(link => (
                  <li key={link.href} style={{ marginTop: '0.6rem' }}>
                    {link.href.startsWith('/') ? (
                      <Link href={link.href} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.42)', textDecoration: 'none' }}>{link.label}</Link>
                    ) : (
                      <a href={link.href} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.42)', textDecoration: 'none' }}>{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.25rem 1.5rem' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.18)' }}>
              {c.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
