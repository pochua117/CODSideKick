import { useState } from "react"; 

import SymbolsPuzzle from "../SymbolsPuzzle";
import PuzzleButton from "../PuzzleButton";
import SymbolsGallery from "../SymbolsGallery";

const CitadellePage = () => {
  const [activeTab, setActiveTab] = useState("puzzle1");

  const imagesInfo = [
    { name: "Horn", zodiacImage: "/../images/zodiac/aries.svg", elementImage: "/../images/elements/fire.svg" },
    { name: "Jaw", zodiacImage: "/../images/zodiac/leo.svg", elementImage: "/../images/elements/fire.svg" },
    { name: "Fish", zodiacImage: "/../images/zodiac/pisces.svg", elementImage: "/../images/elements/water.svg" },
    { name: "Scorpion", zodiacImage: "/../images/zodiac/scorpio.svg", elementImage: "/../images/elements/water.svg" },
    { name: "Raven", zodiacImage: "/../images/zodiac/gemini.svg", elementImage: "/../images/elements/air.svg" },
  ];

  return (
    <div className="container">
      <div className="tab-buttons">
        <PuzzleButton
          name="Symbols"
          puzzle={1}
          states={[activeTab, setActiveTab]}
        />
        <PuzzleButton
          name="Traps"
          puzzle={2}
          states={[activeTab, setActiveTab]}
        />
        <PuzzleButton
          name="Swords"
          puzzle={3}
          states={[activeTab, setActiveTab]}
        />
        <PuzzleButton
          name="Crow"
          puzzle={4}
          states={[activeTab, setActiveTab]}
        />
      </div>

      <div className="tab-content">
        {/* Symbols Puzzle */}
        <div className={activeTab === "puzzle1" ? "puzzle-visible" : "puzzle-hidden"}>
          <SymbolsPuzzle
            name="Symbols Puzzle Solver"
            description="Solve the Wall Symbols puzzle by arranging the symbols in the correct order. You can drag them or click a symbol and then the slot to place it."
            length={20}
            resultlenght={6}
            imagesDir="../images/symbols/"
            imageExtension="jpeg"
          />
        </div>

        {/* Traps Puzzle */}
        <div className={activeTab === "puzzle2" ? "puzzle-visible" : "puzzle-hidden"}>
          <SymbolsPuzzle
            name="Traps Puzzle Solver"
            description="Solve the traps puzzle arranging the symbols in the same order as shown in the book. You can drag them or click a symbol and then the slot to place it."
            length={4}
            resultlenght={4}
            imagesDir="../images/traps/"
            imageExtension="svg"
          />
        </div>

        {/* Swords Puzzle */}
        <div className={activeTab === "puzzle3" ? "puzzle-visible" : "puzzle-hidden"}>
          <SymbolsPuzzle
            name="Swords Puzzle Solver"
            description="Solve the swords puzzle arranging the symbols in the same order as shown in the wall. You can drag them or click a symbol and then the slot to place it."
            length={4}
            resultlenght={4}
            imagesDir="../images/animals/"
            imageExtension="svg"
          />
        </div>

        {/* Raven Sword Puzzle */}
        <div className={activeTab === "puzzle4" ? "puzzle-visible" : "puzzle-hidden"}>
          <div>
            <div className="puzzle-header">
              <h2 className="symbols-title">Raven Sword Puzzle Solver</h2>
              <h3 className="symbols-subtitle">
                Solve the Raven sword puzzle by finding the fossil and selecting its corresponding zodiac symbol and element. On this page, you can see each fossil with its symbols for reference.
              </h3>
            </div>
            <SymbolsGallery 
              imagesDir="../images/raven/" 
              imageExtension="jpeg" 
              length={5} 
              imagesInfo={imagesInfo} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitadellePage;
