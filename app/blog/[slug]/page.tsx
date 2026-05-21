import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { homeContent } from '../../../content/home'
import ShareButtons from '../../components/ShareButtons'
import AIPromptBox from '../../components/AIPromptBox'
import HistorienBagYay from '../../../content/blog/historien-bag-yay.mdx'
import LademannsLeksikon from '../../../content/blog/lademanns-leksikon.mdx'
import Algoritmen from '../../../content/blog/algoritmen.mdx'

const c = homeContent

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

const posts: Record<string, { title: string; description: string; kategori: string; Content: React.ComponentType; context: string }> = {
  'historien-bag-yay': {
    title: 'Far, må jeg se YouTube? Historien bag YAY!',
    description: 'Albert spurgte næsten hver dag. YAY! startede som et weekendprojekt - og blev svaret på et spørgsmål en ni-årig stiller dagligt.',
    kategori: 'Om YAY!',
    Content: HistorienBagYay,
    context: `- YAY! startede som et weekendprojekt fordi svaret på "må jeg se YouTube?" næsten altid var nej
- Ikke fordi YouTube er farligt, men fordi det ufiltrerede YouTube er svært at overskue for forældre
- Historien handler om Albert og Jakob - en far der byggede en løsning til sin søn
- Da andre forældre hørte om det, genkendte de alle historien
- YAY YOU MAY! blev svaret - et ja med retning i stedet for et nej`,
  },
  'lademanns-leksikon': {
    title: 'Er YouTube vores tids Lademanns Leksikon?',
    description: 'Lademanns havde en redaktion. YouTube har en algoritme. Det er en vigtig forskel - og det er det, der gør YAY! nødvendig.',
    kategori: 'Om YouTube',
    Content: LademannsLeksikon,
    context: `- Lademanns Leksikon havde en redaktion der kuraterede indholdet - YouTube har en algoritme
- YouTube er reelt en fantastisk vidensressource - børn lærer, nørder og udforsker
- Problemet er ikke YouTube som platform men måden indholdet serveres på
- Algoritmen optimerer for visningstid, ikke for læring eller trivsel
- En redaktør (forælderen) kan give børn det bedste fra YouTube uden algoritmens bagside
- YAY! giver forældre redaktørrollen tilbage`,
  },
  'algoritmen': {
    title: 'Algoritmen er ikke på vores hold',
    description: 'YouTubes algoritme måler ikke på om dit barn har lært noget eller har det godt. Den måler på om de fortsætter med at se. Det er ikke det samme.',
    kategori: 'Om algoritmen',
    Content: Algoritmen,
    context: `- YouTubes algoritme måler ikke på om dit barn har lært noget eller har det godt
- Den måler på om de fortsætter med at se - det er ikke det samme
- Algoritmen er designet af ingeniører hvis KPI er engagement og visningstid
- Shorts og autoplay er algoritmens mest effektive værktøjer mod børn
- Forældre kan ikke konkurrere med algoritmen ved at sige nej - de har brug for et alternativ
- YAY! fjerner algoritmen fra ligningen og lader forældre bestemme hvad der kommer næst`,
  },
}

export function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return {}

  const url = `https://www.yayyoumay.dk/blog/${slug}`

  return {
    title: `${post.title} - YAY!`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: 'YAY!',
      locale: 'da_DK',
      type: 'article',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/og-image.png'],
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  const { Content } = post

  return (
    <>
      {/* ── NAV ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: NAVY, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo height={32} color="#FFFFFF" />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
            Alle indlæg
          </Link>
          <Link href="/faq" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
            FAQ
          </Link>
          <a href="https://play.yayyoumay.dk/register" style={{ background: YELLOW, color: NAVY, padding: '8px 20px', borderRadius: 100, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
            {c.nav.cta}
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: NAVY, padding: '64px 40px 80px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', marginBottom: 32 }}>
            ← Alle indlæg
          </Link>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>
            {post.kategori}
          </div>
          <h1 className="font-heading" style={{ fontWeight: 400, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.1, color: 'white', letterSpacing: -1.5 }}>
            {post.title}
          </h1>
          <ShareButtons title={post.title} />
        </div>
      </section>

      {/* ── ARTICLE ── */}
      <section style={{ background: CREAM, padding: '72px 40px 120px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <article className="prose prose-lg max-w-none" style={{ color: NAVY }}>
            <Content />
          </article>

          <AIPromptBox title={post.title} url={`https://www.yayyoumay.dk/blog/${slug}`} />

          <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid rgba(27,42,74,0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <Link href="/blog" style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(27,42,74,0.4)', textDecoration: 'none' }}>
              ← Alle indlæg
            </Link>
            <a href="https://play.yayyoumay.dk/register" style={{ background: YELLOW, color: NAVY, fontSize: 14, fontWeight: 700, padding: '12px 24px', borderRadius: 100, textDecoration: 'none' }}>
              Opret dig på YAY! - det er helt gratis
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: FOOTER_BG, padding: '48px 40px 32px', color: 'rgba(255,255,255,0.35)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <Link href="/" style={{ display: 'inline-flex' }}>
            <Logo height={26} color="#FFFFFF" />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 14 }}>Blog</Link>
            <Link href="/faq" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 14 }}>FAQ</Link>
            <Link href="/kontakt" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 14 }}>Kontakt</Link>
            <div style={{ display: 'flex', gap: 14, marginLeft: 8 }}>
              {[
                { href: '#', label: 'Facebook',  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                { href: '#', label: 'Instagram', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                { href: '#', label: 'Threads',   icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.471 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.839 3.155 3.454 5.537l-2.667.647c-.993-3.96-3.285-5.964-7.613-5.992-2.757.019-4.911.86-6.402 2.497-1.414 1.556-2.145 3.79-2.17 6.64.025 2.851.756 5.082 2.17 6.637 1.49 1.638 3.645 2.479 6.401 2.496 1.302-.01 2.404-.195 3.373-.573a5.678 5.678 0 0 0 2.168-1.64c.617-.78.993-1.76 1.118-2.917.13-1.186-.024-2.14-.467-2.845-.436-.693-1.13-1.17-2.063-1.419a9.048 9.048 0 0 1-.336 1.72c-.317 1.046-.868 1.909-1.638 2.563-.806.683-1.81 1.05-2.985 1.09-1.006.033-1.937-.207-2.618-.676-.747-.514-1.18-1.281-1.218-2.156-.036-.837.296-1.587.934-2.112.612-.503 1.476-.793 2.56-.861a13.72 13.72 0 0 1 2.52.107c-.08-.543-.266-.947-.551-1.198-.32-.28-.802-.423-1.43-.426h-.016c-.493 0-1.12.133-1.566.682l-2.057-1.782c.783-.902 2.008-1.396 3.623-1.396h.024c2.717.018 4.365 1.595 4.468 4.328a14.47 14.47 0 0 1 1.84.572c1.416.568 2.485 1.467 3.088 2.597.624 1.167.778 2.57.455 4.167-.321 1.581-1.031 2.935-2.112 4.023-1.084 1.091-2.47 1.853-4.122 2.266-.99.249-2.078.377-3.236.385zm.554-7.986c.535-.018.976-.173 1.312-.46.381-.326.641-.81.773-1.437a11.56 11.56 0 0 0 .215-1.568 11.47 11.47 0 0 0-2.036-.087c-.658.041-1.168.22-1.476.518-.248.238-.369.541-.355.876.023.527.281.886.787 1.097.28.118.614.17.966.157l.014-.096z"/></svg> },
                { href: '#', label: 'TikTok',    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 680, margin: '0 auto', paddingTop: 24, fontSize: 13 }}>
          <span>© {c.footer.copyright}</span>
        </div>
      </footer>
    </>
  )
}
