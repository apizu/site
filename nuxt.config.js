export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    {
      src: "@/assets/css/highlightjs/ocean.css",
      lang: "css"
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/vue-highlightjs"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/router"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        "postcss-url": false,
        "postcss-nested": {},
        "postcss-responsive-type": {},
        "postcss-hexrgba": {}
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
