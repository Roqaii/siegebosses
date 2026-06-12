import type { Metadata } from 'next'
import { Bebas_Neue, Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const barlow = Barlow({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
})

export const metadata: Metadata = {
  title: 'Heroic Siege of Orgrimmar — Complete Raid Guide',
  description: '14 bosses. 4 zones. Complete Heroic strategy guide for Siege of Orgrimmar.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://img.youtube.com" crossOrigin="anonymous" />
      </head>
      <body style={{ fontFamily: 'var(--font-barlow), sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
