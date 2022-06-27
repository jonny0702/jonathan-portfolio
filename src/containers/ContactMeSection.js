import Button from '../components/Button';
import styles from '../styles/ContactMeSection.module.sass';

export default function ContactMeSection({ children }) {
  return (
    <>
      <div className={styles.ContactMe__container}>
        {children}
        <div className={styles['Contact__form--container']}>
          <form className={styles['contact__form']}>
            <textarea
              type="text"
              className={styles.inputTextArea}
              placeholder="Text here..."
            />
            <Button buttonText="Submit" routes="/" />
          </form>
        </div>
      </div>
    </>
  );
}
