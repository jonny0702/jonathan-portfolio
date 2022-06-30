import { useState, useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import styles from '../styles/ConsoleTag.module.sass';

export default function ConsoleTag({ textTag, renderImg }) {
  const { darkMode } = useContext(DarkModeContext);

  const [renderIcons, setRenderIcons] = useState(false);

  const handleMoseOver = (e) => {
    setRenderIcons(true);
  };
  const handleMoseOut = (e) => {
    setRenderIcons(false);
  };
  return (
    <div
      className={`${
        !darkMode
          ? styles.ConsoleTag__container
          : styles['ConsoleTag__container--light']
      }`}
      onMouseOver={(e) => handleMoseOver(e)}
      onMouseOut={(e) => handleMoseOut(e)}
    >
      {renderIcons ? (
        renderImg && renderImg()
      ) : (
        <span className={styles.ConsoleTag__text}>{textTag}</span>
      )}
    </div>
  );
}
