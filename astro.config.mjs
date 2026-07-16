import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: { host: '0.0.0.0', allowedHosts: ['host.docker.internal', 'labhumanidades.udistrital.edu.co'] },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});