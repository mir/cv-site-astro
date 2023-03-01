import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://mir.github.io',
  base: '/cv-site-astro',
  integrations: [tailwind()]
});