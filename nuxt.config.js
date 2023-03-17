export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Evgeny Dolgopolov',
    htmlAttrs: {
      lang: 'en',
    },
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;600&Fira+Code:wght@300;400;500;600&display=swap',
      },
    ],
  },
  pwa: {
    meta: {
      name: 'Evgeny Dolgopolov',
      author: 'Evgeny Dolgopolov',
      description:
        'Evgeny Dolgopolov is a frontent developer from Tyumen, specializing in creating user-friendly interfaces, attractive and responsive websites and mobile applications.',
      theme_color: '#ffc40d',
      lang: 'en',
      ogTitle: 'Portfolio | Evgeny Dolgopolov',
    },
    manifest: {
      name: 'Portfolio | Evgeny Dolgopolov',
      lang: 'en',
      description:
        'Evgeny Dolgopolov is a frontent developer from Tyumen, specializing in creating user-friendly interfaces, attractive and responsive websites and mobile applications.',
      theme_color: '#ffc40d',
      background_color: '#ffc40d',
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
