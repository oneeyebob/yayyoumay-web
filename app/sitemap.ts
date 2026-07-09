import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.yayyoumay.dk'

  return [
    { url: base,                              lastModified: new Date(), changeFrequency: 'weekly',  priority: 1 },
    { url: `${base}/blog`,                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/blog/historien-bag-yay`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/lademanns-leksikon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/algoritmen`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/tempo-analyse`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`,                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/cookies`,                 lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
