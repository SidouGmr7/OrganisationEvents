import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import  translateFR  from './language/fr.json'
import  translateAR  from './language/ar.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: translateFR,
      },
      ar: {
        translation: translateAR,
      },
    },
    lng: 'fr',
    fallbackLng: 'fr',

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  })

export default i18n
