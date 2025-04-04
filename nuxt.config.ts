export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',
  app: {
    head: {
      title: 'My Nuxt 3 Site',
      meta: [
        { hid: 'description', name: 'description', content: "The Rody's Missions page" },
        { hid: 'og:title', property: 'og:title', content: 'The Rodys' },
        { hid: 'og:description', property: 'og:description', content: "The Rody's Missions page" },
        { hid: 'og:url', property: 'og:url', content: 'https://therodys.com' },
        { hid: 'og:image', property: 'og:image', content: 'https://dev----wherewevebeen.therodys.pages.dev/FinalTouch169DSC09811_Croped16x9_smallest.jpg' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
      ],
    },
  },

  "nitro": {
        "dist": {
            dir: 'dist',
            serverDir: 'dist/server',
            publicDir: 'dist/public'
        }
    },

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
  ],

  compatibilityDate: '2024-10-31',
})