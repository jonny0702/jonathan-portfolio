import styles from '../styles/Socials.module.sass';

export default function Socials({ socialMediaText, renderSocialIcon }) {
  return (
    <div className={styles.Socials__container}>
      <div className={styles.Socials__infoContainer}>
        {renderSocialIcon && renderSocialIcon({})}
        <span className={styles.Socials__text}>{socialMediaText}</span>
      </div>
    </div>
  );
}
