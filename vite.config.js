import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const REPO = 'bumblebee-landing'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? `/${REPO}/` : '/',
}))
