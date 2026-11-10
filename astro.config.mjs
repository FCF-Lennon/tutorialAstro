// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://lighthearted-gingersnap-1a505e.netlify.app/',
  integrations: [preact()]
});