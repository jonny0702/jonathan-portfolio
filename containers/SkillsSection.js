import styles from '../styles/SkillsSection.module.sass';

export default function SkillsSection({ children }) {
  return <div className={styles.SkillsSection__container}>{children}</div>;
}
