import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // relative paths — works whether the site is served from the domain root or a GitHub Pages subfolder
});
