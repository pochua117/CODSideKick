import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import MapCard from './components/MapCard';
import { MAPS } from './constants.js';
import MapPageContent from './components/MapPageContent.jsx';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main className="App">
            <h1 className="title">CODSideKick</h1>
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
      {MAPS.map((map, index) => {
        // Lazy carga el componente usando import dinámico
        const LazyComponent = lazy(() => import(`${map.ComponentPath}`));

        return (
          <Route
            key={index}
            path={map.Link}
            element={
              <Suspense fallback={<div>Cargando...</div>}>
                <MapPageContent mapName={map.Text}>
                  <LazyComponent />
                </MapPageContent>
              </Suspense>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;