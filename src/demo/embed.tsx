import React from 'react'
import { createRoot } from 'react-dom/client'
import { AgilityProvider, Button, Card, CardDescription, CardHeader, CardTitle, Badge, Input, Switch, Slider, Icon, Reveal } from '../agility'
import { packs } from '../agility/packs'
import type { PackId } from '../agility/foundation/types'
import './index.css'
const id = (new URLSearchParams(location.search).get('pack') || 'liquid') as PackId
const pack = packs[id] || packs.liquid
function Embed() { return <AgilityProvider pack={pack}><div className="min-h-screen bg-[var(--ag-canvas)] p-6"><Reveal><div className="mb-5 flex items-center justify-between"><div><Badge dot>{pack.name} pack</Badge><h1 className="mt-3 text-3xl tracking-[-.06em]">Embedded build.</h1></div><Icon name="bolt" className="text-[var(--ag-c)]" size={28}/></div><Card><CardHeader><CardTitle>Motion-ready controls</CardTitle><CardDescription>Same source, iframe-safe surface.</CardDescription></CardHeader><div className="grid gap-4"><Input label="Your email" placeholder="you@example.com" icon="letter"/><Slider label="Signal" defaultValue={[72]} showValue/><Switch defaultChecked label="Enable interactions"/><Button icon="rocket" iconRight="arrow-right">Launch</Button></div></Card></Reveal></div></AgilityProvider> }
createRoot(document.getElementById('root')!).render(<Embed />)
