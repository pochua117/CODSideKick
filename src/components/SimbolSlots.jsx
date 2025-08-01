import SimbolSlot from './SimbolSlot'
import { handleDrop, allowDrop } from '../utils/Citadelle/utils'
import { selectedStates } from '../utils/Citadelle/utils'

const SimbolSlots = () => {

  const {selected, setSelected} = selectedStates()
  
  return (
    <section className="section-selected">
        {selected.map((symbolId, index) => (
          <SimbolSlot
            key={index}
            symbolId={symbolId}
            onDrop={(symbolId) => handleDrop(index, symbolId, selected, setSelected)}
            allowDrop={allowDrop}
          />
        ))}
    </section>
  )
}

export default SimbolSlots