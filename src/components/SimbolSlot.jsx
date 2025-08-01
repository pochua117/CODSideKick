
const SimbolSlot = ({ symbolId, onDrop, allowDrop, id, images }) => {
    return (
    <div
       className="drop-slot"
       onDragOver={allowDrop}
       onDrop={(e) => {
        const draggedId = parseInt(e.dataTransfer.getData("symbolId"))
        if (!isNaN(draggedId)) {
        onDrop(draggedId)
      }
       }}
       onClick={(e) => {
        onDrop(id.id)
       }}
     >
       {symbolId !== null ? (
         <img
           className="simbol-selected-image"
           src={`${images}signo_${symbolId}.jpg`}
           alt={`Signo ${symbolId}`}
         />
       ) : (
         <div className="empty-slot"></div>
       )}
    </div>
    )
}

export default SimbolSlot