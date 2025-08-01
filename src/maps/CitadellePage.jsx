import { useState } from 'react'

const CitadellePage = () => {
  const simbols = Array.from({ length: 20 }, (_, i) => i)
  const [selected, setSelected] = useState(Array(6).fill(null)) // 6 espacios vacíos

  const handleDrop = (index, symbolId) => {
    const newSelection = [...selected]
    newSelection[index] = symbolId
    setSelected(newSelection)
  }

  const handleDragStart = (e, symbolId) => {
    e.dataTransfer.setData("symbolId", symbolId)
  }

  const allowDrop = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <h2 className="simbols-title">Simbols Puzzle Solver</h2>
      <section className="simbols-section">
        {simbols.map(i => (
          <img
            key={i}
            className="simbol-image"
            src={`../images/simbols/signo_${i}.jpg`}
            alt={`Signo ${i}`}
            draggable
            onDragStart={(e) => handleDragStart(e, i)}
          />
        ))}
      </section>

      <section className="section-selected">
        {selected.map((symbolId, index) => (
          <div
            key={index}
            className="drop-slot"
            onDragOver={allowDrop}
            onDrop={(e) => {
              const draggedId = parseInt(e.dataTransfer.getData("symbolId"))
              handleDrop(index, draggedId)
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
        ))}
      </section>
    </div>
  )
}

export default CitadellePage
