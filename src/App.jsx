import './App.css'
import { Routes, Route } from 'react-router-dom'

import MapCard from './components/MapCard'
import { MAPS } from './constants.js'

import MapPageContent from './components/MapPageContent.jsx'

function App() {
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
      {MAPS.map((map, index) => (
        <Route path={map.Link} element={<MapPageContent mapName={map.Text} ><map.Component/></MapPageContent>} />
      ))}
    </Routes>
  )
}

export default App
