import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown'
export default defineConfig({
  site: 'https://laranjeira.pt/',
  base: '/2024',
  integrations: [
    tailwind(),  
    sitemap(), 
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    })
  ]
});


