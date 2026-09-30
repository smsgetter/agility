import React from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { AgilityProvider, Button, Card, CardDescription, CardHeader, CardTitle, Badge } from '../agility'
import { packs } from '../agility/packs'
import type { PackId } from '../agility/foundation/types'
import '../demo/index.css'
class AgilityEmbed extends HTMLElement { private root?: Root; connectedCallback() { const shadow = this.attachShadow({ mode: 'open' }); const mount = document.createElement('div'); shadow.appendChild(mount); const id = (this.getAttribute('pack') || 'liquid') as PackId; const pack = packs[id] || packs.liquid; this.root = createRoot(mount); this.root.render(<AgilityProvider pack={pack}><Card><CardHeader><Badge dot>{pack.name}</Badge><CardTitle>{this.getAttribute('title') || 'Agility. embed'}</CardTitle><CardDescription>Standalone Web Component, built by GitHub Actions.</CardDescription></CardHeader><Button icon="rocket">Ship it</Button></Card></AgilityProvider>) } disconnectedCallback() { this.root?.unmount() } }
customElements.define('agility-embed', AgilityEmbed)
