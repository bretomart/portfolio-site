import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://bretomart.github.io',
  base: '/portfolio-site',
  vite: {
    plugins: [tailwindcss()],
  },
});
