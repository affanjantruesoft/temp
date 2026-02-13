import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@trusoft/tokens': path.resolve(__dirname, '../../packages/tokens/src/index.js'),
      '@trusoft/tokens/tokens.css': path.resolve(__dirname, '../../packages/tokens/tokens.css'),
      '@trusoft/tokens/tailwind.preset.cjs': path.resolve(__dirname, '../../packages/tokens/tailwind.preset.cjs'),
      '@trusoft/api': path.resolve(__dirname, '../../packages/api/src/index.js'),
      '@trusoft/auth': path.resolve(__dirname, '../../packages/auth/src/index.js'),
      '@trusoft/events': path.resolve(__dirname, '../../packages/events/src/index.js'),
      '@trusoft/ui': path.resolve(__dirname, '../../packages/ui/src/index.js'),
      '@trusoft/utils': path.resolve(__dirname, '../../packages/utils/src/index.js'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react', 'react-grid-layout', 'react-resizable', 'react-draggable'],
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  ssr: {
    noExternal: ['react-grid-layout', 'react-resizable'],
  },
});
