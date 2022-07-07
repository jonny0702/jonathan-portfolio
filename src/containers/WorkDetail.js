import styles from '../styles/WorkDetail.module.sass';

export default function WorkDetail({ children }) {
  return (
    <>
      <div className={styles.Work__container}>{children}</div>
    </>
  );
}
