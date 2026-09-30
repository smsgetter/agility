import { defineConfig } from 'vite'

// Standalone Web Component → dist/wc/agility-embed.js (zero runtime deps)
export default defineConfig({
  publicDir: false,
  build: {
    target: 'es2022',
    outDir: 'dist/wc',
    emptyOutDir: true,
    lib: { entry: 'src/wc/agility-embed.ts', formats: ['es'], fileName: () => 'agility-embed.js' },
  },
})
