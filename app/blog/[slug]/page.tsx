import { notFound } from 'next/navigation'
import Link from 'next/link'
import BlogHeader from '../../components/BlogHeader'
import HistorienBagYay from '../../../content/blog/historien-bag-yay.mdx'
import LademannsLeksikon from '../../../content/blog/lademanns-leksikon.mdx'
import Algoritmen from '../../../content/blog/algoritmen.mdx'

const posts: Record<string, { title: string; kategori: string; Content: React.ComponentType }> = {
  'historien-bag-yay': { title: 'Far, må jeg se YouTube? - Historien bag YAY!', kategori: 'Om YAY!', Content: HistorienBagYay },
  'lademanns-leksikon': { title: 'Er YouTube vores tids Lademanns Leksikon?', kategori: 'Om YouTube', Content: LademannsLeksikon },
  'algoritmen': { title: 'Algoritmen er ikke på vores hold', kategori: 'Om algoritmen', Content: Algoritmen },
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
    <div style={{ background: '#F5F1E8', minHeight: '100vh' }}>
      <BlogHeader />
      <main style={{ maxWidth: 680, margin: '0 auto', padding: '3rem 1.25rem 6rem' }}>
        <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(43,43,43,0.4)', textDecoration: 'none', marginBottom: '2.5rem' }}>
          ← Alle indlæg
        </Link>
        <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(43,43,43,0.35)', display: 'block', marginBottom: '0.7rem' }}>{post.kategori}</span>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#808f2d', marginBottom: '3rem', lineHeight: 1.15, letterSpacing: '-0.02em' }}>{post.title}</h1>
        <article className="prose prose-gray max-w-none">
          <Content />
        </article>
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(43,43,43,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/blog" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(43,43,43,0.4)', textDecoration: 'none' }}>
            ← Alle indlæg
          </Link>
          <a href="https://play.yayyoumay.dk/register" style={{ fontSize: '0.8rem', fontWeight: 700, background: '#E6C65C', color: '#2B2B2B', padding: '0.7rem 1.4rem', textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Prøv YAY! gratis
          </a>
        </div>
      </main>
    </div>
  )
}
