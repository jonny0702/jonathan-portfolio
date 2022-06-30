import styles from '../styles/MenuButton.module.sass';

export default function MenuButton({
  renderIcon,
  isDarkmodeButton,
  action,
  darkMode,
}) {
  return (
    <>
      <button
        type="button"
        onClick={action}
        className={`${
          isDarkmodeButton ? styles.MenuButtonDarkmode : styles.MenuButton
        } ${!darkMode ? styles.MenuButton : style['MenuButtom--light']} ${
          !darkMode ? styles.MenuButtonDarkMode : styles.MenuButtonLightMode
        }
        `}
      >
        {renderIcon && renderIcon()}
      </button>
    </>
  );
}
