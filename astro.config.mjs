import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Nandomoreno-sudo.github.io',
  base: '/mallorcacanyons',
  trailingSlash: 'never',
  server: {
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
