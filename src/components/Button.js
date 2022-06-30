import Link from 'next/link';
import styles from '../styles/Button.module.sass';

export default function Button({ buttonText, routes }) {
  return (
    <div className={styles.ButtonWoks__container}>
      <Link href={routes}>
        <a>
          <button type="button" className={styles.ButtonWorks__button}>
            {buttonText}
          </button>
        </a>
      </Link>
    </div>
  );
}
