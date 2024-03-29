import styles from "./ButtonPortfolio.module.css";
export function ButtonPortfolio({ icon, site, link }: any) {
  return (
    <a className={styles.btn} target="_blank" rel="noreferrer" href={link}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{site}</span>
    </a>
  );
}
