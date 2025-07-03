import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const dev = process.env.NODE_ENV !== 'production';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // build: {
  //   outDir: './extension',
  //   emptyOutDir: false,
  // },
})
