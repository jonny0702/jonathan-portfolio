import styles from '../styles/MenuButton.module.sass';

export default function MenuButton({ renderIcon, isDarkmodeButton, action }) {
  return (
    <>
      <button
        type="button"
        onClick={action}
        className={`${
          isDarkmodeButton ? styles.MenuButtonDarkmode : styles.MenuButton
        }`}
      >
        {renderIcon && renderIcon()}
      </button>
    </>
  );
}
