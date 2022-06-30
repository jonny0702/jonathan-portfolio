import Button from '../components/Button';
import styles from '../styles/ContactMeSection.module.sass';

export default function ContactMeSection({ children, isWorksPage, darkMode }) {
  return (
    <>
      <div
        className={`${
          isWorksPage
            ? styles.ContactMe__containerWorks
            : styles.ContactMe__container
        }`}
        id="contact"
      >
        {children}
        <div className={styles['Contact__form--container']}>
          <form className={styles['contact__form']}>
            <textarea
              type="text"
              className={`${
                !darkMode ? styles.inputTextArea : styles.inputTextArea__light
              }`}
              placeholder="Text here..."
            />
            <Button buttonText="Submit" routes="/" />
          </form>
        </div>
      </div>
    </>
  );
}
