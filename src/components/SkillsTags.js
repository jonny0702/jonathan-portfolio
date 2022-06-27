import styles from '../styles/SkillsSection.module.sass';

export default function SkillsTags({ textTag, renderTag }) {
  return (
    <div className={styles.Tags__container}>
      {renderTag && renderTag({ textTag })}
    </div>
  );
}
