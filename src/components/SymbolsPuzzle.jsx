import { useState } from "react";

import SymbolSlots from "./SymbolSlots";
import SymbolsGallery from "../components/SymbolsGallery";

const SymbolsPuzzle = ({ name, length, resultlenght, imagesDir, imageExtension }) => {
  const [clickSymbolId, setClickSymbolId] = useState(0);



  return (
    <div className="container">
      <h2 className="symbols-title">{name}</h2>
      <SymbolsGallery setClickSymbolId={setClickSymbolId} imagesDir={imagesDir} imageExtension={imageExtension} length={length} />
      <SymbolSlots clickSymbolId={clickSymbolId} imagesDir={imagesDir} length={resultlenght} imageExtension={imageExtension} />
    </div>
  );
};

export default SymbolsPuzzle;
