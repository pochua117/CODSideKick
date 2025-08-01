import { useState } from 'react'
import SimbolsPuzzle from '../components/SimbolsPuzzle'
import PuzzleButton from '../components/PuzzleButton'

const CitadellePage = () => {
  const [activeTab, setActiveTab] = useState('puzzle1')

  return (
    <div className="container">
      <div className="tab-buttons">
        <PuzzleButton name="Simbols" puzzle={1} states={[activeTab, setActiveTab]}/>
        <PuzzleButton name="Traps" puzzle={2} states={[activeTab, setActiveTab]}/>
      </div>

      <div className="tab-content">
        <div className={activeTab === 'puzzle1' ? 'puzzle-visible' : 'puzzle-hidden'}>
          <SimbolsPuzzle name = {"Simbols"} length={20} resultlenght={6} images="../images/simbols/" />
        </div>
        <div className={activeTab === 'puzzle2' ? 'puzzle-visible' : 'puzzle-hidden'}>
          <SimbolsPuzzle name = {"Traps"} length={4} resultlenght={4} images="../images/traps/" />
        </div>
      </div>
    </div>
  )
}

export default CitadellePage