const lostTravellerAdmin =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-fca3e.appspot.com/o/LostTravellerAdmin.png?alt=media&token=1b1411b4-e118-437a-88c6-b28531a3a0d1';

const lostTravellerAdminPost =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-fca3e.appspot.com/o/LostTravellerAdminPost.png?alt=media&token=aefaa3d9-acf8-45f4-8bcb-c78ce8769356';
const lostTravellerAdminVerify =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-fca3e.appspot.com/o/UserverificationModal.png?alt=media&token=4ccfd273-ec94-401a-a336-1f8b41919479';
const lostTraveller =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-fca3e.appspot.com/o/LostTraveller.png?alt=media&token=7a75f7a0-1c20-4d11-b957-c1e01c930eb2';
const lostTravellerPost =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-fca3e.appspot.com/o/LostTravellerPost.png?alt=media&token=5fe6e66e-5f08-46dd-b650-30a5507bb501';
const lostTravellerProfile =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-fca3e.appspot.com/o/LosttravellerProfile.png?alt=media&token=e7394e41-3e67-4b6f-9551-d6aaf66af593';
const weatherApp =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-fca3e.appspot.com/o/WeatherApp.png?alt=media&token=c5a674d8-24dc-4218-935b-0b833a3ec975';
const weatherAppResponsive =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-fca3e.appspot.com/o/WeatherAppTablet.png?alt=media&token=9d7c9dfc-43e5-410f-b016-a65c0f8e016a';
const weatherAppDisplay =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-fca3e.appspot.com/o/WeatherAppTabletDisplay.png?alt=media&token=8debb0a3-fd31-4f66-9d82-fa111b8a46eb';
interface ProjectsT {
  id: string;
  name: string;
  description: string;
  platform: string;
  stack: string;
  link: string;
  dates: string;
  website?: string;
  photos: Array<object>;
}

export const projects: ProjectsT[] = [
  {
    id: '1',
    name: 'Lost Traveller',
    description:
      'A internal turism web app to share beautiful places that we not know in panama',
    platform: 'Web App',
    stack: 'JavaScript, NextJs, React, Firebase, Sass',
    website: 'https://losttraveler.vercel.app/',
    link: `works`,
    dates: '2021-',
    photos: [
      {
        id:0,
        name: 'mainPage',
        metaData: lostTraveller,
      },
      {
        id:1,
        name: 'profilePage',
        metaData: lostTravellerProfile,
      },
      {
        id:2,
        name: 'postPage',
        metaData: lostTravellerPost,
      },
    ],
  },
  {
    id: '2',
    name: 'Lost Traveller Admin',
    description:
      'Is the admin platform of Lost Traveller web app. The platform takes of the verification process and the validation of posts',
    platform: 'Web App',
    stack: 'JavaScript, NextJs, React, Firebase, Sass',
    link: `works`,
    dates: '2022-',
    photos: [
      {
        id:0,
        name: 'main',
        metaData: lostTravellerAdmin,
      },
      {
        id:1,
        name: 'posts',
        metaData: lostTravellerAdminPost,
      },
      {
        id:2,
        name: 'verifyUser',
        metaData: lostTravellerAdminVerify,
      },
    ],
  },
  {
    id: '3',
    name: 'Weather App',
    description: 'Web app that shows the weather data in your area',
    platform: 'Web App',
    stack: 'JavaScript, NextJs, React, ThreeJs',
    website: 'https://weather-r-app.netlify.app',
    link: `works`,
    dates: '2022-2022',
    photos: [
      {
        id: 0,
        name: 'mainPage',
        metaData: weatherApp,
      },
      {
        id: 1,
        name: 'responsive',
        metaData: weatherAppResponsive,
      },
      {
        id: 2,
        name: 'display',
        metaData: weatherAppDisplay,
      },
    ],
  },
];
