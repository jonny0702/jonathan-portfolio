import TitleSection from '../components/TitleSection';
import MenuNav from '../containers/MenuNav';
import SlideMenuBar from '../containers/SlideMenuBar';
import VoxelContainer from '../containers/VoxelContainer';
import PortfolioContainer from '../containers/PortfolioContainer';
import CardInfo from '../components/CardInfo';
import ContactMeSection from '../containers/ContactMeSection';
import styles from '../styles/Works.module.sass';
import LostTraverller from '../assets/img/LostTraveller.png';
import WeatherApp from '../assets/img/WeatherApp.png';
import LostTravellerAdmin from '../assets/img/LostTravellerAdmin.png';

export default function Works() {
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
            <CardInfo
              images={LostTraverller}
              titleProject="Lost Traveller"
              projectDescription="A internal turism digital service to share the beatifull places that we not know in panama"
              link="https://losttraveler.vercel.app/"
            />
            <CardInfo
              images={LostTravellerAdmin}
              titleProject="Lost Traveller Admin side"
              projectDescription="The admin side of Lost Traveller which is responsible for managing the verification request and uploaded posts "
              link="https://github.com/jonny0702/lost-traveller-next-dashboard"
            />
            <CardInfo
              images={WeatherApp}
              titleProject="Weather App"
              projectDescription="App that show the weather data in your area"
              link="https://weather-r-app.netlify.app/"
            />
          </PortfolioContainer>
          <ContactMeSection>
            <TitleSection titleText="Contact Me" />
          </ContactMeSection>
        </section>
      </div>
    </>
  );
}
