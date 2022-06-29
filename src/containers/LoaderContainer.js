import Loader from '../components/Loader';
import Typewriter from 'typewriter-effect';
import styles from '../styles/LoaderContainer.module.sass';

export default function LoaderContainer() {
  const text = 'Loading...';

  return (
    <div className={styles['Loader__container--section']}>
      <Loader />
      <div className={styles.text__container}>
        <Typewriter
          className={styles.text__loader}
          onInit={(typewriter) => {
            typewriter
              .typeString(text)
              .pauseFor(2000)
              .deleteAll()
              .typeString(text)
              .deleteAll()
              .typeString(text)
              .start();
          }}
        />
      </div>
    </div>
  );
}
