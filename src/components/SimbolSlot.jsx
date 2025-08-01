
const SimbolSlot = ({ symbolId, onDrop, allowDrop }) => {
    return (
    <div
       className="drop-slot"
       onDragOver={allowDrop}
       onDrop={(e) => {
        const draggedId = parseInt(e.dataTransfer.getData("symbolId"))
        onDrop(draggedId)
       }}
     >
       {symbolId !== null ? (
         <img
           className="simbol-selected-image"
           src={`../images/simbols/signo_${symbolId}.jpg`}
           alt={`Signo ${symbolId}`}
         />
       ) : (
         <div className="empty-slot"></div>
       )}
    </div>
    )
}

export default SimbolSlot