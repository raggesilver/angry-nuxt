// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  hub: {
    database: true,
  },

  modules: [
    "shadcn-nuxt",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/seo",
    "@nuxthub/core",
  ],

  shadcn: {
    componentDir: "./app/components/ui",
    prefix: "",
  },

  css: ["@unocss/reset/tailwind-compat.css", "~/assets/css/main.css"],

  site: {
    url: "https://angrynuxt.pages.dev",
    name: "Angry Nuxt",
    description: "A Nuxt.js template",
    defaultLocale: "en", // Not needed if you install @nuxtjs/i18n
  },

  // If this website is being deployed in a preview or staging environment
  // you'll likely want to disable indexing so that it doesn't show up on
  // search engines.
  // https://nuxtseo.com/robots/guides/disable-indexing
});
