import Link from 'next/link';
import styles from '../styles/SlideMenuBarItems.module.sass';

export default function SlideMenuBarItem({ children, itemText, routes }) {
  return (
    <>
      <Link href={routes}>
        <a className={styles['SlideMenuItems__container--links']}>
          <button className={styles.SlideMenuItems__links}>
            {children}
            {itemText}
          </button>
        </a>
      </Link>
    </>
  );
}
