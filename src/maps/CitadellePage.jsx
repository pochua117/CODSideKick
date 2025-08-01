import SimbolSlots from '../components/SimbolSlots'
import { useState } from 'react'

const CitadellePage = () => {
  const simbols = Array.from({ length: 20 }, (_, i) => i)
  const [Id, setId] = useState(0)
  
  const handleDragStart = (e, symbolId) => {
    e.dataTransfer.setData("symbolId", symbolId)
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
            onClick={() => setId(i)}
          />
        ))}
      </section>
      <SimbolSlots id = {Id}/>  
    </div>
  )
}

export default CitadellePage
