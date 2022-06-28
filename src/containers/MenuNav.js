import { useState } from 'react';
import Link from 'next/link';
import MenuButton from '../components/MenuButton';
import useScreenMediaQuery from '../hooks/useScreenMediaquery';
import { HamburgerIcon, SunIcon } from '@chakra-ui/icons';
import styles from '../styles/MenuNav.module.sass';
import SlideMenuBarItem from '../components/SlideMenuBarItem';

export default function MenuNav({ renderSlideMenuBar, isWorksPage }) {
  const [isOpen, handleDisplayMenu] = useState(false);

  const { isMatched: tablet } = useScreenMediaQuery(768);

  const handleOpenMenu = () => {
    handleDisplayMenu(!isOpen);
  };

  return (
    <nav className={styles.MenuNav__container}>
      <div className={styles['MenuNav__navigationBar--container']}>
        <Link href="/">
          <a className={styles.MenuNav__logoText}> Jonathan Vergara</a>
        </Link>
        {tablet && (
          <>
            <SlideMenuBarItem itemText="$/About" routes="/" />
            <SlideMenuBarItem itemText="$/Works" routes="/works" />
            <SlideMenuBarItem
              itemText="$/Contact"
              routes={`${isWorksPage ? '/works/#contact' : '/#contact'}`}
            />
            <SlideMenuBarItem
              itemText="$/GitHub"
              routes="https://github.com/jonny0702"
            />
          </>
        )}
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
            {!tablet && (
              <MenuButton
                action={handleOpenMenu}
                isOpen={isOpen}
                renderIcon={() => (
                  <HamburgerIcon w={20} h={20} color="white.500" />
                )}
              />
            )}
          </div>
        </div>
        {renderSlideMenuBar && renderSlideMenuBar({ handleOpenMenu, isOpen })}
      </div>
    </nav>
  );
}
