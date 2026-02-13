import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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
