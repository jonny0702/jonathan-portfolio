import { useState, useContext } from 'react';
import Link from 'next/link';
import MenuButton from '../components/MenuButton';
import useScreenMediaQuery from '../hooks/useScreenMediaquery';
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import styles from '../styles/MenuNav.module.sass';
import SlideMenuBarItem from '../components/SlideMenuBarItem';
import { DarkModeContext } from '../context/DarkModeContext';

export default function MenuNav({ renderSlideMenuBar, isWorksPage }) {
  const { darkMode, tooggleDarkMode } = useContext(DarkModeContext);

  const [isOpen, handleDisplayMenu] = useState(false);

  const { isMatched: tablet } = useScreenMediaQuery(768);

  const handleTooggle = () => {
    tooggleDarkMode();
  };
  const handleOpenMenu = () => {
    handleDisplayMenu(!isOpen);
  };
  return (
    <nav
      className={`${
        !darkMode
          ? styles.MenuNav__container
          : styles['MenuNav__container--light']
      }`}
    >
      <div className={styles['MenuNav__navigationBar--container']}>
        <Link href="/">
          <a
            className={`${
              !darkMode
                ? styles.MenuNav__logoText
                : styles['MenuNav__logoText--light']
            }`}
          >
            {' '}
            Jonathan Vergara
          </a>
        </Link>
        {tablet && (
          <>
            <SlideMenuBarItem
              itemText="./About"
              routes="/"
              darkMode={darkMode}
            />
            <SlideMenuBarItem
              itemText="./Works"
              routes="/works"
              darkMode={darkMode}
            />
            <SlideMenuBarItem
              darkMode={darkMode}
              itemText="./Contact"
              routes={`${isWorksPage ? '/works/#contact' : '/#contact'}`}
            />
            <SlideMenuBarItem
              darkMode={darkMode}
              itemText="./GitHub"
              routes="https://github.com/jonny0702"
            />
          </>
        )}
      </div>
      <div className={styles['MenuNav__menuItems--container']}>
        <div className={styles['menuNav__buttons--container']}>
          <div>
            <MenuButton
              action={handleTooggle}
              isDarkmodeButton
              renderIcon={() =>
                !darkMode ? (
                  <SunIcon w={20} h={20} color="black" />
                ) : (
                  <MoonIcon w={20} h={20} color="white" />
                )
              }
            />
          </div>
          <div>
            {!tablet && (
              <MenuButton
                action={handleOpenMenu}
                isOpen={isOpen}
                renderIcon={() => (
                  <HamburgerIcon
                    w={20}
                    h={20}
                    color={`${!darkMode ? 'white.500' : 'black'}`}
                  />
                )}
              />
            )}
          </div>
        </div>
        {renderSlideMenuBar &&
          renderSlideMenuBar({ handleOpenMenu, isOpen, darkMode })}
      </div>
    </nav>
  );
}
