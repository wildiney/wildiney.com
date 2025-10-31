export const languages = ['pt', 'en', 'es'] as const;

export type Lang = typeof languages[number];

export const fallbackLng: Lang = 'pt'