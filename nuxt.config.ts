export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

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

})