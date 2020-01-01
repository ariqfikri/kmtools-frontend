import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'http://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.css',
        rel: 'stylesheet'
      },
      {
        href:
          'http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.css',
        rel: 'stylesheet'
      }
    ],
    script: [
      {
        src: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js'
      },
      {
        src: 'http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js'
      },
      {
        src:
          'http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/components-register'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@tui-nuxt/editor'
  ],
  tui: {
    editor: {}
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://api.wissen.team/',
    credentials: false
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: false
    },

    strategies: {
      local: {
        endpoint: {
          login: {
            url: 'auth/login',
            method: 'post',
            propertyName: 'api_token'
          },
          logout: { url: 'auth/logout', method: 'post' },
          user: { url: 'user', method: 'get', propertyName: 'user' }
        }
      }
    }
  },

  // router: {
  //   middleware: ['auth']
  // },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
