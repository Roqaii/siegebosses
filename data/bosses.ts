import type { Boss } from '@/types/boss'

export const BOSSES: Boss[] = [
  {
    num: 1,
    slug: 'immerseus',
    modelFile: 'waterelementalbosscorrupted.glb',
    name: 'IMMERSEUS',
    sub: 'Sha-Corrupted Elemental',
    zone: 1, zc: 'z1',
    video: 'UYWugqvxGUk',
    setup: { t: 2, h: '2-3', d: '5-6 ranged preferred' },
    rule: 'Lose spread, kill adds, dodge wave.',
    overview: 'Two alternating phases. Phase 1 shortens each cycle as you reduce Corruption in Phase 2 — kill black puddles, heal blue ones, don\'t let any reach the center. Repeat until Corruption hits 0.',
    mechs: [
      { icon: '🔄', name: 'Corrosive Blast', desc: 'Cleaving stacking armor debuff on tank. Swap immediately after every cast.' },
      { icon: '💧', name: 'Swirl', desc: 'Spinning water jet that sweeps the platform. Move out if possible.' },
      { icon: '💥', name: 'Sha Bolts', desc: 'Spread 5+ yards apart to prevent splash damage overlap. Never clump.' },
      { icon: '🟦', name: 'Split Phase — Blue Puddles', desc: 'Healers top these up. Each healed puddle cleanses Corruption from the bar.' },
      { icon: '⬛', name: 'Split Phase — Black Puddles', desc: 'DPS kills these. Every missed puddle reduces cleanse efficiency for future cycles.' },
    ],
    heroic: [
      'Swelling Corruption: boss spawns additional adds per attack — DPS urgency increases.',
      'Growing Sha Pool spawns mid-fight. Assign players to step in and control its growth.',
    ],
    lust: 'On pull — first Phase 1 is the longest DPS window.',
    diff: 1,
    roles: [
      { color: '#e8352a', label: 'Tanks', note: 'Swap on every Corrosive Blast. AoE black puddles during split phase.' },
      { color: '#1db89a', label: 'Healers', note: 'Spread perimeter during split. Heal ONLY blue puddles — never waste casts on Sha puddles.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Spread 5+ yards in Phase 1. Each DPS owns a sector during split — kill every black puddle in your zone.' },
    ],
    strat: [
      {
        phase: 'Phase 1 - Tears of the Vale',
        points: [
          { icon: null, role: 'All', note: 'Group up in the same section of the room but stay 5yr spread. Do not stand in Sha puddles on the ground. Swirl rotates clockwise — you can sidestep it by moving with the rotation. When the phase ends, Sha Bolt puddles collapse to the center — move away from the middle before the transition.' },
          { icon: '🛡️', role: 'Tanks', note: 'Position to the side so Corrosive Blast does not cleave the raid. Swap at 1 stack. Off-tank picks up adds.' },
          { icon: '⚔️', role: 'DPS', note: 'Kill adds first, then focus the boss. Heroic: stagger single-target hits on Immerseus to avoid spawning too many Congealed Sha adds at once.' },
          { icon: '💚', role: 'Healers', note: 'Watch for high Swelling Corruption stacks on DPS and be ready for Swirl hitting the raid.' },
        ],
      },
      {
        phase: 'Phase 2 - Split',
        points: [
          { icon: null, role: 'All', note: 'Spread to pre-assigned areas of the room. Killing or healing puddles near other players grants a damage or healing buff — stay close to allies in your sector when possible.' },
          { icon: '⚔️', role: 'DPS', note: 'Kill Sha (black) adds as the primary target. Standing near an add when it dies grants a stacking damage buff.' },
          { icon: '💚', role: 'Healers', note: 'Heal Contaminated (blue) adds to full. Stay close to them to gain the Purified Residue healing and mana buff.' },
          { icon: '🛡️', role: 'Tanks', note: 'Kill adds in your area. One tank stays near Immerseus to step into the Sha Pool and reduce its size.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Phase 1 - Tears of the Vale',
        items: [
          { name: 'Sha Bolt', desc: 'Fires a Sha Bolt at every enemy, inflicting Shadow damage to enemies within 5 yards, and forming a Sha Pool at the targeted location.' },
          { dodge: true, name: 'Swirl', desc: 'Causes torrents of Sha-corrupted water to burst from beneath the ground. Players that come into contact suffer Shadow damage and are knocked away.' },
          { icon: '🛡️', name: 'Corrosive Blast', important: true, desc: 'Inflicts heavy Shadow damage in a cone aimed at his primary target, increasing Shadow damage taken by 200% for 45 sec. Stacks.' },
          { name: 'Swelling Corruption', desc: 'Gains stacks proportional to his current Corruption level. Lashes out at players who strike with single target abilities — coalescing a Congealed Sha add.' },
        ],
      },
      {
        phase: 'Phase 2 - Split',
        items: [
          { name: 'Sha Puddle', desc: 'When destabilized, Immerseus forms one Sha Puddle for every four units of Corruption. Destroying a Sha Puddle removes one unit of Corruption.' },
          { name: 'Contaminated Puddle', desc: 'Healing it to full health before it merges back makes it Purified, removing one unit of Corruption upon reaching Immerseus.' },
          { name: 'Erupting Sha', desc: 'When any Puddle reaches Immerseus: heavy Shadow or Frost damage to all players.' },
        ],
      },
    ],
  },
  {
    num: 2,
    slug: 'fallen-protectors',
    name: 'FALLEN PROTECTORS',
    sub: 'Rook · He Softfoot · Sun Tenderheart',
    zone: 1, zc: 'z1',
    video: 'OH2G2p7oJU8',
    setup: { t: 2, h: 3, d: 5 },
    rule: 'All three bosses must hit 1 HP within the same 20-second window. Any boss that reaches 1 HP while another is still alive begins a heal channel — if the others don\'t drop in time it heals for 30% max HP.',
    overview: 'Three independent bosses that must die within the same 20-second window. Equalize their HP throughout the fight and commit only when all three are at ~10%. Recommended push order: Sun → Rook → He, then repeat.',
    mechs: [
      { icon: '🛡️', name: 'Vengeful Strikes (Rook)', desc: 'Frontal cone stun on the current tank. Face Rook away from the raid at all times — melee stands behind. Pop a personal defensive on every cast.' },
      { icon: '🌀', name: 'Clash → Spinning Crane Kick (Rook)', desc: 'Rook pulls a random target toward him, then immediately spins in AoE. Move out the moment you are pulled.' },
      { icon: '☠️', name: 'Garrote (He)', desc: 'He shadow-steps behind a random player and applies a permanent bleed that ticks for the rest of the fight — only reset by his DM phase.' },
      { icon: '🔮', name: 'Shadow Word: Bane (Sun)', desc: 'DoT on 2 random targets that jumps to 2 new targets every 3 seconds, up to 6 total. Dispel both applications within the first 3 seconds.' },
      { icon: '🌊', name: 'Calamity (Sun)', important: true, desc: '5-second cast, deals 30% of every player\'s max HP to the full raid. Cover every cast with a raid cooldown. Heroic: each successive cast adds +10% damage until Sun enters DM.' },
      { icon: '⚠️', name: 'Desperate Measures (66% / 33%)', desc: 'Each boss phases individually — never trigger two simultaneously. Push order: Sun first → Rook second → He last.' },
    ],
    heroic: [
      'Each boss has an escalating passive ability that grows more dangerous the longer they go without entering a Desperate Measures phase.',
      'Calamity damage escalates +10% per cast until Sun\'s DM resets it — a staggered raid CD rotation is mandatory.',
      'He\'s overall damage output accounts for ~20% of total raid damage taken.',
      'Rook\'s DM adds share HP on Heroic — stack Sorrow and Gloom in melee and cleave them together.',
    ],
    lust: 'On pull — maximize the opening burn window before any boss hits 66%.',
    diff: 2,
    roles: [
      { color: '#e8352a', label: 'Tank 1 — Rook', note: 'Hold Rook in the middle for cleave facing away from the raid. Pop a defensive on every Vengeful Strikes.' },
      { color: '#e8352a', label: 'Tank 2 — He', note: 'Never stop moving — kite He continuously through the room to prevent poison puddle accumulation.' },
      { color: '#1db89a', label: 'Healers', note: '3 healers recommended. Dispel Bane within 3 seconds of application, every time. Use CDs for Calamity.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Push Sun first into DM, then Rook, then He — repeat the same order for the 33% cycle.' },
    ],
    strat: [
      {
        phase: 'Normal Phase — No Desperate Measures',
        points: [
          { icon: null, role: 'All', note: 'Target push order: Sun reaches 66% first, then Rook, then He. Never let He fall too far behind or you\'ll face extended Garrote uptime with no reset at the end.' },
          { icon: '🛡️', role: 'Tanks', note: 'Rook tank: Face him away from the raid. He tank: verbally call each move direction so melee track He\'s path, turn your back to him when he casts Gouge.' },
          { icon: '💚', role: 'Healers', note: 'Dispel Bane within 3 seconds — coordinate so both applications are covered without duplicate dispels. Use CDs for Calamity.' },
          { icon: '⚔️', role: 'DPS', note: '1-2 dedicated Sun interrupters own Sha Sear. When one enters DM, full DPS stop on all bosses until adds are handled.' },
        ],
      },
      {
        phase: 'Final Burn — All Bosses Sub-10%',
        points: [
          { icon: null, role: 'All', note: 'Equalize all three bosses to approximately 10% HP before committing. Stack the raid, pop remaining cooldowns, and burn all three simultaneously.' },
          { icon: '🛡️', role: 'Tanks', note: 'Hold all three bosses in a tight cluster for cleave. Rook tank: angle Rook\'s frontal outward from the group at all times.' },
          { icon: '💚', role: 'Healers', note: 'Save one major throughput CD for this window — Calamity is at peak escalation.' },
          { icon: '⚔️', role: 'DPS', note: 'Throttle damage to keep all three within 1-2% of each other until the call to commit.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Rook Stonetoe',
        items: [
          { name: 'Vengeful Strikes', important: true, desc: 'Stuns his current target and deals heavy Physical damage in a frontal cone twice per second for 3 sec. Face away from the raid always.' },
          { dodge: true, name: 'Clash → Spinning Crane Kick', desc: 'Pulls a random target to him then immediately spins in sustained AoE. Move out of the spin when it begins.' },
          { interrupt: true, name: 'DM — Embodied Gloom', important: true, desc: 'Casts Corruption Shock — ~300,000 Nature damage to the target and all nearby players. Heroic #1 interrupt priority.' },
        ],
      },
      {
        phase: 'Sun Tenderheart',
        items: [
          { name: 'Shadow Word: Bane', important: true, desc: 'Dispellable DoT on 2 random targets that jumps to 2 new targets every 3 seconds. Dispel both within the first 3 seconds.' },
          { interrupt: true, name: 'Sha Sear', desc: 'Channeled AoE. Heroic: ramps to ~200k on final ticks. Interrupt at the midpoint of the channel (~2.5 sec in).' },
          { name: 'Calamity', important: true, desc: '5-second cast dealing 30% of every player\'s max HP. Heroic: each successive cast adds +10% damage until Sun\'s DM resets it.' },
        ],
      },
    ],
  },
  {
    num: 3,
    slug: 'norushen',
    modelFile: 'shaboss.glb',
    name: 'NORUSHEN',
    sub: 'Amalgam of Corruption',
    zone: 1, zc: 'z1',
    video: 'OH2G2p7oJU8',
    setup: { t: 2, h: '2-3', d: '5-6' },
    rule: 'Corruption makes you deal less damage to the boss. Cleanse through the Test Realm as fast as possible — every second you are corrupted is damage the raid is missing.',
    overview: 'A corruption-cleansing fight with a 7-minute hard enrage. Everyone starts at 75 Corruption. Enter the Purifying Light orb to take your individual trial — complete it and return cleansed. On Heroic, DPS do NOT cleanse. They stay outside and kill adds.',
    mechs: [
      { icon: '☣️', name: 'Corruption Bar', desc: 'Everyone starts at 75 Corruption. Higher Corruption = less damage to the boss. Click a golden Purifying Light orb to enter your private trial.' },
      { icon: '🧪', name: 'The Trials', desc: 'Tank: survive 1 minute. Healer: keep 3 NPCs alive. DPS: kill the Manifestation first, then 4 Essences while dodging bolts.' },
      { icon: '⬛', name: 'Residual Corruption Orbs', important: true, desc: 'Dropped when any Unleashed Manifestation dies. Pulses 120,000 Shadow damage every 3 seconds until someone picks it up. +25 Corruption to soaker — do it immediately.' },
      { icon: '🔁', name: 'Tank Swap — Self Doubt', desc: 'Stacking debuff on the current tank — each stack increases Unleashed Anger damage by 50%. Swap at up to 3 stacks.' },
      { icon: '🌀', name: 'Blind Hatred', desc: 'Slowly rotating corruption zone that sweeps the whole room dealing 400,000 Shadow damage per second. Run away from it.' },
    ],
    heroic: [
      'Heroic DPS strategy: DPS do NOT cleanse. Stay outside, kill adds, and maintain boss uptime.',
      '7-minute hard enrage. Lust on pull.',
      'Trial enemies hit significantly harder — use defensives properly inside.',
    ],
    lust: 'On pull (Heroic). On Normal, wait until most DPS have cleansed.',
    diff: 2,
    roles: [
      { color: '#e8352a', label: 'Tanks', note: 'One on the boss at all times — swap at up to 3 Self Doubt stacks. Off-tank picks up all adds and soaks Residual Corruption orbs.' },
      { color: '#1db89a', label: 'Healers', note: 'Always cleanse — the +30% healing buff makes the back half survivable. Start rotating raid CDs at ~40% as Icy Fear ramps hard.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Normal: follow the send order. Once cleansed, stay on the boss full-time. Heroic: do NOT cleanse. Stay outside, kill adds, attack the boss.' },
    ],
    strat: [
      {
        phase: 'Phase 1 — Main Realm & Trial Rotation',
        points: [
          { icon: null, role: 'All', note: 'The send rotation is the entire fight. Do NOT touch Orbs of Corruption inside the trial — they add Corruption and cancel your cleanse.' },
          { icon: '🛡️', role: 'Tanks', note: 'One tank holds the boss at all times. Off-tank picks up all adds from completed trials. Only enter the Trial Realm during a clean swap window.' },
          { icon: '💚', role: 'Healers', note: 'Always cleanse. Never leave zero healers outside simultaneously. Track Blind Hatred.' },
          { icon: '⚔️', role: 'DPS', note: 'Normal: follow send order. Once cleansed, go full-time on the boss. Heroic: do NOT cleanse. Kill adds and maintain boss uptime.' },
        ],
      },
      {
        phase: 'Sub-50% — Escalation & Burn',
        points: [
          { icon: null, role: 'All', note: 'At 50% and every 10% after, the boss spawns an extra Manifestation. Icy Fear ramps raidwide damage. Stay on the boss.' },
          { icon: '💚', role: 'Healers', note: 'Rotate major raid CDs from ~40% onward. Do not hold them.' },
          { icon: '⚔️', role: 'DPS', note: 'Stay on the boss. Only swap to Manifestations if called.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Amalgam of Corruption',
        items: [
          { name: 'Self Doubt', important: true, desc: 'Stacking debuff on the current tank. Each stack increases Unleashed Anger damage by 50%. Swap at up to 3 stacks.' },
          { dodge: true, name: 'Blind Hatred', important: true, desc: 'A corruption zone that slowly rotates. Deals 400,000 Shadow damage per second to anyone in its path.' },
          { name: 'Fusion', important: true, desc: 'Each Expelled Corruption bolt that reaches the Amalgam increases its damage by 8%. Kill all Essences before they reach the boss.' },
          { name: 'Icy Fear', desc: 'Constant frost damage to all players — increases as the Amalgam loses health. Soft healing enrage from ~40%.' },
        ],
      },
    ],
  },
  {
    num: 4,
    slug: 'sha-of-pride',
    modelFile: 'shaboss_pride.glb',
    name: 'SHA OF PRIDE',
    sub: 'Pride Bar Management · Heroic: Rifts + Banishment',
    zone: 1, zc: 'z1',
    video: 'OH2G2p7oJU8',
    setup: { t: 2, h: 2, d: 6 },
    rule: 'Never reach 100 Pride — it permanently mind controls you. Dispel Mark of Arrogance only while Gift of the Titans is active, and close Rifts of Corruption before they overwhelm the room.',
    overview: 'A pride management fight with two heroic-only additions: Rifts of Corruption and Banishment. Keep Pride under 50 at all times, dispel only during Gift windows, and close rifts in your assigned zone. At 30% all Pride resets — burn hard.',
    mechs: [
      { icon: '🌀', name: 'Swelling Pride', important: true, desc: 'Raid-wide damage + 5 Pride to all. Secondary effect based on current Pride: 25–49: ground marker. 50–74: run to shadow. 75–99: spread. 100: mind controlled permanently.' },
      { icon: '😤', name: 'Mark of Arrogance', important: true, desc: 'DoT on 2 players for the rest of the fight. Only dispel while Gift of the Titans is active.' },
      { icon: '🔒', name: 'Corrupted Prison', important: true, desc: '2 non-tank players imprisoned. +5 Pride per second until freed. Two players stand on orange lock runes simultaneously.' },
      { icon: '👻', name: 'Manifestation of Pride', desc: 'Spawns on the west wall. Interrupt Mocking Blast. Kill with ranged.' },
      { icon: '🔴', name: 'Rifts of Corruption (Heroic)', important: true, desc: 'Spawns every 8 seconds — fires 350k + 5 Pride bolts. Close rifts by running over them (1-minute debuff after).' },
      { icon: '🌀', name: 'Banishment (Heroic)', important: true, desc: 'One non-tank teleported into a Pac-Man maze. Auto-runs, collect orbs, avoid minions. All DPS switch to Corrupted Fragment.' },
    ],
    heroic: [
      'Rifts of Corruption spawn every 8 seconds and fill the room if ignored. Assign each player a default zone.',
      'Banishment sends one non-tank into a maze every ~75 seconds. All DPS switch to the Fragment immediately.',
      'Run 2 healers. HPS requirements are among the lowest in the zone.',
      'Gift of the Titans is the only window to dispel Mark of Arrogance.',
    ],
    lust: 'At the 30% transition (Unleashed) — all Pride resets, boss kills Norushen, escalating damage begins every 10 seconds.',
    diff: 2,
    roles: [
      { color: '#e8352a', label: 'Tanks', note: 'Swap immediately on Wounded Pride. Park the boss center-room for rift access. Cover your assigned prison lock on every spawn.' },
      { color: '#1db89a', label: 'Healers', note: 'Dispel Mark of Arrogance only while Gift of the Titans is active. Stack within 8 yards of Gift carriers for Power of the Titans.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Own a rift zone — close yours on sight. 1–2 melee assigned to interrupt Manifestation of Pride every spawn. All DPS switch to Fragment on Banishment call.' },
    ],
    strat: [
      {
        phase: 'Phase 1 — Pride Management (100% to 30%)',
        points: [
          { icon: null, role: 'All', note: 'Position in a loose ring around the boss, spread enough that rift bolts don\'t hit adjacent players. Keep Pride under 50 at all times. Return to default positions between mechanics.' },
          { icon: '🛡️', role: 'Tanks', note: 'Swap immediately on Wounded Pride application. Both tanks cover their assigned prison locks.' },
          { icon: '💚', role: 'Healers', note: 'Watch for Gift of the Titans on raid frames. Stack within 8 yards of the other Gift carriers for Power of the Titans.' },
          { icon: '⚔️', role: 'DPS', note: 'Stay in your default position zone. When a rift spawns near you, close it immediately. Call "have debuff" on voice after closing.' },
        ],
      },
      {
        phase: 'Sub-30% — Unleashed Burn',
        points: [
          { icon: null, role: 'All', note: 'At 30%, all Pride resets to 0. Pop Bloodlust and every offensive cooldown. Kill before the next Swelling Pride cycle.' },
          { icon: '💚', role: 'Healers', note: 'Dispel Mark of Arrogance freely now — no Gift requirement. Assign a major throughput cooldown for the Unleashed ticks.' },
          { icon: '⚔️', role: 'DPS', note: 'Full cooldowns. Continue closing rifts. Don\'t die to a rift bolt when you\'re one minute from a kill.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Pride — Core Mechanic',
        items: [
          { name: 'Swelling Pride', important: true, desc: 'Cast when boss reaches 100 energy. Deals ~522k Shadow damage and +5 Pride. Secondary effects escalate: Bursting Pride (25–49), Projection (50–74), Aura of Pride (75–99), Overcome (100 = permanent MC).' },
          { name: 'Mark of Arrogance', important: true, desc: 'DoT on 2 random players dealing ~110k Shadow per tick for the rest of the fight. Only dispel with Gift of the Titans active.' },
          { name: 'Corrupted Prison', important: true, desc: 'Two non-tank players imprisoned, taking ~108k Shadow per second and +5 Pride per second. Release requires two players on the two lock runes simultaneously.' },
        ],
      },
      {
        phase: 'Heroic-Only Abilities',
        items: [
          { name: 'Rifts of Corruption', important: true, desc: 'Every 8 seconds a rift spawns and fires bolts — 350k Shadow + 5 Pride. Close by running over it (applies 60-second debuff). Prioritize rifts near the raid.' },
          { name: 'Banishment', important: true, desc: 'Random non-tank teleported into Sha Realm. Auto-runs at +50% speed — steer with mouse-look. Avoid instant-death minions. Collect orbs (+25% damage to Fragment). Return when Fragment dies.' },
        ],
      },
    ],
  },
  {
    num: 5,
    slug: 'galakras',
    modelFile: 'korkronprotodrake_protodragon_northrendred.glb',
    name: 'GALAKRAS',
    sub: 'Tower + Ground Split Fight',
    zone: 2, zc: 'z2',
    video: 'OH2G2p7oJU8',
    setup: { t: 2, h: '2-3', d: '5-6' },
    rule: 'Tower speed controls the entire fight. A slow tower team means more Drake Fire stacks on the ground team — every second the tower drags is more unavoidable spike damage below.',
    overview: 'Phase 1 is an extended split-team add gauntlet: ground team defends NPC faction leaders while tower team clears two towers to unlock anti-air turrets. Shooting Galakras with both turrets triggers Phase 2 — a straightforward burn fight.',
    mechs: [
      { icon: '🔥', name: 'Drake Fire', desc: 'Proto-drakes target random ground players for ~150k fire damage to anyone within 5 yards, climbing 10% every cast. Spread 5+ yards at all times.' },
      { icon: '🧨', name: 'Healing Tide Totem', important: true, desc: 'Tidal Shamans drop a totem healing nearby enemies 10–20% HP every 3 seconds. Kill it instantly on spawn — #1 ground priority every wave.' },
      { icon: '🛡️', name: 'Bonecrusher — Fracture', important: true, desc: 'Charges a faction leader NPC and deals 10% of their HP per second. Stun it the instant it charges — leader death resets the encounter.' },
      { icon: '⚔️', name: 'Crusher\'s Call', desc: 'Thranok grips 5 players to him then immediately follows with a 1M+ AoE stomp. Move out the moment you land.' },
      { icon: '🌊', name: 'Flames of Galakrond', desc: 'Orb targets a random player — explodes for up to 900k but reduced by each player it passes through. Targeted player steps behind the raid cluster.' },
    ],
    heroic: [
      'Demolitionists: friendly NPCs that open the towers are attacked by enemy Grunts. Assign 1 DPS + 1 healer to protect them.',
      'Drake Fire ramps hard — stagger healer and DPS defensive cooldowns across Phase 1.',
      'Add waves overlap because mobs have significantly more HP.',
    ],
    lust: 'On pull in Phase 2 (or hold for ~40% if Pulsing Flames is escalating hard).',
    diff: 2,
    roles: [
      { color: '#e8352a', label: 'Tower Tank', note: 'Kite Korgra off Poison Clouds. Stay to the side of Krugruk and never stand in his cone. Fire turret on call.' },
      { color: '#e8352a', label: 'Ground Tank', note: 'Call every Bonecrusher charge on comms so stuns are ready. Keep Thranok away from the raid for Shattering Strike.' },
      { color: '#1db89a', label: 'Healers', note: 'Split one per team. Ground healer staggers Drake Fire CDs. Both healers full throughput for Phase 2.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Ground: kill priority — Totem > Shaman > Bonecrusher > Flagbearer. Stay spread 5+ yards. Tower: train mobs to the top and cleave.' },
    ],
    strat: [
      {
        phase: 'Phase 1 — Ground Team',
        points: [
          { icon: null, role: 'All', note: 'Stay at or behind the front of the NPC line. Spread 5+ yards at all times. Kill priority every wave: Healing Tide Totem → Tidal Shaman → Bonecrusher → Flagbearer → everything else.' },
          { icon: '🛡️', role: 'Ground Tank', note: 'Face Thranok away from the raid. Hold Bonecrushers on aggro but verbally call every charge so the raid has stuns ready.' },
          { icon: '⚔️', role: 'DPS', note: 'Kill priority without exception. Never deviate. Two waves overlapping — split interrupts explicitly.' },
        ],
      },
      {
        phase: 'Phase 2 — Flames of Galakrond Positioning',
        points: [
          { icon: null, role: 'All', note: 'Split the raid into two groups behind the boss, forming a triangle. Use a strict every-3-casts alternating rotation for Flames of Galakrond. The 15-second DoT expires in exactly 3 casts, so this rotation automatically caps stacks.' },
          { icon: '⚔️', role: 'DPS', note: 'The moment you are targeted, run directly to whichever extension marker is active for this set of 3 casts. Return to your group position immediately after the orb explodes.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Phase 1 — Ground Adds',
        items: [
          { name: 'Healing Tide Totem', important: true, desc: 'Dropped by Tidal Shaman. Heals nearby enemies for 10–20% max HP every 3 seconds. #1 kill target — very low HP.' },
          { name: 'Bonecrusher — Fracture', important: true, desc: 'Charges a faction leader NPC, dealing 10% of their HP per second. Interrupt Fracture by stunning the Bonecrusher instantly.' },
          { dodge: true, name: 'Flames of Galakrond (Phase 2)', important: true, desc: 'Orb fired at a random player. Explodes for up to 900k reduced by each player it passes through. Targeted player steps behind the raid.' },
        ],
      },
    ],
  },
  {
    num: 6,
    slug: 'iron-juggernaut',
    modelFile: 'ironjuggernaut_dungeondoll.glb',
    name: 'IRON JUGGERNAUT',
    sub: 'Assault and Siege Phases Alternate',
    zone: 2, zc: 'z2',
    video: 'OH2G2p7oJU8',
    setup: { t: 2, h: 3, d: 5 },
    rule: 'Never let all three Crawler Mines detonate freely. Assign your soakers before the pull — on Heroic each stomp hits for ~1.5M physical.',
    overview: 'Two alternating phases on a roughly 2-minute Assault / 1-minute Siege loop. Assault Phase is the only DPS window. The recommended Siege strategy is to let Shock Pulse knock the entire raid into the far corner, out-ranging Mortar Barrage.',
    mechs: [
      { icon: '🔥', name: 'Flame Vents', desc: 'Frontal cone on the current tank. Applies a stacking fire DoT (Ignite Armor). Swap at 2 stacks.' },
      { icon: '💣', name: 'Crawler Mines', important: true, desc: 'Three mines spawn every ~30 seconds and arm after 15 seconds. Off-tank soaks two per set; pre-assigned DPS backup handles the third. On Heroic each stomp hits ~1.5M physical.' },
      { icon: '🌀', name: 'Ricochet (Heroic)', desc: 'A sawblade arcs in a triangle between two ranged players. Sidestep the moment you see it launch.' },
      { icon: '💥', name: 'Shock Pulse — Siege', important: true, desc: 'Knocks the entire raid ~60–80 yards. Stack in melee range just before the cast so everyone lands in the far corner together.' },
      { icon: '🔴', name: 'Cutter Laser — Siege', desc: 'Chases a targeted player. Kite along the outer wall. Never cross an Explosive Tar puddle.' },
    ],
    heroic: [
      'Ricochet: spinning sawblade arcs toward two ranged players every ~15 seconds.',
      'Mortar Barrage: replaces Mortar Cannon in Siege Phase. Out-range it by letting Shock Pulse knock you to the far corner.',
      'Crawler Mine stomps hit ~1.5M physical — soakers need a cooldown every time.',
    ],
    lust: 'On pull — the first Assault Phase is the longest uninterrupted DPS window of the fight.',
    diff: 2,
    roles: [
      { color: '#e8352a', label: 'Tanks', note: 'Swap at 2 Flame Vents stacks. Off-tank is primary mine soaker. Both tanks stack with the raid before every Shock Pulse.' },
      { color: '#1db89a', label: 'Healers', note: '3 healers required. Assign a raid cooldown to each of the three Shock Pulses before the pull.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Spread ranged loosely for Ricochet — sidestep at launch. Pre-assign one backup mine soaker with a personal cooldown.' },
    ],
    strat: [
      {
        phase: 'Assault Phase',
        points: [
          { icon: null, role: 'All', note: 'Stay loosely spread — Borer Drill cracks ripple toward player positions and Ricochet arcs between two ranged. This is the only phase where you damage the boss.' },
          { icon: '🛡️', role: 'Tanks', note: 'Swap at 2 Flame Vents stacks. Off-tank immediately moves to cover the next mine set after dropping aggro.' },
          { icon: '⚔️', role: 'DPS', note: 'Spread ranged loosely. Backup mine soaker watches the off-tank — if their cooldowns are spent, step in on the third mine.' },
        ],
      },
      {
        phase: 'Siege Phase — Shock Pulse Strategy',
        points: [
          { icon: null, role: 'All', note: 'Stack the entire raid in melee range just before Shock Pulse casts — the knockback sends everyone to the far corner together. Stay in that corner for the entire Siege Phase. At this range Mortar Barrage cannot reach you.' },
          { icon: '🛡️', role: 'Tanks', note: 'Both tanks stack with the raid before Shock Pulse. Pre-assign the three Shock Pulse cooldowns: CD1 first Pulse, CD2 second, CD3 third.' },
          { icon: '⚔️', role: 'DPS', note: 'Once in the corner your job is mine management and laser kiting only. If Cutter Laser targets you, kite along the wall away from tar patches.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Assault Mode',
        items: [
          { name: 'Flame Vents', important: true, desc: 'Frontal cone dealing heavy Fire damage to the current tank. Applies Ignite Armor: +10% Fire damage taken. Stacks. Swap at 2 stacks.' },
          { name: 'Crawler Mines', important: true, desc: 'Three mines spawn, arm after 15 seconds. All three detonating freely is near-fatal. Stomp a mine: deals ~1.5M Physical damage (armor-reduced) to the soaker. Dedicated cooldown required on Heroic.' },
          { name: 'Ricochet', important: true, desc: 'Heroic only. Spinning sawblade arcs in a triangle toward two ranged players. Sidestep two or three steps when it fires — blade targets your position at launch.' },
        ],
      },
      {
        phase: 'Siege Mode',
        items: [
          { name: 'Shock Pulse', important: true, desc: 'Knocks all players back ~60–80 yards on Heroic. Three occur per Siege Phase. Stack in melee range before the cast — everyone lands together in the far corner, out of Mortar Barrage range.' },
          { name: 'Mortar Barrage', important: true, desc: 'Heroic only. Fires six to eight rapid mortar blasts at player locations within ~60 yards. Avoided entirely by staying out of range from the far corner.' },
          { name: 'Cutter Laser', desc: 'Tail cannon locks onto a random player and chases them. Kite along the outer wall. Never run through Explosive Tar — laser contact triggers a ~500k raid-wide explosion.' },
        ],
      },
    ],
  },
  {
    num: 7,
    slug: 'dark-shaman',
    name: 'KOR\'KRON DARK SHAMAN',
    sub: 'Haromm and Kardris — Heroic Split Strategy',
    zone: 2, zc: 'z2',
    video: 'OH2G2p7oJU8',
    setup: { t: 3, h: 3, d: 4 },
    rule: 'Split the bosses far enough apart that each group only deals with one boss\'s abilities. Running them together on Heroic is possible but significantly harder.',
    overview: 'Hard split: two tanks and two healers take Haromm to the far north end of the room; one tank, one healer, and all DPS fight Kardris in the main area. Bosses share health. Kill wolves before pushing either boss below 85%.',
    mechs: [
      { icon: '🐺', name: 'Kill Wolves First', important: true, desc: 'Kill Darkfang and Bloodclaw before the bosses reach 85%. Both wolves have a stacking bleed and a frontal cleave.' },
      { icon: '⚰️', name: 'Iron Tomb (Haromm — Heroic)', desc: 'Ground markers appear under players. Step out immediately — the tomb erupts and creates a permanent terrain obstacle.' },
      { icon: '🔒', name: 'Iron Prison (Kardris — Heroic)', important: true, desc: 'Debuff on a random non-tank player that kills them when it expires. Use a personal defensive just before the 60-second mark.' },
      { icon: '🧊', name: 'Froststorm Strike (Haromm)', desc: 'Stacking tank debuff. Swap at 5–6 stacks. On Heroic start using cooldowns at 4 stacks.' },
      { icon: '🔥', name: 'Falling Ash (Kardris — 50%)', important: true, desc: 'Massive red circle detonates for ~1M fire inside, ~480k to entire raid outside. Haromm group must use personal cooldowns when called.' },
    ],
    heroic: [
      'Hard split is mandatory.',
      'Iron Prison fires every 30 seconds. Every DPS and healer needs their own personal cooldown plan.',
      'Toxic Mist ramps to 3–400k per tick late in the duration. Paladin Purity on a 30-second cooldown is extremely valuable.',
      'Falling Ash hits the entire raid even when split — the Haromm group must be warned on comms.',
    ],
    lust: 'Sub-25% — both bosses gain Blood Frenzy. Pop immediately and kill before the damage becomes unmanageable.',
    diff: 3,
    roles: [
      { color: '#e8352a', label: 'Tanks 1 & 2 — Haromm', note: 'Both tanks swap back and forth on Froststorm Strike stacks. Start using defensives at 4 stacks; swap at 5–6.' },
      { color: '#e8352a', label: 'Tank 3 — Kardris', note: 'Kite during Foul Geyser to spread spawns as little as possible. Handle Froststorm Bolt spike damage with personal cooldowns.' },
      { color: '#1db89a', label: 'Healers (Haromm side)', note: 'The harder healing assignment. Paladin with Purity on cooldown is extremely valuable for Toxic Mist.' },
      { color: '#2e8fdf', label: 'DPS (all on Kardris)', note: 'Kill Foul Slimes the instant they spawn — top priority. Every DPS has their own Iron Prison cooldown plan.' },
    ],
    strat: [
      {
        phase: 'Setup — Pull and Wolf Kill',
        points: [
          { icon: null, role: 'All', note: 'Stack the bosses together for the wolf kill only. Kill Darkfang and Bloodclaw before either boss reaches 85%. Then permanently split: Haromm north to the far gate, Kardris stays in the main area.' },
          { icon: '⚔️', role: 'DPS', note: 'Kill wolves fast — cleave both simultaneously. Once dead, immediately move to your assigned split group.' },
        ],
      },
      {
        phase: 'Haromm Group (North)',
        points: [
          { icon: null, role: 'All', note: 'Push Iron Tomb obstacles to the walls to preserve the kite path. Track Toxic Mist timers — use Purity on every application that would otherwise be lethal.' },
          { icon: '🛡️', role: 'Tanks', note: 'Swap at 5–6 Froststorm Strike stacks. Keep Haromm moving to push tomb obstacles outward.' },
        ],
      },
      {
        phase: 'Kardris Group (Main Area)',
        points: [
          { icon: null, role: 'All', note: 'Kill Foul Slimes the instant they spawn. Track Iron Prison timers — use personal cooldown at ~57 seconds. Call Falling Ash on comms when it spawns so Haromm group uses a personal cooldown.' },
          { icon: '⚔️', role: 'DPS', note: 'Every DPS has their own Prison plan. Don\'t rely on externals for every cast. Kill slimes from range — the aura hits hard on Heroic.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Shared',
        items: [
          { name: 'Froststorm Strike', important: true, desc: 'Stacking tank debuff. Swap at 5–6 stacks. Each stack increases Froststorm damage by 25%.' },
          { name: 'Blood Frenzy (sub-25%)', important: true, desc: 'Both bosses gain +25% damage and haste. Pop Bloodlust immediately.' },
        ],
      },
      {
        phase: 'Heroic-Only',
        items: [
          { name: 'Iron Prison (Kardris)', important: true, desc: '60-second debuff that kills the target on expiry for 100% max HP. Use a personal defensive just before the mark expires.' },
          { name: 'Iron Tomb (Haromm)', desc: 'Permanent terrain obstacles that accumulate throughout the fight. Push them to the walls.' },
          { name: 'Falling Ash (Kardris — 50%)', important: true, desc: 'Raid-wide ~480k fire damage outside the circle. Haromm group must use personal cooldowns on every cast.' },
        ],
      },
    ],
  },
  {
    num: 8,
    slug: 'general-nazgrim',
    name: 'GENERAL NAZGRIM',
    sub: 'Rage Management · Stance Control',
    zone: 2, zc: 'z2',
    video: 'OH2G2p7oJU8',
    setup: { t: 2, h: '2-3', d: '5-6' },
    rule: 'Never DPS Nazgrim during Defensive Stance — every hit gives him 3 Rage. His abilities scale with Rage, and a single poorly-timed attack can push him to 100 and spawn a permanent Ravager axe.',
    overview: 'A rage management fight. Nazgrim cycles through three stances in a fixed order: Battle → Berserker → Defensive. The raid\'s job is to keep his Rage as low as possible by handling Sundering Blow swaps cleanly, destroying Banners fast, and going completely cold during Defensive Stance.',
    mechs: [
      { icon: '🛡️', name: 'Defensive Stance — Full Stop', important: true, desc: 'Every hit (except the debuffed tank) gives Nazgrim 3 Rage. All DPS stops the instant the stance is called. Kill adds, destroy Banners, do nothing to the boss.' },
      { icon: '⚔️', name: 'Berserker Stance — Cooldown Window', desc: 'Nazgrim takes 25% more damage — pop DPS cooldowns here. He also generates 100% more Rage from abilities.' },
      { icon: '🗡️', name: 'Sundering Blow — Swap at 3', important: true, desc: 'Unavoidable 5 Rage per cast, plus 5 per existing stack. Swap at exactly 3 stacks — a 4th stack costs 20 Rage (40 in Berserker).' },
      { icon: '🚩', name: 'Kor\'kron Banner — Instant Priority', important: true, desc: 'Costs him 50 Rage to place, but pays for itself immediately if left up. Assign one DPS to destroy it the second it spawns.' },
      { icon: '🧙', name: 'Add Kill Priority', desc: 'Warshaman first. Arcweaver second (interrupt every cast). Assassin third. Sniper: targeted healer handles it. Iron Blade: lowest priority.' },
    ],
    heroic: [
      'Execute: 3M physical hit on the current tank. Use a minor mitigation cooldown — cannot be dodged, blocked, or parried.',
      'Kor\'kron Snipers added to add waves. The targeted healer runs behind the Sniper so Multi-Shot fires into the wall.',
      'Add waves start at 3 and grow over the fight.',
    ],
    lust: 'Just before the 10% burn — ideally entering a Battle or Berserker Stance window with no adds alive.',
    diff: 2,
    roles: [
      { color: '#e8352a', label: 'Tanks', note: 'Call stance changes on voice so the raid stops instantly. Swap Sundering Blow at exactly 3 stacks — never 4.' },
      { color: '#1db89a', label: 'Healers', note: 'Berserker Stance spikes — pre-HoT the tank before Execute lands. Sniper target: break position and run behind it.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Absolute stop on Nazgrim the instant Defensive Stance is called. Own an interrupt for Arcweavers. One DPS permanently assigned to the Banner.' },
    ],
    strat: [
      {
        phase: 'General — Stance Rotation',
        points: [
          { icon: null, role: 'All', note: 'Stances cycle: Battle → Berserker → Defensive. Battle: standard DPS. Berserker: pop cooldowns, +25% damage dealt and taken. Defensive: full stop on boss, all attention on adds and Banner.' },
          { icon: '🛡️', role: 'Tanks', note: 'Swap at exactly 3 Sundering Blow stacks. The off-tank (debuffed) is the only player who can hit the boss in Defensive Stance without generating Rage.' },
          { icon: '⚔️', role: 'DPS', note: 'Berserker: save personal DPS cooldowns for this window. Defensive: stop hitting the boss entirely. Kill adds, destroy Banner, reset positions.' },
        ],
      },
      {
        phase: '10% Burn',
        points: [
          { icon: null, role: 'All', note: 'At 10% Nazgrim spawns all 5 add types simultaneously. Finish adds and get cleaned up around 13-15%. Time the burn to begin just after a Defensive Stance.' },
          { icon: '🛡️', role: 'Tanks', note: 'At ~11-12%, reposition Nazgrim all the way back to the door — the 10% wave adds spawn behind the raid and will never reach the boss. The off-tank runs to meet the add wave solo.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Stances',
        items: [
          { name: 'Defensive Stance', important: true, desc: 'Nazgrim takes 10% less damage and generates 3 Rage every time he is struck. Exception: the debuffed tank does not cause Rage gain. All other players must stop attacking.' },
          { name: 'Berserker Stance', desc: 'Deals and takes 25% more damage. All Rage from abilities is doubled. DPS cooldowns go here.' },
        ],
      },
      {
        phase: 'Rage Abilities',
        items: [
          { name: 'Kor\'kron Banner', important: true, desc: 'Costs 50 Rage. Every add attack through the banner gives 3 Rage. Destroy within 3 seconds. One DPS permanently owns this role.' },
          { name: 'Ravager', important: true, desc: 'Costs 100 Rage. Permanent spinning axe for the rest of the fight. Keep Rage below 100 at all times.' },
          { name: 'Sundering Blow', important: true, desc: 'Generates 5 Rage plus 5 per existing stack. Swap at 3 stacks — a 4th costs 20 Rage (40 in Berserker).' },
        ],
      },
    ],
  },
  {
    num: 9,
    slug: 'malkorok',
    modelFile: 'orcsupersoldier.glb',
    name: 'MALKOROK',
    sub: 'Ancient Miasma · Orbs · Blood Rage',
    zone: 3, zc: 'z3',
    video: 'OH2G2p7oJU8',
    setup: { t: 2, h: 2, d: 6 },
    rule: 'Ancient Miasma replaces ALL healing with shields. Direct heals are wasted. Orbs instantly strip your shield — never touch them.',
    overview: 'Two alternating phases. Phase 1: Ancient Miasma is active — healers build shields, not health. Three Imploding Energy circles must each be soaked by exactly one player. Phase 2: Miasma drops, healing works normally, entire raid stacks in front to split the 6.7M cleave.',
    mechs: [
      { icon: '🛡️', name: 'Ancient Miasma', important: true, desc: 'Replaces all healing with absorption shields for the entire Phase 1 duration. Direct heals are completely wasted — healers must use absorbs and shields only.' },
      { icon: '🔵', name: 'Imploding Energy Soak', important: true, desc: 'Three circles spawn every ~20 seconds. Each must be soaked by exactly one player. Zero soaks = ~700k raid-wide explosion. Pre-assign soakers before the pull.' },
      { icon: '🌑', name: 'Essence of Y\'Shaarj Orbs (Heroic)', important: true, desc: 'Persistent orbs on the ground that instantly destroy your shield on contact. Never step on them. Treat them as permanent lethal ground hazards.' },
      { icon: '👾', name: 'Living Corruption Add (Heroic)', desc: 'Spawned by Seismic Slam. Pull it to the center immediately — it detonates for ~1M to anyone within 5 yards of it when it dies.' },
      { icon: '💀', name: 'Blood Rage — Phase 2', important: true, desc: 'Malkorok reaches 100 Rage and channels a 6.7M cleave split among all players in front of him. Entire raid stacks and faces the boss.' },
    ],
    heroic: [
      'Essence of Y\'Shaarj orbs persist on the ground throughout Phase 1 — treat them as permanent kill zones.',
      'Seismic Slam spawns a Living Corruption add that must be pulled to the center immediately.',
      'Hard 6-minute enrage.',
    ],
    lust: 'At the start of Phase 2 (Blood Rage transition) — healing works again and the boss takes +25% more damage.',
    diff: 3,
    roles: [
      { color: '#e8352a', label: 'Tanks', note: 'Arcing Smash hits ~750k — use a cooldown on every cast. Position Malkorok so the cleave angles don\'t cover the soak positions.' },
      { color: '#1db89a', label: 'Healers', note: 'Phase 1: absorbs and shields ONLY. Phase 2: full throughput — everyone took the 6.7M split and the raid is near death. Use a major CD immediately.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Own a soak assignment for Imploding Energy. On Heroic: memorize all orb locations — one touch ends your Phase 1 survivability immediately.' },
    ],
    strat: [
      {
        phase: 'Phase 1 — Ancient Miasma Active',
        points: [
          { icon: null, role: 'All', note: 'Healers use absorbs and shields only — direct heals land for zero. Soak your assigned Imploding Energy circle alone. Never touch Essence of Y\'Shaarj orbs on Heroic — they strip your entire shield instantly.' },
          { icon: '💚', role: 'Healers', note: 'Track shield values on raid frames. Stack Renew, PoM, PWS, Beacon — anything that generates absorbs. Save one throughput CD for the Phase 2 transition.' },
          { icon: '⚔️', role: 'DPS', note: 'Know your soak assignment. Call out when you soaked so the team tracks the cooldown. On Heroic, use a personal defensive before each soak if your current shield is low.' },
        ],
      },
      {
        phase: 'Phase 2 — Blood Rage',
        points: [
          { icon: null, role: 'All', note: 'Malkorok reaches 100 Rage and channels a 6.7M cleave split among everyone in front of him. Stack the entire raid facing the boss. Pop Bloodlust and use major raid CDs.' },
          { icon: '💚', role: 'Healers', note: 'The entire raid just took the 6.7M split. Major throughput CD immediately after the cleave lands — not before. Heal back to full before Phase 1 resumes.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Phase 1',
        items: [
          { name: 'Ancient Miasma', important: true, desc: 'All healing replaced by absorption shields for Phase 1. Direct heals are wasted. Healers must use shield/absorb toolkit exclusively.' },
          { name: 'Imploding Energy', important: true, desc: 'Three circles spawn every ~20 seconds. Each must be soaked by exactly one player or detonates for ~700k to all. Pre-assign soakers.' },
          { name: 'Essence of Y\'Shaarj (Heroic)', important: true, desc: 'Persistent orbs on the ground that strip your entire shield on contact. Treat as permanent lethal terrain.' },
        ],
      },
      {
        phase: 'Phase 2',
        items: [
          { name: 'Blood Rage', important: true, desc: 'At 100 Rage, channels a 6.7M cleave split among all players in front. Stack the entire raid and use a major raid cooldown.' },
          { name: 'Displaced Energy', desc: 'Detonates at the end of Phase 2 for ~390k to all players within 10 yards of the explosion point. Spread after Blood Rage lands.' },
        ],
      },
    ],
  },
  {
    num: 10,
    slug: 'spoils-of-pandaria',
    name: 'SPOILS OF PANDARIA',
    sub: 'Two Teams — Two Sides — One Timer',
    zone: 3, zc: 'z3',
    video: 'OH2G2p7oJU8',
    setup: { t: 2, h: 2, d: 6 },
    rule: 'Both teams must reach 50 points simultaneously — never let one side get ahead while the other stalls. If the shared 5-minute enrage timer expires before both sides hit 50 points, the encounter resets.',
    overview: 'The raid splits into two equal groups, each clearing one side of a vault simultaneously. Each side has two quadrants — large chests give more points but spawn harder add combinations. Both teams must hit 50 points within the same shared 5-minute timer or it resets.',
    mechs: [
      { icon: '📦', name: 'Point Management', important: true, desc: 'Both sides must hit 50 points simultaneously within 5 minutes. Coordinate via voice — if one side falls behind, slow the other down. Never rush ahead alone.' },
      { icon: '🐉', name: 'Mogu Side — Amber Encasement', important: true, desc: 'Targets a random player with an amber shell. Must be broken by 5 players attacking it within 8 seconds or the player dies and it explodes for massive raid damage.' },
      { icon: '🐛', name: 'Pandaren Side — Brew Explosion', desc: 'The Brewmaster add throws a keg that explodes in a 10-yard radius. Position him away from the group.' },
      { icon: '🔑', name: 'Chest Priority', desc: 'Large chests (12 pts) vs Small chests (3 pts). Aim for large chests first — they complete the quota fastest. But large chests spawn harder, more numerous adds.' },
    ],
    heroic: [
      'Heroic adds substantially more HP and more dangerous ability combinations.',
      'Some Mogu adds on Heroic cast Cryptmaker — a frontal cone that cannot be avoided by the tank. Tanks must coordinate defensive cooldowns.',
    ],
    lust: 'No traditional lust window — use when the final quadrant is opened to accelerate the last push.',
    diff: 2,
    roles: [
      { color: '#e8352a', label: 'Tanks (one per side)', note: 'Pick up all adds immediately. Face Mogu adds away from the group. Position Brewmaster away from the group for keg explosions.' },
      { color: '#1db89a', label: 'Healers (one per side)', note: 'Heavy sustained damage on both sides simultaneously. Save a CD for large chest add waves — they hit hard.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Break Amber Encasement immediately — 5 players attack it within 8 seconds. Call "amber" on voice. Coordinate point totals between sides via comms.' },
    ],
    strat: [
      {
        phase: 'General — Both Sides',
        points: [
          { icon: null, role: 'All', note: 'Open large chests first for maximum points per second. Call your current point total every chest so both sides stay in sync. Never open a new chest until current adds are dead.' },
          { icon: '⚔️', role: 'DPS', note: 'Mogu side: break Amber Encasement within 8 seconds — 5 players attack it, no exceptions. Pandaren side: interrupt Windstorm and kill Crane adds quickly.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Both Sides',
        items: [
          { name: 'Amber Encasement (Mogu)', important: true, desc: 'Targets a random player. Must be broken by 5 players attacking within 8 seconds or the player dies and deals massive raid damage.' },
          { name: 'Point Threshold', important: true, desc: 'Both sides must reach 50 points within the 5-minute shared timer. Coordinate via voice — if one side stalls, slow the other to match.' },
        ],
      },
    ],
  },
  {
    num: 11,
    slug: 'thok',
    modelFile: 'hordearmoredtrex_01dark.glb',
    name: 'THOK THE BLOODTHIRSTY',
    sub: 'Healing CD Rotation · Kiting · Cage Management',
    zone: 3, zc: 'z3',
    video: 'OH2G2p7oJU8',
    setup: { t: 2, h: 2, d: 6 },
    rule: 'Never let the Screech stack get high enough that healers can\'t cast. Release a prisoner to reset the stack — but each prisoner adds a new hazard. Manage prisoner releases as tightly as the stacks.',
    overview: 'A kiting fight with an escalating Screech mechanic. Thok gains stacks of Deafening Screech every second — after ~20 stacks healers can\'t cast and the raid dies. Releasing a prisoner resets the stacks but adds a new environmental hazard (Corrosive Blood, Fire Jets, or Scorpion Poison). The fight ends when you kill Thok after enough Bloodlust/Frenzy stacks accumulate.',
    mechs: [
      { icon: '📢', name: 'Deafening Screech', important: true, desc: 'Thok gains a stack every second. Each stack increases Screech damage and at ~20 stacks healers are silenced. Release a prisoner before this point to reset the stack.' },
      { icon: '🔓', name: 'Prisoner Release', important: true, desc: 'Release the right prisoner at the right time to reset stacks. Each prisoner adds a hazard for the next phase. Order: Acid → Fire → Poison (recommended). Each release also gives Thok a Frenzy stack — at high Frenzy, burst him down.' },
      { icon: '🏃', name: 'Kiting', desc: 'Thok fixates on a random player and charges. The fixated player kites him in a circle around the room while the raid follows at range. Healers use instant-cast abilities only during high stacks.' },
    ],
    heroic: [
      'Heroic adds a Jailer mechanic — a caged add that fixates a random player and must be kited separately from Thok.',
      'Ice phases replace Poison phase on Heroic. Ice patches freeze players who walk through them.',
    ],
    lust: 'During the final Frenzy phase when Thok has enough stacks — burst him before the stacks become unmanageable.',
    diff: 2,
    roles: [
      { color: '#e8352a', label: 'Tanks', note: 'Hold Thok when he is not fixating. Position him in the center during non-fixate periods so the raid can DPS without running.' },
      { color: '#1db89a', label: 'Healers', note: 'Track Screech stacks obsessively. Above 12 stacks start instant-cast only. Release prisoner by 18 stacks at the absolute latest. Pre-assign the CD rotation for the stack window.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Keep up with the kite path. Call out when the fixated player needs a speed boost. Front-load DPS early in each phase when stacks are low and healers can cast freely.' },
    ],
    strat: [
      {
        phase: 'Phase 1 — Stack Management Loop',
        points: [
          { icon: null, role: 'All', note: 'DPS Thok at the start of each prisoner phase while stacks are 0. As stacks rise toward 18, focus on survival and use pre-assigned healing CDs. Release the prisoner just before healers lose the ability to cast. Repeat for each prisoner in order.' },
          { icon: '💚', role: 'Healers', note: 'Pre-assign a CD per stack window before the pull. Typically: Barrier covers stacks 12–18, Devotion Aura covers the next cycle, Spirit Link for the final cycle.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Core Loop',
        items: [
          { name: 'Deafening Screech', important: true, desc: 'Stacks every second. At ~18–20 stacks healers cannot cast at all. Release a prisoner to reset the stack before this threshold.' },
          { name: 'Prisoner Release', important: true, desc: 'Resets stacks but adds an environmental hazard and gives Thok a Frenzy stack. Recommended order: Acid → Fire → Poison.' },
          { name: 'Frenzy (accumulated)', desc: 'At high Frenzy stacks from multiple prisoner releases, Thok takes massively increased damage. This is your kill window — Bloodlust and burn.' },
        ],
      },
    ],
  },
  {
    num: 12,
    slug: 'siegecrafter-blackfuse',
    modelFile: 'siegeengineer_doll_blackfuseskin.glb',
    name: 'SIEGECRAFTER BLACKFUSE',
    sub: 'Assembly Line + Overcharged Weapons',
    zone: 4, zc: 'z4',
    video: 'OH2G2p7oJU8',
    setup: { t: 2, h: 2, d: 6 },
    rule: 'Destroy every weapon before it reaches the end of the assembly line. Overcharged weapons are the enrage — once several weapons reach Blackfuse, the buff stack will outpace your DPS.',
    overview: 'Blackfuse channels weapons off an assembly line. A small team (2-3 DPS) rides the conveyor belt to destroy weapons before they reach him. The ground team handles the boss and add spawns. On Heroic each weapon has a unique sabotage mechanic that requires a different approach.',
    mechs: [
      { icon: '⚙️', name: 'Assembly Line', important: true, desc: 'A conveyor belt carries weapons toward Blackfuse. 2-3 DPS ride the belt to destroy each weapon. Every weapon that reaches him gives a stacking +15% damage and haste buff.' },
      { icon: '🤖', name: 'Automated Defense — Crawler Mines (Belt)', desc: 'Mines spawn on the belt and chase belt riders. Kite or destroy them while handling weapons.' },
      { icon: '🔧', name: 'Heroic Weapons', important: true, desc: 'Each weapon type requires a different sabotage approach on Heroic. Assign a dedicated belt team who knows all three weapon types before the pull.' },
      { icon: '💥', name: 'Overcharged (Reached Blackfuse)', important: true, desc: 'If a weapon reaches Blackfuse: Sawblade = rolling raid damage. Shredder = spawns a Shredder add. Electromagnet = pulls all players 30 yards.' },
    ],
    heroic: [
      'Each weapon type has a unique heroic sabotage mechanic — belt team must know all three.',
      'Shredder add from a missed weapon has very high HP and deals heavy melee damage to whoever it targets.',
      'The belt team should be your 2-3 highest sustained DPS — every missed weapon is a wipe-timer accelerant.',
    ],
    lust: 'At the start of the encounter (pull) — maximize the window before the first weapon reaches full speed.',
    diff: 3,
    roles: [
      { color: '#e8352a', label: 'Tanks', note: 'Hold Blackfuse in the center. Pick up any Shredder adds from missed weapons immediately.' },
      { color: '#1db89a', label: 'Healers', note: 'Split awareness between ground team and belt team — belt riders take significant unavoidable damage from mines and weapon abilities.' },
      { color: '#2e8fdf', label: 'Belt Team (2-3 DPS)', note: 'Know your weapon sabotage assignments. Never let a weapon reach Blackfuse. Kite mines and maintain belt position.' },
    ],
    strat: [
      {
        phase: 'General',
        points: [
          { icon: null, role: 'All', note: 'Ground team focuses Blackfuse and handles add spawns from Automated Defense systems. Belt team rides the conveyor continuously and destroys every weapon.' },
          { icon: '⚔️', role: 'Belt Team', note: 'Call each weapon type on voice as it spawns so the ground team knows what buff Blackfuse may gain. Prioritize Sawblades — their overcharged effect is the highest raid damage.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Assembly Line',
        items: [
          { name: 'Overcharged Weapon', important: true, desc: 'Each weapon that reaches Blackfuse gives +15% damage/haste. Sawblade: rolling raid damage. Shredder: spawns an add. Electromagnet: pulls all players.' },
          { name: 'Heroic Sabotage Mechanics', important: true, desc: 'Each weapon type requires a different interaction on Heroic. Assign and practice the belt team\'s rotation before the pull.' },
        ],
      },
    ],
  },
  {
    num: 13,
    slug: 'paragons-of-the-klaxxi',
    name: 'PARAGONS OF THE KLAXXI',
    sub: '9 Paragons — Fixed Heroic Kill Order',
    zone: 4, zc: 'z4',
    video: 'OH2G2p7oJU8',
    setup: { t: 2, h: 2, d: 6 },
    rule: 'Follow the fixed Heroic kill order — Rik\'kal last is a wipe. Every living Paragon at the end of a kill empowers the next one with a stacking buff.',
    overview: '9 Paragons are all active simultaneously, each with unique abilities. Killing one empowers all remaining Paragons with a stacking buff. The recommended Heroic kill order minimizes overlap of dangerous abilities and prevents Rik\'kal from being alive late when his Injection becomes unmanageable.',
    mechs: [
      { icon: '🐛', name: 'Heroic Kill Order', important: true, desc: 'Recommended: Xaril → Korven → Iyyokuk → Hisek → Ka\'roz → Skeer → Rik\'kal → Kaz\'tik → Kil\'ruk last. Never kill Rik\'kal late — his Injection becomes lethal.' },
      { icon: '💉', name: 'Rik\'kal — Injection', important: true, desc: 'Injects a player with a Parasitic Leech. The player transforms and deals massive damage to nearby allies if not killed quickly. Must be killed or dispelled before they reach other players.' },
      { icon: '🌀', name: 'Ka\'roz — Whirling', desc: 'Charges randomly around the room. Pre-assigned players with immunities soak the charge or the entire raid takes ~500k.' },
      { icon: '🦅', name: 'Kil\'ruk — Reave', important: true, desc: 'The final Paragon. His Reave channels massive damage to the entire raid. Kill him faster than the previous ones — he is the enrage check.' },
    ],
    heroic: [
      'Fixed kill order is mandatory. Rik\'kal alive late = Injection spam = wipe.',
      'Kaz\'tik\'s Mesmerize targets 3 random players — run to the designated break zone immediately.',
      'Xaril\'s Toxic Injection applies a powerful DoT — dispel immediately on every application.',
    ],
    lust: 'On Kil\'ruk (the final Paragon) — his Reave makes the fight a race.',
    diff: 3,
    roles: [
      { color: '#e8352a', label: 'Tanks', note: 'Keep Paragons spread so ability cleave doesn\'t hit the whole raid. Pick up each new high-priority Paragon the instant they become available to kill.' },
      { color: '#1db89a', label: 'Healers', note: 'Track Rik\'kal Injections on raid frames — dispel or kill infected players before they reach allies. Heavy constant damage late in the fight from empowerment stacks.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Follow the kill order precisely. Pre-assign Ka\'roz charge soakers (immune abilities) before the pull.' },
    ],
    strat: [
      {
        phase: 'Kill Order Execution',
        points: [
          { icon: null, role: 'All', note: 'Follow the fixed kill order. Every Paragon killed empowers the rest — the fight accelerates. Call target switches loudly on voice.' },
          { icon: '⚔️', role: 'DPS', note: 'When Rik\'kal is alive, whoever gets the Injection immediately moves away from the raid. DPS kills the infected player at ~20% to break the Leech safely.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Key Abilities',
        items: [
          { name: 'Paragon Empowerment', important: true, desc: 'Each killed Paragon empowers all remaining ones. The kill order matters — save the most dangerous Paragons for when fewer remain.' },
          { name: 'Rik\'kal — Parasitic Injection', important: true, desc: 'Transforms a player who deals massive damage to nearby allies. Infected player moves away — raid kills them at 20% HP to break the leech safely.' },
          { name: 'Kil\'ruk — Reave', important: true, desc: 'Massive channel damage on the final Paragon. Bloodlust and kill as fast as possible.' },
        ],
      },
    ],
  },
  {
    num: 14,
    slug: 'garrosh-hellscream',
    name: 'GARROSH HELLSCREAM',
    sub: '4-Phase Endgame Fight · The Downfall',
    zone: 4, zc: 'z4',
    video: 'OH2G2p7oJU8',
    setup: { t: 2, h: 2, d: 6 },
    rule: 'Never let a Mind Control cast go uninterrupted. Pre-assign CC targets by player name before the pull — one missed cast spreads like a virus and wipes the raid.',
    overview: 'A long, execution-heavy fight across four distinct phases. Phase 1 is add management around Iron Stars. Phase 2 is Desecrate placement, Whirling Corruption positioning, and Mind Control response. Intermissions are puzzle phases inside the Realm of Y\'Shaarj. Phase 3 repeats Phase 2 with all abilities empowered. Phase 4 (Heroic only) is entirely new mechanics in Stormwind.',
    mechs: [
      { icon: '🪓', name: 'Desecrate', desc: 'Thrown at a ranged target. Always requires 3 players standing at range to bait it away from the raid. Place weapons along walls — keep the center clear for Phase 3+.' },
      { icon: '🌀', name: 'Whirling Corruption', important: true, desc: 'Stack under the boss for normal version. Spread to max range (~40 yards) for Empowered version — a minion spawns where each missile lands. Kill spawned minions before they buff each other.' },
      { icon: '🧠', name: 'Touch of Y\'Shaarj (Mind Control)', important: true, desc: 'MC on 2 players. They spam a cast that chains the MC to others — interrupt or stun every cast immediately. DPS to 20% HP to break. Pre-assign who handles each MC target.' },
      { icon: '🛡️', name: 'Gripping Despair (Tank Swap)', desc: 'Stacking tank DoT. Swap at 3 stacks. In Phase 3 dropping stacks causes Explosive Despair — tank needs a defensive cooldown.' },
      { icon: '👹', name: 'Realm of Y\'Shaarj (Intermission)', important: true, desc: 'Kill all adds before Garrosh reaches 25 energy. Heroic: Jade Temple first, Terrace skip strategy. You should never need the third intermission.' },
      { icon: '😈', name: 'Manifest Rage (Phase 4)', important: true, desc: 'Garrosh casts at 100 energy in Phase 4. Iron Star must hit during the 2-second cast window — not the channel. Timing the Iron Star is the hardest skill in the phase.' },
    ],
    heroic: [
      'Intermissions are fixed order: Jade Temple → Terrace (skip). Never execute the Terrace — stand at the back wall.',
      'Jade Temple: adds cast Embodied Doubt — AoE silence + stacking damage amplifier. Pre-assign interrupt/stun pairs per group of 3 adds.',
      'Minions of Y\'Shaarj gain 10 energy per melee hit. Kill each one separately — never let two die near each other.',
      'Phase 4 (Stormwind) is Heroic-only. Off-tank kites the Iron Star to intercept Manifest Rage. Kill before Manifest Rage fires twice.',
    ],
    lust: 'At the Phase 3 transition (Garrosh hits 10%). All DPS cooldowns should be held for this window.',
    diff: 3,
    modelFile: 'garrosh2.glb',
    roles: [
      { color: '#e8352a', label: 'Tanks', note: 'Swap at 3 Gripping Despair stacks. Use a defensive when stacks expire in Phase 3 (Explosive Despair). Phase 4: main tank holds Garrosh; off-tank kites the Iron Star.' },
      { color: '#1db89a', label: 'Healers', note: '2 healers. HPS demand is burst-heavy — disc and paladin are ideal. Save a CD for each Whirling Corruption and the Iron Star explosion in Phase 4.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Pre-assign MC targets by name. Desecrate team (3 players) move out every weapon. Phase 4: all DPS stay stacked behind boss for Malice, stepping out on debuff. No DoTs when breaking MC.' },
    ],
    strat: [
      {
        phase: 'Phase 1 — The True Horde (100% to 10%)',
        points: [
          { icon: null, role: 'All', note: 'Stack under the boss. 3 designated range players always stand at distance to bait Desecrate away from the raid. Wait for Warbringers to reach the center of the room before engaging.' },
          { icon: '🛡️', role: 'Tanks', note: 'Let all Warbringers reach the center then pick them all up at once. First wave: AoE before War Song. Second wave: drop to ~30-50% then use knockbacks/CC to hold them in the Iron Star\'s path.' },
          { icon: '⚔️', role: 'DPS', note: 'Kill Siege Engineers fast — 10-second window. First engineer: send highest-burst DPS solo. Second engineer: send 2 DPS.' },
        ],
      },
      {
        phase: 'Intermission #1 — Jade Temple',
        points: [
          { icon: null, role: 'All', note: '15 Embodied Doubt adds in 5 groups of 3. Pre-assigned pairs own each group. Kill all adds before Garrosh hits 25 energy (16-second window). Interrupt Embodied Doubt every cast — 3+ casts is a wipe.' },
          { icon: '⚔️', role: 'DPS', note: 'Know your pair, your group, and your interrupt rotation before the pull. Do not improvise. Once your group is dead, sprint to assist the middle group.' },
        ],
      },
      {
        phase: 'Intermission #2 — Terrace (SKIP)',
        points: [
          { icon: null, role: 'All', note: 'Run to the back wall immediately and stand there. Wait out the full 60-second timer. Skipping eliminates execution risk with no meaningful downside.' },
        ],
      },
      {
        phase: 'Phase 2 — Power of Y\'Shaarj',
        points: [
          { icon: null, role: 'All', note: 'Stack under the boss except during Empowered Whirling Corruption (spread to 40 yards) and Desecrate weapon placement. Kill each Minion of Y\'Shaarj separately — never let two die adjacent to each other.' },
          { icon: '🛡️', role: 'Tanks', note: 'Swap at 3 Gripping Despair stacks. Hold boss stationary in a fixed corner so the Desecrate team can predict placement zones.' },
          { icon: '⚔️', role: 'DPS', note: 'Interrupt the MC target\'s spread cast every single time. Do not use DoTs that persist and kill the MC\'d player before they hit 20% HP.' },
        ],
      },
      {
        phase: 'Phase 3 — My World (10% to transition)',
        points: [
          { icon: null, role: 'All', note: 'All abilities now empowered. Garrosh heals to full. Pop Bloodlust immediately. Mind Controls are highest priority. When boss hits 0%, do NOT attack — 20-second RP before Phase 4 teleport.' },
          { icon: '🛡️', role: 'Tanks', note: 'When Gripping Despair stacks fall off in Phase 3, use a defensive — Explosive Despair hits harder and increases by 10% per previous explosion.' },
        ],
      },
      {
        phase: 'Phase 4 — Stormwind (Heroic Only)',
        points: [
          { icon: null, role: 'All', note: 'Drag the boss to one edge. Raid stacks just inside the Malice circle edge. When you get Malicious Blast debuff, step outside for 4 seconds, return. Kill the boss before Manifest Rage fires twice.' },
          { icon: '🛡️', role: 'Off-Tank', note: 'Kite the Iron Star along the wall and route it to intercept Garrosh just as he reaches 100 energy and starts casting Manifest Rage. Hit during the 2-second cast — not the channel.' },
          { icon: '⚔️', role: 'DPS', note: 'Stay stacked behind the boss inside the Malice circle. For Malice #4 + Bombardment overlap: 3 pre-assigned players with large defensives soak together while rest spreads.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Phase 1',
        items: [
          { name: 'Desecrate', desc: 'Thrown at a ranged target. 3 players always at range to bait it. Place weapons along walls. In Phase 2+ weapons are unkillable.' },
          { name: 'Siege Engineer', important: true, desc: 'Spawns on balcony. 10-second window to kill before Iron Star activates uncontrolled. Heroic: 3M HP — send highest burst DPS solo for the first.' },
        ],
      },
      {
        phase: 'Phase 2 / 3',
        items: [
          { name: 'Whirling Corruption', important: true, desc: 'Stack for base version. Empowered: spread to 40 yards — missiles spawn Minion adds at landing positions. Kill each minion separately.' },
          { name: 'Touch of Y\'Shaarj', important: true, desc: 'MC on 2 players who spread the MC on cast. Interrupt or stun every cast. DPS to 20% HP to break. No DoTs that can kill the player.' },
          { name: 'Gripping Despair → Explosive Despair (P3)', important: true, desc: 'Stacking tank DoT. Swap at 3. In Phase 3 dropping stacks triggers Explosive Despair — use a tank defensive every time stacks fall.' },
        ],
      },
      {
        phase: 'Intermission',
        items: [
          { name: 'Embodied Doubt (Jade Temple)', important: true, desc: 'AoE silence + stacking damage amplifier. Pre-assign interrupt/stun pairs. Kill all 15 adds before Garrosh hits 25 energy.' },
        ],
      },
      {
        phase: 'Phase 4 (Heroic Only)',
        items: [
          { name: 'Malice', important: true, desc: 'Raid stacks at circle edge. Step outside on Malicious Blast debuff, return after 4 seconds. If fewer than 2 inside, Garrosh gains energy.' },
          { name: 'Manifest Rage', important: true, desc: 'Cast at 100 energy. Iron Star must interrupt during the 2-second cast window. Each second of channel spawns more adds.' },
          { name: 'Iron Star (Phase 4)', important: true, desc: 'Spawned by Bombardment clump check. Off-tank kites along wall to intercept Garrosh at exactly 100 energy.' },
        ],
      },
    ],
  },
]

export function getBossById(id: number): Boss | undefined {
  return BOSSES.find((b) => b.num === id)
}

export function getBossBySlug(slug: string): Boss | undefined {
  return BOSSES.find((b) => b.slug === slug)
}

export function getBossesByZone(zc: string): Boss[] {
  return BOSSES.filter((b) => b.zc === zc)
}
