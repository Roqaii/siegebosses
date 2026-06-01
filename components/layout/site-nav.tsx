'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { BOSSES } from '@/data/bosses'
import { ZONE_COLORS, ZONE_NAMES, type ZoneKey } from '@/types/boss'

const ZONES: { key: ZoneKey; label: string }[] = [
  { key: 'z1', label: 'Vale of Eternal Sorrows' },
  { key: 'z2', label: 'Gates of Retribution' },
  { key: 'z3', label: 'The Underhold' },
  { key: 'z4', label: 'The Downfall' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const pathname = usePathname()
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setPopoverOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Close popover on route change
  useEffect(() => { setPopoverOpen(false) }, [pathname])

  const activeBoss = BOSSES.find((b) => pathname === `/bosses/${b.slug}`)
  const activeZone = activeBoss?.zc ?? null

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(6,8,14,0.97)] border-b border-white/[0.1] backdrop-blur-2xl shadow-[0_4px_32px_rgba(0,0,0,0.6)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Top bar */}
        <div className="flex items-center h-[52px] px-5 gap-3">

          {/* Brand */}
          <Link
            href="/"
            className={`flex items-center gap-2.5 flex-shrink-0 transition-all duration-300 ${
              scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <span
              style={{ fontFamily: 'var(--font-bebas)' }}
              className="text-[1.35rem] tracking-[0.18em] text-white"
            >
              SoO Heroic
            </span>
            <span
              className="text-[9px] font-extrabold tracking-[0.14em] uppercase px-2 py-[3px] bg-red-900/40 border border-red-600/40 text-red-400 rounded-[2px] flex-shrink-0"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              10-Man · Tier 16
            </span>
          </Link>

          {/* Divider */}
          <div className={`w-px h-5 bg-white/[0.1] flex-shrink-0 transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

          {/* Current boss indicator */}
          <div className={`flex items-center gap-3 flex-1 min-w-0 overflow-hidden transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
            {activeBoss ? (
              <>
                <span
                  className="text-[1.6rem] leading-none flex-shrink-0"
                  style={{ fontFamily: 'var(--font-bebas)', color: 'rgba(255,255,255,0.15)' }}
                >
                  {String(activeBoss.num).padStart(2, '0')}
                </span>
                <div className="w-px h-4 bg-white/[0.1] flex-shrink-0" />
                <span
                  className="text-[10px] font-extrabold tracking-[0.2em] uppercase flex-shrink-0"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', color: ZONE_COLORS[activeBoss.zc] }}
                >
                  {ZONE_NAMES[activeBoss.zc]}
                </span>
                <div className="w-px h-4 bg-white/[0.1] flex-shrink-0" />
                <span
                  className="text-[13px] font-extrabold tracking-[0.06em] uppercase text-white/80 whitespace-nowrap overflow-hidden text-ellipsis"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {activeBoss.name}
                </span>
              </>
            ) : (
              <span
                className="text-[13px] font-extrabold tracking-[0.1em] uppercase text-white/50"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Overview — All Bosses
              </span>
            )}
          </div>

          {/* All Bosses button */}
          <button
            onClick={() => setPopoverOpen((o) => !o)}
            className={`flex-shrink-0 inline-flex items-center gap-2.5 px-4 py-2 rounded-[3px] border transition-all duration-150 ${
              popoverOpen
                ? 'bg-white/[0.1] border-white/25 text-white'
                : 'bg-white/[0.05] border-white/[0.1] text-white/70 hover:bg-white/[0.08] hover:border-white/20 hover:text-white'
            } ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            {/* Hamburger / X icon */}
            <div className="flex flex-col gap-[4px] flex-shrink-0 w-[14px]">
              <span
                className="block h-[1.5px] bg-current rounded-sm transition-transform duration-200 origin-center"
                style={{ transform: popoverOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }}
              />
              <span
                className="block h-[1.5px] bg-current rounded-sm transition-opacity duration-200"
                style={{ opacity: popoverOpen ? 0 : 1 }}
              />
              <span
                className="block h-[1.5px] bg-current rounded-sm transition-transform duration-200 origin-center"
                style={{ transform: popoverOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }}
              />
            </div>
            <span
              className="text-[12px] font-extrabold tracking-[0.1em] uppercase"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              All Bosses
            </span>
          </button>

          {/* Discord */}
          <a
            href="https://discord.gg/t8Fd5K9mcd"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-shrink-0 flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752c4] transition-all rounded-[3px] px-4 py-2 ${
              scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <svg viewBox="0 -28.5 256 256" fill="#fff" width="14" height="14" className="flex-shrink-0">
              <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z" />
            </svg>
            <span style={{ fontFamily: 'var(--font-barlow-condensed)' }} className="text-[12px] font-extrabold tracking-[0.08em] text-white">
              Discord
            </span>
          </a>
        </div>

        {/* Zone progress bar */}
        <div className={`flex h-[3px] transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
          {ZONES.map(({ key }, i) => {
            const color = ZONE_COLORS[key]
            const bosses = BOSSES.filter((b) => b.zc === key)
            const activeBossInZone = activeZone === key ? activeBoss : null
            const progress = activeBossInZone
              ? bosses.findIndex((b) => b.slug === activeBossInZone.slug) / bosses.length + 1 / bosses.length
              : activeZone && ['z1','z2','z3','z4'].indexOf(activeZone) > ['z1','z2','z3','z4'].indexOf(key)
              ? 1
              : 0
            return (
              <div key={key} className="flex-1 relative" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <div
                  className="absolute inset-0 origin-left transition-transform duration-500"
                  style={{ background: color, transform: `scaleX(${progress})` }}
                />
                {i < ZONES.length - 1 && (
                  <div className="absolute right-0 top-0 bottom-0 w-px bg-white/[0.06]" />
                )}
              </div>
            )
          })}
        </div>
      </nav>

      {/* ── BACKDROP ── */}
      {popoverOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setPopoverOpen(false)}
          style={{ backdropFilter: 'blur(2px)' }}
        />
      )}

      {/* ── POPOVER GRID ── */}
      <div
        ref={popoverRef}
        className="fixed left-0 right-0 z-50 transition-all duration-200"
        style={{
          top: '55px',
          background: 'rgba(6,8,14,0.98)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(32px)',
          boxShadow: '0 16px 64px rgba(0,0,0,0.8)',
          opacity: popoverOpen ? 1 : 0,
          transform: popoverOpen ? 'translateY(0)' : 'translateY(-8px)',
          pointerEvents: popoverOpen ? 'all' : 'none',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {ZONES.map(({ key }) => {
            const color = ZONE_COLORS[key]
            const zoneBosses = BOSSES.filter((b) => b.zc === key)
            return (
              <div key={key}>
                {/* Zone header */}
                <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-white/[0.06]">
                  <div className="w-5 h-[2px] rounded-sm flex-shrink-0" style={{ background: color }} />
                  <span
                    className="text-[10px] font-extrabold tracking-[0.24em] uppercase"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', color }}
                  >
                    {ZONE_NAMES[key]}
                  </span>
                </div>

                {/* Boss list */}
                <div className="flex flex-col gap-[2px]">
                  {zoneBosses.map((boss) => {
                    const isActive = pathname === `/bosses/${boss.slug}`
                    return (
                      <Link
                        key={boss.slug}
                        href={`/bosses/${boss.slug}`}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-[3px] transition-colors group"
                        style={{ background: isActive ? 'rgba(255,255,255,0.07)' : 'transparent' }}
                        onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                        onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
                      >
                        {/* Number */}
                        <span
                          className="text-[1.4rem] leading-none w-[2ch] text-right flex-shrink-0"
                          style={{ fontFamily: 'var(--font-bebas)', color: isActive ? color : 'rgba(255,255,255,0.2)' }}
                        >
                          {boss.num}
                        </span>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <div
                            className="text-[13.5px] font-extrabold tracking-[0.05em] uppercase leading-[1.1] truncate"
                            style={{
                              fontFamily: 'var(--font-barlow-condensed)',
                              color: isActive ? '#fff' : 'rgba(255,255,255,0.7)',
                            }}
                          >
                            {boss.name}
                          </div>
                          <div
                            className="text-[10px] font-semibold tracking-[0.04em] mt-0.5 truncate"
                            style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'rgba(255,255,255,0.25)' }}
                          >
                            {boss.sub}
                          </div>
                        </div>

                        {/* Right side */}
                        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                          {/* Difficulty pips */}
                          <div className="flex gap-[3px]">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div
                                key={i}
                                className="w-[5px] h-[5px] rounded-full"
                                style={{ background: i < boss.diff ? color : 'rgba(255,255,255,0.08)' }}
                              />
                            ))}
                          </div>
                          {/* 3D badge */}
                          {boss.modelFile && (
                            <span
                              className="text-[8px] font-extrabold tracking-[0.12em] uppercase px-1.5 py-[1px] rounded-[2px] border"
                              style={{
                                fontFamily: 'var(--font-barlow-condensed)',
                                color: color,
                                borderColor: `${color}40`,
                                background: `${color}10`,
                              }}
                            >
                              3D
                            </span>
                          )}
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
