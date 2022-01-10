export default {
  ssr: false,
  head: {
    title: "nuxt-asamovie",
    htmlAttrs: {
      lang: "en",
    },
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: ""
      },
      {
        name: "format-detection",
        content: "telephone=no"
      },
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css",
        integrity: "sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==",
        crossorigin: "anonymous",
        referrerpolicy: "no-referrer",
      },
    ],
  },
  loading: false,
  css: ["@/assets/css/App.css"],
  plugins: [{
      ssr: false,
      src: "@/plugins/Api",
    },
    {
      ssr: false,
      src: "@/plugins/mixin",
    },
    {
      ssr: false,
      src: "@/plugins/swiper.js",
    },
    {
      ssr: false,
      src: "@/plugins/checkAuthenticate.js",
    },
    {
      ssr: false,
      src: "@/plugins/common.service.js",
    },
    ///services
    {
      ssr: false,
      src: "@/services/Auth",
    },
    {
      ssr: false,
      src: "@/services/Category",
    },
    {
      ssr: false,
      src: "@/services/country",
    },
    {
      ssr: false,
      src: "@/services/Movie",
    },
    {
      ssr: false,
      src: "@/services/comment",
    }
    
  ],
  components: true,
  buildModules: [
    // '@nuxtjs/eslint-module',
    "@nuxtjs/tailwindcss",
  ],
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: "http://localhost:7600/api/v1",
  },
  build: {
    loaders: {
      sass: {
        implementation: require("sass"),
      },
      scss: {
        implementation: require("sass"),
      },
    },
  },
}
