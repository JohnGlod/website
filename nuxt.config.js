export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Евгений Долгополов',
    htmlAttrs: {
      lang: 'ru',
    },
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;600&family=My+Soul&display=swap',
      },
    ],
  },
  pwa: {
    meta: {
      name : 'Евгений Долгополов',
      author : 'Евгений Долгополов',
      description: 'Евгений Долгополов — frontent-developer из Тюмени, специализирующийся на создании удобных пользовательских интерфейсов, привлекательных и отзывчивых веб-сайтов и мобильных приложений.',
      theme_color: '#ffc40d',
      lang: 'ru',
      ogTitle: 'Сайт-визитка | Евгений Долгополов',
    },
    manifest: {
      name: "Мой личный сайт-визитка",
      lang: 'ru',
      description: "Евгений Долгополов — frontent-developer из Тюмени, специализирующийся на создании удобных пользовательских интерфейсов, привлекательных и отзывчивых веб-сайтов и мобильных приложений.",
      theme_color: '#ffc40d',
      background_color : '#ffc40d',
    }
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
