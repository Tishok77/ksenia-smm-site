import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works both at a domain root and when published
// from a GitHub Pages project path (https://user.github.io/repo-name/).
// See README.md → "Публикация на GitHub Pages".
export default defineConfig({
  base: './',
  plugins: [react()],
})
