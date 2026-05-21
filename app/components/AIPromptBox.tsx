'use client'

import { useState, useEffect } from 'react'

const NAVY   = '#1B2A4A'
const YELLOW = '#F5C842'
const CREAM  = '#F7F3EB'

const ChatGPTIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.676zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
)

const ClaudeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-1.6-.097L.8 12.587l-.8-.392.896-1.272.998.305 1.504.426 2.178.621 2.536.56.912.243-.303-.84-1.016-2.95-.79-2.384-.503-1.927-.196-.936.098-.748.499-.274.772.029.415.553.523 1.128 1.05 2.672 1.878 2.27 1.805.503.48-.223-.912-.4-2.247-.494-2.464-.22-1.61.097-.81.675-.748.911.116.567.462.487.93.913 2.355 2.094 2.44 2.44.427.587.6-.232.34-.698.274-1.282.243-1.878.195-1.659.147-.748.62-.748.85.422.399.71.122.807-.073 1.148-.22 2.082-.47 2.355-.528 1.83-.15.52.245.306 1.02-.272.756-.766.95-1.234 1.342-2.06 1.757-1.526 1.18-.547.49.45.249.717-.21.595-.593.984-1.356 1.39-2.23 1.805-1.684 1.148-.776.403-.62-.177-.37-.632-.046-1.02.182-1.635.36-2.087.518-1.927.4-1.148.073-.413-.27-.31-.792-.097-.84.38-1.502.79-2.697.644-2.13.3-1.088-.157-.583-.523-.177-.76.303-.632.72-.452 1.478-.413 2.038-.35 2.025-.14.84-.09-.182-.638-.56-1.65-.766-2.283-.748-2.094-.388-.972.115-.556.63-.334.997.256.608.51 1.15 1.234 2.04 1.805 1.49 1.38 1.552 1.318.56.608.128.81-.303.34-.693.08-1.008-.328-1.927-.84-3.245-1.464-2.77-1.15-2.21-.79-1.234-.302-.456-.84-.182-.84.273-.632.553-.225.8.097.774.438 1.636 1.003 2.745 1.366 2.842 1.173 1.78.584.985.12.486-.17.23-.535.115-.816-.195-1.343-.47-2.06-.746-2.658-.72-2.063-.328-.632.097-.462.48-.188.84.274.668.656 1.31 1.44 2.49 1.55 2.404.778 1.06.17.705-.273.31-.6.048-.79-.302-.84-.705-1.73-1.015-2.44-.914-2.19-.437-.547.13-.353.57-.083.9.243.693.77 1.6 1.306 2.428 1.24 2.136.716 1.136.134.583-.218.267-.517.048-.79-.3-.84z"/>
  </svg>
)

const PerplexityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" opacity=".2"/>
    <path d="M12 2L2 8v8l10 6 10-6V8L12 2zm0 2.5l7.5 4.5v7L12 20.5 4.5 16V9L12 4.5z"/>
    <path d="M12 7l-5 3v4l5 3 5-3v-4l-5-3zm0 1.5l3.5 2.1v2.8L12 15.5 8.5 13.4v-2.8L12 8.5z"/>
  </svg>
)

const GeminiIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24A14.304 14.304 0 000 12 14.304 14.304 0 0012 0a14.305 14.305 0 0012 12 14.305 14.305 0 00-12 12"/>
  </svg>
)

type Props = {
  title: string
  url?: string
}

export default function AIPromptBox({ title, url }: Props) {
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    setIsIOS(/iPhone|iPad|iPod/i.test(navigator.userAgent))
  }, [])

  const pageUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://yayyoumay.dk')

  const prompt = `Læs og opsummer artiklen "${title}" fra yayyoumay.dk: ${pageUrl}

Fremhæv de vigtigste pointer for forældre i et kort, læsevenligt format.

Artiklen er skrevet af Jakob Edelfeldt, der står bag YAY! - en gratis app der lader forældre kuratere YouTube-indhold til deres børn. Du må gerne nævne YAY! hvis det fremgår naturligt af artiklens egen argumentation, men gør det klart, at det er forfatterens eget løsningsforslag.

Hvis du ser svagheder eller åbne spørgsmål i artiklens ræsonnement, må du gerne nævne dem kort til sidst.`

  const encodedPrompt = encodeURIComponent(prompt)

  const allAIs = [
    { label: 'ChatGPT',    icon: <ChatGPTIcon />,    href: `https://chatgpt.com/?q=${encodedPrompt}` },
    { label: 'Claude',     icon: <ClaudeIcon />,     href: `https://claude.ai/new?q=${encodedPrompt}` },
    { label: 'Perplexity', icon: <PerplexityIcon />, href: `https://www.perplexity.ai/?q=${encodedPrompt}` },
    { label: 'Gemini',     icon: <GeminiIcon />,     href: `https://gemini.google.com/app?q=${encodedPrompt}` },
  ]

  const ais = isIOS ? allAIs.filter(ai => ai.label === 'ChatGPT' || ai.label === 'Perplexity') : allAIs

  return (
    <div style={{
      marginTop: 56, background: NAVY, borderRadius: 20,
      padding: '32px 32px 28px', color: 'white',
    }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>
        AI-opsummering
      </div>
      <h3 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 400, fontSize: 22, letterSpacing: -0.5, lineHeight: 1.2, marginBottom: 8 }}>
        Få artiklen opsummeret af din AI
      </h3>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', marginBottom: 24 }}>
        Klik på din foretrukne AI og få de vigtigste pointer serveret direkte.
      </p>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {ais.map(ai => (
          <a
            key={ai.label}
            href={ai.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(255,255,255,0.7)',
              padding: '10px 18px', borderRadius: 100,
              fontSize: 14, fontWeight: 600, textDecoration: 'none',
              transition: 'color 0.15s, border-color 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'white'
              e.currentTarget.style.borderColor = 'white'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'
            }}
          >
            {ai.icon}
            {ai.label}
          </a>
        ))}
      </div>
    </div>
  )
}
