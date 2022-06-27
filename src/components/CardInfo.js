import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/CardInfo.module.sass';

export default function CardInfo({
  images,
  titleProject,
  projectDescription,
  link,
}) {
  return (
    <div className={styles.CardInfo__container}>
      <Link href={link}>
        <a className={styles['CardInfo__container--link']}>
          <div className={styles['CardItem__image--container']}>
            <Image src={images} />
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
