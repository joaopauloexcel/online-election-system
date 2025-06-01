/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./setupTests.ts'],
    mockReset: false,
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      exclude: [
        'src/presentation/pages/Components',
        'src/presentation/theme',
        'src/presentation/router',
        'src/presentation/store',
        'src/**/mocks',
        'src/domain',
        'src/types',
        'src/assets',
        'src/config',
        '**/index.ts',
        '**/*.styles.ts',
        '**/*.types.ts',
        '**/*.mock.ts',
        'src/infra/msal/msalInstance.ts',
        'src/App.tsx',
        'src/main.tsx',
        'src/main.definitions.ts',
        'src/app.definitions.ts',
        'src/vite-env.d.ts'
      ]
    }
  },
  server: {
    port: 3000
  }
})
