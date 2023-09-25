import { english, hindi, kannada } from './languages';

interface languageInterface {
  id: number;
  code: string;
  name: string;
}

const availableLanguages: languageInterface[] = [
  { id: 1, code: 'en', name: 'English' },
  { id: 1, code: 'hn', name: 'Hindi' },
  { id: 1, code: 'ka', name: 'Kannada' },
];
const translations = {
  en: english,
  hn: hindi,
  ka: kannada,
};

export { availableLanguages, translations, languageInterface };
