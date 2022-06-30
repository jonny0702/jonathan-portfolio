import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import styles from '../styles/ContactMeSection.module.sass';

export default function ContactMeSection({ children, isWorksPage, darkMode }) {
  const router = useRouter();
  const {
    query: { state },
  } = useRouter();

  const [contactInfo, setContact] = useState({
    email: '',
    nameUser: '',
    subject: '',
    text: '',
  });

  const handleChange = (e) => {
    setContact({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
    if (state === 'success') {
      e.target.value = '';
    }
  };

  const handlePostEmailToServer = (email, name, subject, text, event) => {
    event.preventDefault();
    const data = {
      email: email,
      nameUser: name,
      subject: subject,
      message: text,
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res.status);
    });
    router.push('/?state=success');
    event.target.reset();
  };

  return (
    <>
      <div
        className={`${
          isWorksPage
            ? styles.ContactMe__containerWorks
            : styles.ContactMe__container
        }`}
        id="contact"
      >
        {children}
        <div className={styles['Contact__form--container']}>
          <form
            className={styles['contact__form']}
            onChange={(e) => handleChange(e)}
            onSubmit={(event) =>
              handlePostEmailToServer(
                contactInfo.email,
                contactInfo.nameUser,
                contactInfo.subject,
                contactInfo.text,
                event
              )
            }
          >
            <input
              name="email"
              type="mail"
              placeholder="Email"
              className={styles.inputs__contact}
            />
            <input
              name="nameUser"
              type="text"
              placeholder="Name"
              className={styles.inputs__contact}
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className={styles.inputs__contact}
            />
            <textarea
              name="text"
              type="text"
              className={`${
                !darkMode ? styles.inputTextArea : styles.inputTextArea__light
              }`}
              placeholder="Text here..."
            />
            <button type="submit" className={styles.ButtonSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
