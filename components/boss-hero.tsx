'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import type { Boss } from '@/types/boss'
import { ZONE_COLORS, ZONE_NAMES } from '@/types/boss'

const BossModelScene = dynamic(
  () => import('@/components/boss-model-scene').then((m) => m.BossModelScene),
  { ssr: false }
)

export function BossHero({ boss }: { boss: Boss }) {
  const color = ZONE_COLORS[boss.zc]
  const zoneName = ZONE_NAMES[boss.zc]
  const hasModel = !!boss.modelFile

  return (
    <section
      className="relative min-h-screen overflow-hidden flex flex-col justify-end"
      style={{ background: '#06080e' }}
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 20% 80%,${color}12 0%,transparent 70%)`,
          }}
        />
        {/* Diagonal stripe */}
        <div
          className="absolute top-0 right-0 bottom-0 w-[40%] opacity-[0.018]"
          style={{
            background: `repeating-linear-gradient(-48deg,${color},${color} 1px,transparent 1px,transparent 22px)`,
          }}
        />
      </div>

      {/* 3D Model — only for bosses that have one */}
      {hasModel && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 md:left-[20%]">
            <BossModelScene modelFile={boss.modelFile!} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#06080e] from-[30%] via-[#06080e]/40 via-[55%] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-transparent to-transparent" />
        </div>
      )}

      {/* Large ghost number */}
      {!hasModel && (
        <div
          className="absolute right-8 bottom-16 select-none pointer-events-none"
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(12rem,30vw,22rem)',
            lineHeight: 1,
            color: color,
            opacity: 0.04,
          }}
        >
          {String(boss.num).padStart(2, '0')}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-16 pt-32 max-w-[1200px] mx-auto w-full">
        {/* Back + nav row */}
        <div className="flex items-center gap-2 mb-10 flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[14.5px] font-extrabold tracking-[0.1em] uppercase text-white/60 hover:text-white/90 border border-white/[0.12] hover:border-white/25 px-3 py-[5px] rounded-[3px] transition-all"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            ← Overview
          </Link>
          <span className="text-foreground/15 text-xs">/</span>
          <span
            className="text-[14.5px] font-bold tracking-[0.08em] uppercase px-2.5 py-[5px] rounded-[2px] border"
            style={{
              fontFamily: 'var(--font-barlow-condensed)',
              color,
              borderColor: `${color}40`,
              background: `${color}0f`,
            }}
          >
            {zoneName}
          </span>
        </div>

        {/* Boss number eyebrow — with left accent bar */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-6 h-[2px] rounded-sm" style={{ background: color }} />
          <p
            className="text-[15.5px] font-extrabold tracking-[0.38em] uppercase"
            style={{ fontFamily: 'var(--font-barlow-condensed)', color }}
          >
            Boss {String(boss.num).padStart(2, '0')}
          </p>
        </div>

        <h1
          className="text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.86] tracking-[0.03em] text-foreground mb-4"
          style={{ fontFamily: 'var(--font-bebas)' }}
        >
          {boss.name.split(' ').map((word, i, arr) =>
            i === arr.length - 1 ? (
              <span key={i} style={{ color }}>
                {word}
              </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h1>

        <p
          className="text-[0.82rem] font-extrabold tracking-[0.18em] uppercase mb-8"
          style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'rgba(255,255,255,0.7)' }}
        >
          {boss.sub}
        </p>

        {/* Setup pills */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          {[
            { icon: '🛡️', val: `${boss.setup.t} Tanks` },
            { icon: '💚', val: `${boss.setup.h} Healers` },
            { icon: '🎯', val: `${boss.setup.d} DPS` },
          ].map((pill) => (
            <div
              key={pill.icon}
              className="flex items-center gap-1.5 text-[17px] font-extrabold tracking-[0.06em] px-4 py-2 bg-white/[0.07] border border-white/[0.15] rounded-[3px] text-white/80"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {pill.icon} {pill.val}
            </div>
          ))}
          {/* Difficulty */}
          <div
            className="flex items-center gap-2 text-[13px] font-extrabold tracking-[0.06em] px-4 py-2 bg-white/[0.07] border border-white/[0.15] rounded-[3px] text-white/80"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Difficulty
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ background: i < boss.diff ? color : 'rgba(255,255,255,0.15)' }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Video guide — prominent card */}
        {boss.video && (
          <a
            href={`https://www.youtube.com/watch?v=${boss.video}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-5 rounded-[4px] overflow-hidden transition-all duration-200 w-fit"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
          >
            {/* Thumbnail */}
            <div className="relative w-[160px] h-[90px] flex-shrink-0 overflow-hidden bg-black">
              <Image
                src={`https://img.youtube.com/vi/${boss.video}/mqdefault.jpg`}
                alt="Video guide thumbnail"
                fill
                sizes="160px"
                priority
                className="object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
              {/* Gradient over thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{ background: 'rgba(192,51,40,0.92)', boxShadow: '0 2px 16px rgba(192,51,40,0.6)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="white">
                    <path d="M3 2l7 4-7 4V2z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Label */}
            <div className="pr-6">
              <p
                className="text-[12px] font-bold tracking-[0.32em] uppercase mb-1.5"
                style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'rgba(255,255,255,0.35)' }}
              >
                Video Guide
              </p>
              <p
                className="text-[18px] font-bold tracking-[0.04em] text-white/80 group-hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Watch on YouTube
              </p>
              <p
                className="text-[14.5px] tracking-[0.06em] mt-0.5"
                style={{ fontFamily: 'var(--font-barlow-condensed)', color: 'rgba(255,255,255,0.25)' }}
              >
                Full Heroic Walkthrough →
              </p>
            </div>
          </a>
        )}
      </div>
    </section>
  )
}
