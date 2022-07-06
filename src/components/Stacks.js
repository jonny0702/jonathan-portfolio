import styles from '../styles/Stacks.module.sass';

export default function dStacks({ title, info, isLink, darkMode }) {
  return (
    <>
      <div className={styles.Stacks__container}>
        <div className={styles['Stacks__containeer--info']}>
          {info && (
            <div
              className={`${
                !darkMode
                  ? styles['Stacks__container--title']
                  : styles['Stacks__container--title-light']
              }`}
            >
              <span
                className={`${
                  !darkMode
                    ? styles['Stacks__info--title']
                    : styles['Stacks__info--title-light']
                }`}
              >
                {title}
              </span>
            </div>
          )}
          {isLink && info && (
            <a href={info} className={styles['stacks__info--link']}>
              {info}
            </a>
          )}
          {!isLink && (
            <span className={styles['Stack__info--text']}>{info}</span>
          )}
        </div>
      </div>
    </>
  );
}
