// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  components: [
    { path: "~/components", pathPrefix: false },
    { path: "~/components/ui", pathPrefix: false },
  ],

  plugins: ["@/plugins/pinia-persistedstate.js"],

  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/color-mode",
      {
        preference: "system",
        fallback: "light",
        classSuffix: "",
      },
    ],
    "nuxt-svgo",
    "@nuxtjs/i18n",
  ],

  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },

  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    contactToEmail: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
    public: {
      NUXT_PUBLIC_API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL,
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    },
  },

  i18n: {
    strategy: "no_prefix",
    langDir: "../locales",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      fallbackLocale: "uz",
      alwaysRedirect: true,
    },
    locales: [
      { code: "uz", file: "uz/uz-UZ.json", language: "uz" },
      { code: "kril", file: "uz_cyr/cr-CR.json", language: "kril" },
      { code: "ru", file: "ru/ru-RU.json", language: "ru" },
      { code: "en", file: "en/en-EN.json", language: "en" },
      { code: "ko", file: "ko/ko-KR.json", language: "ko" },
    ],
    defaultLocale: "uz",
  },

  ssr: true,

  svgo: {
    componentPrefix: "icon",
    autoImportPath: "./assets/icons/",
    defaultImport: "component",
    svgoConfig: {
      multipass: false, // Отключаем многоходовую оптимизацию
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              // Отключаем ВСЕ плагины оптимизации
              removeDoctype: false,
              removeXMLProcInst: false,
              removeComments: false,
              removeMetadata: false,
              removeEditorsNSData: false,
              cleanupIds: false,
              convertColors: false,
              convertPathData: false,
              convertTransform: false,
              removeUnknownsAndDefaults: false,
              removeNonInheritableGroupAttrs: false,
              removeUselessStrokeAndFill: false,
              removeUnusedNS: false,
              cleanupNumericValues: false,
              moveElemsAttrsToGroup: false,
              moveGroupAttrsToElems: false,
              collapseGroups: false,
              mergePaths: false,
              convertShapeToPath: false,
              sortAttrs: false,
              removeTitle: false,
              removeDesc: false,
              removeEmptyContainers: false,
              removeViewBox: false,
              cleanupEnableBackground: false,
              removeHiddenElems: false,
              removeEmptyText: false,
              inlineStyles: false,
              minifyStyles: false,
            },
          },
        },
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "Next Spot | Yaponiya bozoriga kirish — Lead the Frontier",
      titleTemplate: "%s | Next Spot",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        { name: "theme-color", content: "#1a3fbb" },
        {
          name: "description",
          content:
            "Next Spot- A trusted business bridge between Japan and Uzbekistan.",
        },
        {
          name: "keywords",
          content:
            "Next Spot, NextSpot, next spot, nextspot, nextspot.uz, Yaponiya biznes, O'zbekiston Yaponiya, bozorga kirish, investitsiya, hamkorlik",
        },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Next Spot" },
        // Open Graph
        { property: "og:title", content: "Next Spot | Lead the Frontier" },
        { property: "og:site_name", content: "Next Spot" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://nextspot.uz/" },
        {
          property: "og:description",
          content:
            "Next Spot- A trusted business bridge between Japan and Uzbekistan.",
        },
        { property: "og:image", content: "https://nextspot.uz/images/logo2.png" },
        { property: "og:locale", content: "uz_UZ" },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Next Spot | Lead the Frontier" },
        {
          name: "twitter:description",
          content: "Next Spot — Yaponiya bozoriga kirish bo'yicha professional xizmatlar.",
        },
        { name: "twitter:image", content: "https://nextspot.uz/images/logo2.png" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/images/logo2.png" },
        { rel: "canonical", href: "https://nextspot.uz/" },
      ],
    },
  },

  // imports - autoImport
  // If you want auto-import, set to true.
  // If you don't need it, set to false or remove this option.
  imports: {
    autoImport: true,
  },

  css: ["@/assets/css/global.css"],

  vite: {
    optimizeDeps: {
      include: ["naive-ui"],
    },
  },

  build: {
    transpile:
      process.env.NODE_ENV === "production"
        ? [
            "naive-ui",
            "vueuc",
            "@css-render/vue3-ssr",
            "@juggle/resize-observer",
          ]
        : ["@juggle/resize-observer"],
  },
});
