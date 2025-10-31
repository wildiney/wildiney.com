const locales = ["pt", "en", "es"];
const defaultLocale = "pt";

export default function RootPage () {
  if (typeof window !== "undefined") {
    const browserLang = navigator.language.split("-")[0];
    const lang = locales.includes(browserLang) ? browserLang : defaultLocale;
    window.location.replace(`/${lang}`);
    return null;
  }

  return (
    <html lang={defaultLocale}>
      <head>
        <meta httpEquiv="refresh" content={`0;url=/${defaultLocale}`} />
      </head>
      <body>
        <p>Redirecionando...</p>
      </body>
    </html>
  );
}