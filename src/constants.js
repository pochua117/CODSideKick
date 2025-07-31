import CitadellePage from './maps/CitadellePage.jsx'
import TerminusPage from './maps/TerminusPage.jsx'
import TombPage from './maps/TombPage.jsx'
import LibertyFallsPage from './maps/LibertyFallsPage.jsx'

export const MAPS = [
  { Text: "Liberty Falls",
    Image: "liberty.jpg",
    Link: "/maps/liberty",
    Component: LibertyFallsPage,
  },
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

  { Text: 'The Tomb', 
    Image: 'tomb.jpg', 
    Link: '/maps/tomb',
    Component: TombPage 
  },


]
//frutas = ["Pera", "Manzana", "Platano"]

//for frutas in frutas:
//  print(fruta)