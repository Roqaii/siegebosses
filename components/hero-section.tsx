'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const GarroshScene = dynamic(
  () => import('@/components/garrosh-scene').then((m) => m.GarroshScene),
  { ssr: false }
)

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const heroProgress = Math.min(scrollY / (heroRef.current?.offsetHeight || 800), 1)
  const titleOpacity = Math.max(1 - heroProgress * 1.8, 0)
  const titleY = scrollY * 0.3

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#060810] flex flex-col"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_70%,rgba(232,74,42,0.07)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_30%,rgba(46,143,223,0.03)_0%,transparent_60%)]" />
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 100%)',
          }}
        />
      </div>

      {/* 3D model — full right side / full background on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 md:left-[40%]">
          {mounted && <GarroshScene />}
        </div>
        {/* Gradient overlay on model — fade to left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060810] via-[#060810]/80 md:via-[#060810]/50 to-transparent" />
        {/* Gradient overlay bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-transparent to-[#060810]/30" />
      </div>

      {/* Hero content */}
      <div
        className="relative z-10 flex flex-col justify-end flex-1 px-6 md:px-12 lg:px-20 pb-20 pt-32"
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <p
          className="text-[11px] font-bold tracking-[0.42em] uppercase text-red-400 mb-5"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Heroic 10-Man · Tier 16 · MoP Classic
        </p>

        <h1
          className="text-[clamp(4rem,14vw,10rem)] leading-[0.86] tracking-[0.02em] text-foreground mb-6"
          style={{ fontFamily: 'var(--font-bebas)' }}
        >
          Siege of
          <br />
          <span className="text-[#e84a2a]">Orgrimmar</span>
        </h1>

        <p
          className="text-[clamp(0.8rem,2vw,1rem)] font-semibold tracking-[0.18em] uppercase text-foreground/30 mb-10"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Complete Raid Reference · 14 Bosses
        </p>

        {/* Stats row */}
        <div className="flex items-center gap-8 flex-wrap mb-12">
          {[
            { num: '14', label: 'Bosses' },
            { num: '4', label: 'Zones' },
            { num: 'Heroic', label: 'Difficulty' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <span
                className="text-[3rem] leading-none text-foreground block"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                {s.num}
              </span>
              <span
                className="text-[9px] font-bold tracking-[0.28em] uppercase text-foreground/25 block mt-1"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4 flex-wrap">
          <Link
            href="#bosses"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('bosses')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-[#e84a2a] hover:bg-[#c03328] transition-colors px-7 py-3 rounded-[3px]"
          >
            <span
              className="text-[12px] font-bold tracking-[0.1em] uppercase text-white"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              View All Bosses
            </span>
          </Link>
          <Link
            href="/bosses/garrosh-hellscream"
            className="inline-flex items-center gap-2 border border-white/[0.12] hover:border-white/25 transition-colors px-7 py-3 rounded-[3px]"
          >
            <span
              className="text-[12px] font-bold tracking-[0.1em] uppercase text-foreground/60 hover:text-foreground transition-colors"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Garrosh Guide
            </span>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        style={{ opacity: titleOpacity }}
      >
        <div
          className="w-px h-14 bg-gradient-to-b from-transparent via-red-500/60 to-transparent"
          style={{ animation: 'scrollPulse 2s ease-in-out 1.5s infinite' }}
        />
        <span
          className="text-[9px] font-bold tracking-[0.28em] uppercase text-foreground/25"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Scroll
        </span>
      </div>

      <style jsx>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
