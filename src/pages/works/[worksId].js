import MenuNav from '../../containers/MenuNav';
import SlideMenuBar from '../../containers/SlideMenuBar';

export default function LostTraveller() {
  return (
    <>
      <MenuNav renderSlideMenuBar={(props) => <SlideMenuBar />} />
      <div className={styles.ProjectContainer}></div>
    </>
  );
}
