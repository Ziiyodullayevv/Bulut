import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Til fayllarini import qilish
import en from './lang/en.json';
import uz from './lang/uz.json';
import ru from './lang/ru.json';

const resources = {
  en: { translation: en },
  uz: { translation: uz },
  ru: { translation: ru },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || 'ru', // Boshlang‘ich til
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
