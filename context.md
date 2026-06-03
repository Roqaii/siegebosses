# spline-demo — Project Context

## Project Overview

**Name:** Siege Boss Guides — Heroic Siege of Orgrimmar Complete Raid Guide  
**Repo:** `Roqaii/siegebosses` on GitHub  
**Live URL:** `https://siegebossguides.netlify.app`  
**Local path:** `C:\Users\Owner\Claude Skills\spline-demo`  
**Hosting:** Netlify (via `@netlify/plugin-nextjs`)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack, SSG) |
| 3D | React Three Fiber + Three.js + `@react-three/drei` |
| Styling | Tailwind CSS v3 + shadcn CSS variables |
| Language | TypeScript |
| Fonts | Bebas Neue, Barlow, Barlow Condensed (via `next/font/google`) |

---

## Project Structure

```
app/
  layout.tsx              — Root layout, font loading, preconnect hints
  page.tsx                — Home: SiteNav + HeroSection + BossGrid
  globals.css             — Tailwind base, reveal animations, CSS variables
  bosses/[slug]/
    page.tsx              — Individual boss page (SSG, 14 static routes)

components/
  boss-model-scene.tsx    — Generic R3F canvas, MODEL_CONFIG, float + mouse parallax
  garrosh-scene.tsx       — Dedicated R3F scene for the home page hero (garrosh2.glb)
  boss-hero.tsx           — Boss page hero section (model, title, video thumbnail)
  boss-content.tsx        — All boss content sections (rule, mechanics, strat, abilities)
  boss-grid.tsx           — Home page boss grid with zone filter
  hero-section.tsx        — Home page hero (scroll parallax, Garrosh model)
  layout/site-nav.tsx     — Fixed nav, zone progress bar, boss popover

data/
  bosses.ts               — All 14 boss definitions (mechanics, strat, abilities, roles)

public/
  models/                 — All .glb boss models (WebP-compressed, Draco-compressed)
  draco/                  — Self-hosted Draco decoder (3 files, ~1MB total)
```

---

## Font Loading (current state)

```ts
Bebas_Neue:       weight: '400'
Barlow:           weight: ['400', '700', '800']
Barlow_Condensed: weight: ['400', '600', '700', '800']
```

CSS variables: `--font-bebas`, `--font-barlow`, `--font-barlow-condensed`

---

## 3D Models

All models stored at `public/models/*.glb`. Textures converted to WebP at quality 80 (~70% total size reduction). Draco-compressed. Draco decoder self-hosted at `public/draco/` — decoder path is `/draco/` in both `boss-model-scene.tsx` and `garrosh-scene.tsx`.

### MODEL_CONFIG (boss-model-scene.tsx)

| File | scale | posY | camZ | camY | fov | baseY |
|---|---|---|---|---|---|---|
| garrosh2.glb | 1.5 | -2.4 | 5 | 1.5 | 34 | -1.8 |
| waterelementalbosscorrupted.glb | 1.35 | -2.4 | 5 | 1.5 | 34 | -1.8 |
| shaboss.glb | 0.25 | -3.4 | 5 | 1.5 | 40 | -1.8 |
| shaboss_pride.glb | 0.4 | -4.4 | 5 | 1.5 | 100 | -1.8 |
| korkronprotodrake_protodragon_northrendred.glb | 0.5 | -3.0 | 8 | 1.5 | 60 | -2.0 |
| ironjuggernaut_dungeondoll.glb | 1.35 | -1.4 | 5 | 1.5 | 34 | -1.8 |
| orcsupersoldier.glb | 1.35 | -2.4 | 8 | 1.5 | 34 | -1.8 |
| hordearmoredtrex_01dark.glb | 0.6 | -3.0 | 8 | 1.5 | 34 | -2.0 |
| siegeengineer_doll_blackfuseskin.glb | 0.9 | -2.4 | 8 | 1.5 | 40 | -1.8 |

**DEFAULT_CONFIG fallback:** `scale: 1.35 / posY: -2.4 / camZ: 5 / camY: 1.5 / fov: 34 / baseY: -1.8`

### Tuning Reference

| Setting | Effect | Increment |
|---|---|---|
| `baseY` | Starting face direction | ±0.2 |
| `scale` | Model size | ±0.1 |
| `posY` | Up/down (more negative = lower) | ±0.3 |
| `fov` | Zoom (lower = tighter) | ±4 |
| `camZ` | Camera distance | ±0.5 |
| X offset (in JSX `position`) | Left/right position | ±0.3 |

Mouse sensitivity: `0.04` pitch, `0.06` yaw. Float: `sin(t * 0.7) * 0.08`.

---

## Boss Roster & Model Files

| # | Slug | Name | modelFile |
|---|---|---|---|
| 1 | immerseus | IMMERSEUS | waterelementalbosscorrupted.glb |
| 2 | fallen-protectors | FALLEN PROTECTORS | *(no model)* |
| 3 | norushen | NORUSHEN | shaboss.glb |
| 4 | sha-of-pride | SHA OF PRIDE | shaboss_pride.glb |
| 5 | galakras | GALAKRAS | korkronprotodrake_protodragon_northrendred.glb |
| 6 | iron-juggernaut | IRON JUGGERNAUT | ironjuggernaut_dungeondoll.glb |
| 7 | dark-shaman | KOR'KRON DARK SHAMAN | *(no model)* |
| 8 | general-nazgrim | GENERAL NAZGRIM | *(no model)* |
| 9 | malkorok | MALKOROK | orcsupersoldier.glb |
| 10 | spoils-of-pandaria | SPOILS OF PANDARIA | *(no model)* |
| 11 | thok | THOK | hordearmoredtrex_01dark.glb |
| 12 | siegecrafter-blackfuse | SIEGECRAFTER BLACKFUSE | siegeengineer_doll_blackfuseskin.glb |
| 13 | paragons-of-the-klaxxi | PARAGONS OF THE KLAXXI | *(no model)* |
| 14 | garrosh-hellscream | GARROSH HELLSCREAM | garrosh2.glb |

The home page hero uses `garrosh-scene.tsx` (dedicated component, same garrosh2.glb). All other boss pages use the generic `BossModelScene` from `boss-model-scene.tsx`.

### Adding a New Boss Model

1. Place `.glb` in `public/models/`
2. Add entry to `MODEL_CONFIG` in `components/boss-model-scene.tsx`
3. Set `modelFile` field on the boss object in `data/bosses.ts`
4. Start dev server, load the boss page, tune values via screenshots

---

## Netlify Config (netlify.toml — current state)

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

# GLB models — 1-year cache, correct MIME type
[[headers]]
  for = "/models/*.glb"
  Cache-Control = "public, max-age=31536000, immutable"
  Content-Type = "model/gltf-binary"

# Self-hosted Draco decoder — 1-year cache
[[headers]]
  for = "/draco/*"
  Cache-Control = "public, max-age=31536000, immutable"

# Next.js static assets — 1-year cache
[[headers]]
  for = "/_next/static/*"
  Cache-Control = "public, max-age=31536000, immutable"

# Other static assets — 1-day cache
[[headers]]
  for = "/static/*"
  Cache-Control = "public, max-age=86400"
```

Edge cache confirmed working — GLB models served in ~9ms from Netlify CDN. After first download, browser caches models locally for 1 year (zero re-downloads on repeat visits).

---

## next.config.ts (current state)

```ts
images: {
  remotePatterns: [{ protocol: 'https', hostname: 'img.youtube.com' }]
}
```

YouTube thumbnails optimized by Next.js image pipeline (WebP). `sizes="160px"` on the Image component in `boss-hero.tsx`. `<link rel="preconnect" href="https://img.youtube.com">` in `layout.tsx` head.

---

## Current Dependencies

```json
"dependencies": {
  "@react-three/drei": "^10.x",
  "@react-three/fiber": "^9.x",
  "clsx": "^2.x",
  "next": "^16.x",
  "react": "^19.x",
  "react-dom": "^19.x",
  "tailwind-merge": "^2.x",
  "three": "^0.184.x"
}
```

Everything else has been removed. No Spline, no framer-motion, no lucide-react, no class-variance-authority, no tailwindcss-animate.

---

## Optimizations Completed

### Model Compression (Phase 4)
- All 9 `.glb` files converted from embedded JPEG → WebP (quality 80) using `gltf-transform`
- Total: ~141 MB → ~42 MB (70% reduction)
- Command: `Get-ChildItem *.glb | ForEach-Object { gltf-transform webp $_.Name $_.Name --quality 80 }`

### Bandwidth & Bundle Cleanup
| Change | Impact |
|---|---|
| Removed 5 dead packages (Spline runtime, framer-motion, lucide-react, CVA, tailwindcss-animate) | Smaller JS bundle, 13 fewer transitive packages |
| Deleted dead scaffold files (splite.tsx, demo.tsx, spotlight.tsx, card.tsx) | No dead CSS classes scanned by Tailwind |
| Self-hosted Draco decoder in `public/draco/` | Eliminates gstatic.com external request on every boss page |
| Barlow weights trimmed (removed 300, 500, 600) | 3 fewer font files downloaded on first visit |
| Barlow Condensed weight 500 trimmed | 1 fewer font file |
| GLB MIME type fixed to `model/gltf-binary` | Correct Content-Type header |
| `garrosh-scene.tsx` Draco URL fixed | Was still hitting gstatic.com on home page (missed in first pass) |
| rAF throttle on HeroSection scroll listener | Prevents React re-render on every scroll pixel |
| YouTube thumbnails via Next.js image pipeline | WebP served, `sizes` hint added, preconnect in head |
| Removed dead keyframes from tailwind.config | No unused `@keyframes` CSS shipped |
| Untracked `.next/` from git | Cleaned ~50 build artifact files from repo |

---

## Dev Workflow

```powershell
# Kill zombie node processes first
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force

# Start dev server
cd "C:\Users\Owner\Claude Skills\spline-demo"
npm run dev
# Open http://localhost:3000

# Commit and push
git add -A
git commit -m "describe what changed"
git push
```

---

## Key Design Decisions

- **Cinematic, scroll-driven design** — Apple-level interaction design. Reveal animations on scroll, dramatic scale transitions, purposeful motion.
- **No Spline** — replaced with self-hosted React Three Fiber so models are served from our own CDN with no external runtime dependency.
- **SSG throughout** — all 14 boss pages statically generated at build time via `generateStaticParams`. Zero server compute per request.
- **3D model layout** — canvas extends to near full-width (`md:left-[20%]`) for cinematic bleed-behind-text effect. Gradient overlay keeps left text readable.
- **Reveal animations** — CSS class-based (`reveal`, `reveal-left`, `delay-1` through `delay-6`) driven by IntersectionObserver. Each observer disconnects after firing to minimize ongoing memory.
- **Scroll parallax** — HeroSection uses `requestAnimationFrame` throttled scroll listener to avoid re-rendering on every scroll pixel.
- **Font strategy** — only the weights actually used in components are loaded. Bebas Neue (headings), Barlow (body), Barlow Condensed (labels, UI).

---

## Typography & Readability (Phase 5 — current state)

All px-based font sizes have been scaled ×1.3 (rounded to nearest 0.5px) and opacity values on grey body text have been raised for legibility. Text shadow added to all low-opacity body text.

### CSS utility (globals.css)
```css
.ts { text-shadow: 0 1px 4px rgba(0,0,0,0.9); }
```
Applied to all grey/amber body text elements for perceived contrast boost.

### boss-content.tsx — font size reference (post-scale)

| Element | Size |
|---|---|
| Section labels (FIGHT OVERVIEW, STRATEGY, etc.) | 17px |
| THE ONE RULE label | 19.5px |
| Fight overview paragraph | 19.5px |
| Mechanic name | 15px |
| KEY badge | 10.5px |
| Mechanic description | 18px |
| Heroic callout text | 18px |
| "What Changes on Heroic" subtext | 17px |
| Role card note | 18px |
| Bloodlust/Heroism label | 12px |
| Bloodlust text | 19.5px |
| Phase accordion header | 15.5px |
| Phase role label (inline style) | 15.5px |
| Phase note | 18px |
| Ability name | 17px |
| Ability description | 18px |
| Ability child name | 13.5px |
| Ability child description | 17.5px |
| Ability phase group header | 14.5px |
| Boss nav Previous/Next label | 12px |
| Boss nav boss name | 18px |

### Opacity reference (post-update)

| Element | Opacity |
|---|---|
| Section labels | `/75` |
| Fight overview | `/70` |
| Mechanic descriptions | `/65` |
| Role card notes | `/65` |
| Phase notes | `/80` |
| Ability descriptions | `/68` |
| Ability child descriptions | `/58` |
| Heroic callout numbers | `rgba(196,138,40,0.45)` |
| Heroic callout text | `rgba(220,165,50,0.95)` |
| ALL role label | `rgba(255,255,255,0.65)` |

### site-nav.tsx — font size reference (post-scale)

| Element | Size |
|---|---|
| "10-Man · Tier 16" badge | 17px |
| Zone name in header | 18px |
| Boss name in header | 22px |
| Overview fallback text | 17px |
| All Bosses button | 18px |
| Discord button | 15.5px |
| Zone headers in popover | 17px |
| Boss name in popover | 19.5px |
| Boss subtitle in popover | 15.5px (italic, `/75` opacity) |
| 3D badge | 10.5px |

### boss-hero.tsx — font size reference (post-scale)

| Element | Size |
|---|---|
| Back / breadcrumb links | 14.5px |
| Boss eyebrow (Boss 09) | 15.5px |
| Setup pills (Tanks, Healers, DPS) | 17px |
| Video Guide label | 12px |
| Watch on YouTube | 18px |
| Full Heroic Walkthrough → | 14.5px |

### Icon decisions
- Tank icon: 🛡️ (used in both RoleCard and hero setup pills)
- Healer icon: 💚
- DPS icon: 🎯
