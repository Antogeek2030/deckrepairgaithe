// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://deckrepairgaithersburgmd.com',
  integrations: [sitemap(), mdx()],
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
