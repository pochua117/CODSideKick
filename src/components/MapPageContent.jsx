import Link from "next/link";

import AdBanner from "./AdBanner";
import { adsConfig } from "@/adsConfig";

const MapPageContent = ({ children, mapName }) => {
  // Buscar slots según el nombre del mapa
  const config = adsConfig[mapName] || {};

  return (
    <div className="map-page-content">
      {/* Anuncio izquierda */}
      {config.left && <AdBanner adSlot={config.left} />}

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
      {config.right && <AdBanner adSlot={config.right} />}

      {/* Anuncio abajo */}
      {config.down && <AdBanner adSlot={config.down} className="ad-banner-down" />}

    </div>
  );
};

export default MapPageContent;
