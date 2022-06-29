import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TitleSection from '../components/TitleSection';
import MenuNav from '../containers/MenuNav';
import SlideMenuBar from '../containers/SlideMenuBar';
import VoxelContainer from '../containers/VoxelContainer';
import PortfolioContainer from '../containers/PortfolioContainer';
import CardInfo from '../components/CardInfo';
import ContactMeSection from '../containers/ContactMeSection';
import styles from '../styles/Works.module.sass';

export default function Works() {
  const { isReady } = useRouter();

  const [works, setWorks] = useState([]);
  const hasWorks = works.length > 0;

  const fetchPost = async () => {
    try {
      const response = await fetch('/api/works');
      const data = await response.json();
      console.log(data);
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
      <div className={styles.Works__container}>
        <section className={styles['Model__container']}>
          <VoxelContainer />
        </section>
        <section className={styles.WorksInfo__container}>
          <TitleSection titleText="Works" />
          <PortfolioContainer>
            {hasWorks &&
              works.map((info) => (
                <CardInfo
                  images={info.photos[0]}
                  titleProject={info.name}
                  projectDescription={info.description}
                  link={`${info.presentation}`}
                />
              ))}
          </PortfolioContainer>
          <ContactMeSection isWorksPage>
            <TitleSection titleText="Contact Me" />
          </ContactMeSection>
        </section>
      </div>
    </>
  );
}
