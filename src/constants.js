import { lazy } from 'react';


const CitadellePage = lazy(() => import('./components/maps_components/CitadellePage.jsx'));
const TerminusPage = lazy(() => import('./components/maps_components/TerminusPage.jsx'));
const ReckoningPage = lazy(() => import('./components/maps_components/ReckoningPage.jsx'));

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