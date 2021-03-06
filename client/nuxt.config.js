export default {

  target: 'static',

  head: {
    title: 'Bounce | Find an outdoor basketball court near you!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
    { 
      src: '~/plugins/flash-message.js', mode: 'client' 
    }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true,
    }
  },
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/axios',
  ],

  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  }
}
