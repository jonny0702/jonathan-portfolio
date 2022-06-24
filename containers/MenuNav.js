import Link from 'next/link';
import MenuButton from '../components/MenuButton';
import { HamburgerIcon, SunIcon } from '@chakra-ui/icons';
import styles from '../styles/MenuNav.module.sass';

export default function MenuNav() {
  return (
    <nav className={styles.MenuNav__container}>
      <div className={styles['MenuNav__navigationBar--container']}>
        <Link href="/">
          <a className={styles.MenuNav__logoText}> Jonathan Vergara</a>
        </Link>
      </div>
      <div className={styles['MenuNav__menuItems--container']}>
        <div className={styles['menuNav__buttons--container']}>
          <div>
            <MenuButton
              isDarkmodeButton
              renderIcon={() => <SunIcon w={20} h={20} color="black" />}
            />
          </div>
          <div>
            <MenuButton
              renderIcon={() => (
                <HamburgerIcon w={20} h={20} color="white.500" />
              )}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}