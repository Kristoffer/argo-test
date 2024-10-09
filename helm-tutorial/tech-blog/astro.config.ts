//import { defineConfig, passthroughImageService } from 'astro/config';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  //  image: {
  //    service: passthroughImageService()
  //  },
  // used to generate images
  site: process.env.VERCEL_ENV === 'production' ? 'https://brutal.elian.codes/' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/` : 'https://localhost:3000/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({
    injectReset: true
  })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});