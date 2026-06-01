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
    rule: 'Never let the raid clump — spread 5+ yards at all times, kill every black Sha puddle in your zone during the split phase, and sidestep Swirl.',
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
          { icon: '🛡️', role: 'Tanks', note: 'Position to the side so Corrosive Blast does not cleave the raid. Swap after every Corrosive Blast cast. Off-tank picks up adds.' },
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
          { name: 'Seeping Sha', desc: 'Coming into contact with the Seeping Sha surrounding Immerseus inflicts Shadow damage and knocks players back.' },
        ],
      },
      {
        phase: 'Phase 2 - Split',
        items: [
          { name: 'Sha Puddle', desc: 'When destabilized, Immerseus forms one Sha Puddle for every four units of Corruption. Destroying a Sha Puddle removes one unit of Corruption.' },
          { name: 'Sha Residue', desc: 'When a Sha Puddle is destroyed, it applies Sha Residue to enemies within 10 yards, increasing damage dealt to other Sha Puddles by 25%. Stacks.' },
          { name: 'Contaminated Puddle', desc: 'Healing it to full health before it merges back makes it Purified, removing one unit of Corruption upon reaching Immerseus.' },
          { name: 'Congealing', desc: 'The speed of the Contaminated Puddle wanes as it increases in health.' },
          { name: 'Purified Residue', desc: 'Upon reaching full health, a Contaminated Puddle releases Purified Residue — restoring 25% mana to allies within 12 yards and increasing healing done by 75%. Stacks.' },
          { name: 'Erupting Sha', desc: 'When any Puddle reaches Immerseus: heavy Shadow or Frost damage to all players.' },
          { name: 'Sha Pool', desc: 'Grows over time, inflicting stacking Shadow damage per second to enemies who touch it. Touching the Sha Pool shrinks it; any Puddle reaching it expands it.' },
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
    rule: 'All three bosses must die within the same 20-second window. DM push order: Sun → Rook → He. Never trigger two DM phases simultaneously.',
    overview: 'Three independent bosses that must die within the same 20-second window. Equalize their HP throughout the fight and commit only when all three are at ~10%. Each boss phases at 66% and 33% into a Desperate Measures sequence — never trigger two DM phases simultaneously. DM phases reset each boss\'s escalating Heroic passive, so the order you push them matters. Recommended push order: Sun → Rook → He, then repeat. He always goes last because his Garrote bleeds and poison puddles accumulate and only reset during his DM phase — delaying him minimizes how long the raid suffers unavoidable damage with no reset.',
    mechs: [
      { icon: '🛡️', name: 'Vengeful Strikes (Rook)', desc: 'Frontal cone stun on the current tank. Face Rook away from the raid at all times — melee stands behind. Pop a personal defensive on every cast.' },
      { icon: '🌀', name: 'Crane Kick (Rook)', desc: 'Rook pulls a random target toward him, then immediately spins in AoE. Move out the moment you are pulled. Rook tank: angle him outward before Sun\'s DM so Crane Kick misses the center bubble.' },
      { icon: '☠️', name: 'Garrote (He)', desc: 'He shadow-steps behind a random player and applies a permanent bleed that ticks for the rest of the fight — only reset by his DM phase.' },
      { icon: '🧪', name: 'Noxious Poison (He)', desc: 'He\'s melee leaves persistent poison puddles. He tank must keep moving — never stand still.' },
      { icon: '🔮', name: 'Shadow Word: Bane (Sun)', desc: 'DoT on 2 random targets that jumps to 2 new targets every 3 seconds, up to 6 total. Dispel both applications within the first 3 seconds.' },
      { icon: '🌊', name: 'Calamity (Sun)', important: true, desc: '5-second cast, deals 30% of every player\'s max HP to the full raid. Cover every cast with a raid cooldown. Heroic: each successive cast adds +10% damage until Sun enters DM.' },
      { icon: '⚠️', name: 'Desperate Measures (66% / 33%)', desc: 'Each boss phases individually — never trigger two simultaneously. Push order: Sun first → Rook second → He last. DM resets each boss\'s escalating Heroic passive.' },
    ],
    heroic: [
      'Each boss has an escalating passive that resets when they enter DM — push order matters strategically.',
      'Calamity escalates +10% per cast until Sun\'s DM resets it — pre-assign a staggered CD rotation before the pull.',
      'He\'s combined output (Garrote, poison, puddles) accounts for ~20% of total raid damage.',
      'Rook\'s DM adds share HP on Heroic — stack Sorrow and Gloom in melee and cleave them together. Gloom\'s Corruption Shock is the #1 interrupt priority.',
      'He\'s DM: Mark of Anguish applies 80% armor reduction for 4 minutes — never pass it to a tank.',
    ],
    lust: 'On pull — maximize the opening burn window before any boss hits 66%.',
    diff: 2,
    roles: [
      { color: '#e8352a', label: 'Tank 1 — Rook', note: 'Face Rook away from the raid. Pop defensives on every Vengeful Strikes. Before Sun\'s DM, pull Rook outward so Crane Kick misses the center bubble. During Rook\'s DM: tank Sorrow and Gloom in the center for cleave.' },
      { color: '#e8352a', label: 'Tank 2 — He', note: 'Watch your feet and step out of poison puddles — never stand in accumulated clouds. Turn your back on Gouge to take the knockback instead of the stun. Never accept the Mark of Anguish — 80% armor reduction for 4 minutes.' },
      { color: '#1db89a', label: 'Healers', note: '3 healers recommended. Dispel Bane within 3 seconds every time. Assign staggered CDs for Calamity. Interrupt Sun\'s Sha Sear at the midpoint of the channel.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Push order: Sun → Rook → He at 66%, then repeat at 33%. Full stop on bosses the moment any DM triggers — handle adds completely before resuming.' },
    ],
    strat: [
      {
        phase: 'Normal Phase — No Desperate Measures',
        points: [
          { icon: null, role: 'All', note: 'Target push order: Sun hits 66% first, then Rook, then He. Never let He fall too far behind — extended Garrote uptime with no reset is brutal. Never trigger two DM phases simultaneously.' },
          { icon: '🛡️', role: 'Tanks', note: 'Rook tank: face him away from the raid. He tank: watch your feet and step out of poison puddles. Turn your back on Gouge to take knockback instead of the stun.' },
          { icon: '💚', role: 'Healers', note: 'Dispel Bane within 3 seconds — coordinate so both applications are covered without duplicate dispels. Pre-assign CD rotation for Calamity. Interrupt Sun\'s Sha Sear at the midpoint of the cast.' },
          { icon: '⚔️', role: 'DPS', note: 'Dedicated Sun interrupters own Sha Sear every cast. When any boss enters DM, full stop — handle adds completely before resuming.' },
        ],
      },
      {
        phase: 'Sun\'s Desperate Measures — Dark Meditation',
        points: [
          { icon: null, role: 'All', note: 'Sun channels massive raid-wide Shadow damage. The entire raid stacks inside her Meditative Field circle for 35% damage reduction. Two large adds spawn outside and send small adds rushing into the bubble. Melee kills the small adds rushing in — damage to small adds transfers to the large spawns. Ranged bursts the large adds from outside the bubble. Sun\'s DM resets her Calamity escalation stack.' },
          { icon: '🛡️', role: 'Tanks', note: 'Both tanks position outside or at the edge of the bubble where the Manifestations spawn. He tank: stack He on top of a Manifestation for cleave; his poison puddles drop outside the bubble where they are not a threat. Rook tank: angle Rook\'s frontal away from the raid cluster before the phase begins.' },
          { icon: '💚', role: 'Healers', note: 'This is your healing break — Sun\'s DM resets Calamity stacks. Top the raid fully during the channel and queue the next CD rotation. Continue Bane dispels as they land.' },
          { icon: '⚔️', role: 'DPS', note: 'Ranged burst large adds from the bubble edge. Melee kill small adds inside — your damage transfers to the large spawns, so stay inside and cleave. Do not step outside the bubble on Heroic.' },
        ],
      },
      {
        phase: 'Rook\'s Desperate Measures',
        points: [
          { icon: null, role: 'All', note: 'All DPS stop on bosses immediately. On Heroic all three Embodied adds share HP — stack Sorrow and Gloom in melee and cleave them together. Gloom\'s Corruption Shock is the #1 interrupt priority (~300k to target and nearby players). Sorrow\'s Infernal Strike requires the raid to stay stacked. Watch for Sun\'s Sha Sear overlapping — interrupt Sun halfway through or have the targeted player briefly step out.' },
          { icon: '🛡️', role: 'Tanks', note: 'Rook tank holds Sorrow and Gloom in the center — stack them for cleave. He tank picks up Embodied Misery and drags it to the side, away from the Sorrow/Gloom stack.' },
          { icon: '💚', role: 'Healers', note: 'Sorrow\'s split damage requires everyone topped before each cast. Resume the full dispel rotation the moment Rook re-enters — Bane and Garrote don\'t pause for DM phases.' },
          { icon: '⚔️', role: 'DPS', note: 'Interrupt Gloom\'s Corruption Shock on every single cast — highest-priority interrupt in the fight on Heroic. Stay stacked on Sorrow and Gloom to dilute Infernal Strike. Burn all three simultaneously since they share HP.' },
        ],
      },
      {
        phase: 'He\'s Desperate Measures',
        points: [
          { icon: null, role: 'All', note: 'Embodied Anguish fixates on the Mark of Anguish holder. The entire pre-assigned pass chain should be ready before this phase begins. Pass the mark 1-2 seconds before your cooldown expires. Do not pass to tanks — the 50% armor reduction lasts 2 minutes. Spread pass targets apart so Anguish\'s travel time creates brief windows between stack accumulations.' },
          { icon: '🛡️', role: 'Tanks', note: 'Neither tank should hold the mark — the 80% armor reduction debuff lasts 4 minutes and is incompatible with tanking. The first pass goes to the designated DPS chain lead.' },
          { icon: '💚', role: 'Healers', note: 'Heavy single-target healing on the current mark holder between passes. At 9-10 stacks the holder dies near-instantly when their defensive drops — the chain must pass in time. Continue Bane dispels through the chaos.' },
          { icon: '⚔️', role: 'DPS', note: 'Burn Embodied Anguish as fast as possible. Confirm your cooldown is available before the mark reaches you — announce \'ready\' when the previous holder is at 7-8 stacks. Use stronger defensives later in your hold duration, not at the start.' },
        ],
      },
      {
        phase: 'Final Burn — All Bosses Sub-10%',
        points: [
          { icon: null, role: 'All', note: 'Equalize all three bosses to approximately 10% HP before committing. Stack the raid, pop remaining cooldowns, and burn all three simultaneously. Any boss reaching 1 HP while another is still above begins the 20-second heal channel — miss the window and that boss heals for 30% max HP.' },
          { icon: '🛡️', role: 'Tanks', note: 'Hold all three bosses in a tight cluster for cleave. Rook tank: angle Rook\'s frontal outward from the group at all times.' },
          { icon: '💚', role: 'Healers', note: 'Save one major throughput CD for this window — Calamity is at peak escalation. Prioritize survival over dispels in the final 5 seconds.' },
          { icon: '⚔️', role: 'DPS', note: 'Throttle damage to keep all three within 1-2% of each other until the call to commit. Use every remaining offensive cooldown on commit.' },
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
        phase: 'He Softfoot',
        items: [
          { name: 'Garrote', important: true, desc: 'Shadow-steps behind a random player and applies a permanent stacking bleed for the rest of the fight. Only resets during He\'s DM phase.' },
          { name: 'Noxious Poison', desc: 'He\'s melee leaves persistent poison puddles on the ground. He tank must keep moving — never stand still in accumulated clouds.' },
          { name: 'DM — Mark of Anguish', important: true, desc: 'Heroic only. Applies 80% armor reduction for 4 minutes to the holder. Pass via the pre-assigned chain — never give to a tank.' },
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
    overview: 'A corruption-cleansing fight with a 7-minute hard enrage. Everyone starts at 75 Corruption. Enter the Purifying Light orb to take your individual trial — complete it and return cleansed. On Heroic, DPS cleanse 1-2 at a time rather than all at once, maintaining boss pressure between trial windows.',
    mechs: [
      { icon: '☣️', name: 'Corruption Bar', desc: 'Everyone starts at 75 Corruption. Higher Corruption = less damage to the boss (adds take full damage regardless). Click a golden Purifying Light orb to enter your private trial. Complete it and you return fully cleansed.' },
      { icon: '🧪', name: 'The Trials', desc: 'Tank: survive 1 minute — kick Hurl Corruption, dodge Titanic Smash cone, use defensives. Healer: keep 3 NPCs alive — dispel magic debuff immediately. DPS: kill the Manifestation first (it chases you), then the 4 Essences while dodging bolts. Don\'t touch Corruption orbs inside the trial.' },
      { icon: '🌀', name: 'Trial Add Releases', desc: 'Each creature killed inside a DPS trial releases a copy into the main realm. Kill them immediately — Manifestations need to be tanked and leave a Residual Corruption orb behind when killed that must be soaked.' },
      { icon: '⬛', name: 'Residual Corruption Orbs', important: true, desc: 'Dropped when any Unleashed Manifestation dies. Pulses Shadow damage every 3 seconds until soaked. +25 Corruption to the soaker — do it immediately. Tanks are the ideal soakers; the Corruption barely impacts their output.' },
      { icon: '🔁', name: 'Tank Swap — Self Doubt', desc: 'Stacking debuff on the current tank — each stack increases Unleashed Anger damage by 50%. Swap at up to 3 stacks; timing is often dictated by when the other tank finishes their trial.' },
      { icon: '🌀', name: 'Blind Hatred', desc: 'Slowly rotating corruption zone that sweeps the whole room dealing 400,000 Shadow damage per second. Run away from it.' },
    ],
    heroic: [
      'DPS cleanse 1-2 at a time rather than all at once — stay outside between trial windows to kill adds and maintain boss pressure.',
      '7-minute hard enrage. Lust when all DPS have been cleansed and major cooldowns align.',
      'Trial enemies hit significantly harder — use defensives properly inside.',
    ],
    lust: 'Wait until all DPS have been cleansed (Normal). On Heroic, lust when all DPS are cleansed and line up with major cooldowns.',
    diff: 2,
    roles: [
      { color: '#e8352a', label: 'Tanks', note: 'One on the boss at all times — swap at up to 3 Self Doubt stacks, timing dictated by when the other tank returns from their trial. Off-tank picks up all adds from completed trials and soaks Residual Corruption orbs. Both tanks still cleanse on Heroic — coordinate the handoff so the boss is always covered.' },
      { color: '#1db89a', label: 'Healers', note: 'Always cleanse — the +30% healing buff makes the back half survivable. Never leave zero healers outside simultaneously. Start rotating raid CDs (Barrier, Devotion Aura, Spirit Link) at ~40% as Icy Fear ramps hard.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Normal: follow the send order. If a Residual Corruption orb needs soaking right before your trial turn, soak it — the +25 Corruption gets cleansed anyway. Once cleansed, stay on the boss full-time. Heroic: cleanse 1-2 at a time as directed — kill adds and maintain boss pressure between windows.' },
    ],
    strat: [
      {
        phase: 'Trial Send Rotation',
        points: [
          { icon: null, role: 'All', note: 'On pull: send 2 DPS simultaneously. The first DPS kills their large add immediately and exits fast. The second DPS kills their large add last — staggering exits prevents a double-add wave from overwhelming the main realm. After both are back, send 1 DPS at a time until all DPS are cleansed.' },
          { icon: '⚔️', role: 'DPS', note: 'Before entering your trial, soak a Residual Corruption orb if one is available — you get cleansed in the trial anyway, so soaking saves a tank or uncleansed player from dealing with it.' },
          { icon: '💚', role: 'Healers', note: 'Go one at a time after the initial 2 DPS are done. Never leave zero healers in the main realm simultaneously.' },
          { icon: '🛡️', role: 'Tanks', note: 'First tank: hold the boss, accumulate 3 stacks of Self Doubt, soak an orb, then enter the trial. Once complete, the second tank begins theirs. Both tanks should be at low Corruption when the boss hits 50% — from that point use them as dedicated orb soakers.' },
        ],
      },
      {
        phase: 'Trial Realm — Individual Trials',
        points: [
          { icon: '🛡️', role: 'Tank Trial — Test of Confidence', note: 'Survive 1 full minute against the Titanic Corruption. Kick Hurl Corruption on every cast, dodge Titanic Smash\'s cone, and use defensives aggressively. The trial always takes the full minute — plan the swap window around this.' },
          { icon: '💚', role: 'Healer Trial — Test of Reliance', note: 'Defeat the Greater Corruption while keeping 3 NPC allies alive. Dispel Lingering Corruption the instant it lands. Move yourself and NPCs out of Pit of Despair. Keep NPCs above 50% HP.' },
          { icon: '⚔️', role: 'DPS Trial — Test of Serenity', note: 'Kill the Manifestation FIRST — it chases you and fires a shadow cone. DoT up the 4 Essences as it dies so they drop quickly. Dodge their straight-line Expel Corruption bolts while finishing them. Each creature killed releases a copy into the main realm.' },
        ],
      },
      {
        phase: 'Phase 1 — Main Realm & Trial Rotation',
        points: [
          { icon: null, role: 'All', note: 'The send rotation is the entire fight. Every player starts corrupted — partial damage from corrupted DPS is still better than zero, so keep attacking the boss. Do NOT touch Orbs of Corruption inside the trial — they add Corruption and cancel your cleanse.' },
          { icon: '🛡️', role: 'Tanks', note: 'One tank holds the boss at all times. Off-tank picks up all Manifestation and Essence adds from completed trials. Only enter the Trial Realm during a clean swap window — the co-tank must be ready to cover the full minute.' },
          { icon: '💚', role: 'Healers', note: 'Always cleanse. Never leave zero healers outside simultaneously. Track Blind Hatred — don\'t die to the rotating zone during a busy add wave.' },
          { icon: '⚔️', role: 'DPS', note: 'Normal: follow the send order. Once cleansed to 0 Corruption, go full-time on the boss. Heroic: cleanse 1-2 at a time — kill adds and maintain boss pressure between trial windows.' },
        ],
      },
      {
        phase: 'Sub-50% — Escalation & Burn',
        points: [
          { icon: null, role: 'All', note: 'At 50% and every 10% after, the boss spawns an extra Manifestation. Icy Fear ramps raidwide damage. Stay on the boss.' },
          { icon: '🛡️', role: 'Tanks', note: 'Pick up Manifestation spawns immediately at each 10% threshold. One tank is the designated orb soaker for this phase.' },
          { icon: '💚', role: 'Healers', note: 'Rotate major raid CDs (Barrier, Devotion Aura, Spirit Link) from ~40% onward. Do not hold them.' },
          { icon: '⚔️', role: 'DPS', note: 'Stay on the boss. Only swap to Manifestations if called. Orb soaking is the tanks\' job — never break boss uptime to soak sub-50%.' },
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
    overview: 'A pride management fight with two heroic-only additions: Rifts of Corruption (persistent ground rifts that fire bolts at players every few seconds) and Banishment (one player sent into a maze realm). Rift management is the hardest element — assign default positions around the boss so players are always in range to close the nearest rift. Keep Pride under 50, always dispel with Gift active, sprint to prisons instantly. At 30% all Pride resets — burn hard.',
    mechs: [
      { icon: '🌀', name: 'Swelling Pride', important: true, desc: 'Raid-wide damage + 5 Pride to all. Secondary effect based on current Pride: 25–49: ground marker — step out immediately. 50–74: run to shadow within 6 seconds. 75–99: spread — you pulse damage to nearby allies. 100: mind controlled permanently.' },
      { icon: '😤', name: 'Mark of Arrogance', important: true, desc: 'DoT on 2 players for the rest of the fight. Only dispel while Gift of the Titans is active.' },
      { icon: '⚡', name: 'Self-Reflection', desc: 'Adds spawn at up to 5 players\' feet and explode in a 2-yard radius after 2 seconds. Step away immediately. +5 Pride to anyone hit. The adds can be stunned and AoE\'d down.' },
      { icon: '🔒', name: 'Corrupted Prison', important: true, desc: '2 non-tank players imprisoned. +5 Pride per second until freed. Two players stand on orange lock runes simultaneously. Prison locks are always in the same location — preposition close to them.' },
      { icon: '👻', name: 'Manifestation of Pride', desc: 'Spawns on the west wall. Interrupt Mocking Blast. Kill with ranged. On death: Gift carriers step slightly closer to absorb Last Word with immunity.' },
      { icon: '🔴', name: 'Rifts of Corruption (Heroic)', important: true, desc: 'Spawns every 8 seconds — fires 350k + 5 Pride bolts. Close rifts by running over them (1-minute debuff after). The more rifts open, the harder the fight becomes.' },
      { icon: '🌀', name: 'Banishment (Heroic)', important: true, desc: 'One non-tank teleported into a maze. Auto-runs, can only steer. Avoid walls and patrolling minions (instant death). Collect orbs (+25% damage to Fragment). All DPS switch to Corrupted Fragment immediately.' },
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
      { color: '#1db89a', label: 'Healers', note: 'Dispel Mark of Arrogance only during Gift of the Titans. Stack within 8 yards of other Gift carriers for Power of the Titans.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Own a rift zone — close yours immediately on sight. 1–2 melee interrupt Manifestation of Pride every spawn. Gift carriers step slightly in on its death to absorb Last Word. All DPS switch to Corrupted Fragment the instant Banishment is called.' },
    ],
    strat: [
      {
        phase: 'Phase 1 — Pride Management (100% to 30%)',
        points: [
          { icon: null, role: 'All', note: 'Keep everyone under 50 Pride. Stack behind boss. Bursting Pride (step out) and Projection (run to shadow) are trivial if handled. Aura of Pride at 75+ means something went wrong. Return to default positions between mechanics.' },
          { icon: '🛡️', role: 'Tanks', note: 'Swap on Wounded Pride immediately. Both tanks cover their assigned prison locks. Close a rift when off-tanking and debuff-free.' },
          { icon: '💚', role: 'Healers', note: 'Watch for Gift of the Titans on raid frames — dispel Mark of Arrogance the moment it lands. Stack within 8 yards of other Gift carriers.' },
          { icon: '⚔️', role: 'DPS', note: 'Stay in your default rift zone. Close rifts immediately on spawn. One ranged interrupts Manifestation of Pride every spawn.' },
        ],
      },
      {
        phase: 'Rifts of Corruption Management',
        points: [
          { icon: null, role: 'All', note: 'Step on a rift to close it. The more rifts that are open, the harder the fight becomes — never let them pile up.' },
          { icon: '🛡️', role: 'Tanks', note: 'When not tanking and debuff-free, close rifts in your zone.' },
          { icon: '💚', role: 'Healers', note: 'Close rifts in your zone when debuff-free. Walking 10 yards to close a rift costs less than letting it fire bolts.' },
          { icon: '⚔️', role: 'DPS', note: 'Mobile players should try to close rifts that are further away. Never let a rift fire when you are debuff-free.' },
        ],
      },
      {
        phase: 'Banishment — Sha Realm',
        points: [
          { icon: null, role: 'All', note: 'Banished player enters the maze — auto-runs, steer only. Avoid walls and patrolling minions (instant death). Collect golden orbs (each adds +25% damage to your fragment). Outside: all DPS switch to the Corrupted Fragment immediately and return to the boss the instant it dies.' },
          { icon: '💚', role: 'Healers', note: 'Keep the raid topped before Banishment windows — the returning player may be low. No special role inside.' },
          { icon: '⚔️', role: 'DPS', note: 'Every DPS switches to Corrupted Fragment immediately. Return to the boss the instant it dies.' },
        ],
      },
      {
        phase: 'Corrupted Prison',
        points: [
          { icon: null, role: 'All', note: 'Two players imprisoned simultaneously. +5 Pride and ~108k damage per second inside — sprint to locks immediately. Boss AoE fires on prison activation — don\'t pre-stand on those locations. Prison locks are always in the same spots.' },
          { icon: '🛡️', role: 'Tanks', note: 'Each tank owns the lock nearest to them. Active tank takes the lock closest to the boss.' },
          { icon: '💚', role: 'Healers', note: 'Heavy single-target on imprisoned players.' },
          { icon: '⚔️', role: 'DPS', note: 'Two pre-assigned DPS own the raid-side locks. Sprint there on activation — no exceptions. Don\'t try to cover a prison and close a rift at the same time.' },
        ],
      },
      {
        phase: 'Sub-30% — Unleashed Burn',
        points: [
          { icon: null, role: 'All', note: 'Norushen dies, all Pride resets to 0, Unleashed ticks ~363k + 5 Pride every 10 sec. Bloodlust now. Kill the boss before the next Swelling Pride cycle.' },
          { icon: '💚', role: 'Healers', note: 'Dispel Mark of Arrogance freely — no Gift requirement. Assign a throughput cooldown for Unleashed ticks.' },
          { icon: '⚔️', role: 'DPS', note: 'Full cooldowns. Keep closing rifts — they keep spawning. Don\'t die to a bolt this close to a kill.' },
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
    overview: 'A two-phase fight. Phase 1 is an extended split-team add gauntlet: the ground team defends NPC faction leaders while a tower team clears two towers to unlock anti-air turrets. Shooting Galakras with both turrets simultaneously triggers Phase 2 — a straightforward burn with a soft enrage. The difficulty is Phase 1 pacing: kill priorities on the ground are strict, Drake Fire ramps the longer the tower takes, and on Heroic the Demolitionist NPCs must be protected or the towers never open.',
    mechs: [
      { icon: '🔥', name: 'Drake Fire', desc: 'Proto-drakes target random ground players for ~150k fire damage to anyone within 5 yards, climbing 10% every cast. Spread 5+ yards at all times — cannot be dodged, only healed through.' },
      { icon: '🧨', name: 'Healing Tide Totem', important: true, desc: 'Tidal Shamans drop a totem healing nearby enemies 10–20% HP every 3 seconds. Kill it instantly on spawn — #1 ground priority every wave.' },
      { icon: '🛡️', name: 'Bonecrusher — Fracture', important: true, desc: 'Charges a faction leader NPC and deals 10% of their HP per second. Stun it the instant it charges — leader death resets the encounter.' },
      { icon: '⚔️', name: 'Crusher\'s Call', desc: 'Thranok grips 5 players to him then immediately follows with a 1M+ AoE stomp to all within 10 yards. Move out the moment you land.' },
      { icon: '🌊', name: 'Flames of Galakrond', desc: 'Orb targets a random player — explodes for up to 900k but reduced by each player it passes through. Targeted player steps behind the raid cluster.' },
    ],
    heroic: [
      'Demolitionists: friendly NPCs that open the towers are attacked by enemy Grunts. Assign 1-2 DPS + 1 healer to protect them — if they die, the tower timer restarts.',
      'Drake Fire ramps hard — stagger healer and DPS defensive cooldowns across Phase 1.',
      'Add waves overlap because mobs have significantly more HP.',
    ],
    lust: 'Start of Phase 2 (or hold for ~40% if Pulsing Flames is escalating hard).',
    diff: 2,
    roles: [
      { color: '#e8352a', label: 'Ground Tank', note: 'Call every Bonecrusher charge on comms so stuns are ready. Keep Thranok away from the raid for Shattering Strike. Face Thranok away from the raid.' },
      { color: '#e8352a', label: 'Tower Tank', note: 'Run up the tower the moment it opens. Pull all mobs to the top for cleave. Once clear, get in the gun to shoot down drakes. Click the rope to descend faster. Before tower 2 clears, call for a ground DPS to climb tower 1 to start Phase 2.' },
      { color: '#1db89a', label: 'Healers', note: 'Split one per team. Ground healer staggers Drake Fire CDs across Phase 1. Both healers full throughput for Phase 2 Pulsing Flames.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Ground: kill priority — Totem > Shaman > Bonecrusher > Flagbearer. Stay spread 5+ yards. Tower: train mobs to the top and cleave. Return for Phase 2.' },
    ],
    strat: [
      {
        phase: 'Phase 1 — Ground Team',
        points: [
          { icon: null, role: 'All', note: 'Stay at or behind the NPC line — mobs path to the nearest player and walk into Aethas\'s Flamestrike. Spread 5+ yards at all times for Drake Fire. Kill priority every wave: Totem (instant on spawn) → Shaman (interrupt all heals) → Bonecrusher (stun every charge) → Flagbearer → everything else.' },
          { icon: '🛡️', role: 'Ground Tank', note: 'Face Thranok away from the raid. Call every Bonecrusher charge so stuns are ready. Help kill banners and totems.' },
          { icon: '💚', role: 'Healers', note: 'Ground healer: stagger defensive cooldowns around Drake Fire escalation windows — the first tower phase is the most dangerous.' },
          { icon: '⚔️', role: 'DPS', note: 'Kill priority without exception. Two waves overlapping means two Shamans — split interrupts explicitly.' },
        ],
      },
      {
        phase: 'Phase 1 — Tower Team',
        points: [
          { icon: null, role: 'All', note: 'Wait at the tower entrance until the door opens. Run straight to the top — tank pulls all mobs for AoE at the top. Kill Flameslingers first. Kill the mini-boss. Avoid the frontal smash. Be ready for the demolisher to stun you.' },
          { icon: '🛡️', role: 'Tower Tank', note: 'Pull all mobs to the top for cleave. Once clear, get in the gun to shoot down drakes. Click the rope to descend faster. Before tower 2 clears, call for a ground DPS to climb tower 1 in preparation to shoot down the boss.' },
          { icon: '💚', role: 'Healers', note: 'Tower healer: be ready for everyone taking damage and getting stunned by the demolisher.' },
          { icon: '⚔️', role: 'Tower DPS', note: 'AoE mobs at the summit. Prioritize Flameslingers first. Once clear, drop back down to rejoin the ground team.' },
        ],
      },
      {
        phase: 'Phase 1 — Heroic: Demolitionist Protection',
        points: [
          { icon: null, role: 'All', note: 'Demolitionists open the towers but are attacked by enemy Grunts every ~60 sec. 1-2 assigned range DPS and one healer cover them. Grunts cannot be taunted reliably — burst them down with roots and direct DPS.' },
          { icon: '💚', role: 'Healers', note: 'Monitor Demolitionist HP. Heal them if they dip below ~50% — brief detour, return immediately.' },
          { icon: '⚔️', role: 'DPS', note: 'Assigned DPS kills the Grunt as fast as possible — use roots to slow it. Once dead, return to ground kill priority immediately.' },
        ],
      },
      {
        phase: 'Phase 2 — Flames of Galakrond Positioning',
        points: [
          { icon: null, role: 'All', note: 'Split into two groups of 4–5 behind the boss (left and right markers). Use a strict alternating rotation every 3 casts — first 3 targeted players go to the right extension marker, next 3 to the left, repeat. The 15-second DoT expires in exactly 3 casts, so this rotation automatically caps stacks.' },
          { icon: '🛡️', role: 'Tanks', note: 'Active tank holds Galakras at the front point of the triangle. Swap on the stacking fire debuff. Active tank does not need to move to extension markers — their forward position means the orb passes through both groups. Off-tank stays to the side to let the debuff drop.' },
          { icon: '💚', role: 'Healers', note: 'Keep AoE heals positioned to cover both groups — keep the triangle tight enough that AoE heals reach everyone. Save at least one major raid CD for 40%+ when Pulsing Flames escalation and orb frequency converge.' },
          { icon: '⚔️', role: 'DPS', note: 'The moment you are targeted, run directly to whichever extension marker is active for this set of 3 casts — do not wait for DBM. Ranged: the rotation still applies. Everyone goes to the same side for the current set of 3, then switches.' },
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
    overview: 'Two alternating phases on a roughly 2-minute Assault / 1-minute Siege loop. Assault Phase is the only DPS window. The recommended Siege strategy is to let Shock Pulse knock the entire raid into the far corner, out-ranging Mortar Barrage for the rest of the phase. This means zero boss DPS in Siege — maximize every Assault window.',
    mechs: [
      { icon: '🔥', name: 'Flame Vents', desc: 'Frontal cone on the current tank. Applies a stacking fire DoT (Ignite Armor). Swap rotation is 2-3-3-3: swap at 2 stacks on the first set, then at 3 stacks every set after.' },
      { icon: '💣', name: 'Crawler Mines', important: true, desc: 'Three mines spawn every ~30 seconds and arm after 15 seconds. All three detonating freely is near-fatal. Off-tank soaks two per set; pre-assigned DPS backup handles the third. On Heroic each stomp hits ~1.5M physical — a cooldown is required every time.' },
      { icon: '🌀', name: 'Ricochet (Heroic)', desc: 'A sawblade arcs in a triangle between two ranged players. Sidestep the moment you see it launch — it targets your position at cast time. Zoom camera out to track it.' },
      { icon: '💥', name: 'Shock Pulse — Siege', important: true, desc: 'Knocks the entire raid ~60–80 yards. Stack in melee range just before the cast so everyone lands in the far corner together. Three occur per Siege Phase — assign the CD rotation before the pull.' },
      { icon: '🔴', name: 'Cutter Laser — Siege', desc: 'Chases a targeted player. Kite along the outer wall. Never cross an Explosive Tar puddle — contact triggers a ~500k raid-wide explosion.' },
    ],
    heroic: [
      'Ricochet: spinning sawblade arcs toward two ranged players every ~15 seconds. Spread ranged loosely and sidestep at launch.',
      'Mortar Barrage: replaces Mortar Cannon in Siege Phase. Out-range it by letting Shock Pulse knock you to the far corner.',
      'Crawler Mine stomps hit ~1.5M physical — soakers need a dedicated cooldown every single time.',
      'Enrage is tight because Siege Phase is zero DPS. Every Assault window must be fully maximized.',
    ],
    lust: 'On pull — the first Assault Phase is the longest uninterrupted DPS window of the fight.',
    diff: 2,
    roles: [
      { color: '#e8352a', label: 'Tanks', note: 'Swap rotation is 2-3-3-3 Flame Vents stacks (2 on first set, 3 every set after). Off-tank is primary mine soaker. Both tanks stack with the raid before every Shock Pulse.' },
      { color: '#1db89a', label: 'Healers', note: '3 healers required. Assault Phase is light. Siege Phase is heavy — assign a raid cooldown to each of the three Shock Pulses before the pull.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Spread ranged loosely for Ricochet — sidestep at launch. Pre-assign one backup mine soaker with a personal cooldown. Full DPS every Assault Phase; no DPS in Siege is expected.' },
    ],
    strat: [
      {
        phase: 'Assault Phase',
        points: [
          { icon: null, role: 'All', note: 'Stay loosely spread — Borer Drill cracks ripple toward player positions and Ricochet arcs between ranged targets. This is the only DPS window — treat every second as damage on the boss.' },
          { icon: '🛡️', role: 'Tanks', note: 'Active tank holds boss center. Swap at 2 stacks first Flame Vents, then 3 stacks every set after. Off-tank covers mine soaking after swap.' },
          { icon: '💚', role: 'Healers', note: 'Light phase — top everyone and conserve mana for Siege. Pre-heal soakers between mine stomps; they land near death and the next mine may be seconds away.' },
          { icon: '⚔️', role: 'DPS', note: 'Spread loosely. Sidestep 2–3 steps when Ricochet fires — it targets your position at launch. Backup soaker watches the off-tank; step in on the third mine if their cooldowns are spent.' },
        ],
      },
      {
        phase: 'Crawler Mine Soaking',
        points: [
          { icon: null, role: 'All', note: 'Three mines arm after 15 seconds. Goal: zero free detonations. Off-tank soaks two, backup DPS handles the third. Stomp the mine closest to the boss first. On Heroic each stomp is ~1.5M physical — a dedicated cooldown is required every time.' },
          { icon: '🛡️', role: 'Tanks', note: 'Off-tank is primary soaker every set. If cooldowns are spent, call for the backup before mines arm — do not wait until the last second.' },
          { icon: '💚', role: 'Healers', note: 'Queue a large heal at the moment the soaker stomps — not after they land. They hit the ground near death.' },
          { icon: '⚔️', role: 'DPS', note: 'Backup soaker is pre-assigned before pull. Use your major defensive, stomp, and call \'mine soaked\'. Never stomp without a cooldown on Heroic.' },
        ],
      },
      {
        phase: 'Siege Phase — Shock Pulse Strategy',
        points: [
          { icon: null, role: 'All', note: 'Stack the entire raid in melee range just before Shock Pulse — the knockback sends everyone to the far corner together. Stay there for the full Siege Phase. At that range Mortar Barrage cannot reach you. Zero boss DPS this phase — expected.' },
          { icon: '🛡️', role: 'Tanks', note: 'Both tanks stack with the raid before Shock Pulse. Pre-assign three raid cooldowns (one per Pulse) before the pull.' },
          { icon: '💚', role: 'Healers', note: 'Use your assigned raid cooldown immediately when each Pulse lands. Top the raid fully between Pulses — Seismic Activity ticks constantly.' },
          { icon: '⚔️', role: 'DPS', note: 'Stack before Shock Pulse. In the corner: mine management and laser kiting only. Kite Cutter Laser along the wall away from tar patches.' },
        ],
      },
      {
        phase: 'Siege Phase — Ongoing Mechanics',
        points: [
          { icon: null, role: 'All', note: 'Active threats from the corner: Seismic Activity on everyone, three Shock Pulses, Cutter Laser, mines, and Demolisher Cannon chip. Note tar locations so the laser kiter has a clear path. Phase ends when boss drains energy — re-engage immediately.' },
          { icon: '🛡️', role: 'Tanks', note: 'Free from the boss — split the three mines between both tanks. Neither needs a major cooldown if load is shared.' },
          { icon: '💚', role: 'Healers', note: 'Seismic Activity is constant damage on everyone. Keep raid topped between Pulses — don\'t tunnel one player.' },
          { icon: '⚔️', role: 'DPS', note: 'No boss DPS. Stay alive, call laser kite paths, assist mine awareness. Re-engage the instant Assault Phase resumes.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Assault Mode',
        items: [
          { name: 'Flame Vents', important: true, desc: 'Frontal cone dealing heavy Fire damage to the current tank. Applies Ignite Armor: +10% Fire damage taken. Stacks. Swap rotation: 2 stacks on first set, 3 stacks every set after.' },
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
    overview: 'Hard split: two tanks and two healers take Haromm north to the far end of the room; one tank, one healer, and all DPS fight Kardris in the main area. Bosses share health. Kill wolves before pushing either boss below 85%. At 25%, both bosses gain Blood Frenzy — burn hard.',
    mechs: [
      { icon: '🐺', name: 'Kill Wolves First', important: true, desc: 'Kill Darkfang and Bloodclaw before the bosses reach 85%. Both wolves have a stacking bleed and a frontal cleave — face them away from the raid. Once dead, split the groups permanently.' },
      { icon: '⚰️', name: 'Iron Tomb (Haromm — Heroic)', desc: 'Ground markers appear under players. Step out immediately — the tomb erupts for ~500k physical and creates a permanent terrain obstacle. Push them to the walls to preserve the kite path.' },
      { icon: '🔒', name: 'Iron Prison (Kardris — Heroic)', important: true, desc: 'Debuff on a random non-tank player that kills them when it expires (100% max HP). Lasts 60 seconds — use a personal defensive just before the 60-second mark. Every player in the Kardris group needs a plan for every Prison application.' },
      { icon: '🧊', name: 'Froststorm Strike (Haromm)', desc: 'Stacking tank debuff — each stack increases Froststorm damage by 25%. Swap at 5–6 stacks. Heroic: Haromm does NOT reset his melee swing timer on the strike, so a melee hit and a strike can land simultaneously — start using cooldowns at 4 stacks, don\'t wait.' },
      { icon: '🌊', name: 'Foul Geyser + Slimes (Kardris — 65%)', important: true, desc: 'Kardris channels projectiles at the tank for 8 seconds — tank must keep moving. Each projectile that lands spawns a Foul Slime with a heavy Nature damage aura within 3 yards. All DPS immediately burn every slime. Ranged kills them from range — melee cannot be near them.' },
      { icon: '🔥', name: 'Falling Ash (Kardris — 50%)', important: true, desc: 'Massive red circle detonates for ~1M fire inside, ~480k to the entire raid outside. Haromm group must use personal cooldowns when called. Overlapping with Toxic Mist or Iron Prison expiry is lethal.' },
    ],
    heroic: [
      'Hard split is mandatory.',
      'Iron Prison fires every 30 seconds. Every DPS and the healer need their own personal cooldown plan — don\'t rely on externals for every cast.',
      'Toxic Mist (Haromm) ramps to 3–400k per tick late in the duration. Paladin Purity on a 30-second cooldown is extremely valuable.',
      'Falling Ash hits the entire raid even when split — the Haromm group must be warned on comms so they use a personal cooldown.',
    ],
    lust: 'Sub-25% — both bosses gain Blood Frenzy. Pop immediately and kill before the damage becomes unmanageable.',
    diff: 3,
    roles: [
      { color: '#e8352a', label: 'Tanks 1 & 2 — Haromm', note: 'Both tanks swap back and forth on Froststorm Strike stacks. Start using defensives at 4 stacks; swap at 5–6. The simultaneous melee+strike combo can be lethal at high stacks. Keep Haromm moving to push Iron Tomb obstacles toward the walls.' },
      { color: '#e8352a', label: 'Tank 3 — Kardris', note: 'Move during Foul Geyser in a tight circle — keep spawns clustered so ranged can AoE from one position. Step away from the group so slime spawns don\'t overlap melee. Handle Froststorm Bolt spike damage with personal cooldowns.' },
      { color: '#1db89a', label: 'Healers (Haromm side — 2)', note: 'The harder healing assignment. Toxic Mist targets both healers if no other non-tank, non-melee players are present. Paladin with Purity on cooldown is extremely valuable. Call out Falling Ash to the Kardris group via comms.' },
      { color: '#1db89a', label: 'Healer (Kardris side — 1)', note: 'Track Iron Prison timers on all players. Call out Falling Ash on comms immediately. Provide an external CD for any player near expiry who lacks a personal defensive.' },
      { color: '#2e8fdf', label: 'DPS (all on Kardris)', note: 'Kill Foul Slimes the instant they spawn — top priority, no exceptions. Every DPS has their own Iron Prison cooldown plan. Ranged preferred.' },
    ],
    strat: [
      {
        phase: 'Setup — Pull and Wolf Kill',
        points: [
          { icon: null, role: 'All', note: 'All 10 start together. Cleave wolves down before either boss reaches 85% — killing wolves before that threshold prevents Heroic totems while adds are still alive. Don\'t AoE wolves faster than you can control them.' },
          { icon: '🛡️', role: 'Tanks', note: 'Face wolves away from the raid — both have frontal cleaves and stacking bleeds.' },
          { icon: '⚔️', role: 'DPS', note: 'Cleave wolves with the bosses. Don\'t push either boss past 85% before wolves are dead. Once wolves die, stop attacking and wait for the split.' },
        ],
      },
      {
        phase: 'The Split — Separating the Groups',
        points: [
          { icon: null, role: 'All', note: 'Haromm team (T1, T2, H1, H2) kites Haromm north past the closed gate. Kardris team (T3, H3, all DPS) holds Kardris in the lower area near the bank. Goal: 100+ yards of separation. Place markers at the boundary before the pull.' },
          { icon: '🛡️', role: 'Tanks', note: 'Haromm tanks: pull to the back wall of the northern path. Kardris tank: hold near the bank; move only for Foul Geyser.' },
          { icon: '💚', role: 'Healers', note: 'Haromm healers stay behind the tanks. Call \'Falling Ash incoming\' on comms when you see it — the Haromm group cannot see the circle and needs a verbal warning.' },
          { icon: '⚔️', role: 'DPS', note: 'Stay with Kardris the entire fight. All DPS focus Kardris — damage transfers to shared HP. Do not wander toward the Haromm area.' },
        ],
      },
      {
        phase: 'Haromm Group — Ongoing Management',
        points: [
          { icon: null, role: 'All', note: 'Primary threats: Toxic Mist ramp damage, Iron Tomb obstacles, and Ashen Wall positioning. When the wall spawns, stop moving to let it form horizontally — then step aside. Push tomb obstacles to the outer corridor edges.' },
          { icon: '🛡️', role: 'Tanks', note: 'Swap on Froststorm Strike at 5–6 stacks; use cooldowns at 4 stacks. A simultaneous melee swing + strike at high stacks can be near-lethal. Stop and let Ashen Wall form before moving around it.' },
          { icon: '💚', role: 'Healers', note: 'Both healers always get Toxic Mist. Paladin: keep Purity on cooldown for the dangerous final ticks. Use personal cooldowns when Foul Stream hits during active Mist.' },
        ],
      },
      {
        phase: 'Kardris Group — Ongoing Management',
        points: [
          { icon: null, role: 'All', note: 'Primary threats: Iron Prison timing and Foul Slime cleanup. Stack together during normal phases for efficient healing.' },
          { icon: '🛡️', role: 'Tank', note: 'During Foul Geyser, move Kardris in a tight circle — keep spawns clustered so ranged DPS can AoE them from one position.' },
          { icon: '💚', role: 'Healer', note: 'Track Iron Prison timers. Call out Falling Ash on comms immediately. Provide an external CD for any player near expiry who lacks a personal defensive.' },
          { icon: '⚔️', role: 'DPS', note: 'Foul Slimes are #1 priority — stop boss DPS until every slime is dead. Ranged takes point on cleanup. Know your Iron Prison cooldown plan before the pull.' },
        ],
      },
      {
        phase: 'Sub-25% — Blood Frenzy Burn',
        points: [
          { icon: null, role: 'All', note: 'Both bosses gain +25% damage and haste. Pop Bloodlust and all remaining cooldowns. Haromm group is hardest here — tank damage spikes and Mist ticks faster.' },
          { icon: '🛡️', role: 'Tanks', note: 'All cooldowns on the table. Haromm tanks may need to swap at 4–5 stacks instead of 6 due to haste.' },
          { icon: '💚', role: 'Healers', note: 'Haromm: keep tanks topped — don\'t let Mist ride on a low-health player into a Froststorm cast. Kardris: externals freely — Iron Prison expiry + Foul Stream + Falling Ash on the same player is lethal.' },
          { icon: '⚔️', role: 'DPS', note: 'Full cooldowns. Slime discipline stays — Blood Frenzy makes slimes more dangerous, not less.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Shared',
        items: [
          { name: 'Froststorm Strike', important: true, desc: 'Stacking tank debuff. Swap at 5–6 stacks. Each stack increases Froststorm damage by 25%. Heroic: melee swing and strike can land simultaneously — use cooldowns at 4 stacks.' },
          { name: 'Blood Frenzy (sub-25%)', important: true, desc: 'Both bosses gain +25% damage and haste. Pop Bloodlust immediately.' },
        ],
      },
      {
        phase: 'Heroic-Only',
        items: [
          { name: 'Iron Prison (Kardris)', important: true, desc: '60-second debuff that kills the target on expiry for 100% max HP. Use a personal defensive just before the mark expires.' },
          { name: 'Iron Tomb (Haromm)', desc: 'Permanent terrain obstacles that accumulate throughout the fight. Step out immediately; push them to the walls.' },
          { name: 'Foul Geyser + Slimes (Kardris — 65%)', important: true, desc: 'Tank channels projectiles at the tank for 8 seconds. Each landed projectile spawns a Foul Slime with a heavy Nature aura within 3 yards. All DPS burn slimes from range immediately.' },
          { name: 'Falling Ash (Kardris — 50%)', important: true, desc: '~1M fire inside the circle, ~480k raid-wide outside. Haromm group must use personal cooldowns on every cast.' },
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
    overview: 'A rage management fight. Nazgrim cycles through three stances in a fixed order: Battle → Berserker → Defensive. Keep his Rage as low as possible by handling Sundering Blow swaps cleanly, destroying Banners fast, and going completely cold during Defensive Stance. On Heroic, add waves start at 3 and grow — add handling is the primary execution challenge.',
    mechs: [
      { icon: '🛡️', name: 'Defensive Stance — Full Stop', important: true, desc: 'Every hit (except the debuffed tank) gives Nazgrim 3 Rage. All DPS stops the instant the stance is called. Kill adds, destroy Banners, do nothing to the boss.' },
      { icon: '⚔️', name: 'Berserker Stance — Cooldown Window', desc: 'Nazgrim takes 25% more damage — pop DPS cooldowns here. He also generates 100% more Rage from abilities.' },
      { icon: '🗡️', name: 'Sundering Blow — Swap at 3', important: true, desc: 'Unavoidable 5 Rage per cast, plus 5 per existing stack. Swap at exactly 3 stacks — a 4th stack costs 20 Rage (40 in Berserker).' },
      { icon: '🚩', name: 'Kor\'kron Banner — Instant Priority', important: true, desc: 'Costs him 50 Rage to place, but pays for itself immediately if left up — every add attack through it gives 3 Rage. Assign one DPS to destroy it the second it spawns.' },
      { icon: '🧙', name: 'Add Kill Priority', desc: 'Warshaman first (totem heals can undo the entire kill). Arcweaver second (interrupt every cast). Assassin third (face it, never turn your back). Sniper: targeted healer runs behind it. Iron Blade: lowest priority, tank and cleave.' },
    ],
    heroic: [
      'Execute: 3M physical hit on the current tank. Use a minor mitigation cooldown — cannot be dodged, blocked, or parried.',
      'Kor\'kron Snipers added to add waves. The targeted healer runs behind the Sniper so Multi-Shot fires into the wall.',
      'Add waves start at 3 and grow over the fight.',
    ],
    lust: 'Just before the 10% burn — ideally entering a Battle or Berserker Stance window with no adds alive.',
    diff: 2,
    roles: [
      { color: '#e8352a', label: 'Tanks', note: 'Call stance changes on voice so the raid stops instantly. Swap Sundering Blow at exactly 3 stacks — never 4. The debuffed tank is the only player who can hit the boss in Defensive Stance.' },
      { color: '#1db89a', label: 'Healers', note: 'Berserker Stance spikes — pre-HoT the tank before Execute lands. If targeted by a Sniper, break position immediately and run behind it. Keep yourself alive while the raid handles other adds.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Absolute stop on Nazgrim the instant Defensive Stance is called. Own an interrupt for Arcweavers. One DPS permanently assigned to the Banner.' },
    ],
    strat: [
      {
        phase: 'General — Stance Rotation',
        points: [
          { icon: null, role: 'All', note: 'Stances cycle: Battle → Berserker → Defensive. Battle: standard DPS. Berserker: pop cooldowns, he deals and takes 25% more. Defensive: full stop on the boss — adds, Banner, nothing else.' },
          { icon: '🛡️', role: 'Tanks', note: 'Swap at exactly 3 Sundering Blow stacks — call it on voice. The debuffed tank is the only player who can hit the boss in Defensive Stance. Both tanks stay central to reach adds quickly.' },
          { icon: '💚', role: 'Healers', note: 'Light in Battle. Berserker = tank spike window — throughput ready. Defensive is your reset; top the raid.' },
          { icon: '⚔️', role: 'DPS', note: 'Battle and Berserker: maximize boss uptime between add spawns. Defensive: stop hitting the boss. Cleave adds, destroy the Banner. Save DPS cooldowns for Berserker windows.' },
        ],
      },
      {
        phase: 'Rage Abilities',
        points: [
          { icon: null, role: 'All', note: 'Keep Rage below 70 (no War Song) and absolutely below 100 (no Ravager). Key levers: dodge Shockwave Aftershocks (each player hit = 3 Rage), destroy Banner within 3 seconds, and swap tanks cleanly at 3 stacks.' },
          { icon: '⚔️', role: 'DPS', note: 'Shockwave: dodge the Aftershock cracks — each player hit gives 3 Rage. Banner: destroy within 3 seconds — one DPS permanently owns this role. War Song (70 Rage): unavoidable 65% max HP — use personal cooldowns. Ravager (100 Rage): permanent spinning axe, never reach 100.' },
          { icon: '🛡️', role: 'Tanks', note: 'Sundering Blow is the primary Rage generator. Late swaps (4+ stacks) are the most common cause of unexpected Ravager spawns, especially doubled in Berserker Stance.' },
        ],
      },
      {
        phase: 'Add Handling',
        points: [
          { icon: null, role: 'All', note: 'Tank Nazgrim facing the door with the raid between boss and spawn point. Kill priority: Warshaman → Arcweaver → Assassin → Sniper → Iron Blade. Stuns and slows work on all types.' },
          { icon: '🛡️', role: 'Tanks', note: 'Off-tank picks up Iron Blades and any loose adds. Keep Warshamans away from Nazgrim — a totem next to the boss heals him faster than the raid can DPS.' },
          { icon: '💚', role: 'Healers', note: 'If targeted by a Sniper: get Hunter\'s Mark, run behind the Sniper so it faces the wall. Multi-Shot then only hits you. Focus on keeping yourself alive; let your co-healer cover the raid.' },
          { icon: '⚔️', role: 'DPS', note: 'Arcweavers: 2 dedicated interrupters, locked out at all times. Warshamans: 1 DPS owns them. Assassins: fixated player always faces it, never turns away. Iron Blades: ignore until everything else is dead.' },
        ],
      },
      {
        phase: '10% Burn',
        points: [
          { icon: null, role: 'All', note: 'At 13–15%, clean up active adds and prep the raid. Time the burn for just after a Defensive Stance. At 10% a full wave of all 5 add types spawns. Pop Bloodlust and burn.' },
          { icon: '🛡️', role: 'Tanks', note: 'At ~11–12%, reposition Nazgrim all the way back to the door — the 10% wave spawns behind the raid and never reaches the boss. The off-tank meets the add wave and picks everything up solo — especially the Warshaman.' },
          { icon: '💚', role: 'Healers', note: 'The off-tank is alone holding a full add wave — priority heal target. Split coverage between both tanks.' },
          { icon: '⚔️', role: 'DPS', note: 'All DPS to Nazgrim at the door. Trust the off-tank on adds. If the Warshaman breaks free near the boss, call it immediately.' },
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
    overview: 'Two alternating phases. Phase 1 (~2 minutes): Ancient Miasma is active — healers build shields, not health. Three Imploding Energy circles spawn every ~20 seconds and must each be soaked by exactly one player. After two cycles Malkorok reaches 100 Rage and enters Blood Rage. Phase 2 (~20 seconds): Miasma drops, healing works normally, entire raid stacks in front to split the 6.7M cleave. Phase 1 resumes with +25% more damage on the boss. Hard 6-minute enrage.',
    mechs: [
      { icon: '🛡️', name: 'Ancient Miasma', important: true, desc: 'All healing replaced by absorption shields for Phase 1. Direct heals are completely wasted — healers must use absorbs and shields only. Miasma also ticks ~22k Shadow every 2 seconds, so shields drain even when nothing is hitting you.' },
      { icon: '🔵', name: 'Imploding Energy Soak', important: true, desc: 'Three circles spawn every ~20 seconds. Each must be soaked by exactly one player — zero soaks = ~700k raid-wide. Never double up. Assign quadrant ownership before the pull so coverage is automatic.' },
      { icon: '🌪️', name: 'Arcing Smash + Breath of Y\'Shaarj', important: true, desc: 'Malkorok does three Arcing Smash cones (~810k Physical), then the three cone areas re-explode for ~1.6M Shadow with no warning animation. Mark each smash location with a raid marker as it lands — never stand where a smash hit.' },
      { icon: '🌑', name: 'Essence of Y\'Shaarj Orbs (Heroic)', important: true, desc: 'Persistent orbs on the ground that instantly destroy your shield on contact — then deals 150k Shadow directly to health. The room fills over time. Never stand still for long; do not walk through clusters.' },
      { icon: '👾', name: 'Living Corruption Add (Heroic)', desc: 'Spawned by Seismic Slam. Pull to center immediately — its movement and cast speed aura will cripple ranged players and prevent them from reaching Imploding Energy circles in time.' },
      { icon: '💀', name: 'Blood Rage — Phase 2', important: true, desc: 'At 100 Rage, Miasma drops and the boss melees for 6.7M Physical split among all players in front. Entire raid stacks facing the boss and uses major cooldowns. After ~20 seconds Miasma reapplies with a 4-second grace window — use a healing CD here to top shields.' },
    ],
    heroic: [
      'Orbs (Essence of Y\'Shaarj) spawn constantly at ranged positions — the room fills over time. Immunity users clear clusters during Blood Rage.',
      'Living Corruption adds spawn on every Seismic Slam — taunt to center immediately or the slow aura blocks puddle soakers.',
      'Displaced Energy now roots its targets in place. Dispel immediately once the stack is formed.',
      'Run 2 healers. The DPS check is tight at 6 minutes and healing demand in Phase 1 is low since shields do the work.',
    ],
    lust: 'On pull — maximizes shield-stacking efficiency before Relentless Assault stacks accumulate.',
    diff: 3,
    roles: [
      { color: '#e8352a', label: 'Tanks', note: 'Swap on Fatal Strike — off-tank must have a shield before taunting. Rotate all major cooldowns for the 20-second Blood Rage window. Taunt Living Corruption adds to center on every Seismic Slam.' },
      { color: '#1db89a', label: 'Healers', note: 'Phase 1: shields and absorbs only — PW:Shield, Earthen Shield Totem, mastery procs. Phase 2 transition: use a throughput cooldown in the 4-second grace window to top all shields before Miasma reapplies. Dispel Displaced Energy immediately once the stack is formed.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Own a quadrant for Imploding Energy — cover yours every spawn, use a personal defensive when soaking. Never touch orbs. During Blood Rage: immunity users clear orbs. Ranged stay spread enough that orbs don\'t block movement lanes.' },
    ],
    strat: [
      {
        phase: 'Phase 1 — Ancient Miasma',
        points: [
          { icon: null, role: 'All', note: 'Spread in pre-assigned quadrants. Use raid markers to track each Arcing Smash so the raid knows where Breath will re-explode. Keep moving slightly to avoid standing on orbs — but stay in quadrant to react to your Imploding Energy circle.' },
          { icon: '🛡️', role: 'Tanks', note: 'Face boss away from raid at all times. Swap around 10–15 Fatal Strike stacks — off-tank must have a shield before taunting. Immediately taunt Living Corruption adds to center on every Seismic Slam. Save major cooldowns for Blood Rage.' },
          { icon: '💚', role: 'Healers', note: 'Phase 1 is shields only — PW:Shield, absorbs, mastery procs. Track shield tiers on raid frames. Priority: red-tier players and anyone about to soak a circle.' },
          { icon: '⚔️', role: 'DPS', note: 'Stay in your quadrant. Soak your Imploding Energy circle immediately with a personal defensive. Sidestep Arcing Smashes and remember their locations. Keep moving to prevent orbs from boxing you in.' },
        ],
      },
      {
        phase: 'Breath of Y\'Shaarj — Safe Spot',
        points: [
          { icon: null, role: 'All', note: 'After the third Arcing Smash, the three marked cone areas re-explode for ~1.6M Shadow with no warning animation. Find the gap between markers and stand there. If caught out of position, use a large personal defensive.' },
        ],
      },
      {
        phase: 'Blood Rage (Phase 2) — Stack',
        points: [
          { icon: null, role: 'All', note: 'Stack immediately in front of the boss — each hit is 6.7M split among all players. Healing works normally. Pop major healing throughput cooldowns. After Blood Rage (~20 sec), 4-second grace window before Miasma reapplies — top actual health before shields take over.' },
          { icon: '🛡️', role: 'Tanks', note: 'Rotate full defensive suite for the 20 seconds. Keep the boss stationary. Call for externals if Fatal Strike stacks are high.' },
          { icon: '💚', role: 'Healers', note: 'Full throughput — Tranquility, Revival, Spirit Link all go here. Dispel Displaced Energy the moment the stack is formed; on Heroic it roots, so don\'t wait for targets to run out.' },
          { icon: '⚔️', role: 'DPS', note: 'Stack immediately. Immunity users clear orbs during this phase to reduce clutter in Phase 1. Return to stack once done.' },
        ],
      },
      {
        phase: 'Phase 1 Return — Relentless Assault',
        points: [
          { icon: null, role: 'All', note: 'After Blood Rage, boss gains +25% damage (stacking). Use the 4-second grace window to top shields with a healing cooldown before Miasma reapplies. Ideally the fight ends in this window.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Phase 1',
        items: [
          { name: 'Ancient Miasma', important: true, desc: 'All healing replaced by absorption shields for Phase 1. Direct heals are wasted. Healers must use shield/absorb toolkit exclusively.' },
          { name: 'Imploding Energy', important: true, desc: 'Three circles spawn every ~20 seconds. Each must be soaked by exactly one player or detonates for ~700k to all. Pre-assign soakers.' },
          { name: 'Arcing Smash + Breath', important: true, desc: 'Three cone smashes followed by an unmarked re-explosion of all three smash locations for ~1.6M Shadow. Mark smash positions as they land.' },
          { name: 'Essence of Y\'Shaarj (Heroic)', important: true, desc: 'Persistent orbs on the ground that strip your entire shield on contact and deal 150k directly to health. Treat as permanent lethal terrain.' },
        ],
      },
      {
        phase: 'Phase 2',
        items: [
          { name: 'Blood Rage', important: true, desc: 'At 100 Rage, channels a 6.7M Physical cleave split among all players in front. Stack the entire raid and use a major raid cooldown. Lasts ~20 seconds.' },
          { name: 'Displaced Energy', desc: 'Detonates and on Heroic roots its targets in place. Dispel immediately once the stack is formed — do not wait for them to run out.' },
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
    setup: { t: '1 per side', h: '1 per side', d: '3 per side' },
    rule: 'Every crate your side clears sends an Unstable Spark to the other side. Our route: 2 buff + 1 boss + 6 mediums + all 18 smalls = 50 energy. Never open the boss and mediums at the same time.',
    overview: 'Two independent 5-player groups clear separate quadrants simultaneously. Each group needs 50 Titan Energy to pull the lever and advance to the second room. Energy values: small crates give 1, medium (stout) give 3, boss/large give 14, buff (relic) give 0. Our route per room: 2 buff crates (0) + 1 boss crate (14) + 6 mediums (18) + 18 smalls (18) = 50 exactly. Tank and healer are the designated crate openers — DPS never break their rotation. Never open the boss crate and mediums at the same time.',
    mechs: [
      { icon: '📦', name: 'Unstable Spark (Heroic)', important: true, desc: 'Every crate your group clears sends one Spark (~1M HP) to the other side. It casts a 10-second Supernova — kill on sight. Pull boss crates toward the center so melee cleave passively hits Sparks as they spawn.' },
      { icon: '🐉', name: 'Amber Encasement / Matter Scramble (Mogu Medium)', important: true, desc: 'Anima Golems spawn two ground markers. One player must stand in each — players swap locations harmlessly. If either marker has no player it explodes for ~300k to all. Call the far marker; someone near the melee covers the close one.' },
      { icon: '💣', name: 'Set to Blow (Mantid Boss)', desc: 'Debuff on a random player applying 4 stacks. Each stack explodes for ~200k when the 15-second timer expires. Use the Extra Action Button while moving to drop each bomb on the ground away from the group. Don\'t step in dropped bombs.' },
      { icon: '🪨', name: 'Stone Statues (Mogu Boss)', important: true, desc: 'The Elder Council boss spawns a stone statue on every cast. Each active statue increases pulsing AoE by 20% (stacks fast). Kill statues as they spawn — never let more than 2 be active simultaneously.' },
      { icon: '💧', name: 'Crimson Reconstitution Pool (Mogu Medium)', desc: 'Anima Golem creates a purple healing void on the ground. Any mob standing in it heals for 10% max HP per second. Tanks must immediately move mobs out of the pool.' },
      { icon: '🌪️', name: 'Windstorm / Rage of the Empress (Mantid Medium)', desc: 'Wind Wielder spawns spiraling tornadoes for 18 seconds. Kill Wind Wielders quickly and purge their Rage of the Empress buff (+50% damage to all nearby mobs) before it causes a wipe.' },
    ],
    heroic: [
      'Unstable Sparks: every completed crate sends one Spark (~1M HP, 10-second Supernova) to the other side — minimum-crate routing exists for this reason.',
      'Stone Statues deal noticeably higher AoE per tick on Heroic — healer can one-shot statues using the Staff of Resonating Water wave proc.',
      'Set to Blow bombs and Mantid boss AoE deal enough damage that using DPS cooldowns only on boss crates is mandatory.',
      'Rage of the Empress (Wind Wielder buff) ticks for 80–90k per second on Heroic — purge it instantly every time.',
      'If your healer gets the Staff of Resonating Water buff, aim toward mobs at all times — the wave proc does ~700k to all enemies hit and heals allies.',
    ],
    lust: 'Second room, first boss crate — you just killed a boss and have no cooldowns. Bloodlust fills the gap and burns the second boss fast.',
    diff: 2,
    roles: [
      { color: '#e8352a', label: 'Tank (per side)', note: 'Designated crate opener — you decide when to open the next wave. Pull boss crates to the center for Spark cleave overlap. Move mobs out of Crimson Reconstitution pools immediately. Face Brewmaster away from the group.' },
      { color: '#1db89a', label: 'Healer (per side)', note: 'Second crate opener — preemptively open the next set while DPS are still killing the current wave. Dispel Torment (Mogu Shadow Ritualist) on cooldown. Purge Rage of the Empress instantly. If you get Staff of Resonating Water, face mobs and aim the wave proc at all times.' },
      { color: '#2e8fdf', label: 'DPS (3 per side)', note: 'Never open crates — that is the tank and healer\'s job. Kill priority: Burial Urns + Sparks → Stone Statues → Anima Golems (cover Matter Scramble markers) → Amber Priests → Wind Wielders (kill fast + purge buff) → Kunchong eggs → Bombers. Use all DPS cooldowns only on boss crates.' },
    ],
    strat: [
      {
        phase: 'Room 1 — Setup & Buff Crates',
        points: [
          { icon: null, role: 'All', note: 'Before dropping down: designate crate openers (tank + healer), assign Matter Scramble marker roles, and assign Set to Blow bomb dropper. Communicate bar % every time a boss crate dies.' },
          { icon: '🛡️', role: 'Tank', note: 'Open both buff crates first. Brewmaster: face away from the group. Windwalker charges a random player — melee stands opposite ranged so the trail doesn\'t cross the group.' },
          { icon: '💚', role: 'Healer', note: 'Once both spirits die, click your role orb. If you get Staff of Resonating Water, face mobs at all times. Dispel the Windwalker charge paralysis stun.' },
          { icon: '⚔️', role: 'DPS', note: 'Use personal cooldowns on Pandaren spirits. Brewmaster: never stand in front. Windwalker: stand opposite ranged. Mistweaver: move out during Gusting Crane Kick.' },
        ],
      },
      {
        phase: 'Boss Crate (Massive) + Smalls Wave',
        points: [
          { icon: null, role: 'All', note: 'Tank opens boss crate after buffs — use all DPS cooldowns here. Pull boss to center for Spark cleave. Handle Stone Statues (Mogu) and Set to Blow bombs (Mantid) as they come.' },
          { icon: '🛡️', role: 'Tank', note: 'Mogu: kill statues immediately — boss AoE scales per statue, keep under 2 active. Move boss out of Crimson Reconstitution pools. Mantid: tank in the open, kite slightly to drop bombs safely.' },
          { icon: '💚', role: 'Healer', note: 'Mogu: call for DPS if statues fall behind. Mantid: heal through constant AoE and watch Set to Blow runners. Aim Staff buff at the boss constantly.' },
          { icon: '⚔️', role: 'DPS', note: 'Full cooldowns on boss. Mogu: DoT statues passively. Mantid: Set to Blow — break immediately, run to empty corner, spam Extra Action Button for all 4 stacks, return.' },
        ],
      },
      {
        phase: 'Medium (Stout) Crates Wave',
        points: [
          { icon: null, role: 'All', note: 'Open mediums ONLY after boss is dead. Never combine larges and mediums. Healer opens the next wave slightly before the current one is fully dead. Two mediums at a time — three risks overlapping mechanics.' },
          { icon: '🛡️', role: 'Tank', note: 'Mogu: announce Matter Scramble casts — raid covers both markers. Move golems out of Crimson pools. Mantid: kill Amber Priests first; pull Wind Wielders near the boss area for cleave.' },
          { icon: '💚', role: 'Healer', note: 'Mogu: dispel Torment on cooldown — resets the damage and jumps targets. Mantid: purge Rage of the Empress instantly every time.' },
          { icon: '⚔️', role: 'DPS', note: 'Mogu: two players cover Matter Scramble markers. Mantid: interrupt Wind Wielder casts; kill Amber Priests fast.' },
        ],
      },
      {
        phase: 'Fill to 50 — Small Crates',
        points: [
          { icon: null, role: 'All', note: 'Open smalls to reach 50 energy. Call bar % to the other side — both groups should hit 50 and pull levers within seconds of each other.' },
          { icon: '🛡️', role: 'Tank', note: 'Mogu: position yourself between Burial Urns and the raid. Mantid: tank Kunchong eggs in cleared space.' },
          { icon: '💚', role: 'Healer', note: 'Light phase. Continue Torment dispels on any remaining Ritualists. Aim Staff proc at mobs if still active.' },
          { icon: '⚔️', role: 'DPS', note: 'Mass AoE everything. Mogu: don\'t stand within 4 yards of Burial Urns. Mantid: step out of pheromone pools; kill Bombers first.' },
        ],
      },
      {
        phase: 'Room 2 — Second Quadrant',
        points: [
          { icon: null, role: 'All', note: 'Both levers pulled before either enters Room 2. Room 2 is the opposite mob type. Same route: buffs → boss (Bloodlust here) → mediums in pairs → smalls.' },
          { icon: '🛡️', role: 'Tank', note: 'Same role as Room 1. Call boss crate opening as the Bloodlust trigger.' },
          { icon: '💚', role: 'Healer', note: 'Remind the group of Bloodlust timing before entering.' },
          { icon: '⚔️', role: 'DPS', note: 'Bloodlust the moment the first boss crate mob is engaged in Room 2. Full cooldowns on the boss.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Both Sides',
        items: [
          { name: 'Unstable Spark (Heroic)', important: true, desc: 'Every crate cleared sends one Spark to the other side. ~1M HP, casts 10-second Supernova. Kill on sight. Pull boss crates to center for passive cleave.' },
          { name: 'Amber Encasement / Matter Scramble (Mogu)', important: true, desc: 'Anima Golems spawn two ground markers. One player per marker — if either is empty it explodes for ~300k to all.' },
          { name: 'Stone Statues (Mogu Boss)', important: true, desc: 'Each active statue increases boss AoE by 20%. Kill as they spawn — never let more than 2 be active.' },
          { name: 'Set to Blow (Mantid Boss)', desc: 'Debuff with 4 stacks — each explodes for ~200k at expiry. Use Extra Action Button to drop bombs in empty corners.' },
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
    setup: { t: 1, h: 3, d: '6 (ranged preferred)' },
    rule: 'Screech hits harder than any heal can keep up with. Survive Phase 1 through a pre-planned CD rotation — not raw healing throughput.',
    overview: 'Two alternating phases. Phase 1: Thok is tanked, Screech accelerates every cast, raid must survive on a rotating CD list until you deliberately trigger Phase 2 (stack 5 players below 50% HP within 10 yards). Phase 2: Thok fixates random players and chases them — kite for 5 fixates, kill the Jailer, open a cage to end the phase. Repeat. Three cages: Acid (Akolik) → Frost (Gorai) → Fire (Montak). Fire goes last because Burning Blood makes stacking impossible and forces an early Phase 2 transition — save it for the final push.',
    mechs: [
      { icon: '📢', name: 'Deafening Screech', important: true, desc: 'Thok gains a stack every second. Each stack increases Screech damage. Hard enrage at 30 stacks — force Phase 2 at 27–28 at the latest. A pre-planned CD rotation per stack window is mandatory.' },
      { icon: '🔓', name: 'Prisoner Release & Cage Order', important: true, desc: 'Release a prisoner to reset Screech stacks. Each prisoner adds a hazard for the next phase and gives Thok a Frenzy stack. Order: Acid (Akolik) → Frost (Gorai) → Fire (Montak). Fire last because Burning Blood prevents stacking.' },
      { icon: '🏃', name: 'Blood Frenzy (Phase 2 Trigger)', desc: 'When 5+ players below 50% HP are within 10 yards, Thok enters Phase 2 — he stops Screeching and fixates random players instead. You control when Phase 2 starts. Never trigger it accidentally.' },
      { icon: '🏃', name: 'Kiting & Fixate Band', desc: 'Thok fixates players 30–150 yards away, preferring the furthest in that band. After your fixate ends, run back within ~30 yards to exit the valid target pool and avoid a double fixate.' },
      { icon: '🔥', name: 'Montak (Fire) — Spread Phase', desc: 'Burning Blood drops persistent fire patches under random players. Cannot stack during this Phase 1. Keep one clean area unmarked for the forced stack-up. Go no more than 4–5 Screeches here.' },
    ],
    heroic: [
      'Screech will drop the entire raid below 50% HP without a damage reduction cooldown. A pre-planned CD rotation for every Screech past stack 6 is mandatory.',
      '30-stack hard enrage: Screech hits for ~1 million damage. Force Phase 2 at 27–28 stacks at the latest.',
      'Captive Cave Bats spawn during Acid (Akolik) Phase 1. Kill with AE stuns before the 5th Screech stack — this is the hardest Phase 1 healing-wise.',
      'Starved Yeti spawns during Frost (Gorai) Phase 1. Charges randomly every ~10 sec — watch the red ground marker and step out. Don\'t kill it.',
      'Fixates are semi-predictable: run back within ~30 yards after your fixate ends to exit the valid target pool and avoid a double fixate.',
    ],
    lust: 'Phase 2 after the Acid (Akolik) cage — first kite phase with full CDs and no added debuffs yet.',
    diff: 2,
    roles: [
      { color: '#e8352a', label: 'Tank', note: 'Single tank is standard. Face Thok away from the raid at all times. Track your stacking breath debuff; call for Phase 2 before stacks become lethal. In Phase 2: pick up the Jailer near the entrance, kill it for the key, open the next cage on fixate 5.' },
      { color: '#1db89a', label: 'Healers', note: '3 healers required. Your job is executing the pre-planned CD rotation, not raw throughput. Pre-cast every HoT and shield before each Screech. BoPing a Druid for uninterrupted Tranquility or a Shaman for Ascendance is a major gain — plan it before pull. Dispel Corrosive Blood (Acid phase) as fast as possible; Mass Dispel is extremely valuable.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Ranged preferred — melee is dead weight once Thok accelerates. In Phase 2, ranged stay on Thok while melee kills the Jailer with the tank. Fire phase: spread to avoid overlapping fire patches, keep one clean area free for the stack-up trigger. Never open a cage before the Jailer is dead.' },
    ],
    strat: [
      {
        phase: 'Phase 1 — Screech Phase (All Cycles)',
        points: [
          { icon: null, role: 'All', note: 'Split into two groups of 4–5, each 5+ yards apart — prevents accidental Phase 2 from a Screech dropping everyone below 50% at once. Tank always alone in front.' },
          { icon: '🛡️', role: 'Tank', note: 'Face Thok away from the raid. Track breath stacks — 4–5 is the general danger zone. Call for Phase 2 if stacks climb too fast rather than waiting for the planned exit.' },
          { icon: '💚', role: 'Healers', note: 'Execute the pre-planned CD rotation — don\'t free-cast reactively. Pre-cast HoTs and shields before each Screech. BoPing a Druid for Tranquility or Shaman for Ascendance (interrupt immunity) is a major gain. Example: personal CDs at 6–10, minor raid CDs at 11–15, major CD at 16–18, force Phase 2 at 27–28.' },
          { icon: '⚔️', role: 'DPS', note: 'Melee keep attacking during Screech. Ranged re-apply DoTs just before the cast goes off — no GCDs wasted when the lockout ends.' },
        ],
      },
      {
        phase: 'Phase 2 — Kite Phase (All Cycles)',
        points: [
          { icon: null, role: 'All', note: 'Spread across the room — anyone 30–150 yards from Thok is a valid fixate. After your fixate ends, run back within ~30 yards to exit the target pool.' },
          { icon: '🛡️', role: 'Tank', note: 'Pick up the Jailer immediately, kill it, loot the key. Open the cage on fixate 5 — not earlier.' },
          { icon: '💚', role: 'Healers', note: 'Stay roughly central. Throw HoTs on fixated players before they run — Shock Blast will hit them out of range.' },
          { icon: '⚔️', role: 'DPS', note: 'Ranged stays on Thok — near-full uptime for fixates 1–3. Melee kills Jailer with tank, then joins Thok. On fixates 4–5, Thok is too fast for melee — stay clear.' },
        ],
      },
      {
        phase: 'Acid Phase 1 — Akolik (Bats)',
        points: [
          { icon: null, role: 'All', note: 'Hardest Phase 1. Bats spawn at ~Screech stack 3, adding heavy AoE on top. Use AE stuns to interrupt Vampiric Frenzy — rotate them. Bats dead before stack 5, then go up to ~15 stacks before forcing Phase 2.' },
          { icon: '💚', role: 'Healers', note: 'Dispel Corrosive Blood on cooldown — stacking magic DoT. Mass Dispel clears the whole raid at once and is the highest-value ability this phase.' },
          { icon: '⚔️', role: 'DPS', note: 'Switch to bats the instant they spawn. Stack them on the tank for cleave + AE stuns. Return to Thok when they\'re dead.' },
        ],
      },
      {
        phase: 'Frost Phase 1 — Gorai (Yeti)',
        points: [
          { icon: null, role: 'All', note: 'CDs partially recovered. Go up to ~18–20 Screeches. Dodge Yeti charge (red ground marker) — don\'t kill it. 5 stacks of Icy Blood = player frozen; break the ice tomb (~1M HP) immediately.' },
          { icon: '🛡️', role: 'Tank', note: 'Freezing Breath: 5 stacks = tank frozen while tanking. Force Phase 2 well before stack 5.' },
          { icon: '💚', role: 'Healers', note: 'Icy Blood can\'t be dispelled — heal through it. Break ice tombs immediately if they form on anyone.' },
        ],
      },
      {
        phase: 'Fire Phase 1 — Montak (Last Stand)',
        points: [
          { icon: null, role: 'All', note: 'Burning Blood drops persistent fire patches — can\'t stack. Spread and keep one clean area reserved for the stack-up trigger. Max 4–5 Screeches here. This is the final Phase 2 — use every remaining cooldown and kill Thok in the kite phase.' },
          { icon: '💚', role: 'Healers', note: 'Spread healing by position — each healer covers their section of the room. Keep the tank topped for Scorching Breath stacks.' },
          { icon: '⚔️', role: 'DPS', note: 'Spread to avoid overlapping fires. Don\'t stand in existing patches. Pop all remaining offensive CDs in Phase 2 and finish the fight.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Core Loop',
        items: [
          { name: 'Deafening Screech', important: true, desc: 'Stacks every second. At ~27–28 stacks on Heroic you must force Phase 2. Hard enrage at 30. A pre-planned CD rotation is mandatory — raw throughput is not enough.' },
          { name: 'Prisoner Release', important: true, desc: 'Resets stacks but adds an environmental hazard and gives Thok a Frenzy stack. Recommended order: Acid → Frost → Fire. Fire last because Burning Blood prevents stacking.' },
          { name: 'Blood Frenzy (Phase 2 trigger)', desc: '5+ players below 50% HP within 10 yards triggers Phase 2. Never trigger it accidentally.' },
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
    rule: 'Kill one weapon per belt wave or the boss gains 90% damage reduction. Missing a wave while Shredders are alive is how wipes happen.',
    overview: 'A pure execution fight with no distinct phases — the same loop repeats from pull to kill. Every ~40 seconds a belt wave spawns three weapon parts; your belt team kills one, the other two reach the raid floor as active weapons. Shredders spawn on a cadence tied to Electrostatic Charge stacks and only tanks deal meaningful damage to them. Belt kill priority: Mines always → Electromagnet second → let Laser and Missile through. Overcharged Mines (Wave 6) are the single most dangerous event in the fight.',
    mechs: [
      { icon: '⚙️', name: 'The Belt — Pattern Recognition', important: true, desc: 'Jump into any pipe on the west wall to reach the upper conveyor. Kill one weapon part — the remaining two are immediately shielded. Pattern Recognition debuff: 1-min cooldown, cannot re-enter. Rotate two groups of 2. Hunter exception: Disengage bypasses the pipe debuff — one Hunter can cover every single wave alone.' },
      { icon: '💣', name: 'Crawler Mines (Ground)', important: true, desc: 'Leap down and fixate on a random non-tank player. Stunnable/rootable for the first minute. Range stuns them and burns them down immediately — always the highest kill priority on the ground. If a Mine reaches its target it Detonates for massive raid-wide damage.' },
      { icon: '🤖', name: 'Automated Shredders', important: true, desc: '90% damage reduction against all players — only tanks deal meaningful damage via their Electrostatic Charge buff. Kill before Overload stacks escalate — Overload 3 is the maximum acceptable on Heroic.' },
      { icon: '⚡', name: 'Electrostatic Charge', important: true, desc: 'Boss debuff on the current tank. Swap pattern: 3-4-3-4. The debuffed tank immediately picks up the incoming Shredder and burns it down using their stack bonus. Use a personal defensive on stack 3 and stack 4.' },
      { icon: '🔥', name: 'Laser Turret (Ground)', desc: 'Chases a random player with a beam that leaves Superheated fire patches. The targeted player kites it in a circuit, depositing fire in a controlled lane away from the raid cluster and Shredder kite path.' },
      { icon: '🌀', name: 'Shockwave Missile (Ground)', desc: 'Fires a missile that creates expanding rings. Move toward the impact point — standing close means you only step out once. Standing far away means multiple rings pass through you.' },
      { icon: '🧲', name: 'Electromagnet (Ground)', desc: 'Pulls all players and Serrated Sawblades toward it, dealing ticking damage. Don\'t stand between a cluster of blades and the magnet.' },
    ],
    heroic: [
      'Each weapon type has a unique heroic sabotage mechanic — belt team must know all three.',
      'Overcharged Mines (Wave 6 — unavoidable): 3 large mines spawn, each splitting into 2 smalls on death. Nuke large mines immediately, then CC-chain and burn the smalls.',
      'Overcharged Laser: fills the room with 3 concentric fire rings in fixed positions. Learn the 3 safe gaps — they are always in the same spots.',
      'Overcharged Electromagnet: continuous Push-Pull cycle. Hug the room\'s outer edge lip or press against the back wall.',
      'Overcharged Missile: spawns 3 killable turrets that loop continuously. All DPS prioritize killing turrets immediately.',
      'Shredder Overload is lethal at stack 4-5 — kill Shredders before Overload 3.',
      'Belt lasers move on Heroic. Watch for the swirling floor indicator showing where the safe gap will appear next — move early, not late.',
    ],
    lust: 'On pull — the opening is the cleanest window of the entire fight before the room fills with ground effects.',
    diff: 3,
    roles: [
      { color: '#e8352a', label: 'Tanks', note: '3-4-3-4 Electrostatic Charge rotation. Debuffed tank immediately picks up and burns the Shredder using the stack damage bonus — kite it through Sawblades. Keep the Shredder 35+ yards from Blackfuse at all times or the boss heals it.' },
      { color: '#1db89a', label: 'Healers', note: '2 healers is correct — healing is low outside Overcharged Magnet windows. Overcharged Magnet forces constant movement; pre-cast HoTs before it activates. Stay within range of the Shredder tank, who is often far from the raid.' },
      { color: '#2e8fdf', label: 'Belt Team (2 DPS pairs)', note: 'Rotate belt duty in 2 pairs alternating waves. Always use offensive cooldowns on the belt, not on the boss. On the ground: range owns Mine duty (stun + burn). Never let Mines reach their target.' },
    ],
    strat: [
      {
        phase: 'The Belt — Rotations and Execution',
        points: [
          { icon: null, role: 'All', note: 'Two pairs of 2 DPS alternate — Pair A goes Wave 1, Pair B Wave 2, etc. Pattern Recognition debuff is 1 min; belt cadence is ~40 sec — your debuff expires just as the next wave spawns. Track your timer. Hunter exception: Disengage bypasses the pipe debuff, so one Hunter can cover every wave alone.' },
          { icon: '⚔️', role: 'Belt Team', note: 'Jump into any active pipe. Kill your assigned weapon part — both players focus the same one. Kill priority: Mines > Electromagnet > Laser > Missile. To exit: walk (don\'t jump) into the far-end pipe. Land defensively — check ground state before exiting.' },
          { icon: '⚔️', role: 'Ground DPS', note: 'While belt team is up, immediately stun and burn any Crawler Mines that drop down. Range owns Mine duty — never let one run free.' },
        ],
      },
      {
        phase: 'Shredder Management — Tank Responsibilities',
        points: [
          { icon: null, role: 'All', note: 'Non-tank DPS deal only 10–20% normal damage through Reactive Armor. Switching to Shredders as DPS is a net loss — only help if a tank calls for it.' },
          { icon: '🛡️', role: 'Tanks', note: '3-4-3-4 rotation: Tank A holds Blackfuse to 3 stacks, calls taunt. Tank B takes 4 stacks. Tank A (3-stack buff) picks up and burns the Shredder. Use a personal defensive on every high-stack application. Kite Shredder through Serrated Sawblades. Keep it 35+ yards from Blackfuse or the boss heals it.' },
          { icon: '🛡️', role: 'Shredder Positioning', note: 'Save tank DPS cooldowns for when the Shredder lands after Death from Above — 5-second stun + 200% extra damage taken. Pre-position the Shredder on Sawblades before the jump so it lands on them.' },
        ],
      },
      {
        phase: 'Overcharged Laser — Fixed Gap Positioning',
        points: [
          { icon: null, role: 'All', note: 'Three concentric fire rings fill the room in fixed positions — gaps are always in the same spots. Outer ring doesn\'t reach the extreme room lip — tanks and melee can hug the wall outside all laser paths. Learn the gaps on the first occurrence and return to the same spots every time.' },
          { icon: '🛡️', role: 'Tanks', note: 'Park Blackfuse in the outer ring gap or on the extreme outer edge. Shredder tank finds an inner gap — healer needs line of sight and range to reach them.' },
          { icon: '⚔️', role: 'DPS', note: 'Sawblades still spawn during Laser. If a blade would land in fire, let it burn. If one lands on the outer edge, step briefly into fire with a personal defensive (2–3 Superheated stacks), then return.' },
        ],
      },
      {
        phase: 'Overcharged Electromagnet — Push-Pull Management',
        points: [
          { icon: null, role: 'All', note: 'Cycles between pulling and pushing players and Sawblades continuously. Hardest window to heal — use personal or raid defensive cooldowns. Players on the outer room lip are outside the blade fan range. Don\'t stand in the middle of the room.' },
          { icon: '💚', role: 'Healers', note: 'Pre-cast all HoTs and shields when you see the Overcharged Magnet activate. Mobile heals only for the duration.' },
          { icon: '⚔️', role: 'DPS', note: 'Hug the outer edge. Don\'t stand between a Sawblade cluster and the magnet — blades pass through you on the pull cycle.' },
        ],
      },
      {
        phase: 'Overcharged Mines — Wave 6 (Burst Priority)',
        points: [
          { icon: null, role: 'All', note: 'Happens exactly once — 3 large Mines spawn, each splitting into 2 smalls on death. CC and kill large mines fast so splits don\'t all arrive at once. Then stun, CC, and cluster smalls for AoE.' },
          { icon: '⚔️', role: 'DPS', note: 'All ground DPS switch to Mines. Stun large mines on spawn. When smalls spawn, immediately CC-chain them. AoE if 3+ are clumped; single-target if scattered.' },
          { icon: '🛡️', role: 'Tanks', note: 'Both tanks assist on Wave 6 Mines — Shredder timing usually allows a window. Electrostatic Charge buff also works on Mines (bypasses Reactive Armor).' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Assembly Line',
        items: [
          { name: 'Pattern Recognition', desc: '1-minute debuff applied when using a pipe to reach the belt. Cannot re-enter until it expires. Rotate two groups of 2 DPS. Hunter Disengage bypasses this entirely.' },
          { name: 'Overcharged Weapon', important: true, desc: 'Each weapon that reaches Blackfuse gives +15% damage/haste. Sawblade: rolling raid damage. Shredder: spawns an add. Electromagnet: pulls all players.' },
          { name: 'Heroic Sabotage Mechanics', important: true, desc: 'Each weapon type requires a different interaction on Heroic. Assign and practice the belt team\'s rotation before the pull.' },
        ],
      },
      {
        phase: 'Ground Mechanics',
        items: [
          { name: 'Electrostatic Charge', important: true, desc: '3-4-3-4 swap pattern. Debuffed tank picks up and burns the Shredder using stack bonus damage. Use defensives at stack 3 and 4.' },
          { name: 'Crawler Mines (Ground)', important: true, desc: 'Fixate on a random non-tank player. Stunnable for the first minute. #1 kill priority — if one reaches its target, massive raid-wide damage and knockup.' },
          { name: 'Overcharged Mines (Wave 6)', important: true, desc: '3 large mines each split into 2 smalls on death. CC-chain and nuke. The highest-damage event in the fight.' },
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
    rule: 'Never let a Paragon die while Ka\'roz or Korven is below 50% HP — either triggers Encase in Amber on the low-health target, and on Heroic that amber cannot be broken without Ka\'roz\'s buff.',
    overview: 'Three Paragons are active simultaneously at all times. When one dies, the other two heal to full and gain a stacking 8% damage increase; then the next Paragon on the preset list activates. After each kill, interact with the corpse to claim that Paragon\'s power — assign pickups before the pull. Four Paragons require tanking; the other five stand free. Two pairs share opposing tank debuffs (Skeer ↔ Rik\'kal, Xaril ↔ Kil\'ruk) — never let one tank hold both of a matched pair. Heroic kill order: Skeer → Rik\'kal → Korven → Hisek → Xaril → Kaz\'tik, then Kil\'ruk → Iyyokuk → Ka\'roz.',
    mechs: [
      { icon: '🐛', name: 'Heroic Kill Order', important: true, desc: 'Fixed: Skeer → Rik\'kal → Korven → Hisek → Xaril → Kaz\'tik → Kil\'ruk → Iyyokuk → Ka\'roz. The first six are fixed. Korven must die third before anyone else hits 50% HP.' },
      { icon: '⚖️', name: 'Tank Pairing Rule', important: true, desc: 'Skeer ↔ Rik\'kal and Xaril ↔ Kil\'ruk are opposing pairs. Tank A handles Skeer and Xaril; Tank B handles Rik\'kal and Kil\'ruk. Never cross-assign — debuffs are permanent for the full fight.' },
      { icon: '🟡', name: 'Korven — Encase in Amber', important: true, desc: 'On Heroic the amber CANNOT be broken without Ka\'roz\'s buff. Bait it onto Ka\'roz: drop both Ka\'roz and Korven to ~55%, push Ka\'roz to 50% first so he absorbs the amber, then burn Korven within the 30-second window.' },
      { icon: '💉', name: 'Rik\'kal — Injection / Scorpion (Heroic)', important: true, desc: 'Allow exactly ONE injection to create the parasite stockpile. Block all subsequent injections with active mitigation. Scorpion-transformed players MUST use Prey to eat a parasite or they die. CC remaining parasites — do not kill them until all scorpions have eaten.' },
      { icon: '🎯', name: 'Hisek — Aim', desc: 'Send 4 players into the beam, spread out along its length — never stack on each other or Sonic Resonance detonations overlap. Fewer than 4 soakers = near-lethal damage to the target.' },
      { icon: '🌀', name: 'Kaz\'tik — Mesmerize', desc: 'A Kunchong Mesmerizes a random player and walks them toward it. Ranged burns that Kunchong to interrupt. The Korven tank uses Master of Amber (picked up from Korven\'s corpse) to freeze the walking player for 5 seconds of extra burn time.' },
      { icon: '🦅', name: 'Kil\'ruk — Reave', important: true, desc: 'Pulls the entire raid toward him and prevents all DPS while active. Kill him as soon as he activates.' },
    ],
    heroic: [
      'Fixed kill order is mandatory. Rik\'kal alive late = Injection spam = wipe.',
      'Rik\'kal: Faulty Mutation — scorpion-transformed players must eat a parasite via Prey or they die. Never kill the parasite stockpile until all scorpions are out.',
      'Korven: Encase in Amber is unbreakable unless Ka\'roz\'s buff is used. Bait it onto Ka\'roz at 50%, then burn Korven in the 30-second window.',
      'Ka\'roz: Hurl Amber leaves permanent puddles for the rest of the fight. Assign ranged to one side of the room — puddles land under players.',
      'Kil\'ruk: Reeve pulls the entire raid and prevents all DPS while active. Kill him as soon as he activates.',
      'Iyyokuk: Fiery Edge on Heroic connects 8 of 10 players simultaneously. Stay spread at all times — use a raid cooldown for every cast once Iyyokuk has stacks.',
    ],
    lust: 'On Kaz\'tik (boss 6) — prevent a mature Kunchong from spawning. High personal DPS matters more here than anywhere else in the fight.',
    diff: 3,
    roles: [
      { color: '#e8352a', label: 'Tank A — Skeer / Xaril', note: 'Tank Skeer away from the center entrance so Bloods target Rik\'kal, not Skeer. Never tank Rik\'kal or Kil\'ruk. Swap Korven\'s Vicious Assault at halfway through each channel. Pick up Korven\'s corpse power (Master of Amber) — use it on Kaz\'tik\'s Mesmerize targets.' },
      { color: '#e8352a', label: 'Tank B — Rik\'kal / Kil\'ruk', note: 'Allow the first Injection but block every subsequent one with active mitigation. Never tank Skeer or Xaril. On Kil\'ruk, use cooldowns aggressively — his damage is the highest of any Paragon.' },
      { color: '#1db89a', label: 'Healers', note: 'Manage mana — this is a 10+ minute fight. Step into Aim beams as one of the 4 soakers. Use raid cooldowns for Iyyokuk\'s Fiery Edge and for Reave + Fiery Edge overlaps late in the fight.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Ranged preferred. Follow kill order without deviation. During Kaz\'tik, burn the Mesmerized Kunchong immediately. Keep parasites CC\'d until all scorpions have eaten. Spread passively at all times for Fiery Edge.' },
    ],
    strat: [
      {
        phase: 'Phase 1 — Skeer + Rik\'kal + Hisek (First Active Three)',
        points: [
          { icon: null, role: 'All', note: 'Pull to the room entrance for max distance from Hisek\'s Rapid Fire.' },
          { icon: '⚔️', role: 'DPS', note: 'DPS Rik\'kal to 95% at the start so Skeer\'s Bloods target him instead. Then hard-switch to Skeer and burn him. Stun and slow Bloods if they\'re close.' },
          { icon: '🛡️', role: 'Tanks', note: 'Skeer tank toward entrance wall. Rik\'kal tank to the side. Rik\'kal tank: allow first Injection, block every one after with active mitigation.' },
          { icon: '💚', role: 'Healers', note: 'Step into Aim beams as one of the 4 soakers when not mid-cast. Stay at max range from Hisek and move through Rapid Fire gaps.' },
        ],
      },
      {
        phase: 'Korven — Kill 3rd (Bait the Amber)',
        points: [
          { icon: null, role: 'All', note: 'Drop Ka\'roz and Korven to ~55%, push Ka\'roz to 50%. Korven casts Amber on Ka\'roz. Full burn on Korven in the 30-second window.' },
          { icon: '⚔️', role: 'DPS', note: 'Hold DPS on Korven once Ka\'roz hits 55%. When Ka\'roz gets ambered, use cooldowns and full burn on Korven.' },
          { icon: '🛡️', role: 'Tanks', note: 'Tank Korven to the side of Ka\'roz. Swap tanks midway through each Vicious Assault channel. Pick up Korven\'s corpse power (Master of Amber) after he dies.' },
        ],
      },
      {
        phase: 'Hisek — Kill 4th (Aim Soaking)',
        points: [
          { icon: null, role: 'All', note: 'Move to center after Korven dies. 4 players step into every Aim beam, spread a few yards apart — never stack on each other (Sonic Resonance detonations overlap). Use personal cooldowns if anyone is low going in.' },
        ],
      },
      {
        phase: 'Xaril — Kill 5th (Catalyst Reactions)',
        points: [
          { icon: null, role: 'All', note: 'On Catalyst: spread immediately. Orange: fire ring from affected players — avoid others\' rings. Purple: forced forward auto-run 5 sec, fire trail behind — face an outer wall. Green: slow fog on affected players — walk away from it.' },
          { icon: '🛡️', role: 'Tanks', note: 'Purple Catalyst removes dodge/parry for 5 sec — use a personal cooldown immediately when affected.' },
          { icon: '⚔️', role: 'DPS', note: 'Burn Xaril fast. Chain active mitigation on Caustic Blood — tank swap as backup if stacks approach 10.' },
        ],
      },
      {
        phase: 'Kaz\'tik — Kill 6th (Kunchong / Mesmerize) — Bloodlust here',
        points: [
          { icon: null, role: 'All', note: 'Three immune Kunchongs patrol the edges — instant death on contact. Mesmerize walks a player toward a Kunchong. Bloodlust here — kill Kaz\'tik before a second Mesmerize on the same Kunchong causes it to Molt.' },
          { icon: '⚔️', role: 'DPS', note: 'On Mesmerize, all ranged immediately switch to the targeted Kunchong. If it Molts, tanks pick it up and DPS burn it.' },
          { icon: '🛡️', role: 'Tanks', note: 'Use Master of Amber on the Mesmerized player to ice-block them for 5 extra seconds of DPS time.' },
        ],
      },
      {
        phase: 'Kil\'ruk — Kill 7th (Reave / Death from Above)',
        points: [
          { icon: null, role: 'All', note: 'Kill immediately on activation. Reave pulls all players in and prevents effective DPS — run away the instant it starts.' },
          { icon: '⚔️', role: 'DPS', note: 'Full DPS loss during Reave — run far and accept it. Death from Above: keep moving, dive tracks your last position.' },
          { icon: '💚', role: 'Healers', note: 'Kil\'ruk + Iyyokuk Fiery Edge overlap is the most dangerous combination — use a raid cooldown if both are active.' },
        ],
      },
      {
        phase: 'Iyyokuk — Kill 8th (Fiery Edge)',
        points: [
          { icon: null, role: 'All', note: 'Fiery Edge hits 8 of 10 players with fire lines — damage decreases with distance. Spread at max range. Use raid cooldown on every cast. Keep everyone topped to avoid Diminish instakills (kills anyone below 25% max HP).' },
        ],
      },
      {
        phase: 'Ka\'roz — Kill 9th (Cleanup)',
        points: [
          { icon: null, role: 'All', note: 'High damage stacks but all abilities avoidable. Floor is covered in permanent Caustic Amber puddles — move carefully. When he jumps for Hurl Amber, move to sides so puddles land in corners. On Flash, step out of his path immediately — Whirling stuns and ticks 300k/sec.' },
        ],
      },
    ],
    abilities: [
      {
        phase: 'Key Abilities',
        items: [
          { name: 'Paragon Empowerment', important: true, desc: 'Each killed Paragon empowers all remaining ones with a stacking 8% damage increase. The kill order matters — follow it precisely.' },
          { name: 'Rik\'kal — Parasitic Injection (Heroic)', important: true, desc: 'Allow the first Injection to create parasite stockpile. Block all subsequent ones. Scorpion players must eat a parasite via Prey. CC parasites — do not kill them until all scorpions have eaten.' },
          { name: 'Korven — Encase in Amber (Heroic)', important: true, desc: 'Unbreakable without Ka\'roz\'s buff. Bait onto Ka\'roz at 50%, then burn Korven in the 30-second window.' },
          { name: 'Kil\'ruk — Reave', important: true, desc: 'Pulls the entire raid and prevents all DPS while active. Kill him as soon as he activates.' },
          { name: 'Iyyokuk — Fiery Edge', important: true, desc: 'Hits 8 of 10 players on Heroic. Spread at max range. Use a raid cooldown on every cast once he has stacks.' },
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
    overview: 'A long, execution-heavy fight across four distinct phases. Phase 1 is add management around Iron Stars. Phase 2 is Desecrate placement, Whirling Corruption positioning, and Mind Control response. Intermissions are puzzle phases inside the Realm of Y\'Shaarj. Phase 3 repeats Phase 2 with all abilities empowered. Phase 4 (Heroic only, in Stormwind) is entirely new mechanics. This fight is execution-based — small mistakes compound and wipe the raid. Every role needs to know their assignment before the pull.',
    mechs: [
      { icon: '🪓', name: 'Desecrate', desc: 'Thrown at a ranged target. Always requires 3 players standing at range to bait it away from the raid. Place weapons along walls — keep the center clear for Phase 3+. In Phase 2+ weapons are unkillable.' },
      { icon: '🌀', name: 'Whirling Corruption', important: true, desc: 'Stack under the boss for normal version. Spread to max range (~40 yards) for Empowered version — a minion spawns where each missile lands. Kill spawned minions before they buff each other. Never let two die near each other.' },
      { icon: '🧠', name: 'Touch of Y\'Shaarj (Mind Control)', important: true, desc: 'MC on 2 players. They spam a cast that chains the MC to others — interrupt or stun every cast immediately. DPS to 20% HP to break. Never use DoTs that can kill them. Pre-assign who handles each MC target before the pull.' },
      { icon: '🛡️', name: 'Gripping Despair (Tank Swap)', desc: 'Stacking tank DoT. Swap at 3 stacks. In Phase 3, dropping stacks causes Explosive Despair — tank needs a defensive cooldown when stacks fall off.' },
      { icon: '👹', name: 'Realm of Y\'Shaarj (Intermission)', important: true, desc: 'Kill all adds before Garrosh reaches 25 energy — if he hits 25 the fight becomes nearly impossible. Fixed order on Heroic: Jade Temple first, Terrace second (SKIP — stand at the back wall). You should never need the third.' },
      { icon: '😈', name: 'Manifest Rage (Phase 4)', important: true, desc: 'Garrosh casts at 100 energy in Phase 4. Iron Star must hit during the 2-second cast window — not the channel. Timing the Iron Star to arrive at exactly 100 energy is the hardest skill in the phase.' },
    ],
    heroic: [
      'Intermissions are in fixed order: Jade Temple → Terrace of Endless Springs. Never execute the second intermission — stand at the back wall, avoid ground effects, let the timer expire.',
      'Phase 1 Warbringers gain Fixate on Heroic. Second wave gets War Song buff — chain knockbacks, stuns, and slows to hold them in the Iron Star\'s path. Never face-tank them with the buff up.',
      'Jade Temple: adds cast Embodied Doubt — AoE silence + stacking damage amplifier. Pre-assign interrupt/stun pairs per group of 3 adds. Kill all adds before Garrosh hits 25 energy (16-second window).',
      'Minions of Y\'Shaarj (Phase 2/3): gain 10 energy per melee hit; at 100 they cast Empowering Corruption buffing nearby minions. Kill each separately — never let two die near each other.',
      'Phase 4 (Stormwind) is Heroic-only. Off-tank kites the Iron Star. Malice + Bombardment overlap: 3 pre-assigned players with large personal defensives soak Malice #4 together while rest of raid spreads.',
    ],
    lust: 'At the Phase 3 transition (Garrosh hits 10% for the first time). All DPS cooldowns should be held for this window.',
    diff: 3,
    modelFile: 'garrosh2.glb',
    roles: [
      { color: '#e8352a', label: 'Tanks', note: 'Swap at 3 Gripping Despair stacks. Use a defensive when stacks expire in Phase 3 (Explosive Despair). Phase 4: main tank holds Garrosh in position; off-tank kites the Iron Star along the wall to intercept Manifest Rage.' },
      { color: '#1db89a', label: 'Healers', note: '2 healers. HPS demand is burst-heavy — disc and paladin are ideal. Save a CD for each Whirling Corruption and for the Iron Star explosion in Phase 4.' },
      { color: '#2e8fdf', label: 'DPS', note: 'Pre-assign MC targets by name — call your target when MC lands. Desecrate team (3 players) move out every weapon. Phase 4: all DPS stay stacked behind boss for Malice, stepping out on debuff. No DoTs when breaking MC.' },
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
          { icon: '⚔️', role: 'DPS', note: 'Stay stacked behind the boss inside the Malice circle. For Malice #4 + Bombardment overlap: 3 pre-assigned players with large defensives soak together while the rest spreads.' },
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
          { name: 'Whirling Corruption', important: true, desc: 'Stack for base version. Empowered: spread to 40 yards — missiles spawn Minion adds at landing positions. Kill each minion separately — never let two die adjacent.' },
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
