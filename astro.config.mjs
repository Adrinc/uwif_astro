import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import * as dotenv from "dotenv";
dotenv.config();
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://Adrinc.github.io',
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel(),
  i18n:{
    defaultLocale: "en",
    locales: ["es", "en"],
    routing:{
      prefixDefaultLocale: false
    }
  }
});