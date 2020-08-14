export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  generate: {
    fallback: true,
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_title || '',
    meta: [
      { charset: 'utf-8' },
      { lang: 'en' },
      {
        keywords: [
          'front',
          'frontend',
          'developer',
          'fronted developer',
          'website design',
          'website development',
          'software engineer',
          'frontend engineer',
          'paros',
          'javascript',
          'typescript',
          'reactjs',
          'vuejs',
          'nuxtjs',
          'gatsbyjs',
        ],
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: process.env.npm_package_title,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: process.env.npm_package_description,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Antonis Skandalis | Frontend Engineer',
      },
      { hid: 'og:url', name: 'og:url', content: 'https://www.antska.xyz' },
      // { hid: 'og:image', name: 'og:image', content: this.item.coverImage },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hide: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: process.env.npm_package_title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: process.env.npm_package_description,
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@ant_skandalis',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@ant_skandalis',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/custom.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    'nuxt-webfontloader',
    'nuxt-purgecss',
    [
      '@aceforth/nuxt-netlify',
      {
        mergeSecurityHeaders: true,
      },
    ],
    [
      '@nuxtjs/fontawesome',
      {
        icons: {
          brands: [
            'faLinkedinIn',
            'faTwitter',
            'faFacebook',
            'faGithub',
            'faInstagram',
          ],
        },
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    '@nuxtjs/pwa',
    ['@nuxtjs/sitemap', { hostname: 'https://www.antska.xyz' }],
    '@nuxtjs/google-analytics',
    '@nuxtjs/style-resources',
    '@nuxtjs/robots',
    ['bootstrap-vue/nuxt', { css: false, bvCSS: false }],
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'xs',
        breakpoints: {
          xs: 321,
          sm: 426,
          md: 769,
          lg: 1025,
          xl: 1441,
        },
      },
    ],
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      plugins: {
        precss: {},
        autoprefixer: {},
      },
    },
  },
  webfontloader: {
    google: {
      families: ['Teko:wght@300;400;500;600&display=swap'],
    },
  },
  loadingIndicator: {
    name: 'cube-grid',
    color: '#2f3d6c',
    background: '#d8d8d8',
  },
  loading: {
    color: '#2f3d6c',
    height: '5px',
  },
  googleAnalytics: {
    id: 'UA-87594841-8',
    dev: false,
  },
};
