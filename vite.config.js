import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Otimizações de performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    // Chunk splitting para melhor cache
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['lucide-react', '@headlessui/react', '@heroicons/react'],
          'form-vendor': ['react-hook-form'],
          'helmet': ['react-helmet-async'],
          'carousel': ['swiper'],
        },
      },
    },
    // Otimizar tamanho dos assets
    assetsInlineLimit: 4096,
    // CSS code splitting
    cssCodeSplit: true,
    // Source maps apenas em desenvolvimento
    sourcemap: false,
    // Otimizar chunk size
    chunkSizeWarningLimit: 1000,
    // Reportar tamanho comprimido
    reportCompressedSize: true,
  },
  // Otimizações de servidor de desenvolvimento
  server: {
    headers: {
      'Cache-Control': 'public, max-age=3600',
    },
  },
  // Otimizações de preview
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=3600',
    },
  },
  // Otimizações de resolução de módulos
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})
