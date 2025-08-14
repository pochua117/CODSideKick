const SymbolsGallery = ({ setClickSymbolId=()=>{}, imagesDir, imageExtension, length, imagesInfo }) => {
  const symbols = Array.from({ length: length }, (_, i) => i);

  const handleDragStart = (e, symbolId) => {
    e.dataTransfer.setData("symbolId", symbolId);
  };

  return (
    <section className="symbols-section">
      {symbols.map((i) => (
        <div key={i}>
          {imagesInfo && imagesInfo[i]?.name && <h2 className="symbol-name">{imagesInfo[i].name}</h2>}
          <div className="symbol-container">
          <img
            className="symbol-image"
            src={`${imagesDir}signo_${i}.${imageExtension}`}
            alt={`Signo ${i}`}
            draggable
            onDragStart={(e) => handleDragStart(e, i)}
            onClick={() => setClickSymbolId(i)}
          />          
          {imagesInfo && imagesInfo[i]?.zodiacImage && <img className="symbol-extra" src={imagesInfo[i].zodiacImage} />}
          {imagesInfo && imagesInfo[i]?.elementImage && <img className="symbol-extra" src={imagesInfo[i].elementImage} />}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SymbolsGallery;
