import styles from "./ButtonPortfolio.module.css";
import ReactGA from 'react-ga4';

export function ButtonPortfolio ({ icon, site, link, ariaLabel }: { icon: React.ReactNode, site: string, link: string, ariaLabel?: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    ReactGA.event({ category: "link", action: "click", label: site });
    setTimeout(() => {
      window.open(link, '_blank');
    }, 100);
  }
  return (
    <div className="relative h-[80px] w-full max-w-xl min-w-80 p-4">
      <a className={styles.btn} target="_blank" href={link} rel="noopener noreferrer" onClick={handleClick} aria-label={ariaLabel}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.text}>{site}</span>
      </a>
    </div>
  );
}
