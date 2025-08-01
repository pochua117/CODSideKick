import CitadellePage from './maps/CitadellePage.jsx'
import TerminusPage from './maps/TerminusPage.jsx'

export const MAPS = [
  { Text: 
    'Terminus', 
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
]