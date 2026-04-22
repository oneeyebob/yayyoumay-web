import Link from 'next/link'
import BlogHeader from '../components/BlogHeader'

const posts = [
  { slug: 'historien-bag-yay', title: 'Far, må jeg se YouTube? - Historien bag YAY!', kategori: 'Om YAY!', uddrag: 'Hvordan et dagligt spørgsmål fra en ni-årig blev til et forældreværktøj.' },
  { slug: 'lademanns-leksikon', title: 'Er YouTube vores tids Lademanns Leksikon?', kategori: 'Om YouTube', uddrag: 'YouTube er Alberts opslagsværk. Men Lademanns Leksikon havde en redaktion.' },
  { slug: 'algoritmen', title: 'Algoritmen er ikke på vores hold', kategori: 'Om algoritmen', uddrag: 'Det starter altid roligt. En katte-video. Og så sker der noget.' },
]

export default function BlogPage() {
  return (
    <div style={{ background: '#F5F1E8', minHeight: '100vh' }}>
      <BlogHeader />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 1.25rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#808f2d', marginBottom: '0.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Blog</h1>
        <p style={{ fontSize: '1rem', color: 'rgba(43,43,43,0.55)', marginBottom: '3rem' }}>Om børn, YouTube og algoritmerne.</p>
        <div>
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit', padding: '2rem 0', borderTop: '1px solid rgba(43,43,43,0.1)' }}>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(43,43,43,0.35)', display: 'block', marginBottom: '0.5rem' }}>{post.kategori}</span>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#2B2B2B', marginBottom: '0.5rem', lineHeight: 1.3, letterSpacing: '-0.01em' }}>{post.title}</h2>
              <p style={{ fontSize: '0.9rem', color: 'rgba(43,43,43,0.55)', lineHeight: 1.6, marginBottom: '0.8rem' }}>{post.uddrag}</p>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#B5523A' }}>Læs mere →</span>
            </Link>
          ))}
          <div style={{ borderTop: '1px solid rgba(43,43,43,0.1)' }} />
        </div>
      </main>
    </div>
  )
}
