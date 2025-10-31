import { ReactNode } from "react";
import { getDictionary } from "../i18n/getDictionary";
import { fallbackLng, languages, type Lang } from "../i18n";
import { TranslationProvider } from "../i18n/TranslationProvider";

type LangLayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>; // 👈 agora é uma Promise
};

// Gera as rotas estáticas (pt, en, es)
export async function generateStaticParams () {
  return languages.map((lang) => ({ lang }));
}

export default async function LangLayout ({ children, params }: LangLayoutProps) {
  const { lang } = await params; // 👈 precisa dar await

  const currentLang: Lang = languages.includes(lang as Lang)
    ? (lang as Lang)
    : fallbackLng;

  const dict = await getDictionary(currentLang);

  return (
    <TranslationProvider dict={dict} lang={currentLang}>
      {children}
    </TranslationProvider>
  );
}
