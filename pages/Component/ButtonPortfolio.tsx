import styles from './ButtonPortfolio.module.css'
export function ButtonPortfolio({ icon, site, link }) { 
  return (
    <a className ={styles.btn} target = "_blank" rel = "noreferrer" href = {link} >
      <span className={styles.icon}>
        {icon}
      </span>
      {site}
    </a>
  )
}