import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to my website!",
          "description": "This is a simple example of how to use i18n in a React application."
        }
      },
      es: {
        translation: {
          "welcome": "¡Bienvenido a mi sitio web!",
          "description": "Este es un ejemplo simple de cómo usar i18n en una aplicación React."
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;