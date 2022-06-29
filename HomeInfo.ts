/**
 * @Atoms
 */

const AzureIcon =
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg';
const CssIcon =
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg';
const ExpressIcon =
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg';
const FirebaseIcon =
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg';
const HtmlIcon =
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg';
const JavaScriptIcon =
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg';
const NextJsIcon =
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg';
const NodeIcon =
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg';
const ReactIcon =
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';
const ThreeJsIcon =
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg';

interface HomeInfoT {
  textParagraph: string,
  skillsTags: Array<object>
}



export const HomeInfo: HomeInfoT = {
  textParagraph: `Jonathan is a full-stack developer based in Panama, with a 
  passion to solve real-life problems building software.When he’s not 
  in the computer, he loves playing the piano or draw. Currently he is 
  building his own digital service (Lost Traveller) with a team of three developers, 
  and he likes studying some new technologies in his free time
   and building small coding stuff.`,
  skillsTags: [
    {
      key: 1,
      textTag: 'HTML',
      renderIcon: [HtmlIcon],
    },
    {
      key: 2,
      textTag: 'CSS',
      renderIcon: [CssIcon],
    },
    {
      key: 3,
      textTag: 'JavaScript',
      renderIcon: [JavaScriptIcon],
    },
    {
      key: 4,
      textTag: 'React',
      renderIcon: [ReactIcon],
    },
    {
      key: 5,
      textTag: 'NextJs',
      renderIcon: [NextJsIcon],
    },
    {
      key: 6,
      textTag: 'ThreeJs',
      renderIcon: [ThreeJsIcon],
    },
    {
      key: 7,
      textTag: 'Azure',
      renderIcon: [AzureIcon],
    },
    {
      key: 8,
      textTag: 'Node',
      renderIcon: [NodeIcon],
    },
    {
      key: 9,
      textTag: 'Express',
      renderIcon: [ExpressIcon],
    },
    {
      key: 10,
      textTag: 'firebase',
      renderIcon: [FirebaseIcon],
    },
  ],
};
