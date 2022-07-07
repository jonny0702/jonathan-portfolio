import styles from '../styles/MediaContainer.module.sass';

export default function MediaContainer({ children }) {
  return (
    <>
      <div className={styles.Media__container}>{children}</div>
    </>
  );
}
