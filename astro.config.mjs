import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown'
export default defineConfig({
  site: 'https://laranjeira.pt/',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(), 
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    })
  ]
});