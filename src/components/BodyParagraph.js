import styles from '../styles/BodyParagraph.module.sass';

export default function BodyParagraph({ text, isNotHome }) {
  return (
    <div
      className={`${
        !isNotHome
          ? styles.BodyParagraph__container
          : styles.BodyParagraph__containerWork
      }`}
    >
      <p className={styles.paragraph}>{text}</p>
    </div>
  );
}
