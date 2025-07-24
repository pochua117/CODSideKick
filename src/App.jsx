import './App.css'
import MapCard from './components/MapCard'
import { Routes, Route } from 'react-router-dom'

import CitadellePage from './maps/CitadellePage.jsx'
import TerminusPage from './maps/TerminusPage.jsx'
import TombPage from './maps/TombPage.jsx'
import LibertyFallsPage from './maps/LibertyFallsPage.jsx'

function App() {
  const MAPS = [
    { Text: 'Citadelle', Image: 'Citadelle_des_Morts.jpg', Link: '/maps/CitadellePage' },
    { Text: 'Terminus', Image: 'terminus.jpg', Link: '/maps/terminus' },
    { Text: 'The Tomb', Image: 'tomb.jpg', Link: '/maps/tomb' },
    { Text: 'Liberty Falls', Image: 'liberty.jpg', Link: '/maps/liberty-falls' },
  ]

  return (
    <Routes>
      <Route
        path="/"
        element={
          <main className="App">
            <section className="map-list">
              {MAPS.map((map, index) => (
                <MapCard
                  key={index}
                  Text={map.Text}
                  Image={map.Image}
                  Link={map.Link}
                />
              ))}
            </section>
          </main>
        }
      />
      <Route path="/maps/citadelle" element={<CitadellePage />} />
      <Route path="/maps/terminus" element={<TerminusPage />} />
      <Route path="/maps/tomb" element={<TombPage />} />
      <Route path="/maps/liberty-falls" element={<LibertyFallsPage />} />
    </Routes>
  )
}

export default App
