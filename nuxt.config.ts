// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  components: [
    { path: "~/components", pathPrefix: false },
    { path: "~/components/ui", pathPrefix: false },
    { path: "~/components/layout", pathPrefix: false },
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
    host: "*",
    port: 3000,
  },

  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    public: {
      NUXT_PUBLIC_API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL,
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

  ssr: false,

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
      title: "Next Spot",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        { name: "theme-color", content: "#ffffff" },
        { name: "description", content: "NBT - Next Big Thing" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/images/logo2.png" }],
    },
  },

  // imports - autoImport
  // If you want auto-import, set to true.
  // If you don't need it, set to false or remove this option.
  imports: {
    autoImport: true,
  },

  css: ["@/assets/css/global.css"],
});
