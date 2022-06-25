import SlideMenuBarItem from '../components/SlideMenuBarItem';
import styles from '../styles/SlideMenuBar.module.sass';

export default function SlideMenuBar({ isOpen }) {
  console.log(isOpen);
  return (
    <div
      className={styles.SlideMenu__container}
      style={{ transform: `translateX(${isOpen ? '100%' : '0'})` }}
    >
      <ul className={styles['slideMenuBar__items--container']}>
        <SlideMenuBarItem itemText="$../root/About" routes="/" />
        <SlideMenuBarItem itemText="$../root/Works" routes="/works" />
        <SlideMenuBarItem
          itemText="$../root/GitHub"
          routes="https://github.com/jonny0702"
        />
      </ul>
    </div>
  );
}
