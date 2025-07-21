import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// TODO: добавить алиасы

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/t1-task-manager',
})
