import styles from '../styles/MenuButton.module.sass';

export default function MenuButton({ renderIcon, isDarkmodeButton }) {
  return (
    <>
      <button
        type="button"
        className={`${
          isDarkmodeButton ? styles.MenuButtonDarkmode : styles.MenuButton
        }`}
      >
        {renderIcon && renderIcon()}
      </button>
    </>
  );
}
