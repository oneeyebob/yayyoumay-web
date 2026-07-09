import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import CookieConsent from './components/CookieConsent'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yayyoumay.dk'),
  title: 'YAY! - YouTube-filter til børn',
  description: 'YAY! er et filter du lægger oven på YouTube. Du vælger hvad dit barn må se. Ingen algoritme, ingen shorts, ingen endeløst scroll.',
  alternates: {
    canonical: 'https://www.yayyoumay.dk',
  },
  openGraph: {
    title: 'YAY! - YouTube-filter til børn',
    description: 'YAY! er et filter du lægger oven på YouTube. Du vælger hvad dit barn må se. Ingen algoritme, ingen shorts, ingen endeløst scroll.',
    url: 'https://www.yayyoumay.dk',
    siteName: 'YAY!',
    locale: 'da_DK',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'YAY! - YouTube-filter til børn' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YAY! - YouTube-filter til børn',
    description: 'YAY! er et filter du lægger oven på YouTube. Du vælger hvad dit barn må se. Ingen algoritme, ingen shorts, ingen endeløst scroll.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
