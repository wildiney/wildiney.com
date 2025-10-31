import type { Lang } from './index';
import pt from './dictionaries/pt';
import en from './dictionaries/en';
import es from './dictionaries/es';

export async function getDictionary (lang: Lang) {
  switch (lang) {
    case 'en':
      return en;
    case 'es':
      return es;
    default:
      return pt;
  }
}
