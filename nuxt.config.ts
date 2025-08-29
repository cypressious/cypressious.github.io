// Nuxt 3 configuration for migrating from Gridsome
// Minimal setup to enable @nuxt/content and serve existing static/ assets

export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  content: {
    highlight: {
      // pick a simple theme for code blocks
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      }
    }
  },
  nitro: {
    // Keep using the existing `static/` directory as a public assets source (for CNAME and slides)
    publicAssets: [
      { dir: 'static' }
    ]
  },
  app: {
    head: {
      title: 'Kirill Rakhman',
      meta: [
        { name: 'description', content: 'Personal Website & Blog of Kirill Rakhman' }
      ]
    }
  },
  typescript: {
    shim: false
  }
})
