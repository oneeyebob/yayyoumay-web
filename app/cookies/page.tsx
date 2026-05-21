import Link from 'next/link'
import type { Metadata } from 'next'
import BlogHeader from '../components/BlogHeader'

export const metadata: Metadata = {
  title: 'Cookies - YAY!',
  description: 'Læs om hvordan YAY! bruger cookies.',
}

const NAVY   = '#1B2A4A'
const YELLOW = '#F5C842'
const CREAM  = '#F7F3EB'

export default function CookiesPage() {
  return (
    <>
      <BlogHeader />
      <main style={{ background: CREAM, minHeight: '100vh', padding: '80px 24px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>

          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(27,42,74,0.4)', marginBottom: 20 }}>
            Juridisk
          </div>
          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 400, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05, color: NAVY, letterSpacing: -1.5, marginBottom: 16 }}>
            Cookies
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(27,42,74,0.6)', marginBottom: 56 }}>
            Sidst opdateret: maj 2026
          </p>

          {[
            {
              title: 'Hvad er cookies?',
              body: 'Cookies er små tekstfiler der gemmes på din enhed når du besøger et website. De bruges til at få sitet til at virke, huske dine valg og forstå hvordan sitet bruges.'
            },
            {
              title: 'Nødvendige cookies',
              body: 'Disse cookies er nødvendige for at sitet virker. De bruges fx til at huske dit cookiesamtykke. Du kan ikke slå dem fra. De indeholder ingen personlige oplysninger og sendes ikke til tredjepart.'
            },
            {
              title: 'Statistik (ikke aktive endnu)',
              body: 'Vi planlægger at bruge Google Analytics til at forstå hvordan sitet bruges - fx hvilke sider der besøges og hvor lang tid besøgene varer. Ingen af disse data kan bruges til at identificere dig personligt. Disse cookies aktiveres kun hvis du giver samtykke.'
            },
            {
              title: 'Marketing (ikke aktive endnu)',
              body: 'Vi planlægger at bruge Meta Pixel til målrettet annoncering på Facebook og Instagram. Disse cookies aktiveres kun hvis du giver samtykke. Ingen marketingcookies er aktive på nuværende tidspunkt.'
            },
            {
              title: 'Sådan ændrer du dit samtykke',
              body: 'Du kan til enhver tid ændre dit samtykke ved at slette dine browserdata eller ved at kontakte os på hej@yayyoumay.dk, så nulstiller vi dit valg.'
            },
            {
              title: 'Kontakt',
              body: 'Har du spørgsmål til vores brug af cookies, er du velkommen til at skrive til hej@yayyoumay.dk.'
            },
          ].map((section, i) => (
            <div key={i} style={{ borderTop: '1px solid rgba(27,42,74,0.1)', paddingTop: 32, marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 400, fontSize: 24, color: NAVY, letterSpacing: -0.5, marginBottom: 12 }}>
                {section.title}
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(27,42,74,0.65)' }}>
                {section.body}
              </p>
            </div>
          ))}

          <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(27,42,74,0.1)' }}>
            <Link href="/" style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(27,42,74,0.4)', textDecoration: 'none' }}>
              ← Tilbage til forsiden
            </Link>
          </div>

        </div>
      </main>
    </>
  )
}
