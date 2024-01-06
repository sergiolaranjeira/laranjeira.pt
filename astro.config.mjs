import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown'
export default defineConfig({
  site: 'https://laranjeira.pt/',
  integrations: [
    tailwind(),  
    sitemap(), 
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    })
  ],
  build: {
    assetsPrefix: 'https://www.laranjeira.pt/2024'
  }
});


