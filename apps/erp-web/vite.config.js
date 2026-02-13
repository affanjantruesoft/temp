import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packagesDir = path.resolve(__dirname, '../../packages');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@trusoft/tokens/tokens.css': path.resolve(packagesDir, 'tokens/tokens.css'),
      '@trusoft/tokens/tailwind.preset.cjs': path.resolve(packagesDir, 'tokens/tailwind.preset.cjs'),
      '@trusoft/tokens': path.resolve(packagesDir, 'tokens/src/index.js'),
      '@trusoft/api': path.resolve(packagesDir, 'api/src/index.js'),
      '@trusoft/auth': path.resolve(packagesDir, 'auth/src/index.js'),
      '@trusoft/events': path.resolve(packagesDir, 'events/src/index.js'),
      '@trusoft/ui': path.resolve(packagesDir, 'ui/src/index.js'),
      '@trusoft/utils': path.resolve(packagesDir, 'utils/src/index.js'),
    },
  },
  optimizeDeps: {
    include: ['react-grid-layout', 'react-resizable', 'react-draggable'],
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
