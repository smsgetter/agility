import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { AgilityProvider, Badge, Button, Card, CardDescription, CardHeader, CardTitle, Icon, Input, Reveal, Slider, Switch } from '../agility'
import { packs } from '../agility/packs'
import type { PackId } from '../agility/foundation/types'
import './index.css'

const packNames = Object.keys(packs) as PackId[]

function App() {
  const [activePack, setActivePack] = useState<PackId>('liquid')
  const pack = packs[activePack]

  return (
    <AgilityProvider pack={pack}>
      <main className="min-h-screen overflow-hidden bg-[var(--ag-canvas)] text-[var(--ag-fg)]">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
          <header className="flex items-center justify-between border-b border-white/10 pb-5">
            <a href="#top" className="text-lg font-semibold tracking-[-.05em]">Agility<span className="text-[var(--ag-c)]">.</span></a>
            <div className="flex items-center gap-2 text-xs text-[var(--ag-muted)]"><span className="size-2 rounded-full bg-emerald-400" /> 37 elements · 6 packs</div>
          </header>

          <section id="top" className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <Reveal>
              <Badge dot>Design system / 2026</Badge>
              <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-[.98] tracking-[-.075em] sm:text-7xl lg:text-8xl">One system.<br /><span className="text-[var(--ag-c)]">Six personalities.</span></h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--ag-muted)] sm:text-lg">A motion-ready component system built on Ark UI. Pick a pack, tune the feel, and ship a cohesive interface.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Button icon="bolt" iconRight="arrow-right">Explore components</Button><Button variant="outline">Read the docs</Button></div>
            </Reveal>
            <Card interactive className="relative min-h-72 justify-between overflow-hidden">
              <div className="absolute -right-12 -top-20 size-64 rounded-full bg-[var(--ag-c)] opacity-20 blur-3xl" />
              <div className="relative flex items-center justify-between"><Badge>{pack.name} pack</Badge><Icon name="sparkles" size={22} className="text-[var(--ag-c)]" /></div>
              <div className="relative"><p className="text-sm text-[var(--ag-muted)]">Current style</p><h2 className="mt-2 text-4xl font-medium tracking-[-.06em]">{pack.name}</h2><p className="mt-2 max-w-sm text-sm text-[var(--ag-muted)]">Switch packs below to update the entire component surface instantly.</p></div>
            </Card>
          </section>

          <section className="border-t border-white/10 py-10">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs uppercase tracking-[.18em] text-[var(--ag-muted)]">Style packs</p><h2 className="mt-2 text-2xl font-medium tracking-[-.05em]">Choose a direction</h2></div><span className="text-xs text-[var(--ag-muted)]">Foundation → Pack → Motion → Variations</span></div>
            <div className="flex flex-wrap gap-2">{packNames.map((name) => <button key={name} onClick={() => setActivePack(name)} className={`rounded-full border px-4 py-2 text-sm capitalize transition-colors ${activePack === name ? 'border-[var(--ag-c)] bg-[var(--ag-c)] text-black' : 'border-white/15 text-[var(--ag-muted)] hover:border-white/40 hover:text-white'}`}>{name === 'bit8' ? '8-bit' : name}</button>)}</div>
          </section>

          <section className="grid gap-5 border-t border-white/10 py-10 lg:grid-cols-2">
            <Card>
              <CardHeader><CardTitle>Controls with character</CardTitle><CardDescription>Accessible primitives, styled by the active pack.</CardDescription></CardHeader>
              <div className="grid gap-5"><Input label="Email address" placeholder="you@example.com" icon="letter" /><Slider label="Motion intensity" defaultValue={[72]} showValue /><Switch defaultChecked label="Enable interactions" /></div>
              <div className="flex flex-wrap gap-3"><Button icon="rocket" iconRight="arrow-right">Try it</Button><Button variant="outline">Secondary</Button></div>
            </Card>
            <Card className="justify-between">
              <CardHeader><CardTitle>Designed to move</CardTitle><CardDescription>Micro-interactions follow the pack's motion profile.</CardDescription></CardHeader>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{['Color', 'Gradient', 'Shader', 'Active', 'Dot grid', 'Line grid'].map((item, i) => <div key={item} className="rounded-2xl border border-white/10 p-4"><div className="mb-4 h-12 rounded-xl" style={{ background: i % 2 ? 'linear-gradient(135deg, var(--ag-c), transparent)' : 'var(--ag-surface)' }} /><span className="text-xs text-[var(--ag-muted)]">{item}</span></div>)}</div>
              <p className="text-xs text-[var(--ag-muted)]">React · Motion · Tailwind · GSAP · Three.js · Solar icons</p>
            </Card>
          </section>
          <footer className="flex flex-wrap justify-between gap-3 border-t border-white/10 py-6 text-xs text-[var(--ag-muted)]"><span>Agility. · Open design system</span><span>Foundation → Pack → Motion → Auto-variations</span></footer>
        </div>
      </main>
    </AgilityProvider>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
