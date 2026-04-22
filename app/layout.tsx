import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YAY! - VideoTube til børn, af forældre til forældre',
  description: 'YAY! er et filterlag oven på YouTube. Du godkender kanaler og videoer - Junior ser kun det, du har valgt. Ingen algoritme, ingen overraskelser.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  )
}
