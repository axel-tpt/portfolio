import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonFR from './fr/common.json';
import commonEN from './en/common.json';

// Get saved language from localStorage or default to 'fr'
const savedLanguage = localStorage.getItem('language') || 'fr';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        common: commonFR,
      },
      en: {
        common: commonEN,
      },
    },
    lng: savedLanguage, // use saved language or default
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
