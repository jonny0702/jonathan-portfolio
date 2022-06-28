import SlideMenuBarItem from '../components/SlideMenuBarItem';
import styles from '../styles/SlideMenuBar.module.sass';

export default function SlideMenuBar({ isOpen }) {
  return (
    <div
      className={styles.SlideMenu__container}
      style={{ transform: `translateX(${isOpen ? '0' : '100%'})` }}
    >
      <ul className={styles['slideMenuBar__items--container']}>
        <SlideMenuBarItem itemText="$/About" routes="/" />
        <SlideMenuBarItem itemText="$/Works" routes="/works" />
        <SlideMenuBarItem itemText="$/contact" routes="/#contact" />
        <SlideMenuBarItem
          itemText="$/GitHub"
          routes="https://github.com/jonny0702"
        />
      </ul>
    </div>
  );
}
