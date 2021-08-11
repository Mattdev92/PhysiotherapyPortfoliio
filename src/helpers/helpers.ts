import { ReactComponent as Face } from 'assets/portalIcons/face.svg';
import { ReactComponent as Github } from 'assets/portalIcons/github.svg';
import { ReactComponent as Linkedin } from 'assets/portalIcons/linkedin.svg';
import { ReactComponent as HtmlIcon } from 'assets/techIcons/html-5.svg';
import { ReactComponent as JsIcon } from 'assets/techIcons/js.svg';
import { ReactComponent as CssIcon } from 'assets/techIcons/css.svg';
import { ReactComponent as TypescriptIcon } from 'assets/techIcons/typescript.svg';
import { ReactComponent as SassIcon } from 'assets/techIcons/sass.svg';
import { ReactComponent as ReactIcon } from 'assets/techIcons/React.svg';

import ItSpa from 'assets/projects/ItSpa.png';
import MemoryGame from 'assets/projects/MemoryGame.png';
import nativeMems from 'assets/projects/nativeMems.png';
import OrgenizerApp from 'assets/projects/OrganizerApp.png';
import Portfolio from 'assets/projects/Portfolio.png';
import ShopProject from 'assets/projects/ShopProject.png';
import WeatherApp from 'assets/projects/WeatherApp.png';

// Content Data for Main Page template
export const developer = [
  'CZEŚĆ, tu MATI',
  'WEB DEVELOPER',
  'Front End Developer / React enthusiast',
];

export const cv = ['Pobierz CV'];

export const phoneNumber = [
  'CZEŚĆ, tu MATI',
  '500 239 053',
  'Front End Developer / React enthusiast',
];

// Navigation data
export const Navdata = ['O MNIE', 'PROJEKTY', 'UMIEJĘTNOŚCI', 'KONTAKT', 'CV'];
export const Url = ['/about', '/projects', '/skills', '/contact', '/CV'];

// Social Network data
export const SocialNetworkIcon = [Face, Github, Linkedin];

export const SocialNetworkUrl = [
  'https://www.facebook.com/mgrzejszczyk/',
  'https://github.com/Mattdev92',
  'https://www.linkedin.com/in/mateusz-grzejszczyk',
];

// Main Page Template Data
export const specialText = `"Prostota to szczyt wyrafinowania"
— Walter Isaacson, Steve Jobs`;
export const mainContentDataFontWight = ['S', 'M', 'XS'];
export const mainContentDataFontSize = ['M', 'M', 'S'];

// About View Content Data
export const aboutContentData = [
  'Już blisko dwa lata zbieram doświadczenie jako Frontend Developer. Początkowe zaciekawienie przerodziło się w pasję.',
  'Chęć dalszego rozwoju sprawiła, że w przeciągu roku ukończyłem studia podyplomowe na kierunku Frontend Development z React, co w efekcie zaowocowało podjęciem pracy na pełen etat jako React Developer.',
  'Mój mały sukces motywuje mnie do dalszego rozwoju dlatego tworzę własne projekty oraz śledzę z zaciekawieniem świat IT, a w szczególności dynamicznie zmieniające się środowisko Front Endu.',
];

// Pseudo Code data
export const pseudoCodeMain = ['<main>', '<main/>'];

export const pseudoCodeSection = [`<section class=`, '</section>'];

// Skills data
export const skillsCategories = [
  `'FRONTEND ESSENTIALS'>`,
  `'FRONTEND LIBRARIES'>`,
  `'MOBILE DEVELOPMENT'>`,
  `'BACKEND LANGUAGES'>`,
  `'BACKEND LIBRARIES'>`,
  `'CMS & DATABASE & external platforms'>`,
  `'TOOLS'>`,
];

export const frontendEssentialsSkills = [
  'HTML5',
  'CSS3',
  'JS',
  'TypeScript',
  'React',
  'Sass',
];

export const backendsSkills = ['NODE JS', 'C++'];

export const reactSkills = [
  'React router',
  'React Redux',
  'React Hooks',
  'Jest & React testing library',
  'Redux',
  'Redux Toolkit',
  'Redux Thunk',
  'Styled Components',
  'React Bootstrap',
  'Material UI',
  'GSAP',
  'Axios',
  'Apollo',
  'Rest',
  'GraphQL',
  'LocaStorage',
  'Json server',
  'Formik',
];

export const mobileDevelopment = [
  'React Native',
  'React Navigation',
  'React ReduxNative Debugger',
];

export const backendFrameworks = [
  'Express',
  'Bcrypt',
  'JWT',
  'Nodemon',
  'Mongoose',
];

export const platformsSkills = ['DatoCMS', 'MongoDB', 'Netlify'];

export const toolsSkills = [
  'Git&Github',
  'Npm',
  'Webpack&Babel',
  'VS Code',
  'Devtools',
  'AdobeXD',
];

export const techIcons = [
  HtmlIcon,
  CssIcon,
  JsIcon,
  TypescriptIcon,
  ReactIcon,
  SassIcon,
];

export const skills = [
  frontendEssentialsSkills,
  reactSkills,
  mobileDevelopment,
  backendsSkills,
  backendFrameworks,
  platformsSkills,
  toolsSkills,
];

// Projects Data

export const ProjectMiniatures = [
  Portfolio,
  nativeMems,
  OrgenizerApp,
  ShopProject,
  MemoryGame,
  ItSpa,
  WeatherApp,
];

export const ProjectsUrl = [
  'https://github.com/Mattdev92/MatDevPortfolio',
  'https://github.com/Mattdev92/NativeMems',
  'https://github.com/Mattdev92/Fullstack_organizer_app',
  'https://github.com/Mattdev92/Shop-project',
  'https://github.com/Mattdev92/Memory_game',
  'https://github.com/Mattdev92/IT_SPA_PROJECT_1',
  'https://github.com/Mattdev92/Weather-app',
];
export const ProjectTitles = [
  'Developer Portfolio',
  'Mem native App',
  'Organizer',
  'Ecommerce',
  'Memory Game',
  'It SPA',
  'Check city weather',
];

export const ProjectDescription = [
  'My Developer Portfolio presenting skills, projects and a little about me. Tech stack: React, Typescript, React Router, React hooks, Context, Styled Components',
  'Native app with funny Mems. Mems are downloaded form DatoCMS and present on mobile App. You can upvote or downvote each Mem to categorize them. Tech stack: React, React Native, Typescript, React Router, React hooks, Redux Toolkit, Styled Components, GraphQl, DatoCMS',
  'Fullstack organizer app to categorize your tasks. App is connected with Mongo database. You can create your own user and login any time to see what you have to do. Project is based on Express and React. Tech stack: React, Express, Typescript, React Router, React Bootstrap',
  'E-commerce website simulated real shop with all user funcionalities. You can add any of product to cart, change quantity and make an order. Tech stack: React with class components (without hooks), Redux, GSAP, React Router',
  'Game is based on tradition rule to match pair of identical cards. You can see if your memory is better than your friends. Yout time will be recorded and present in case of match all pairs. Tech stack: React, Redux, Bulma, SCSS',
  `It's my first diploma project which I' he prepared for my postgraduate studies "frontend with React". This project was prepared using vanilla js without any js framework. Tech stack: Vanilla js, SCSS, Json server, axios, uuid, prettier, eslint`,
  `Weather app witch real time weather forecast. Webpage is connected to OpenWeather api. You can find any city and forecast to next 7 days in real time. Tech stack: React, Typescript, Axios, Redux`,
];
