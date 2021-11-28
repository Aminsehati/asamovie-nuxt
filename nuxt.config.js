export default {
  head: {
    title: "nuxt-asamovie",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css",
        integrity:
          "sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==",
        crossorigin: "anonymous",
        referrerpolicy: "no-referrer",
      },
    ],
  },

  css: ["@/assets/css/App.css"],

  plugins: [],

  components: true,
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    "@nuxtjs/tailwindcss",
  ],
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],
  axios: {},
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
};
