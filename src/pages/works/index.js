import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import MenuNav from '../../containers/MenuNav';
import TitleSection from '../../components/TitleSection';
import VoxelContainer from '../../containers/VoxelContainer';
import ContactMeSection from '../../containers/ContactMeSection';
import { DarkModeContext } from '../../context/DarkModeContext';
import SlideMenuBar from '../../containers/SlideMenuBar';
import PortfolioContainer from '../../containers/PortfolioContainer';
import CardInfo from '../../components/CardInfo';
import styles from '../../styles/Works.module.sass';

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
        <section className={styles.Model__container}>
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
                  images={info.photos[0].metaData}
                  titleProject={info.name}
                  projectDescription={info.description}
                  link={`works/${info.id}`}
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
