import styles from '../styles/BodyParagraph.module.sass';

export default function BodyParagraph({ text }) {
  return (
    <div className={styles.BodyParagraph__container}>
      <p className={styles.paragraph}>{text}</p>
    </div>
  );
}
