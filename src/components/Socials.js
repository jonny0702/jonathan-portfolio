import Link from 'next/link';
import styles from '../styles/Socials.module.sass';

export default function Socials({
  socialMediaText,
  renderSocialIcon,
  socialsLinks,
}) {
  return (
    <div className={styles.Socials__container}>
      <Link href={socialsLinks}>
        <a className={styles.Socials__link}>
          <div className={styles.Socials__infoContainer}>
            {renderSocialIcon && renderSocialIcon({})}
            <span className={styles.Socials__text}>{socialMediaText}</span>
          </div>
        </a>
      </Link>
    </div>
  );
}
