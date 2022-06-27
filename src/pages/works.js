import TitleSection from '../components/TitleSection';
import MenuNav from '../containers/MenuNav';
import SlideMenuBar from '../containers/SlideMenuBar';
import VoxelContainer from '../containers/VoxelContainer';
import PortfolioContainer from '../containers/PortfolioContainer';
import CardInfo from '../components/CardInfo';
import styles from '../styles/Works.module.sass';
import LostTraverller from '../assets/img/LostTraveller.png';
import WeatherApp from '../assets/img/WeatherApp.png';
import LostTravellerAdmin from '../assets/img/LostTravellerAdmin.png';

export default function Works() {
  return (
    <>
      <MenuNav renderSlideMenuBar={(props) => <SlideMenuBar {...props} />} />
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
              projectDescription="Lorem Ipsum"
              link="https://losttraveler.vercel.app/"
            />
            <CardInfo
              images={LostTravellerAdmin}
              titleProject="Lost Traveller AdminSide"
              projectDescription="Lorem Ipsum"
              link="https://github.com/jonny0702/lost-traveller-next-dashboard"
            />
            <CardInfo
              images={WeatherApp}
              titleProject="Weather App"
              projectDescription="Lorem Ipsum"
              link="https://weather-r-app.netlify.app/"
            />
          </PortfolioContainer>
        </section>
      </div>
    </>
  );
}
