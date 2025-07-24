import './App.css'
import MapCard from './components/MapCard'
import { Routes, Route } from 'react-router-dom'

import { MAPS } from './constants.js'

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
        <Route path={map.Link} element={<map.Component/>} />
      ))}
    </Routes>
  )
}

export default App
