import { lazy } from 'react';

const CitadellePage = lazy(() => import('./maps/CitadellePage.jsx'));
const TerminusPage = lazy(() => import('./maps/TerminusPage.jsx'));

export const MAPS = [
  {
    Text: 'Terminus',
    Image: 'terminus.jpg',
    Link: '/maps/terminus',
    Component: TerminusPage
  },
  {
    Text: 'Citadelle Des Morts',
    Image: 'citadelle.jpg',
    Link: '/maps/citadelle',
    Component: CitadellePage
  },
];
