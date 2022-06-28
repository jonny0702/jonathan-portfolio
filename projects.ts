const lostTravellerAdmin = 'https://firebasestorage.googleapis.com/v0/b/portfolio-fca3e.appspot.com/o/LostTravellerAdmin.png?alt=media&token=1b1411b4-e118-437a-88c6-b28531a3a0d1'
const lostTraveller = 'https://firebasestorage.googleapis.com/v0/b/portfolio-fca3e.appspot.com/o/LostTraveller.png?alt=media&token=7a75f7a0-1c20-4d11-b957-c1e01c930eb2'
const weatherApp = 'https://firebasestorage.googleapis.com/v0/b/portfolio-fca3e.appspot.com/o/WeatherApp.png?alt=media&token=c5a674d8-24dc-4218-935b-0b833a3ec975'

interface ProjectsT {
  id: string;
  name: string;
  description: string;
  platform: string;
  stack: string;
  link:string;
  presentation: string;
  photos: Array<string>;
}


export const projects: ProjectsT[] = [
  {
    id: '1',
    name: 'Lost Traveller',
    description: 'A internal turism digital service to share the beatifull places that we not know in panama',
    platform: 'Web',
    stack: 'JavaScript, NextJs, React, Firebase',
    presentation: 'https://losttraveler.vercel.app/',
    link: `works`,
    photos: [lostTraveller],
  },
  {
    id: '2',
    name: 'Lost Traveller Admin',
    description: 'The admin side of Lost Traveller which is responsible for managing the verification request and uploaded posts',
    platform: 'Web',
    stack: 'JavaScript, NextJs, React, Firebase',
    presentation: 'https://github.com/jonny0702/lost-traveller-next-dashboard',
    link: `works`,
    photos: [lostTravellerAdmin],
  },
  {
    id: '3',
    name: 'Weather App',
    description: 'App that show the weather data in your area',
    platform: 'Web',
    stack: 'JavaScript, NextJs, React, Firebase',
    presentation: 'https://weather-r-app.netlify.app',
    link: `works`,
    photos: [weatherApp],
  },
];
