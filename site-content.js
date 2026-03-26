window.SITE_CONTENT = {
  settings: {
    defaultLocale: "zh",
    localeStorageKey: "llm_security_locale",
    supportedLocales: ["zh", "en"]
  },
  lead: {
    endpoint: "https://llmsecurity-feishubots.louyu.tech/lead",
    storageKey: "llm_security_leads",
    exportFilePrefix: "llm-security-lead"
  },
  locales: {
    zh: window.SITE_CONTENT_ZH,
    en: window.SITE_CONTENT_EN
  }
};
