import { readFileSync } from 'node:fs'

import type {} from './.nuxt/nuxt.node.d.ts'
const pkg: { displayName: string; description: string } = JSON.parse(readFileSync('./package.json', 'utf-8'))
export default defineNuxtConfig({
  compatibilityDate: '2025-11-01',
  srcDir: 'src',
  serverDir: 'src/server',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@vite-pwa/nuxt'],
  colorMode: {
    classSuffix: ''
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: pkg.displayName,
      short_name: pkg.displayName,
      description: pkg.description,
      theme_color: '#09090b',
      background_color: '#09090b',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      icons: [
        { src: '/icon-180.png', sizes: '180x180', type: 'image/png' },
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,ico,woff2}']
    }
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/icon-180.png' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true,
    typeCheck: true
  },
  nitro: {
    vercel: {
      functions: {
        maxDuration: 300
      }
    }
  }
})
