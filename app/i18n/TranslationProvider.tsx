'use client';

import { createContext, useContext } from 'react';
import type { Lang } from './index';
import type { Dictionary } from './types';

type TranslationContextType = {
  lang: Lang;
  dict: Dictionary;
};

const TranslationContext = createContext<TranslationContextType | null>(null);

export function TranslationProvider ({
  lang,
  dict,
  children
}: {
  lang: Lang;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <TranslationContext.Provider value={{ lang, dict }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation () {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
