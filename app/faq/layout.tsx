import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Ofte stillede spørgsmål om YAY!',
  description: 'Svar på de mest stillede spørgsmål om YAY! - YouTube-filteret til børn. Hvad koster det? Hvad er forskellen fra YouTube Kids? Skal man downloade en app?',
  alternates: { canonical: 'https://www.yayyoumay.dk/faq' },
  openGraph: {
    title: 'FAQ - Ofte stillede spørgsmål om YAY!',
    description: 'Svar på de mest stillede spørgsmål om YAY! - YouTube-filteret til børn.',
    url: 'https://www.yayyoumay.dk/faq',
    siteName: 'YAY!',
    locale: 'da_DK',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'YAY! FAQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Ofte stillede spørgsmål om YAY!',
    description: 'Svar på de mest stillede spørgsmål om YAY! - YouTube-filteret til børn.',
    images: ['/og-image.png'],
  },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
