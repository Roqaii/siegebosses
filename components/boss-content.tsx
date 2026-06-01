'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import type { Boss, AbilityItem } from '@/types/boss'
import { ZONE_COLORS } from '@/types/boss'

/* ─── Scroll Reveal Hook ─────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

/* ─── Section Label ──────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} flex items-center gap-3 mb-3`}>
      <span
        className="text-[10px] font-bold tracking-[0.38em] uppercase text-foreground/30"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        {children}
      </span>
      <div className="flex-1 h-px bg-white/[0.06]" />
    </div>
  )
}

/* ─── Section Heading ────────────────────────── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  const { ref, visible } = useReveal()
  return (
    <h2
      ref={ref}
      className={`reveal delay-1 ${visible ? 'visible' : ''} text-[clamp(2rem,5vw,4rem)] leading-[0.9] text-foreground mb-8`}
      style={{ fontFamily: 'var(--font-bebas)' }}
    >
      {children}
    </h2>
  )
}

/* ─── THE ONE RULE ───────────────────────────── */
function RuleSection({ boss }: { boss: Boss }) {
  const { ref, visible } = useReveal()
  const color = ZONE_COLORS[boss.zc]
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#0d1018] border-t border-b border-white/[0.05]">
      <div className="max-w-[900px] mx-auto relative">
        {/* Ghost text */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 leading-none opacity-[0.025] select-none pointer-events-none whitespace-nowrap"
          style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(5rem,12vw,10rem)' }}
        >
          THE ONE RULE
        </div>

        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} relative`}>
          <p
            className="text-[9px] font-bold tracking-[0.44em] uppercase mb-6 flex items-center gap-3"
            style={{ fontFamily: 'var(--font-barlow-condensed)', color }}
          >
            The one rule
            <span className="flex-1 h-px bg-white/[0.06]" />
          </p>
          <p
            className="text-[clamp(1.1rem,2.8vw,1.6rem)] font-bold leading-[1.55] text-foreground"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            {boss.rule}
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── OVERVIEW ───────────────────────────────── */
function OverviewSection({ boss }: { boss: Boss }) {
  const { ref, visible } = useReveal()
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[900px] mx-auto">
        <SectionLabel>Fight Overview</SectionLabel>
        <div ref={ref} className={`reveal delay-1 ${visible ? 'visible' : ''}`}>
          <p className="text-[15px] text-foreground/55 leading-[1.78] border-l-[3px] border-white/[0.1] pl-4 italic">
            {boss.overview}
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── MECHANICS ──────────────────────────────── */
function MechItem({ mech, index, color }: { mech: Boss['mechs'][0]; index: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), index * 80); obs.disconnect() } }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className="flex items-stretch bg-[#0d1018] border-l-[3px] overflow-hidden hover:bg-[#131720] transition-colors"
      style={{
        borderLeftColor: color,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-20px)',
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s, background 0.15s`,
      }}
    >
      <div className="w-[52px] flex-shrink-0 flex items-center justify-center text-xl border-r border-white/[0.05] bg-white/[0.02]">
        {mech.icon}
      </div>
      <div className="px-4 py-3 flex-1">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span
            className="text-[11.5px] font-bold tracking-[0.1em] uppercase text-foreground"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            {mech.name}
          </span>
          {mech.important && (
            <span className="text-[8px] font-bold tracking-[0.18em] uppercase px-1.5 py-[1px] rounded-[2px] bg-red-900/30 border border-red-700/40 text-red-400">
              KEY
            </span>
          )}
        </div>
        <p className="text-[13px] text-foreground/45 leading-[1.65]">{mech.desc}</p>
      </div>
    </div>
  )
}

function MechanicsSection({ boss }: { boss: Boss }) {
  const color = ZONE_COLORS[boss.zc]
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#080a0f]">
      <div className="max-w-[1200px] mx-auto">
        <SectionLabel>Core Mechanics</SectionLabel>
        <SectionHeading>What Kills Your Raid</SectionHeading>
        <div className="flex flex-col gap-[2px]">
          {boss.mechs.map((mech, i) => (
            <MechItem key={i} mech={mech} index={i} color={color} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── HEROIC CALLOUTS ────────────────────────── */
function HeroicSection({ boss }: { boss: Boss }) {
  if (!boss.heroic.length) return null
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20" style={{ background: 'linear-gradient(135deg,rgba(196,138,40,0.04) 0%,transparent 60%)', borderTop: '1px solid rgba(196,138,40,0.1)', borderBottom: '1px solid rgba(196,138,40,0.1)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-baseline gap-3 mb-6">
          <h2 className="text-[2rem] tracking-[0.08em] text-[#dfa838]" style={{ fontFamily: 'var(--font-bebas)' }}>
            Heroic Callouts
          </h2>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c48a28] opacity-70" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
            What changes on Heroic
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[rgba(196,138,40,0.1)]">
          {boss.heroic.map((item, i) => {
            const { ref, visible } = useReveal()  // eslint-disable-line
            return (
              <div
                key={i}
                ref={ref}
                className={`reveal delay-${Math.min(i + 1, 6)} ${visible ? 'visible' : ''} bg-[#0d1018] px-6 py-5 relative`}
              >
                <div className="absolute top-5 left-0 w-[3px] h-[calc(100%-2.5rem)] bg-[#c48a28] rounded-r-sm" />
                <div className="text-[2.2rem] leading-none text-[rgba(196,138,40,0.18)] mb-1" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-[13px] text-[rgba(220,165,50,0.8)] leading-[1.65]">{item}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── ROLES ──────────────────────────────────── */
function RolesSection({ boss }: { boss: Boss }) {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#080a0f]">
      <div className="max-w-[1200px] mx-auto">
        <SectionLabel>Role Assignments</SectionLabel>
        <SectionHeading>Your Job This Fight</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {boss.roles.map((role, i) => {
            const { ref, visible } = useReveal()  // eslint-disable-line
            return (
              <div
                key={i}
                ref={ref}
                className={`reveal delay-${Math.min(i + 1, 6)} ${visible ? 'visible' : ''} bg-[#0d1018] hover:bg-[#131720] transition-colors p-6 relative overflow-hidden`}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: role.color }} />
                <div className="text-[1.5rem] mb-3">{role.color === '#c0392b' || role.color === '#e8352a' ? '⚔️' : role.color === '#17a07c' || role.color === '#1db89a' ? '💚' : '🎯'}</div>
                <div className="text-[1.4rem] tracking-[0.06em] mb-3" style={{ fontFamily: 'var(--font-bebas)', color: role.color }}>
                  {role.label}
                </div>
                <p className="text-[13px] text-foreground/45 leading-[1.7]">{role.note}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── LUST BANNER ────────────────────────────── */
function LustBanner({ boss }: { boss: Boss }) {
  const { ref, visible } = useReveal()
  return (
    <div className="px-6 md:px-12 lg:px-20 pb-8">
      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''} max-w-[1200px] mx-auto flex items-center gap-6 px-8 py-6 relative overflow-hidden rounded-[3px]`}
        style={{
          background: 'linear-gradient(100deg,rgba(140,18,12,0.95),rgba(192,51,40,0.85) 55%,rgba(140,18,12,0.95))',
          border: '1px solid rgba(224,72,64,0.28)',
          borderLeft: '4px solid #e04840',
          boxShadow: '0 4px 28px rgba(192,51,40,0.2)',
        }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 leading-none opacity-[0.07] select-none pointer-events-none" style={{ fontFamily: 'var(--font-bebas)', fontSize: '5rem' }}>
          BLOODLUST
        </div>
        <span className="text-2xl flex-shrink-0">🔥</span>
        <div>
          <p className="text-[9px] font-bold tracking-[0.34em] uppercase text-white/55 mb-1" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
            Bloodlust / Heroism / Time Warp
          </p>
          <p className="text-[15px] font-bold text-white leading-[1.45]">{boss.lust}</p>
        </div>
      </div>
    </div>
  )
}

/* ─── PHASE ACCORDION ────────────────────────── */
function PhaseSection({ boss }: { boss: Boss }) {
  const color = ZONE_COLORS[boss.zc]
  if (!boss.strat.length) return null

  return (
    <section className="py-4 px-6 md:px-12 lg:px-20 pb-16 bg-[#080a0f]">
      <div className="max-w-[1200px] mx-auto">
        <SectionLabel>Strategy</SectionLabel>
        <SectionHeading>Phase by Phase</SectionHeading>
        <div className="flex flex-col gap-[2px]">
          {boss.strat.map((phase, i) => {
            const { ref, visible } = useReveal()  // eslint-disable-line
            return (
              <details
                key={i}
                ref={ref as any}
                className={`reveal-left delay-${Math.min(i + 1, 6)} ${visible ? 'visible' : ''} bg-[#0d1018] overflow-hidden group`}
                style={{ borderLeft: `3px solid ${color}` }}
              >
                <summary className="flex items-center gap-3 px-5 py-3.5 cursor-pointer select-none bg-[#0d1018] group-open:bg-[#131720] hover:bg-[#131720] transition-colors list-none">
                  <span
                    className="text-[12px] font-bold tracking-[0.1em] uppercase text-foreground flex-1"
                    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                  >
                    {phase.phase}
                  </span>
                  <svg className="w-3 h-3 text-foreground/25 transition-transform group-open:rotate-180 flex-shrink-0" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 pt-2 flex flex-col gap-3">
                  {phase.points.map((point, j) => (
                    <div key={j} className="flex gap-3 items-start">
                      {point.icon && <span className="text-sm flex-shrink-0 mt-0.5">{point.icon}</span>}
                      <div>
                        <span
                          className="text-[10px] font-bold tracking-[0.1em] uppercase mr-2"
                          style={{
                            fontFamily: 'var(--font-barlow-condensed)',
                            color: point.role === 'Tanks' ? '#c0392b' : point.role === 'Healers' ? '#17a07c' : point.role === 'DPS' ? '#2e8fdf' : 'rgba(255,255,255,0.35)',
                          }}
                        >
                          {point.role}
                        </span>
                        <span className="text-[13px] text-foreground/45 leading-[1.72]">{point.note}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── ABILITIES ──────────────────────────────── */

/* SVG tag icons */
function TagDodge() {
  return (
    <span title="Dodge / avoid" style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:20, height:20, borderRadius:3, background:'rgba(110,240,160,0.10)', border:'1px solid rgba(110,240,160,0.28)', color:'#6ef0a0', flexShrink:0 }}>
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <g transform="rotate(45 6 6)">
          <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </g>
      </svg>
    </span>
  )
}
function TagTank() {
  return (
    <span title="Tank ability" style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:20, height:20, borderRadius:3, background:'rgba(96,160,255,0.10)', border:'1px solid rgba(96,160,255,0.28)', color:'#60a0ff', flexShrink:0 }}>
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path d="M6 1L2 3.5v3C2 9 4 11 6 11s4-2 4-4.5v-3L6 1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}
function TagDeadly() {
  return (
    <span title="Deadly — use cooldown" style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:20, height:20, borderRadius:3, background:'rgba(192,51,40,0.13)', border:'1px solid rgba(192,51,40,0.32)', color:'#ff8070', flexShrink:0 }}>
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M6 3.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="6" cy="8.5" r="0.65" fill="currentColor"/>
      </svg>
    </span>
  )
}
function TagInterrupt() {
  return (
    <span title="Interrupt" style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:20, height:20, borderRadius:3, background:'rgba(196,138,40,0.11)', border:'1px solid rgba(196,138,40,0.28)', color:'#dfa838', flexShrink:0 }}>
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

function AbilityCard({ ability }: { ability: AbilityItem }) {
  const borderColor = ability.important
    ? 'rgba(192,51,40,0.45)'
    : ability.dodge
    ? 'rgba(110,240,160,0.3)'
    : ability.interrupt
    ? 'rgba(196,138,40,0.35)'
    : 'rgba(255,255,255,0.07)'

  return (
    <details
      className="group bg-[#0d1018] overflow-hidden"
      style={{ borderLeft: `2px solid ${borderColor}` }}
    >
      <summary className="flex items-center gap-3 px-4 py-3 cursor-pointer select-none list-none hover:bg-white/[0.03] transition-colors">
        {/* icon slot */}
        <div className="w-8 h-8 rounded flex-shrink-0 flex items-center justify-center text-base bg-white/[0.04] border border-white/[0.08]">
          {ability.icon ?? '✦'}
        </div>

        {/* name */}
        <span
          className="flex-1 text-[13px] font-bold tracking-[0.07em] uppercase text-foreground"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          {ability.name}
        </span>

        {/* tags — right side */}
        <div className="flex items-center gap-1.5">
          {ability.role === 'tank' && <TagTank />}
          {ability.important && <TagDeadly />}
          {ability.dodge && <TagDodge />}
          {ability.interrupt && <TagInterrupt />}
        </div>

        {/* chevron */}
        <svg
          className="w-3.5 h-3.5 text-foreground/20 flex-shrink-0 transition-transform group-open:rotate-180"
          viewBox="0 0 14 14" fill="none"
        >
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      </summary>

      {/* body */}
      <div className="px-4 pb-4 pt-1 pl-[3.75rem]">
        <p className="text-[13.5px] text-foreground/50 leading-[1.72]">{ability.desc}</p>
        {ability.children && (
          <div className="mt-3 border-l-2 border-white/[0.06] pl-3 flex flex-col gap-2">
            {ability.children.map((child, ci) => (
              <div key={ci} className="bg-white/[0.025] rounded-[3px] px-3 py-2.5">
                <div
                  className="text-[10.5px] font-bold tracking-[0.08em] uppercase text-foreground/55 mb-1"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {child.name}
                </div>
                <p className="text-[12.5px] text-foreground/38 leading-[1.65]">{child.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </details>
  )
}

function AbilitiesSection({ boss }: { boss: Boss }) {
  if (!boss.abilities.length) return null
  const color = ZONE_COLORS[boss.zc]
  const { ref, visible } = useReveal()
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#0d1018]">
      <div className="max-w-[1200px] mx-auto">
        <SectionLabel>Ability Reference</SectionLabel>
        <SectionHeading>Full Ability List</SectionHeading>
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} flex flex-col gap-5`}>
          {boss.abilities.map((phase, pi) => (
            <div key={pi}>
              {/* phase header bar */}
              <div
                className="px-4 py-2.5 mb-[2px] bg-[#111620]"
                style={{ borderLeft: `3px solid ${color}` }}
              >
                <span
                  className="text-[11px] font-bold tracking-[0.2em] uppercase text-foreground/45"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {phase.phase}
                </span>
              </div>
              {/* ability cards */}
              <div className="flex flex-col gap-[2px]">
                {phase.items.map((ability, ai) => (
                  <AbilityCard key={ai} ability={ability} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── PREV / NEXT NAV ────────────────────────── */
function BossNav({ prevBoss, nextBoss }: { prevBoss: Boss | null; nextBoss: Boss | null }) {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-12 bg-[#080a0f] border-t border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto flex justify-between gap-4">
        {prevBoss ? (
          <Link
            href={`/bosses/${prevBoss.slug}`}
            className="group flex items-center gap-3 border border-white/[0.07] hover:border-white/15 bg-[#0d1018] hover:bg-[#131720] transition-all px-5 py-4 rounded-[3px] flex-1 max-w-xs"
          >
            <span className="text-foreground/30 group-hover:text-foreground/60 text-lg transition-colors">←</span>
            <div>
              <p className="text-[9px] font-bold tracking-[0.28em] uppercase text-foreground/25 mb-1" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                Previous
              </p>
              <p className="text-[14px] font-bold tracking-[0.06em] text-foreground" style={{ fontFamily: 'var(--font-bebas)' }}>
                {prevBoss.name}
              </p>
            </div>
          </Link>
        ) : <div />}

        {nextBoss ? (
          <Link
            href={`/bosses/${nextBoss.slug}`}
            className="group flex items-center justify-end gap-3 border border-white/[0.07] hover:border-white/15 bg-[#0d1018] hover:bg-[#131720] transition-all px-5 py-4 rounded-[3px] flex-1 max-w-xs text-right"
          >
            <div>
              <p className="text-[9px] font-bold tracking-[0.28em] uppercase text-foreground/25 mb-1" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                Next
              </p>
              <p className="text-[14px] font-bold tracking-[0.06em] text-foreground" style={{ fontFamily: 'var(--font-bebas)' }}>
                {nextBoss.name}
              </p>
            </div>
            <span className="text-foreground/30 group-hover:text-foreground/60 text-lg transition-colors">→</span>
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}

/* ─── ROOT ───────────────────────────────────── */
export function BossContent({
  boss,
  prevBoss,
  nextBoss,
}: {
  boss: Boss
  prevBoss: Boss | null
  nextBoss: Boss | null
}) {
  return (
    <div className="bg-[#080a0f]">
      <RuleSection boss={boss} />
      <OverviewSection boss={boss} />
      <MechanicsSection boss={boss} />
      <HeroicSection boss={boss} />
      <RolesSection boss={boss} />
      <LustBanner boss={boss} />
      <PhaseSection boss={boss} />
      <AbilitiesSection boss={boss} />
      <BossNav prevBoss={prevBoss} nextBoss={nextBoss} />
    </div>
  )
}
