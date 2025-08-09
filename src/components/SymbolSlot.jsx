const SimbolSlot = ({ dropSymbolId, clickSymbolId,onDrop, allowDrop, imagesDir, imageExtension }) => {
  return (
    <div
      className="drop-slot"
      onDragOver={allowDrop}
      onDrop={(e) => {
        const draggedId = parseInt(e.dataTransfer.getData("symbolId"));
        if (!isNaN(draggedId)) {
          onDrop(draggedId);
        }
      }}
      onClick={(e) => {
        onDrop(clickSymbolId);
      }}
    >
      {dropSymbolId !== null ? (
        <img
          className="simbol-selected-image"
          src={`${imagesDir}signo_${dropSymbolId}.${imageExtension}`}
          alt={`Signo ${dropSymbolId}`}
        />
      ) : (
        <div className="empty-slot"></div>
      )}
    </div>
  );
};

export default SymbolSlot;
