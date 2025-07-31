import ReactGA from 'react-ga4';
import { Link } from 'react-router-dom';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useTranslation } from 'react-i18next';
type NavigationProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

function Navigation ({ mobile = false, onNavigate }: NavigationProps) {
  const { t, i18n } = useTranslation();
  const links = [
    { to: '/#intro', label: t('nav.intro', 'Início'), id: 'intro' },
    { to: '/#about', label: t('nav.about', 'About'), id: 'about' },
    // { to: '/#portfolio', label: t('nav.portfolio', 'Portfolio'), id: 'portfolio' },
    { to: '/#contact', label: t('nav.contact', 'Contact'), id: 'contact' },
  ];

  const activeId = useScrollSpy(links.map(l => l.id), 80);

  const languages = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
  ];

  if (mobile) {
    return (
      <nav className="flex flex-col items-stretch gap-4 w-full">
        <ul className="flex flex-col gap-2 w-full">
          {links.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => {
                  ReactGA.event({
                    category: 'Navigation',
                    action: `Click ${link.label}`,
                    label: link.to
                  });
                  if (onNavigate) onNavigate();
                }}
                className={
                  `block text-primary px-4 py-3 text-lg rounded-full text-center transition-colors ` +
                  (activeId === link.id
                    ? 'bg-primary/10 font-semibold border border-primary'
                    : 'bg-transparent hover:bg-primary/5 border border-transparent')
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-2 mt-4">
          {languages.map(l => (
            <button
              key={l.code}
              onClick={() => i18n.changeLanguage(l.code)}
              className={
                `px-3 py-1 rounded-full text-sm transition-colors ` +
                (i18n.language === l.code
                  ? 'bg-primary/10 text-primary font-semibold cursor-default border '
                  : 'bg-transparent text-primary hover:bg-primary/10')
              }
              aria-label={
                i18n.language === 'pt' ? `Mudar para ${l.label}` :
                  i18n.language === 'en' ? `Switch to ${l.label}` :
                    i18n.language === 'es' ? `Cambiar a ${l.label}` :
                      `Change to ${l.label}`
              }
              disabled={i18n.language === l.code}
            >
              {l.label}
            </button>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav className="hidden items-center  lg:flex">
      <ul className="flex w-full md:w-auto gap-4">
        {links.map(link => (
          <li className="w-full" key={link.to}>
            <Link
              to={link.to}
              onClick={() => {
                ReactGA.event({
                  category: 'Navigation',
                  action: `Click ${link.label}`,
                  label: link.to
                });
              }}
              className={
                `text-primary px-4 py-2 whitespace-nowrap transition-colors border rounded-full box-content hover:border hover:border-primary ` +
                (activeId === link.id
                  ? 'bg-primary/5 text-primary  border border-primary'
                  : 'bg-transparent border-transparent')
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="ml-4 flex overflow-hidden border border-primary divide-x divide-primary rounded-full">
        {languages.map(l => (
          <button
            key={l.code}
            onClick={() => i18n.changeLanguage(l.code)}
            className={
              `px-2 py-1 transition-colors focus:outline-none text-xs cursor-pointer ` +
              (i18n.language === l.code
                ? 'bg-primary/10 text-primary font-semibold cursor-default'
                : 'bg-transparent text-primary hover:bg-primary/10')
            }
            aria-label={
              i18n.language === 'pt' ? `Mudar para ${l.label}` :
                i18n.language === 'en' ? `Switch to ${l.label}` :
                  i18n.language === 'es' ? `Cambiar a ${l.label}` :
                    `Change to ${l.label}`
            }
            disabled={i18n.language === l.code}
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navigation