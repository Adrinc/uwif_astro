import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import * as dotenv from "dotenv";
dotenv.config();
import react from "@astrojs/react";

import node from '@astrojs/node';


export default defineConfig({
  site: 'https://u-wifi.com',
  integrations: [tailwind(), react()],
  output: "server",
  adapter: node({
    mode: 'standalone',
  }),
  i18n:{
    defaultLocale: "en",
    locales: ["es", "en"],
    routing:{
      prefixDefaultLocale: false
    }
  }
});