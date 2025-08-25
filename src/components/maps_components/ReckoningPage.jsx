import { useState } from "react";

import FolderPuzzleSolver from "../FolderPuzzleSolver.jsx";
import DoorTablePuzzleSolver from "../DoorTablePuzzleSolver.jsx";
import PuzzleButton from "../PuzzleButton.jsx";

const ReckoningPage = () => {
  const [activeTab, setActiveTab] = useState("puzzle1");
  

  return (
    <div className="container">
      <div className="tab-buttons">
        <PuzzleButton
          name="Folders"
          puzzle={1}
          states={[activeTab, setActiveTab]}
        />
        <PuzzleButton
          name="Door"
          puzzle={2}
          states={[activeTab, setActiveTab]}
        />
      </div>
    
    <div className="tab-content">
      <div className={activeTab === "puzzle1" ? "puzzle-visible" : "puzzle-hidden"}>
        <FolderPuzzleSolver />
      </div>
      <div className={activeTab === "puzzle2" ? "puzzle-visible" : "puzzle-hidden"}>
        <DoorTablePuzzleSolver/>
      </div>
    </div>
    </div>
  );
};

export default ReckoningPage;
