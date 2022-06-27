import styles from '../styles/PortfolioContainer.module.sass';

export default function PortfolioContainer({ children }) {
  return <div className={styles.Portfolio__container}>{children}</div>;
}
