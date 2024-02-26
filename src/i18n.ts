import i18n from 'i18next';
import i18nBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const getCurrentHost =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:3000/'
    : 'https://nstyle-copy.netlify.app/';

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: false,
    lng: 'ru',
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
    },
  });

export default i18n;
