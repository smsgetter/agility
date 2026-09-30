import { mkdir, writeFile } from 'node:fs/promises'
const elements = ['button','icon-button','badge','card','input','textarea','switch','checkbox','radio-group','slider','select','tabs','accordion','dialog','popover','tooltip','menu','avatar','progress','segment-group','toggle-group','number-input','pin-input','rating','pagination','tags-input','clipboard','kbd','separator','alert','stat','skeleton','navbar','marquee','dock','spotlight-card','hover-card']
const packs = ['liquid','matte','bit8','noise','abstract','typical']
await mkdir('dist', { recursive: true })
await writeFile('dist/registry.json', JSON.stringify({ name:'agility', version:'0.1.0', framework:'react', foundation:'@ark-ui/react', styling:'tailwindcss-v4', motion:['motion','gsap','three'], icons:'iconify:solar', elements:elements.map(name => ({ name, type:'registry:ui', files:[`src/agility/elements/${name}.tsx`] })), packs, variationAxes:['tone','border','radius','size','surface'], embed:{ iframe:'embed.html', webComponent:'dist/wc/agility-embed.js' } }, null, 2))
console.log(`registry: ${elements.length} elements, ${packs.length} packs`)
