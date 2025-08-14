import { lazy } from 'react';

const CitadellePage = lazy(() => import('./maps/CitadellePage.jsx'));
const TerminusPage = lazy(() => import('./maps/TerminusPage.jsx'));
const ReckoningPage = lazy(() => import('./maps/ReckoningPage.jsx'));

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
  {
    Name: 'Reckoning',
    Image: 'reckoning.jpg',
    Link: '/maps/reckoning',
    Component: ReckoningPage
  }
];
