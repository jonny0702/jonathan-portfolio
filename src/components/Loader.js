import styles from '../styles/Loader.module.sass';

export default function Loader() {
  return (
    <div className={styles.loader__container}>
      <div className={styles['lds-ring']}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
