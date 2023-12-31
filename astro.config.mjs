import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://uwif_astro_web.github.io',
  integrations: [tailwind()]
});