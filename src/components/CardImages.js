import Image from 'next/image';
import styles from '../styles/CardImages.module.sass';

export default function CardImages({ photos, darkMode, alt }) {
  return (
    <>
      <div
        className={`${
          !darkMode
            ? styles.CardImages__container
            : styles['CardImages__container--light']
        }`}
      >
        <Image
          className={styles.CardImages__image}
          layout="fill"
          src={photos}
          objectFit="cover"
          alt={alt}
        />
      </div>
    </>
  );
}
