export type ZoneKey = 'z1' | 'z2' | 'z3' | 'z4'

export interface BossSetup {
  t: number | string
  h: number | string
  d: number | string
}

export interface Mechanic {
  icon?: string
  name: string
  desc: string
  important?: boolean
}

export interface Role {
  color: string
  label: string
  note: string
}

export interface StratPoint {
  icon?: string | null
  role: string
  note: string
}

export interface StratPhase {
  phase: string
  points: StratPoint[]
}

export interface AbilityItem {
  icon?: string
  name: string
  desc: string
  important?: boolean
  dodge?: boolean
  interrupt?: boolean
  role?: string
  children?: { name: string; desc: string }[]
}

export interface AbilityPhase {
  phase: string
  items: AbilityItem[]
}

export interface Boss {
  num: number
  name: string
  sub: string
  zone: number
  zc: ZoneKey
  video?: string
  setup: BossSetup
  rule: string
  overview: string
  mechs: Mechanic[]
  heroic: string[]
  lust: string
  diff: number
  roles: Role[]
  strat: StratPhase[]
  abilities: AbilityPhase[]
  modelFile?: string // optional .glb filename e.g. 'garrosh2.glb'
  slug: string
}

export const ZONE_COLORS: Record<ZoneKey, string> = {
  z1: '#1db89a',
  z2: '#2e8fdf',
  z3: '#9b6de0',
  z4: '#e84a2a',
}

export const ZONE_NAMES: Record<ZoneKey, string> = {
  z1: 'Vale of Eternal Sorrows',
  z2: 'Gates of Retribution',
  z3: 'The Underhold',
  z4: 'The Downfall',
}
