import Link from 'next/link';
import { SendIcon } from '../assets/Atoms/SendIcon';
import styles from '../styles/SubmitModal.module.sass';

export default function SubmitModal() {
  return (
    <div className={styles.SubmitModal__container}>
      <div className={styles['SubmitModal__info--container']}>
        <div>
          <SendIcon fill="currentColor" width={30} />
        </div>
        <h1 className={styles.SubmitModal__title}>Your message was sent</h1>
        <Link href="/">
          <a className={styles['SubmitModal__button']}>Great!</a>
        </Link>
      </div>
    </div>
  );
}
