import styles from '../styles/TitleSection.module.sass';

export default function TitleSection({ titleText }) {
  return (
    <div className={styles.TitleSection__container}>
      <h2 className={styles.TitleText__text}>:⁓$ {titleText}</h2>
    </div>
  );
}
