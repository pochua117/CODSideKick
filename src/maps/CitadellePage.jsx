import { useState } from "react";
import SimbolsPuzzle from "../components/SimbolsPuzzle";
import PuzzleButton from "../components/PuzzleButton";
import SimbolsGallery from "../components/SimbolsGallery";

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
          name="Simbols"
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
          <SimbolsPuzzle
            name="Simbols"
            length={20}
            resultlenght={6}
            images="../images/simbols/"
            type="jpeg"
          />
        </div>
        <div
          className={
            activeTab === "puzzle2" ? "puzzle-visible" : "puzzle-hidden"
          }
        >
          <SimbolsPuzzle
            name="Traps"
            length={4}
            resultlenght={4}
            images="../images/traps/"
            type="svg"
          />
        </div>
        <div
          className={
            activeTab === "puzzle3" ? "puzzle-visible" : "puzzle-hidden"
          }
        >
          <SimbolsPuzzle
            name="Swords"
            length={4}
            resultlenght={4}
            images="../images/animals/"
            type="svg"
          />
        </div>
        <div
          className={
            activeTab === "puzzle4" ? "puzzle-visible" : "puzzle-hidden"
          }
        >
          <SimbolsGallery images="../images/raven/" type="jpeg" length={5} imagesInfo={imagesInfo} />
        </div>
      </div>
    </div>
  );
};

export default CitadellePage;
