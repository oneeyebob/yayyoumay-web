import { notFound } from 'next/navigation'
import Link from 'next/link'
import { homeContent } from '../../../content/home'
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

const posts: Record<string, { title: string; kategori: string; Content: React.ComponentType }> = {
  'historien-bag-yay':  { title: 'Far, må jeg se YouTube? Historien bag YAY!', kategori: 'Om YAY!',       Content: HistorienBagYay },
  'lademanns-leksikon': { title: 'Er YouTube vores tids Lademanns Leksikon?',  kategori: 'Om YouTube',    Content: LademannsLeksikon },
  'algoritmen':         { title: 'Algoritmen er ikke på vores hold',            kategori: 'Om algoritmen', Content: Algoritmen },
}

export function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }))
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
          <a href="https://play.yayyoumay.dk" style={{ display: 'inline-flex', alignItems: 'center' }} aria-label={c.nav.cta}>
            <PlayLogo height={26} />
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
        </div>
      </section>

      {/* ── ARTICLE ── */}
      <section style={{ background: CREAM, padding: '72px 40px 120px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <article className="prose prose-lg max-w-none" style={{ color: NAVY }}>
            <Content />
          </article>

          <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid rgba(27,42,74,0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <Link href="/blog" style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(27,42,74,0.4)', textDecoration: 'none' }}>
              ← Alle indlæg
            </Link>
            <a href="https://play.yayyoumay.dk/register" style={{ background: YELLOW, color: NAVY, fontSize: 14, fontWeight: 700, padding: '12px 24px', borderRadius: 100, textDecoration: 'none' }}>
              Prøv YAY! gratis
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
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 14 }}>Blog</Link>
            <Link href="/faq" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 14 }}>FAQ</Link>
            <Link href="/kontakt" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 14 }}>Kontakt</Link>
          </div>
        </div>
        <div style={{ maxWidth: 680, margin: '0 auto', paddingTop: 24, fontSize: 13 }}>
          <span>© {c.footer.copyright}</span>
        </div>
      </footer>
    </>
  )
}
