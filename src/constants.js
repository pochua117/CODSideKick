import { lazy } from 'react';

const CitadellePage = lazy(() => import('./maps/CitadellePage.jsx'));
const TerminusPage = lazy(() => import('./maps/TerminusPage.jsx'));

export const MAPS = [
  {
    Name: 'Terminus',
    Image: 'terminus.jpg',
    Link: '/maps/terminus',
    Component: TerminusPage
  },
  {
    Name: 'Citadelle Des Morts',
    Image: 'citadelle.jpg',
    Link: '/maps/citadelle',
    Component: CitadellePage
  },
];

export const imagesInfo = [
  {
    name: "Horn",
    zodiacImage: "/../images/zodiac/aries.svg",
    elementImage: "/../images/elements/fire.svg"
  },
  {
    name: "Jaw",
    zodiacImage: "/../images/zodiac/leo.svg",
    elementImage: "/../images/elements/fire.svg"
  },
  {
    name: "Fish",
    zodiacImage: "/../images/zodiac/pisces.svg",
    elementImage: "/../images/elements/water.svg"
  },
  {
    name: "Scorpion",
    zodiacImage: "/../images/zodiac/scorpio.svg",
    elementImage: "/../images/elements/water.svg"
  },
  {
    name: "Raven",
    zodiacImage: "/../images/zodiac/gemini.svg",
    elementImage: "/../images/elements/air.svg"
  },
];