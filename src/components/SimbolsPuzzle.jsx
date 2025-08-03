import SimbolSlots from '../components/SimbolSlots'
import { useState } from 'react'

const SimbolsPuzzle = ({name ,length, resultlenght, images}) => {
    const simbols = Array.from({ length: length }, (_, i) => i)
    const [Id, setId] = useState(0)
    
    const handleDragStart = (e, symbolId) => {
      e.dataTransfer.setData("symbolId", symbolId)
    }
    
    return (
        <div className="container">
          <h2 className="simbols-title">{name}</h2>
          <section className="simbols-section">
            {simbols.map(i => (
              <img
                key={i}
                className="simbol-image"
                src={`${images}signo_${i}.png`}
                alt={`Signo ${i}`}
                draggable
                onDragStart={(e) => handleDragStart(e, i)}
                onClick={() => setId(i)}
                onError={(e) => {
              e.target.onerror = null
              e.target.src = `${images}signo_${i}.jpg`
            }}
              />
            ))}
          </section>
          <SimbolSlots id = {Id} images={images} length={resultlenght}/>
        </div>  
    )
}

export default SimbolsPuzzle