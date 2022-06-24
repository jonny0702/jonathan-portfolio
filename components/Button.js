import styles from '../styles/Button.module.sass';

export default function Button({ buttonText }) {
  return (
    <div className={styles.ButtonWoks__container}>
      <button className={styles.ButtonWorks__button}>{buttonText}</button>
    </div>
  );
}
