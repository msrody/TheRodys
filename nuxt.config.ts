export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',
    "nitro": {
        "output": {
            dir: 'output',
            serverDir: 'output/server',
            publicDir: 'output/public'
        }
    },
  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
  ]
})
