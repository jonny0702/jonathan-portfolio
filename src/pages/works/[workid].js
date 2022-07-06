import { useState, useContext, useEffect } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MenuNav from '../../containers/MenuNav';
import SlideMenuBar from '../../containers/SlideMenuBar';
import VoxelContainer from '../../containers/VoxelContainer';
import WorkDetail from '../../containers/WorkDetail';
import BodyParagraph from '../../components/BodyParagraph';
import Stacks from '../../components/Stacks';
import MediaContainer from '../../containers/MediaContainer';
import CardImages from '../../components/CardImages';
import styles from '../../styles/WorkPage.module.sass';

export default function Works() {
  const {
    query: { workid },
    isReady,
  } = useRouter();

  const { darkMode } = useContext(DarkModeContext);

  const [workInfo, setWorkInfo] = useState({});
  const [photos, setPhotos] = useState([]);
  const hasPhotos = photos.length > 0;
  const fetchWork = async () => {
    try {
      const res = await fetch(`/api/works/${workid}`);
      const data = await res.json();
      setWorkInfo(data.work);
      setPhotos(data.work.photos);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    workid && fetchWork();
  }, [isReady]);

  return (
    <>
      <MenuNav renderSlideMenuBar={(props) => <SlideMenuBar {...props} />} />
      <div
        className={`${
          !darkMode
            ? styles.WorkDetail__container
            : styles['WorksDetail__container--light']
        }`}
      >
        <section className={styles.Model__container}>
          <VoxelContainer />
        </section>
        <section className={`${styles.WorkDetailInfo__container}`}>
          <div className={styles['WorkInfo__Title--container']}>
            <Link href="/works">
              <a
                className={`${
                  !darkMode
                    ? styles.WorksDetailInfo__linkBack
                    : styles['WorksDetailInfo__linkBack--light']
                }`}
              >
                works
              </a>
            </Link>
            <h2 className={styles.WorksDetail__title}>
              {' '}
              {'>'} {workInfo.name}
            </h2>
            <div
              className={`${
                !darkMode
                  ? styles.WorksDetail__date
                  : styles['WorksDetail__date--light']
              }`}
            >
              <span>{workInfo.dates}</span>
            </div>
          </div>
          <WorkDetail>
            <BodyParagraph text={workInfo?.description} />
            <Stacks
              darkMode={darkMode}
              title="WEBSITE"
              info={workInfo?.website}
              isLink
            />
            <Stacks
              darkMode={darkMode}
              title="PLATFORM"
              info={workInfo?.platform}
            />
            <Stacks darkMode={darkMode} title="STACK" info={workInfo?.stack} />
            <MediaContainer>
              {hasPhotos && (
                <CardImages photos={photos[0]} darkMode={darkMode} />
              )}
            </MediaContainer>
          </WorkDetail>
        </section>
      </div>
    </>
  );
}
