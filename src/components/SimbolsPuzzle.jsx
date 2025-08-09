import { useState } from "react";

import SimbolSlots from "../components/SimbolSlots";
import SimbolsGallery from "../components/SimbolsGallery";

const SimbolsPuzzle = ({ name, length, resultlenght, images, type }) => {
  const [Id, setId] = useState(0);



  return (
    <div className="container">
      <h2 className="simbols-title">{name}</h2>
      <SimbolsGallery setId={setId} images={images} type={type} length={length} />
      <SimbolSlots id={Id} images={images} length={resultlenght} type={type} />
    </div>
  );
};

export default SimbolsPuzzle;
