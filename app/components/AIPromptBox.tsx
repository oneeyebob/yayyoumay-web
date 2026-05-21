'use client'

import { useState, useEffect } from 'react'

const NAVY   = '#1B2A4A'
const YELLOW = '#F5C842'
const CREAM  = '#F7F3EB'

const ChatGPTIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
  </svg>
)

const ClaudeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.71,15.95l4.72-2.65.08-.23-.08-.13h-.23l-.79-.05-2.7-.07-2.34-.1-2.27-.12-.57-.12-.54-.7.05-.35.48-.32.69.06,1.52.1,2.28.16,1.65.1,2.45.26h.39l.06-.16-.13-.1-.1-.1-2.36-1.6-2.55-1.69-1.34-.97-.72-.49-.36-.46-.16-1.01.66-.72.88.06.22.06.89.69,1.91,1.48,2.49,1.83.36.3.15-.1.02-.07-.16-.27-1.36-2.45-1.45-2.49-.64-1.03-.17-.62c-.06-.24-.1-.48-.1-.73l.75-1.01.41-.13,1,.13.42.36.62,1.41,1,2.23,1.56,3.03.46.9.24.83.09.26h.16v-.15l.13-1.71.24-2.09.23-2.69.08-.76.38-.91.75-.49.58.28.48.69-.07.44-.29,1.85-.56,2.9-.36,1.94h.21l.24-.24.98-1.31,1.65-2.06.73-.82.85-.9.55-.43h1.03l.76,1.13-.34,1.17-1.06,1.35-.88,1.14-1.26,1.7-.79,1.36.07.11.19-.02,2.86-.61,1.54-.28,1.84-.31.83.39.09.4-.33.81-1.97.49-2.31.46-3.44.81-.04.03.05.06,1.55.15.66.04h1.62l3.02.23.79.52.47.64-.08.48-1.22.62-1.64-.39-3.83-.91-1.31-.33h-.18v.11l1.09,1.07,2.01,1.81,2.51,2.33.13.58-.32.45-.34-.05-2.2-1.66-.85-.75-1.93-1.62h-.13v.17l.44.65,2.34,3.52.12,1.08-.17.35-.61.21-.67-.12-1.37-1.92-1.41-2.17-1.14-1.94-.14.08-.67,7.25-.32.37-.73.28-.61-.46-.32-.75.32-1.48.39-1.92.31-1.53.29-1.9.17-.63v-.04s-.15.02-.15.02l-1.43,1.97-2.18,2.94-1.73,1.84-.41.16-.72-.37.07-.66.4-.59,2.39-3.04,1.44-1.88.93-1.09v-.16h-.06l-6.34,4.12-1.13.15-.49-.46.06-.75.23-.24,1.91-1.31s0,0,0,0Z"/>
  </svg>
)

const PerplexityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z"/>
  </svg>
)

const GeminiIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/>
  </svg>
)

type Props = {
  title: string
  url?: string
  compact?: boolean
  prompt?: string
}

export default function AIPromptBox({ title, url, compact = false, prompt: customPrompt }: Props) {
  const [platform, setPlatform] = useState<'ios' | 'android' | 'desktop'>('desktop')

  useEffect(() => {
    const ua = navigator.userAgent
    if (/iPhone|iPad|iPod/i.test(ua)) setPlatform('ios')
    else if (/Android/i.test(ua)) setPlatform('android')
    else setPlatform('desktop')
  }, [])

  const pageUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://yayyoumay.dk')

  const prompt = customPrompt ?? `Læs og opsummer artiklen "${title}" fra yayyoumay.dk: ${pageUrl}

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

  const ais = platform === 'ios'
    ? allAIs.filter(ai => ai.label === 'ChatGPT' || ai.label === 'Perplexity')
    : platform === 'android'
    ? allAIs.filter(ai => ai.label !== 'Claude')
    : allAIs.filter(ai => ai.label !== 'Gemini')

  if (compact) return (
    <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.35)', letterSpacing: 0.5, whiteSpace: 'nowrap' }}>
        Spørg din AI om YAY!
      </span>
      {ais.map(ai => (
        <a
          key={ai.label}
          href={ai.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'transparent', color: 'rgba(255,255,255,0.5)',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '6px 12px', borderRadius: 100,
            fontSize: 12, fontWeight: 600, textDecoration: 'none',
            transition: 'color 0.15s, border-color 0.15s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'white'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
          }}
        >
          {ai.icon}
          {ai.label}
        </a>
      ))}
    </div>
  )

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
