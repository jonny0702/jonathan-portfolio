import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/CardInfo.module.sass';

export default function CardInfo({
  images,
  titleProject,
  projectDescription,
  link,
  darkMode,
}) {
  return (
    <div className={styles.CardInfo__container}>
      <Link href={link}>
        <a
          className={`${
            !darkMode
              ? styles['CardInfo__container--link']
              : styles['CardInfo__container--link__light']
          }`}
        >
          <div
            className={`${
              !darkMode
                ? styles['CardItem__image--container']
                : styles['CardItem__image--container__light']
            }`}
          >
            <Image layout="fill" src={images} objectFit="cover" />
          </div>
          <div className={styles['CardInfo__info--container']}>
            <h3 className={styles.CardInfo__title}>{titleProject}</h3>
            <span className={styles.CardInfo__description}>
              {projectDescription}
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
}
