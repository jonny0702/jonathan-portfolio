import { useState } from 'react';
import styles from '../styles/ConsoleTag.module.sass';

export default function ConsoleTag({ textTag, renderImg }) {
  const [renderIcons, setRenderIcons] = useState(false);
  const handleMoseOver = (e) => {
    setRenderIcons(true);
  };
  const handleMoseOut = (e) => {
    setRenderIcons(false);
  };
  return (
    <div
      className={styles.ConsoleTag__container}
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
