// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from "./package.json";
import pallete from "./theme/pallete";
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Dashboard",
      meta: [
        { hid: "title", name: "title", content: "Dashboard" },
        {
          hid: "description",
          name: "description",
          content: "Dashboard",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: ["Dashboard", "np"].join(","),
        },
      ],
    },
  },
  css: ["@/assets/app.scss"],
  modules: [
    "nuxt-quasar-ui",
    "@pinia/nuxt",
    "nuxt-lodash",
    "@nuxtjs/i18n",
    "dayjs-nuxt",
  ],

  quasar: {
    plugins: ["Loading"],
    config: {
      loading: {},
      brand: pallete,
    },
  },
  lodash: {
    prefix: "_",
  },
  i18n: {
    strategy: "no_prefix",
    defaultLocale: "el",
    lazy: true,
    langDir: "./locales",
    locales: [
      { code: "en", file: "en.json" },
      { code: "el", file: "el.json" },
    ],
  },
  runtimeConfig: {
    public: {
      version: pkg.version,
      keycloakUrl: process.env.KEYCLOAK_URL,
      keycloakRealm: process.env.KEYCLOAK_REALM,
      keycloakClientId: process.env.KEYCLOAK_CLIENT_ID,
    },
  },
});
