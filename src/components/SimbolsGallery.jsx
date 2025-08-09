const SimbolsGallery = ({ setClickSymbolId, imagesDir, imageExtension, length, imagesInfo }) => {
  const simbols = Array.from({ length: length }, (_, i) => i);

  const handleDragStart = (e, symbolId) => {
    e.dataTransfer.setData("symbolId", symbolId);
  };

  return (
    <section className="simbols-section">
      {simbols.map((i) => (
        <div key={i}>
          {imagesInfo && imagesInfo[i]?.name && <h2 className="simbol-name">{imagesInfo[i].name}</h2>}
          <div className="simbol-container">
          <img
            className="simbol-image"
            src={`${imagesDir}signo_${i}.${imageExtension}`}
            alt={`Signo ${i}`}
            draggable
            onDragStart={(e) => handleDragStart(e, i)}
            onClick={() => setClickSymbolId(i)}
          />          
          {imagesInfo && imagesInfo[i]?.zodiacImage && <img className="simbol-extra" src={imagesInfo[i].zodiacImage} />}
          {imagesInfo && imagesInfo[i]?.elementImage && <img className="simbol-extra" src={imagesInfo[i].elementImage} />}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SimbolsGallery;
