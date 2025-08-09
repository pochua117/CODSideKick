import { useState } from "react";

import SimbolSlots from "../components/SimbolSlots";
import SimbolsGallery from "../components/SimbolsGallery";

const SimbolsPuzzle = ({ name, length, resultlenght, imagesDir, imageExtension }) => {
  const [clickSymbolId, setClickSymbolId] = useState(0);



  return (
    <div className="container">
      <h2 className="simbols-title">{name}</h2>
      <SimbolsGallery setClickSymbolId={setClickSymbolId} imagesDir={imagesDir} imageExtension={imageExtension} length={length} />
      <SimbolSlots clickSymbolId={clickSymbolId} imagesDir={imagesDir} length={resultlenght} imageExtension={imageExtension} />
    </div>
  );
};

export default SimbolsPuzzle;
