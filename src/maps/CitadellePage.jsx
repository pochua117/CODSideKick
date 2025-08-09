import { useState } from "react";
import SymbolsPuzzle from "../components/SymbolsPuzzle";
import PuzzleButton from "../components/PuzzleButton";

const CitadellePage = () => {
  const [activeTab, setActiveTab] = useState("puzzle1");
  const imagesInfo = [
    {
      name: "Horn",
      zodiacImage: "/../images/zodiac/aries.svg",
      elementImage: "/../images/elements/fire.svg"
    },
    {
      name: "Jaw",
      zodiacImage: "/../images/zodiac/leo.svg",
      elementImage: "/../images/elements/fire.svg"
    },
    {
      name: "Fish",
      zodiacImage: "/../images/zodiac/pisces.svg",
      elementImage: "/../images/elements/water.svg"
    },
    {
      name: "Scorpion",
      zodiacImage: "/../images/zodiac/scorpio.svg",
      elementImage: "/../images/elements/water.svg"
    },
    {
      name: "Raven",
      zodiacImage: "/../images/zodiac/gemini.svg",
      elementImage: "/../images/elements/air.svg"
    },
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
        <div
          className={
            activeTab === "puzzle1" ? "puzzle-visible" : "puzzle-hidden"
          }
        >
          <SymbolsPuzzle
            name="Symbols"
            length={20}
            resultlenght={6}
            imagesDir="../images/symbols/"
            imageExtension="jpeg"
          />
        </div>
        <div
          className={
            activeTab === "puzzle2" ? "puzzle-visible" : "puzzle-hidden"
          }
        >
          <SymbolsPuzzle
            name="Traps"
            length={4}
            resultlenght={4}
            imagesDir="../images/traps/"
            imageExtension="svg"
          />
        </div>
        <div
          className={
            activeTab === "puzzle3" ? "puzzle-visible" : "puzzle-hidden"
          }
        >
          <SymbolsPuzzle
            name="Swords"
            length={4}
            resultlenght={4}
            imagesDir="../images/animals/"
            imageExtension="svg"
          />
        </div>
        <div
          className={
            activeTab === "puzzle4" ? "puzzle-visible" : "puzzle-hidden"
          }
        >
          <SymbolsGallery imagesDir="../images/raven/" imageExtension="jpeg" length={5} imagesInfo={imagesInfo} />
        </div>
      </div>
    </div>
  );
};

export default CitadellePage;
