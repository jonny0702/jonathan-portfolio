import Link from 'next/link';
import styles from '../styles/SlideMenuBarItems.module.sass';

export default function SlideMenuBarItem({
  children,
  itemText,
  routes,
  darkMode,
}) {
  return (
    <>
      <Link href={routes}>
        <a className={styles['SlideMenuItems__container--links']}>
          <button
            className={`${
              !darkMode
                ? styles.SlideMenuItems__links
                : styles['SlideMenuItems__links--light']
            }`}
          >
            {children}
            {itemText}
          </button>
        </a>
      </Link>
    </>
  );
}
