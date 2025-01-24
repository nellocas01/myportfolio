import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../languages/en/en.json";
import translationIT from "../languages/it/it.json";

// Le risorse di traduzione
const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
};

// Configura i18next
i18n
  .use(initReactI18next) // Passa i18next a react-i18next
  .init({
    resources,
    lng: "it", // Lingua di default
    fallbackLng: "en", // Lingua di fallback

    interpolation: {
      escapeValue: false, // React già protegge dall'injection di XSS
    },
  });

export default i18n;
