'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { UserCog } from 'lucide-react'

const SVGLogo = ({ height = 32, color = 'currentColor' }: { height?: number; color?: string }) => (
  <svg height={height} viewBox="0 0 879.53 530.27" xmlns="http://www.w3.org/2000/svg" style={{ fill: color }}>
    <path d="M417.64,304.28l-80.49,21.77-19.59,90.53c-3.98,18.41-47.01,7.61-60.86,2.63-6.51-2.34-11.41-9.64-9.8-16.98l12.13-55c-4.76-1.01-11.2-3.3-13.06-6.77-8.04-14.94-15.74-42.05,5.67-49.57l25.45-8.95c16.8-62.42,34.81-122.69,58.87-182.51,3.21-7.99,7.85-18.89,15.07-22.86,18.25-10.05,39.79-11.44,60.12-6.54,18.07,4.36,35.4,69.4,41.2,88.37l22.56,73.69c10.49-1.9,20.58-3.76,29.61-2.37,10.97,8.56,23.53,47.91,3.89,52.91l-18.61,4.74,23.26,79.38c6.11,20.85-38.11,28.66-51.69,31.04-11.66.3-20.03-5.47-23-16.52l-20.7-76.98ZM405.16,247.13l-23.8-90.37-28.71,104.36,52.5-13.99Z"/>
    <path d="M128.41,297.66l-42.7-53.6C56.72,207.66,29.45,171.36,3.14,132.95c-4.84-7.06-3.97-14.96,1.83-20.98,14.78-15.33,54.72-38.41,66.65-21.54l86.56,122.36c20.05-60.51,36.95-119.21,66.54-175.14,16.28-8.9,83.37,2.15,73.64,24.1-56.42,127.27-105.82,270.49-119.74,409.21-2.75,27.41-52.77,12.65-67.68,6.48-9.4-3.89-14.53-12.82-13.21-23.58,6.46-52.49,16.93-103.58,30.68-156.2Z"/>
    <path d="M549.96,383.26c4.5-43.85,14.69-83.31,26.26-125.17-40.93-57.03-76-116.61-105.56-180.24-10.14-21.83,39.57-37.67,55.03-37.66,7.3-.05,13.68,2.65,16.88,9.35,21.16,44.36,43.37,86.76,69.26,130.52,20.87-47.39,41.09-91.93,64.55-136.59,3.53-6.71,9.64-10.19,17.15-10.32,19.57,1.14,36.96,7.49,52.3,19.3,5.62,4.33,6.17,11.28,2.75,17.84-33.28,63.74-65.73,126.53-90.81,194.27-16.23,43.85-21.98,88.64-29.79,134.1-1.57,9.14-6.31,15.37-16.59,15.67-16.06.46-64.21-4.02-61.43-31.05Z"/>
    <path d="M797.83,270.89c-6,16.98-22.87,15.02-37.01,9.96-9.65-3.46-14.76-11.95-13.39-22.6,9.04-70.48,29.8-176.25,52.04-243.39,2.61-7.87,9.29-13.94,17.77-14.64,16.76-1.38,57.82,3.56,62.29,22.93-17.44,60.5-36.12,118.77-57.06,178.03l-24.63,69.71Z"/>
    <path d="M621.54,498.3c-128.46-39.01-272.04-20.11-394.14,31.62-2.78,1.18-8.96-.82-9.79-3.11s.9-8.38,3-9.61c19.36-11.39,37.52-21.2,58.57-29.74,79.58-32.29,164.51-47.87,250.61-46.04,24.15.51,110.16,7.92,121.37,28.67,4.85,8.97.53,17.94-4.98,23.9-5.97,6.46-15.72,7.02-24.65,4.31Z"/>
    <path d="M767.25,341.69c5.99,5.72,12.02,10.62,18.17,15.81,2.52,2.13,4.75,4.3,6.95,6.81,4.57,5.21,5.79,12.58,1.19,17-2.07,1.99-4.53,3.51-7.34,4.22l-11.23,2.85-21.74,5.61-4.56,1.08c-9.93,2.36-20.53,6.11-31.23,5.58-4.34-.21-8.63-2.86-10.88-7.22-1.57-3.04-1.88-6.34-1.37-9.48.86-5.32,2.29-10.26,3.47-15.51l4.59-20.42,3.38-13.54c1.04-4.16,2.34-8.01,4.18-11.72s4.4-6.48,8.23-7.58c6.46-1.84,12.78,3.06,18.05,7.62,2.46,2.12,4.76,4.2,7.13,6.46l13.01,12.43Z"/>
  </svg>
)

const GRØN = '#808f2d'
const GUL = '#E6C65C'
const TEKST = '#2B2B2B'
const PAPIR = '#F5F1E8'
const FERSKEN = '#F2D6C2'
const RØD = '#B5523A'
const BLÅ = '#6C7C8C'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const img = document.getElementById('hero-img')
    if (!img) return
    const handleScroll = () => {
      const scrollY = window.scrollY
      const imgHeight = img.offsetHeight
      const maxOffset = imgHeight * 0.1
      const offset = Math.min(scrollY * 0.2, maxOffset)
      img.style.transform = `translateY(-${offset}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ background: PAPIR, color: TEKST, fontFamily: 'system-ui, sans-serif' }}>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: '#F5F1E8', borderBottom: '1px solid rgba(0,0,0,0.08)', height: 56, display: 'flex', alignItems: 'center', padding: '0 1.25rem' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ color: '#000000', display: 'flex' }}>
            <SVGLogo height={34} color="#000000" />
          </a>
          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 list-none items-center" style={{ margin: 0, padding: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}><a href="https://play.yayyoumay.dk" style={{ fontSize: '0.78rem', fontWeight: 500, color: 'rgba(0,0,0,0.6)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Play</a></li>
            <li style={{ display: 'flex', alignItems: 'center' }}><a href="#hvad" style={{ fontSize: '0.78rem', fontWeight: 500, color: 'rgba(0,0,0,0.6)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Hvad er YAY!</a></li>
            <li style={{ display: 'flex', alignItems: 'center' }}><a href="#saadan" style={{ fontSize: '0.78rem', fontWeight: 500, color: 'rgba(0,0,0,0.6)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Sådan virker det</a></li>
            <li style={{ display: 'flex', alignItems: 'center' }}><Link href="/blog" style={{ fontSize: '0.78rem', fontWeight: 500, color: 'rgba(0,0,0,0.6)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Blog</Link></li>
            <li style={{ display: 'flex', alignItems: 'center' }}><a href="#faq" style={{ fontSize: '0.78rem', fontWeight: 500, color: 'rgba(0,0,0,0.6)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>FAQ</a></li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <a href="https://play.yayyoumay.dk/curator" style={{ display: 'inline-flex', alignItems: 'center', color: '#000000', textDecoration: 'none' }} title="Kuratormode">
                <UserCog size={18} />
              </a>
            </li>
          </ul>
          {/* Mobile hamburger */}
          <button className="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-0 cursor-pointer" onClick={() => setMenuOpen(true)} aria-label="Menu">
            <span style={{ display: 'block', width: 22, height: 2, background: '#000000' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#000000' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#000000' }} />
          </button>
        </div>
      </nav>

      {/* MENU OVERLAY */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, background: TEKST, zIndex: 200, display: 'flex', flexDirection: 'column', padding: '5rem 1.25rem 3rem' }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: '1.4rem', right: '1.25rem', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: '2rem', cursor: 'pointer', lineHeight: 1 }}>×</button>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
            <li><a href="https://play.yayyoumay.dk" onClick={() => setMenuOpen(false)} style={{ display: 'block', fontSize: '1.8rem', fontWeight: 800, color: 'white', textDecoration: 'none', padding: '0.7rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>Play</a></li>
            {[['#hvad', 'Hvad er YAY!'], ['#saadan', 'Sådan virker det'], ['/blog', 'Blog'], ['#faq', 'FAQ']].map(([href, label]) => (
              <li key={href}>
                {href.startsWith('/') ? (
                  <Link href={href} onClick={() => setMenuOpen(false)} style={{ display: 'block', fontSize: '1.8rem', fontWeight: 800, color: 'white', textDecoration: 'none', padding: '0.7rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>{label}</Link>
                ) : (
                  <a href={href} onClick={() => setMenuOpen(false)} style={{ display: 'block', fontSize: '1.8rem', fontWeight: 800, color: 'white', textDecoration: 'none', padding: '0.7rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>{label}</a>
                )}
              </li>
            ))}
          </ul>
          <a href="https://play.yayyoumay.dk" onClick={() => setMenuOpen(false)} style={{ marginTop: '2.5rem', background: '#E6C65C', color: '#2B2B2B', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '1rem 1.5rem', textDecoration: 'none', alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><path d="M0 0L10 6L0 12V0Z"/></svg>
            Spil
          </a>
        </div>
      )}

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 'clamp(320px, 55vw, 720px)' }} id="hero-bg">
          <img
            src="/iskiosk.png"
            alt="YAY! iskiosk ved stranden"
            id="hero-img"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center bottom' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(43,43,43,0.75) 0%, rgba(43,43,43,0.15) 60%, rgba(43,43,43,0.05) 100%)' }} />
        <div style={{ position: 'absolute', bottom: '2.5rem', zIndex: 1, width: '100%', maxWidth: 1080, left: '50%', transform: 'translateX(-50%)', padding: '0 1.25rem', textAlign: 'left' }}>
          <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: GUL, display: 'block', marginBottom: '0.9rem' }}>af forældre til forældre</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.025em', color: 'white', marginBottom: '1rem', textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
            VideoTube til børn<br />- af forældre til forældre.
          </h1>
          <p style={{ fontSize: '1.425rem', lineHeight: 1, color: 'rgba(255,255,255,0.9)', marginBottom: '1.8rem', maxWidth: '38ch', fontWeight: 600, textShadow: '0 2px 16px rgba(0,0,0,0.6)' }}>
            Vi viser rigtige YouTube-videoer og kanaler - men kun dem du har sagt ja til. Ingen overraskelser, ingen evige scroll, ingen algoritme.
          </p>
          <div style={{ display: 'flex', gap: 8, marginBottom: '1.4rem' }}>
            {[GUL, RØD, FERSKEN, GRØN, BLÅ].map((c, i) => (
              <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, display: 'inline-block' }} />
            ))}
          </div>
        </div>
      </section>

      <section id="hvad" style={{ borderBottom: '1px solid rgba(43,43,43,0.12)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

          {/* Venstre: Hvad er YAY! */}
          <div style={{ background: '#F5F1E8', padding: '3rem 1.25rem', borderRight: '1px solid rgba(43,43,43,0.12)' }} className="md:p-12">
            <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(43,43,43,0.35)', display: 'block', marginBottom: '1rem' }}>Hvad er YAY!</span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#808f2d', marginBottom: '1.2rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Far, må jeg se YouTube?<br />Ja, du må så.</h2>
            <div style={{ fontSize: '0.92rem', lineHeight: 1.8, color: 'rgba(43,43,43,0.72)' }}>
              <p>YAY! startede med et spørgsmål. Albert, 9 år, spurgte næsten hver dag om han måtte se YouTube. Og tit var svaret nej - ikke fordi YouTube er farligt, men fordi det ufiltrerede YouTube er uoverskueligt. For meget møj. For lidt kontrol.</p>
              <p style={{ marginTop: '0.9rem' }}>YAY! blev svaret på det spørgsmål. En webapp der lægger et kuratorlag oven på YouTube, så Junior kun ser det du allerede har godkendt. Ikke en ny streamingtjeneste. Ikke en børne-app. Men et forældreværktøj der giver dig hånden på styret - uden at tage cyklen fra barnet.</p>
            </div>
            <blockquote style={{ borderLeft: '3px solid #E6C65C', paddingLeft: '1.2rem', fontStyle: 'italic', color: 'rgba(43,43,43,0.45)', fontSize: '0.92rem', lineHeight: 1.65, marginTop: '1.5rem' }}>
              "Albert finder ikke noget i YAY! - som jeg ikke allerede har godkendt."
            </blockquote>
          </div>

          {/* Højre: CTA */}
          <div style={{ background: 'white', padding: '3rem 1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '1.2rem' }} className="md:p-12">
            <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(43,43,43,0.35)' }}>Klar til at starte?</span>
            <img
              src="/devices.png"
              alt="YAY! på tablet og telefon"
              style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
            />
            <p style={{ fontSize: '0.92rem', lineHeight: 1.75, color: 'rgba(43,43,43,0.6)' }}>YAY! er gratis. Opret en konto, sæt Junior op. Du kan også bare vælge gæsteadgang og se hvad der sker.</p>
            <a href="https://play.yayyoumay.dk" style={{ display: 'block', width: '100%', background: '#E6C65C', color: '#2B2B2B', fontFamily: 'inherit', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '1rem', textDecoration: 'none', textAlign: 'center' }}>Gå til play.yayyoumay.dk</a>
            <p style={{ fontSize: '0.72rem', color: 'rgba(43,43,43,0.3)' }}>Ingen kreditkort · Ingen persondata · Ingen binding</p>
          </div>

        </div>
      </section>

      {/* HVORFOR YAY! */}
      <section style={{ background: TEKST }} id="hvorfor">
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '3rem 1.25rem' }} className="md:px-8 md:py-20">
          <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', display: 'block', marginBottom: '1rem' }}>Hvorfor YAY!</span>
          <div className="md:grid md:grid-cols-2 md:gap-20 md:items-start">
            <div>
              <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 800, color: GRØN, marginBottom: '1.2rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Du behøver ikke begrænse - du kan vise vejen.</h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.55)', marginBottom: '2rem' }}>Da jeg var lille, sled jeg ryggen i stykker på familiens Lademanns Leksikon. For Albert er YouTube det samme - et levende, søgbart, uendeligt opslagsværk på video. YouTube er ikke fjenden. Men det er algoritmerne og det evindelige scroll.</p>
            </div>
            <div>
              {[
                ['01', 'Ingen algoritme', 'Børn ser ikke "anbefalet til dig". De ser det, du har valgt. Algoritmen er helt ude af ligningen.'],
                ['02', 'Du sætter grænsen - ikke platformen', 'Du bestemmer hvilke kanaler og videoer der er fine for dine børn. Ikke YouTube. Ikke en app. Dig.'],
                ['03', 'Godkend én kanal - få adgang til alt', 'Godkend en kanal én gang. Alle nye videoer fra den er automatisk tilgængelige.'],
                ['04', 'På tværs af enheder - i realtid', 'Opdater Alberts iPad mens du sidder i sofaen med din iPhone. Ændringer slår igennem med det samme.'],
                ['05', 'Ingen persondata om dine børn', 'Vi gemmer ingen personoplysninger om børn. Login med brugernavn og password - ingen email.'],
              ].map(([num, titel, tekst]) => (
                <div key={num} style={{ padding: '1.3rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>{titel}</p>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.5)' }}>{tekst}</p>
                </div>
              ))}
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', marginTop: 0 }} />
            </div>
          </div>
        </div>
      </section>

      {/* SÅDAN VIRKER DET */}
      <section id="saadan" style={{ borderBottom: '1px solid rgba(43,43,43,0.12)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '3rem 1.25rem' }} className="md:px-8 md:py-20">
          <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(43,43,43,0.35)', display: 'block', marginBottom: '1rem' }}>Sådan virker YAY!</span>
          <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 800, color: GRØN, marginBottom: '1rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>To tilstande. Én ro.</h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'rgba(43,43,43,0.68)', marginBottom: '2rem', maxWidth: '52ch' }}>YAY! har to tilstande - Kuratormode og Juniormode. I Kuratormode godkender du kanaler og videoer. I Juniormode ser Junior kun det, du har valgt. Ikke mere. Ikke andet.</p>
          <div>
            {[
              ['01', 'kur', 'Opret en konto og tilføj dit barn', 'Kun brugernavn og password. Ingen email, ingen telefonnummer. Tilføj én profil per barn.'],
              ['02', 'kur', 'Godkend kanaler og videoer', 'Find kanalen på YouTube, kopier URL\'en og indsæt den. Eller abonnér på en liste fra andre forældre i biblioteket.'],
              ['03', 'jun', 'Junior logger ind', 'Brugernavn og password. Junior ser kun det du har godkendt. Ingen anbefalinger, ingen algoritme, ingen vej ud til det åbne YouTube.'],
              ['04', 'løb', 'Juster når du vil', 'Tilføj nye kanaler. Afvis videoer. Alt sker i realtid på tværs af alle enheder - uden at røre Juniors iPad.'],
            ].map(([num, mode, titel, tekst]) => (
              <div key={num} style={{ display: 'grid', gridTemplateColumns: '5.5rem 1fr', gap: '1rem 1.5rem', padding: '1.3rem 0', borderTop: '1px solid rgba(43,43,43,0.12)', alignItems: 'start' }}>
                <span style={{
                  fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '0.22rem 0.5rem', borderRadius: 3, display: 'inline-block', marginTop: '0.2rem',
                  background: mode === 'kur' ? FERSKEN : mode === 'jun' ? GRØN : 'rgba(43,43,43,0.07)',
                  color: mode === 'jun' ? 'white' : mode === 'løb' ? 'rgba(43,43,43,0.45)' : TEKST,
                }}>{mode === 'kur' ? 'Kuratormode' : mode === 'jun' ? 'Juniormode' : 'Løbende'}</span>
                <div>
                  <p style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.25rem', color: TEKST }}>{titel}</p>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'rgba(43,43,43,0.55)' }}>{tekst}</p>
                </div>
              </div>
            ))}
            <div style={{ borderBottom: '1px solid rgba(43,43,43,0.12)' }} />
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" style={{ borderBottom: '1px solid rgba(43,43,43,0.12)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '3rem 1.25rem' }} className="md:px-8 md:py-20">
          <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(43,43,43,0.35)', display: 'block', marginBottom: '1rem' }}>Blog</span>
          <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 800, color: GRØN, marginBottom: '2rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Læs mere om børn og skærm</h2>
          <div className="md:grid md:grid-cols-3 md:gap-8">
            {[
              ['historien-bag-yay', 'Om YAY!', 'Far, må jeg se YouTube? - Historien bag YAY!', 'Hvordan et dagligt spørgsmål fra en ni-årig blev til et forældreværktøj.'],
              ['lademanns-leksikon', 'Om YouTube', 'Er YouTube vores tids Lademanns Leksikon?', 'YouTube er Alberts opslagsværk. Men Lademanns Leksikon havde en redaktion.'],
              ['algoritmen', 'Om algoritmen', 'Algoritmen er ikke på vores hold', 'Det starter altid roligt. En katte-video. Og så sker der noget.'],
            ].map(([slug, kat, titel, uddrag]) => (
              <Link key={slug} href={`/blog/${slug}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit', padding: '1.5rem 0', borderTop: '2px solid rgba(43,43,43,0.1)' }} className="md:border-t-2 md:pt-5 block">
                <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(43,43,43,0.35)', display: 'block', marginBottom: '0.45rem' }}>{kat}</span>
                <p style={{ fontSize: '0.97rem', fontWeight: 700, lineHeight: 1.35, color: TEKST, marginBottom: '0.5rem' }}>{titel}</p>
                <p style={{ fontSize: '0.83rem', lineHeight: 1.6, color: 'rgba(43,43,43,0.52)', marginBottom: '0.7rem' }}>{uddrag}</p>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: RØD }}>Læs mere →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ borderBottom: '1px solid rgba(43,43,43,0.12)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '3rem 1.25rem' }} className="md:px-8 md:py-20">
          <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(43,43,43,0.35)', display: 'block', marginBottom: '1rem' }}>Ofte stillede spørgsmål</span>
          <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 800, color: GRØN, marginBottom: '2rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Alt hvad du vil vide om YAY!</h2>
          <FAQList />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: GUL, padding: '3.5rem 1.25rem', textAlign: 'center' }} className="md:py-24">
        <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 800, color: TEKST, marginBottom: '0.8rem' }}>Sig YAY!</h2>
        <p style={{ fontSize: '0.95rem', color: 'rgba(43,43,43,0.65)', maxWidth: '36ch', margin: '0 auto 1.6rem', lineHeight: 1.7 }}>YAY! er gratis at starte. Opret en konto, sæt Junior op og se hvad der sker næste gang han spørger om han må se YouTube.</p>
        <a href="https://play.yayyoumay.dk/register" style={{ display: 'inline-block', background: TEKST, color: 'white', padding: '1rem 2.4rem', borderRadius: 6, fontFamily: 'inherit', fontSize: '0.88rem', fontWeight: 700, textDecoration: 'none' }}>Opret gratis konto</a>
        <p style={{ marginTop: '1rem', fontSize: '0.72rem', color: 'rgba(43,43,43,0.4)' }}>Ingen kreditkort · Ingen persondata</p>
      </section>

      {/* FOOTER */}
      <footer style={{ background: TEKST, color: 'white' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '2.5rem 1.25rem' }} className="md:px-8 md:grid md:grid-cols-3 md:gap-12 md:py-12">
          <div className="mb-8 md:mb-0">
            <SVGLogo height={26} color="white" />
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, marginTop: '0.7rem', maxWidth: '26ch' }}>VideoTube til børn - af forældre til forældre.</p>
          </div>
          <div className="mb-6 md:mb-0">
            <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: '0.9rem' }}>Navigation</p>
            <ul style={{ listStyle: 'none' }}>
              {[['#hvad', 'Hvad er YAY!'], ['#saadan', 'Sådan virker det'], ['/blog', 'Blog'], ['#faq', 'FAQ']].map(([href, label]) => (
                <li key={href} style={{ marginTop: '0.5rem' }}>
                  {href.startsWith('/') ? (
                    <Link href={href} style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{label}</Link>
                  ) : (
                    <a href={href} style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: '0.9rem' }}>Juridisk</p>
            <ul style={{ listStyle: 'none' }}>
              {[['/om', 'Om YAY!'], ['/kontakt', 'Kontakt'], ['/vilkaar', 'Vilkår for brug'], ['/privatlivspolitik', 'Privatlivspolitik'], ['/cookies', 'Cookies']].map(([href, label]) => (
                <li key={href} style={{ marginTop: '0.5rem' }}>
                  <Link href={href} style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '1.2rem 1.25rem' }} className="md:px-8">
          <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.3rem' }}>
            <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)' }}>2025 · yayyoumay.dk</p>
            <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)' }}>YAY! er ikke tilknyttet YouTube eller Google.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}

function FAQList() {
  const [open, setOpen] = useState<number | null>(null)
  const faqs = [
    ['Hvad er YAY!?', 'YAY! er en webapp der fungerer som et filterlag oven på YouTube. Du bestemmer hvilke kanaler og videoer dit barn må se - og Junior ser kun det, du har godkendt. Intet andet.'],
    ['Er YAY! en ny streamingtjeneste?', 'Nej. YAY! ejer ingen videoer. Alt indhold kommer fra YouTube. YAY! er udelukkende et kuratorlag der bestemmer hvad Junior kan se.'],
    ['Hvad er forskellen på YAY! og YouTube Kids?', 'YouTube Kids er lavet til de allermindste - det er begrænset i indhold og føles barnligt for børn over 6-7 år. YAY! giver adgang til hele YouTubes univers - men kun det du som forælder har godkendt. Du bestemmer niveauet.'],
    ['Hvad koster YAY!?', 'YAY! er gratis at starte. Hvis det en dag bliver en forretning, finder vi ud af det sammen.'],
    ['Skal man downloade en app?', 'Nej. YAY! er en webapp - du åbner den i browseren på yayyoumay.dk. På iPhone og iPad kan du tilføje den til hjemskærmen så den opfører sig som en app.'],
    ['Hvad skal jeg bruge for at oprette en konto?', 'Kun et brugernavn og et password. Ingen email, ingen telefonnummer, ingen betalingsoplysninger.'],
    ['Kan jeg administrere YAY! fra min telefon mens Junior bruger iPaden?', 'Ja. Du kan tilføje og fjerne indhold fra din egen enhed - ændringer slår igennem på Juniors skærm med det samme. Ingen kamp om enheden.'],
    ['Gemmer YAY! oplysninger om mit barn?', 'Nej. YAY! gemmer profilnavne som fx "Albert", men ingen personoplysninger om børnene. Børn opretter ikke egne konti og afgiver ingen data.'],
    ['Er YAY! GDPR-compliant?', 'Ja. YAY! er bygget med det eksplicitte formål at gemme så lidt data som muligt. Børn opretter ikke egne konti og afgiver ingen personoplysninger. Servere ligger i EU.'],
    ['Hvad er forskellen på YAY! og bare at sige nej til YouTube?', 'Nej er en midlertidig løsning. YAY! er et ja med retning. Barnet får adgang til det gode YouTube - og algoritmen får ikke adgang til barnet.'],
  ]
  return (
    <div className="md:grid md:grid-cols-2 md:gap-x-12 md:items-start">
      {[faqs.slice(0, 5), faqs.slice(5)].map((col, ci) => (
        <div key={ci}>
          {col.map(([q, a], i) => {
            const idx = ci * 5 + i
            return (
              <div key={idx} style={{ borderTop: '1px solid rgba(43,43,43,0.12)' }}>
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', padding: '1.1rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: TEKST, lineHeight: 1.4 }}>{q}</span>
                  <svg style={{ width: 17, height: 17, color: 'rgba(43,43,43,0.28)', flexShrink: 0, transition: 'transform 0.2s', transform: open === idx ? 'rotate(180deg)' : 'none' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="6 9 12 15 18 9" /></svg>
                </button>
                {open === idx && (
                  <div style={{ paddingBottom: '1.1rem' }}>
                    <p style={{ fontSize: '0.87rem', lineHeight: 1.75, color: 'rgba(43,43,43,0.62)' }}>{a}</p>
                  </div>
                )}
              </div>
            )
          })}
          <div style={{ borderBottom: '1px solid rgba(43,43,43,0.12)' }} />
        </div>
      ))}
    </div>
  )
}
