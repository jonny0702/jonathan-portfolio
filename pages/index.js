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
import { IoLogoInstagram, IoLogoGithub, IoLogoTwitch } from 'react-icons/io5';
import styles from '../styles/Home.module.sass';

export default function Home() {
  const textParagrah =
    'Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called Inkdrop. He publishes content for marketing his products and his YouTube channel called "Dev as Life" has more than 100k subscribers.';

  return (
    <div className={styles.container}>
      <MenuNav renderSlideMenuBar={(props) => <SlideMenuBar {...props} />} />
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
              <BodyParagraph text={textParagrah} />
            </div>
            <Button buttonText="My Works" />
            <TitleSection titleText="Technologies" />
            <SkillsSection>
              <SkillsTags
                textTag="HTML"
                renderTag={(props) => <ConsoleTag {...props} />}
              />
              <SkillsTags
                textTag="CSS"
                renderTag={(props) => <ConsoleTag {...props} />}
              />
              <SkillsTags
                textTag="JavaScrip"
                renderTag={(props) => <ConsoleTag {...props} />}
              />
              <SkillsTags
                textTag="React"
                renderTag={(props) => <ConsoleTag {...props} />}
              />
              <SkillsTags
                textTag="ThreeJS"
                renderTag={(props) => <ConsoleTag {...props} />}
              />
              <SkillsTags
                textTag="Node"
                renderTag={(props) => <ConsoleTag {...props} />}
              />
              <SkillsTags
                textTag="Express"
                renderTag={(props) => <ConsoleTag {...props} />}
              />
              <SkillsTags
                textTag="NextJS"
                renderTag={(props) => <ConsoleTag {...props} />}
              />
              <SkillsTags
                textTag="Azure"
                renderTag={(props) => <ConsoleTag {...props} />}
              />
              <SkillsTags
                textTag="Firebase"
                renderTag={(props) => <ConsoleTag {...props} />}
              />
            </SkillsSection>
            <TitleSection titleText="I ❤" />
            <BodyParagraph text="Art, Music, Drawing, Playing Piano and Guitar, Phography, Math and Science" />
            <TitleSection titleText="Socials" />
            <Socials
              socialMediaText="@jonhy_vr"
              renderSocialIcon={() => (
                <IoLogoInstagram className={styles.SocialIcons} />
              )}
            />
            <Socials
              socialMediaText="@jonny0702"
              renderSocialIcon={() => (
                <IoLogoGithub className={styles.SocialIcons} />
              )}
            />
            <Socials
              socialMediaText="@jonhy_vr"
              renderSocialIcon={() => (
                <IoLogoTwitch className={styles.SocialIcons} />
              )}
            />
          </HomeBody>
        </main>
      </section>
    </div>
  );
}
