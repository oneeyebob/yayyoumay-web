import { notFound } from 'next/navigation'
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
    <main className="max-w-2xl mx-auto px-5 py-16">
      <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 block mb-3">{post.kategori}</span>
      <h1 className="text-3xl font-bold mb-10 leading-tight" style={{color:'#808f2d'}}>{post.title}</h1>
      <article className="prose prose-gray max-w-none">
        <Content />
      </article>
    </main>
  )
}
