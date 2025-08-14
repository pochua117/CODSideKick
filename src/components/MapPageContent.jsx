import Link from "next/link";

const MapPageContent = ({ children, mapName }) => {
  return (
    <section className="map-page">
      <header className="map-card-header">
        <Link href="/" className="close-button">
          Back
        </Link>
        <h1 translate="no">{mapName}</h1>
      </header>
      <article className="map-card">{children}</article>
    </section>
  );
};

export default MapPageContent;
