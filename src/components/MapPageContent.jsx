import Link from "next/link";

import AdBanner from "./AdBanner";
import { adsConfig } from "@/adsConfig";

const MapPageContent = ({ children, mapName }) => {
  // Buscar slots según el nombre del mapa
  const config = adsConfig[mapName.toLowerCase()] || {};

  return (
    <div className="map-page-content">
      {/* Anuncio izquierda */}
      {mapName === "test" &&
      <aside className="ad" style={{ border: "1px solid red" }}>
      </aside>}

      {/* Contenido del mapa */}
      <section className="map-page" style={{ flex: "2" }}>
        <header className="map-card-header">
          <Link href="/" className="close-button">
            Back
          </Link>
          <h1 translate="no">{mapName}</h1>
        </header>
        <article className="map-card">{children}</article>
      </section>

      {/* Anuncio derecha */}
      {mapName === "test" && 
      <aside className="ad" style={{border: "1px solid red"  }}>
      </aside>}
    </div>
  );
};

export default MapPageContent;
