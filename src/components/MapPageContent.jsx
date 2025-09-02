import Link from "next/link";

import AdBanner from "./AdBanner";
import { adsConfig } from "@/adsConfig";

const MapPageContent = ({ children, mapName }) => {
  // Buscar slots según el nombre del mapa
  const config = adsConfig[mapName.toLowerCase()] || {};

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Anuncio izquierda */}
      {/*<aside style={{ flex: "1" }}>
        {config.left && <AdBanner slot={config.left} />}
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
      {/*<aside style={{ flex: "1" }}>
        {config.right && <AdBanner slot={config.right} />}
      </aside>*/}
    </div>
  );
};

export default MapPageContent;
