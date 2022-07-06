import Image from 'next/image';
import LostTraveller from '../assets/img/LostTraveller.png';
import styles from '../styles/CardImages.module.sass';

export default function CardImages({ photos }) {
  return (
    <>
      <div className={styles.CardImages__container}>
        <Image
          className={styles.CardImages__image}
          layout="fill"
          src={photos}
          objectFit="cover"
        />
      </div>
    </>
  );
}
