import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import { resources } from './resources';

const languageDetector: any = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (callback) => RNLocalize.getLocales()[0].languageTag,
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,

    lng: 'en',
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
