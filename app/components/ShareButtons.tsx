'use client'

import { useState } from 'react'

const NAVY   = '#1B2A4A'
const YELLOW = '#F5C842'

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const MessengerIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.438 5.504 3.688 7.2V22l3.37-1.85c.9.25 1.853.385 2.942.385 5.523 0 10-4.144 10-9.243C22 6.145 17.523 2 12 2zm1.007 12.44l-2.548-2.718-4.976 2.718 5.474-5.808 2.61 2.718 4.913-2.718-5.473 5.808z"/>
  </svg>
)

const ThreadsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.471 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.839 3.155 3.454 5.537l-2.667.647c-.993-3.96-3.285-5.964-7.613-5.992-2.757.019-4.911.86-6.402 2.497-1.414 1.556-2.145 3.79-2.17 6.64.025 2.851.756 5.082 2.17 6.637 1.49 1.638 3.645 2.479 6.401 2.496 1.302-.01 2.404-.195 3.373-.573a5.678 5.678 0 0 0 2.168-1.64c.617-.78.993-1.76 1.118-2.917.13-1.186-.024-2.14-.467-2.845-.436-.693-1.13-1.17-2.063-1.419a9.048 9.048 0 0 1-.336 1.72c-.317 1.046-.868 1.909-1.638 2.563-.806.683-1.81 1.05-2.985 1.09-1.006.033-1.937-.207-2.618-.676-.747-.514-1.18-1.281-1.218-2.156-.036-.837.296-1.587.934-2.112.612-.503 1.476-.793 2.56-.861a13.72 13.72 0 0 1 2.52.107c-.08-.543-.266-.947-.551-1.198-.32-.28-.802-.423-1.43-.426h-.016c-.493 0-1.12.133-1.566.682l-2.057-1.782c.783-.902 2.008-1.396 3.623-1.396h.024c2.717.018 4.365 1.595 4.468 4.328a14.47 14.47 0 0 1 1.84.572c1.416.568 2.485 1.467 3.088 2.597.624 1.167.778 2.57.455 4.167-.321 1.581-1.031 2.935-2.112 4.023-1.084 1.091-2.47 1.853-4.122 2.266-.99.249-2.078.377-3.236.385zm.554-7.986c.535-.018.976-.173 1.312-.46.381-.326.641-.81.773-1.437a11.56 11.56 0 0 0 .215-1.568 11.47 11.47 0 0 0-2.036-.087c-.658.041-1.168.22-1.476.518-.248.238-.369.541-.355.876.023.527.281.886.787 1.097.28.118.614.17.966.157l.014-.096z"/>
  </svg>
)

const LinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
)

const btnStyle = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  padding: '8px 16px', borderRadius: 100, border: 'none',
  fontSize: 13, fontWeight: 600, cursor: 'pointer',
  background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)',
  textDecoration: 'none', transition: 'background 0.15s',
} as const

export default function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false)

  const getUrl = () => typeof window !== 'undefined' ? window.location.href : ''

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getUrl())}`, '_blank')
  }

  const shareOnMessenger = () => {
    window.open(`fb-messenger://share/?link=${encodeURIComponent(getUrl())}`, '_blank')
  }

  const shareOnThreads = () => {
    window.open(`https://www.threads.net/intent/post?text=${encodeURIComponent(title + ' ' + getUrl())}`, '_blank')
  }

  const copyLink = () => {
    navigator.clipboard.writeText(getUrl()).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 24 }}>
      <button onClick={shareOnFacebook} style={btnStyle} title="Del på Facebook">
        <FacebookIcon /> Facebook
      </button>
      <button onClick={shareOnMessenger} style={btnStyle} title="Del via Messenger">
        <MessengerIcon /> Messenger
      </button>
      <button onClick={shareOnThreads} style={btnStyle} title="Del på Threads">
        <ThreadsIcon /> Threads
      </button>
      <button onClick={copyLink} style={{ ...btnStyle, background: copied ? 'rgba(245,200,66,0.2)' : 'rgba(255,255,255,0.1)', color: copied ? YELLOW : 'rgba(255,255,255,0.75)' }} title="Kopier link">
        <LinkIcon /> {copied ? 'Kopieret!' : 'Kopier link'}
      </button>
    </div>
  )
}
