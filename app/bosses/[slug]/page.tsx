import { notFound } from 'next/navigation'
import { getBossBySlug, BOSSES } from '@/data/bosses'
import { SiteNav } from '@/components/layout/site-nav'
import { BossHero } from '@/components/boss-hero'
import { BossContent } from '@/components/boss-content'

export function generateStaticParams() {
  return BOSSES.map((boss) => ({ slug: boss.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const boss = getBossBySlug(params.slug)
  if (!boss) return {}
  return {
    title: `${boss.name} — Heroic SoO Guide`,
    description: boss.rule,
  }
}

export default function BossPage({ params }: { params: { slug: string } }) {
  const boss = getBossBySlug(params.slug)
  if (!boss) notFound()

  const allSlugs = BOSSES.map((b) => b.slug)
  const currentIndex = allSlugs.indexOf(boss.slug)
  const prevBoss = currentIndex > 0 ? BOSSES[currentIndex - 1] : null
  const nextBoss = currentIndex < BOSSES.length - 1 ? BOSSES[currentIndex + 1] : null

  return (
    <>
      <SiteNav />
      <BossHero boss={boss} />
      <BossContent boss={boss} prevBoss={prevBoss} nextBoss={nextBoss} />
    </>
  )
}
