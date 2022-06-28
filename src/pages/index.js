import { useState, useReducer, useEffect } from 'react';
import useScreenMediaQuery from '../hooks/useScreenMediaquery';
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
import { IoLogoInstagram, IoLogoGithub, IoLogoTwitch } from 'react-icons/io5';
import styles from '../styles/Home.module.sass';

export default function Home() {
  const techArr = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'NextJs',
    'ThreeJs',
    'Azure',
    'Node',
    'Express',
    'Firebase',
  ];
  const textParagrah =
    'Jonathan is a full-stack developer based in Panama, with a passion to solve real-life problems building software. When he’s not in the computer, he loves playing the piano or draw. Currently he is building his own digital service (Lost Traveller) with a team of three developers, and he likes studying some new technologies in his free time and building small coding stuff.';

  const { isMatched: tablet } = useScreenMediaQuery(768);

  return (
    <>
      <MenuNav renderSlideMenuBar={(props) => <SlideMenuBar {...props} />} />
      <div className={styles.Home__container}>
        <section className={styles['Model__container']}>
          <VoxelContainer />
        </section>
        <section className={styles['presentation__section--container']}>
          {!tablet && (
            <>
              <HeaderContainer>
                <header className={styles.Header__container}>
                  <div
                    className={styles['Header__TitlePresentation--container']}
                  >
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
                    <BodyParagraph text={textParagrah} />
                  </div>
                  <Button buttonText="My Portfolio" routes="/works" />
                  <TitleSection titleText="Technologies" />
                  <SkillsSection>
                    {techArr.map((tech) => (
                      <SkillsTags
                        textTag={tech}
                        renderTag={(props) => <ConsoleTag {...props} />}
                      />
                    ))}
                  </SkillsSection>
                  <TitleSection titleText="I ❤" />
                  <BodyParagraph text="Art, Music, Drawing, Playing Piano and Guitar, Phography, Math and Science" />
                  <TitleSection titleText="Socials" />
                  <Socials
                    socialMediaText="@jonhy_vr"
                    socialsLinks="https://www.instagram.com/jonhy_vr/"
                    renderSocialIcon={() => (
                      <IoLogoInstagram className={styles.SocialIcons} />
                    )}
                  />
                  <Socials
                    socialMediaText="@jonny0702"
                    socialsLinks="https://github.com/jonny0702"
                    renderSocialIcon={() => (
                      <IoLogoGithub className={styles.SocialIcons} />
                    )}
                  />
                  <Socials
                    socialMediaText="@jonhy_vr"
                    socialsLinks="https://www.twitch.tv/jonhy_vr"
                    renderSocialIcon={() => (
                      <IoLogoTwitch className={styles.SocialIcons} />
                    )}
                  />
                </HomeBody>
                <ContactMeSection>
                  <TitleSection titleText="Contact Me" />
                </ContactMeSection>
              </main>
            </>
          )}
          {tablet && (
            <>
              <HeaderContainer>
                <header className={styles.Header__container}>
                  <div
                    className={styles['Header__TitlePresentation--container']}
                  >
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
                    <BodyParagraph text={textParagrah} />
                    <TitleSection titleText="Technologies" />
                    <SkillsSection>
                      {techArr.map((tech) => (
                        <SkillsTags
                          textTag={tech}
                          renderTag={(props) => <ConsoleTag {...props} />}
                        />
                      ))}
                    </SkillsSection>
                    <TitleSection titleText="I ❤" />
                    <BodyParagraph text="Art, Music, Drawing, Playing Piano and Guitar, Phography, Math and Science" />
                    <TitleSection titleText="Socials" />
                    <Socials
                      socialMediaText="@jonhy_vr"
                      socialsLinks="https://www.instagram.com/jonhy_vr/"
                      renderSocialIcon={() => (
                        <IoLogoInstagram className={styles.SocialIcons} />
                      )}
                    />
                    <Socials
                      socialMediaText="@jonny0702"
                      socialsLinks="https://github.com/jonny0702"
                      renderSocialIcon={() => (
                        <IoLogoGithub className={styles.SocialIcons} />
                      )}
                    />
                    <Socials
                      socialMediaText="@jonhy_vr"
                      socialsLinks="https://www.twitch.tv/jonhy_vr"
                      renderSocialIcon={() => (
                        <IoLogoTwitch className={styles.SocialIcons} />
                      )}
                    />
                  </div>
                  <Button buttonText="My Portfolio" routes="/works" />
                </HomeBody>
              </main>
              <ContactMeSection>
                <TitleSection titleText="Contact Me" />
              </ContactMeSection>
            </>
          )}
        </section>
      </div>
    </>
  );
}
