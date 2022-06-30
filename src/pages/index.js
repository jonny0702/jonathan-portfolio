import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DarkModeContext } from '../context/DarkModeContext';
import Image from 'next/image';
import MenuNav from '../containers/MenuNav';
import HomeBody from '../containers/HomeBody';
import TitleSection from '../components/TitleSection';
import BodyParagraph from '../components/BodyParagraph';
import HeaderContainer from '../containers/HeaderContainer';
import Button from '../components/Button';
import SkillsSection from '../containers/SkillsSection';
import SkillsTags from '../components/SkillsTags';
import ConsoleTag from '../components/ConsoleTag';
import VoxelContainer from '../containers/VoxelContainer';
import SlideMenuBar from '../containers/SlideMenuBar';
import Socials from '../components/Socials';
import ContactMeSection from '../containers/ContactMeSection';
import SubmitModal from '../containers/SubmitModal';
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoTwitch,
  IoLogoLinkedin,
} from 'react-icons/io5';
import styles from '../styles/Home.module.sass';

export default function Home() {
  const { darkMode } = useContext(DarkModeContext);
  const {
    isReady,
    query: { state },
  } = useRouter();

  const [homeInfo, setHomeInfo] = useState({});
  const [skills, setSkills] = useState([]);

  const fetchHomeInfo = async () => {
    try {
      const response = await fetch('/api');
      const data = await response.json();
      setHomeInfo(data.info);
      setSkills(data.info?.skillsTags);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    isReady && fetchHomeInfo();
  }, [isReady]);

  return (
    <>
      {state === 'success' && <SubmitModal />}
      <MenuNav
        darkMode={darkMode}
        renderSlideMenuBar={(props) => <SlideMenuBar {...props} />}
      />
      <div
        className={`${
          !darkMode
            ? styles.Home__container
            : styles['Home__container--LightMode']
        }`}
      >
        <section className={styles['Model__container']}>
          <VoxelContainer />
        </section>
        <section className={styles['presentation__section--container']}>
          <HeaderContainer>
            <header className={styles.Header__container}>
              <div className={styles['Header__TitlePresentation--container']}>
                <h1 className={styles['Header__name--title']}>
                  Jonathan Vergara
                </h1>
                <span className={styles.Header__shortPresentation}>
                  Full stack developer/Artist/Science Geek
                </span>
              </div>
              <div></div>
            </header>
          </HeaderContainer>
          <main className={styles.MainPage__infoContainer}>
            <HomeBody>
              <div className={styles['MainPage__infoContainer--text']}>
                <TitleSection titleText="Info" />
                <BodyParagraph text={homeInfo.textParagraph} />
              </div>
              <Button buttonText="My Portfolio" routes="/works" />
              <TitleSection titleText="Technologies" />
              <SkillsSection>
                {skills.map((item) => (
                  <SkillsTags
                    key={item.key}
                    textTag={item.textTag}
                    renderTag={(props) => (
                      <ConsoleTag
                        {...props}
                        renderImg={() => (
                          <div className={styles['icons__image--container']}>
                            <Image
                              className={styles.iconImage}
                              layout="fill"
                              objectFit="cover"
                              src={item.renderIcon[0]}
                            />
                          </div>
                        )}
                      />
                    )}
                  />
                ))}
              </SkillsSection>
              <TitleSection titleText="I ❤" />
              <BodyParagraph text="Art, Music, Drawing, Playing Piano and Guitar, Phography, Math and Science" />
              <TitleSection titleText="Socials" />
              <Socials
                darkMode={darkMode}
                socialMediaText="@jonhy_vr"
                socialsLinks="https://www.instagram.com/jonhy_vr/"
                renderSocialIcon={() => (
                  <IoLogoInstagram
                    className={`${
                      !darkMode
                        ? styles.SocialIcons
                        : styles['SocilaIcons--light']
                    }`}
                  />
                )}
              />
              <Socials
                darkMode={darkMode}
                socialMediaText="@jonny0702"
                socialsLinks="https://github.com/jonny0702"
                renderSocialIcon={() => (
                  <IoLogoGithub
                    className={`${
                      !darkMode
                        ? styles.SocialIcons
                        : styles['SocilaIcons--light']
                    }`}
                  />
                )}
              />
              <Socials
                darkMode={darkMode}
                socialMediaText="@jonhy_vr"
                socialsLinks="https://www.twitch.tv/jonhy_vr"
                renderSocialIcon={() => (
                  <IoLogoTwitch
                    className={`${
                      !darkMode
                        ? styles.SocialIcons
                        : styles['SocilaIcons--light']
                    }`}
                  />
                )}
              />
              <Socials
                darkMode={darkMode}
                socialMediaText="@jonhy_vr"
                socialsLinks="https://www.linkedin.com/in/jonathan-vergara-542b90243/"
                renderSocialIcon={() => (
                  <IoLogoLinkedin
                    className={`${
                      !darkMode
                        ? styles.SocialIcons
                        : styles['SocilaIcons--light']
                    }`}
                  />
                )}
              />
            </HomeBody>
            <ContactMeSection darkMode={darkMode}>
              <TitleSection titleText="Contact Me" />
            </ContactMeSection>
          </main>
        </section>
      </div>
    </>
  );
}
