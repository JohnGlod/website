import { defineNuxtConfig } from 'nuxt';
import { resolve } from 'path';
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  nitro: {
    preset: 'stormkit'
  },

  alias: {
    images: resolve(__dirname, './assets/images'),
    style: resolve(__dirname, './assets/style'),
    data: resolve(__dirname, './assets/other/data'),
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: 'portfolio',
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Евгений Долгополов — frontent-developer' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;600&family=My+Soul&display=swap',
        },
      ],
    },
  },

  typescript: {
    strict: true,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.scss'],
  /*   transition: {
    name: 'fade',
    mode: 'out-in'
  }, */
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
});
