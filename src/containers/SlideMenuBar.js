import SlideMenuBarItem from '../components/SlideMenuBarItem';
import styles from '../styles/SlideMenuBar.module.sass';

export default function SlideMenuBar({ isOpen, darkMode }) {
  return (
    <div
      className={`${
        !darkMode
          ? styles.SlideMenu__container
          : styles['SlideMenu__container--light']
      }`}
      style={{ transform: `translateX(${isOpen ? '0' : '100%'})` }}
    >
      <ul className={styles['slideMenuBar__items--container']}>
        <SlideMenuBarItem darkMode={darkMode} itemText="$/About" routes="/" />
        <SlideMenuBarItem
          darkMode={darkMode}
          itemText="$/Works"
          routes="/works"
        />
        <SlideMenuBarItem
          darkMode={darkMode}
          itemText="$/contact"
          routes="/#contact"
        />
        <SlideMenuBarItem
          darkMode={darkMode}
          itemText="$/GitHub"
          routes="https://github.com/jonny0702"
        />
      </ul>
    </div>
  );
}
