import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { DarkModeContext } from '../context/DarkModeContext';
import TitleSection from '../components/TitleSection';
import MenuNav from '../containers/MenuNav';
import SlideMenuBar from '../containers/SlideMenuBar';
import VoxelContainer from '../containers/VoxelContainer';
import PortfolioContainer from '../containers/PortfolioContainer';
import CardInfo from '../components/CardInfo';
import ContactMeSection from '../containers/ContactMeSection';
import styles from '../styles/Works.module.sass';

export default function Works() {
  const { darkMode } = useContext(DarkModeContext);

  const { isReady } = useRouter();

  const [works, setWorks] = useState([]);
  const hasWorks = works.length > 0;

  const fetchPost = async () => {
    try {
      const response = await fetch('/api/works');
      const data = await response.json();
      setWorks(data.works);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    isReady && fetchPost();
  }, [isReady]);

  return (
    <>
      <MenuNav
        isWorksPage
        renderSlideMenuBar={(props) => <SlideMenuBar {...props} />}
      />
      <div
        className={`${
          !darkMode
            ? styles.Works__container
            : styles['Works__container--light']
        }`}
      >
        <section className={styles['Model__container']}>
          <VoxelContainer />
        </section>
        <section className={`${styles.WorksInfo__container}`}>
          <TitleSection titleText="Works" />
          <PortfolioContainer>
            {hasWorks &&
              works.map((info) => (
                <CardInfo
                  key={info.id}
                  darkMode={darkMode}
                  images={info.photos[0]}
                  titleProject={info.name}
                  projectDescription={info.description}
                  link={`${info.presentation}`}
                />
              ))}
          </PortfolioContainer>
          <ContactMeSection isWorksPage darkMode={darkMode}>
            <TitleSection titleText="Contact Me" />
          </ContactMeSection>
        </section>
      </div>
    </>
  );
}
