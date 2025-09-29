import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [
    react(),
    tailwind({ applyBaseStyles: true }),
  ],
  output: 'static',
  server: { port: 4321 }
})
