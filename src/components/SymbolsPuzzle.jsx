import { useState } from "react";

import SymbolSlots from "./SymbolSlots";
import SymbolsGallery from "../components/SymbolsGallery";

const SymbolsPuzzle = ({ name, description, length, resultlenght, imagesDir, imageExtension }) => {
  const [clickSymbolId, setClickSymbolId] = useState(0);



  return (
    <div className="container">
      <div className="puzzle-header">
        <h2 className="symbols-title">{name}</h2>
        <h3 className="symbols-subtitle">{description}</h3>
      </div>
      <SymbolsGallery setClickSymbolId={setClickSymbolId} imagesDir={imagesDir} imageExtension={imageExtension} length={length} />
      <SymbolSlots clickSymbolId={clickSymbolId} imagesDir={imagesDir} length={resultlenght} imageExtension={imageExtension} />
    </div>
  );
};

export default SymbolsPuzzle;
