import styles from '../styles/Stacks.module.sass';

export default function Stacks({ title, info, isLink }) {
  return (
    <>
      <div className={styles.Stacks__container}>
        <div className={styles['Stacks__containeer--info']}>
          <div className={styles['Stacks__container--title']}>
            <span className={styles['Stacks__info--title']}>{title}</span>
          </div>
          {isLink ? (
            <a href={info} className={styles['stacks__info--link']}>
              {info}
            </a>
          ) : (
            <span className={styles['Stack__info--text']}>{info}</span>
          )}
        </div>
      </div>
    </>
  );
}
