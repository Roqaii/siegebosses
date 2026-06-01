'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import type { Boss } from '@/types/boss'
import { ZONE_COLORS, ZONE_NAMES } from '@/types/boss'

const ZONES = [
  { key: 'z1', bosses: [1, 2, 3, 4] },
  { key: 'z2', bosses: [5, 6, 7, 8] },
  { key: 'z3', bosses: [9, 10, 11] },
  { key: 'z4', bosses: [12, 13, 14] },
] as const

function DifficultyPips({ diff }: { diff: number }) {
  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`w-[6px] h-[6px] rounded-full transition-colors ${
            i < diff ? 'bg-red-500' : 'bg-white/10'
          }`}
        />
      ))}
    </div>
  )
}

function BossCard({ boss, index }: { boss: Boss; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 55)
          obs.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [index])

  const color = ZONE_COLORS[boss.zc]

  return (
    <Link
      ref={ref}
      href={`/bosses/${boss.slug}`}
      className="group relative bg-[#0d1018] border-l-[3px] overflow-hidden flex flex-col p-6 transition-all duration-200 hover:bg-[#131720] hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.7)]"
      style={{
        borderLeftColor: color,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1), background 0.15s, box-shadow 0.2s, border-color 0.15s',
      }}
    >
      {/* Watermark number */}
      <span
        className="absolute right-3 top-1 text-[5rem] leading-none opacity-[0.05] group-hover:opacity-[0.12] transition-opacity duration-200 select-none pointer-events-none"
        style={{ fontFamily: 'var(--font-bebas)' }}
      >
        {String(boss.num).padStart(2, '0')}
      </span>

      {/* Zone bar */}
      <div className="w-7 h-[2px] rounded-sm mb-5" style={{ background: color }} />

      <h3
        className="text-[1.5rem] leading-[1] tracking-[0.06em] text-foreground mb-1.5"
        style={{ fontFamily: 'var(--font-bebas)' }}
      >
        {boss.name}
      </h3>
      <p
        className="text-[10px] font-bold tracking-[0.1em] uppercase text-foreground/25 mb-4"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        {boss.sub}
      </p>

      {/* Rule */}
      <p className="text-[13px] text-foreground/45 leading-[1.65] italic mb-5 flex-1">
        &ldquo;{boss.rule}&rdquo;
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto">
        <DifficultyPips diff={boss.diff} />
        <span
          className="text-[10px] font-bold tracking-[0.12em] uppercase text-foreground/25 group-hover:text-foreground/60 flex items-center gap-1.5 transition-all duration-200 group-hover:gap-2.5"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Guide <span className="text-[14px]">→</span>
        </span>
      </div>
    </Link>
  )
}

export function BossGrid({ bosses }: { bosses: Boss[] }) {
  const [activeZone, setActiveZone] = useState<string>('all')

  const filteredBosses =
    activeZone === 'all' ? bosses : bosses.filter((b) => b.zc === activeZone)

  return (
    <section id="bosses" className="py-24 px-6 md:px-12 lg:px-20 bg-[#080a0f]">
      {/* Section header */}
      <div className="max-w-[1200px] mx-auto mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p
            className="text-[10px] font-bold tracking-[0.42em] uppercase text-red-400 mb-2 reveal"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            All Bosses
          </p>
          <h2
            className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] text-foreground reveal delay-1"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            The Raid
          </h2>
        </div>

        {/* Zone filter */}
        <div className="flex flex-wrap gap-1.5 reveal delay-2">
          <button
            onClick={() => setActiveZone('all')}
            className={`text-[10px] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-[2px] border transition-all duration-150 ${
              activeZone === 'all'
                ? 'border-white/20 text-foreground bg-white/[0.06]'
                : 'border-white/[0.08] text-foreground/30 hover:text-foreground/60 bg-transparent'
            }`}
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            All
          </button>
          {ZONES.map(({ key }) => {
            const color = ZONE_COLORS[key]
            const isActive = activeZone === key
            return (
              <button
                key={key}
                onClick={() => setActiveZone(isActive ? 'all' : key)}
                className="text-[10px] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-[2px] border transition-all duration-150"
                style={{
                  fontFamily: 'var(--font-barlow-condensed)',
                  borderColor: isActive ? color : 'rgba(255,255,255,0.08)',
                  color: isActive ? color : 'rgba(255,255,255,0.3)',
                  background: isActive ? `${color}14` : 'transparent',
                }}
              >
                {ZONE_NAMES[key]}
              </button>
            )
          })}
        </div>
      </div>

      {/* Zone sections */}
      {activeZone === 'all' ? (
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          {ZONES.map(({ key }) => {
            const zoneBosses = bosses.filter((b) => b.zc === key)
            const color = ZONE_COLORS[key]
            return (
              <div key={key}>
                <div
                  className="flex items-baseline gap-3 mb-3 px-4 py-2 border-l-[3px] bg-white/[0.02]"
                  style={{ borderLeftColor: color }}
                >
                  <span
                    className="text-[1rem] tracking-[0.18em]"
                    style={{ fontFamily: 'var(--font-bebas)', color }}
                  >
                    {ZONE_NAMES[key]}
                  </span>
                  <span
                    className="text-[10px] font-bold tracking-[0.1em] opacity-35"
                    style={{ fontFamily: 'var(--font-barlow-condensed)', color }}
                  >
                    Zone {['I', 'II', 'III', 'IV'][['z1', 'z2', 'z3', 'z4'].indexOf(key)]}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.04]">
                  {zoneBosses.map((boss, i) => (
                    <BossCard key={boss.slug} boss={boss} index={i} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.04]">
          {filteredBosses.map((boss, i) => (
            <BossCard key={boss.slug} boss={boss} index={i} />
          ))}
        </div>
      )}
    </section>
  )
}
