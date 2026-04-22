import Link from 'next/link'

const posts = [
  { slug: 'historien-bag-yay', title: 'Far, må jeg se YouTube? - Historien bag YAY!', kategori: 'Om YAY!' },
  { slug: 'lademanns-leksikon', title: 'Er YouTube vores tids Lademanns Leksikon?', kategori: 'Om YouTube' },
  { slug: 'algoritmen', title: 'Algoritmen er ikke på vores hold', kategori: 'Om algoritmen' },
]

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-bold mb-2" style={{color:'#808f2d'}}>Blog</h1>
      <p className="text-gray-500 mb-12">Om børn, YouTube og algoritmerne.</p>
      <div className="divide-y divide-gray-200">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block py-6 group">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 block mb-1">{post.kategori}</span>
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#808f2d] transition-colors">{post.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  )
}
