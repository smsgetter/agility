# Agility.

A shadcn-compatible React element library with six visual packs.

**Ark UI primitives → pack recipe → motion profile → auto-variations.**

## Stack

React 19 · Ark UI · Tailwind CSS v4 · Motion · GSAP/Three.js ready · Iconify Solar + Pixelarticons.

## Packs

Liquid (Apple-style glass) · Matte (quiet luxury) · 8-Bit (stepped pixel) · Micro Noise (analog grain) · Abstract (graphic offsets) · Typical (production baseline).

## Install

```bash
npm i @ark-ui/react motion @iconify/react clsx tailwind-merge
```

```tsx
import { AgilityProvider, Button } from '@/agility'
import { liquid } from '@/agility/packs'
import '@/agility/styles/agility.css'

<AgilityProvider pack={liquid} tone="violet">
  <Button icon="rocket" iconRight="arrow-right">Ship it</Button>
</AgilityProvider>
```

Every element accepts `tone`, `border`, `radius`, `size`, and `surface`. Reduced motion is automatic. `embed.html` is iframe-safe; the build also emits `dist/wc/agility-embed.js` for `<agility-embed pack="liquid" />`.

## File tree

```text
src/agility/foundation/  # tokens, recipes, variants, motion, Iconify, Portal
src/agility/packs/       # six visual systems
src/agility/elements/    # 37 Ark-powered elements
src/agility/styles/      # token + effect cascade
src/demo/                # showcase + iframe demo
src/wc/                  # standalone custom element
```

MIT