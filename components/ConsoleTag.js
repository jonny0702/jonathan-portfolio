import styles from '../styles/ConsoleTag.module.sass';

export default function ConsoleTag({ textTag }) {
  return (
    <div className={styles.ConsoleTag__container}>
      <span className={styles.ConsoleTag__text}>{textTag}</span>
    </div>
  );
}
