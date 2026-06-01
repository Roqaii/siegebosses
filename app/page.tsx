import { SiteNav } from '@/components/layout/site-nav'
import { HeroSection } from '@/components/hero-section'
import { BossGrid } from '@/components/boss-grid'
import { BOSSES } from '@/data/bosses'

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <HeroSection />
      <BossGrid bosses={BOSSES} />
    </>
  )
}
