// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-27",
  devtools: { enabled: true },

  hub: {
    database: true,
    workers: true,
    databaseMigrationsDirs: ["./server/db/drizzle"],
  },

  modules: [
    "shadcn-nuxt",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/seo",
    "@nuxthub/core",
    "@nuxt/eslint",
  ],

  shadcn: {
    componentDir: "./app/components/ui",
    prefix: "",
  },

  css: ["@unocss/reset/tailwind-compat.css", "~/assets/css/main.css"],

  site: {
    url: "https://angry-nuxt.pages.dev",
    name: "Angry Nuxt",
    description: "A Nuxt.js template",
    defaultLocale: "en", // Not needed if you install @nuxtjs/i18n
  },

  // If this website is being deployed in a preview or staging environment
  // you'll likely want to disable indexing so that it doesn't show up on
  // search engines.
  // https://nuxtseo.com/robots/guides/disable-indexing
});
