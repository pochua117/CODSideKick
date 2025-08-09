import SimbolSlot from "./SimbolSlot";
import { handleDrop, allowDrop } from "../utils/Citadelle/utils";
import { selectedStates } from "../utils/Citadelle/utils";

const SimbolSlots = ({ clickSymbolId, imagesDir, length, imageExtension }) => {
  const { selected, setSelected } = selectedStates(length);

  return (
    <section className="section-selected">
      {selected.map((dropSymbolId, index) => (
        <SimbolSlot
          key={index}
          dropSymbolId={dropSymbolId}
          clickSymbolId={clickSymbolId}
          onDrop={(dropSymbolId) =>
            handleDrop(index, dropSymbolId, selected, setSelected)
          }
          allowDrop={allowDrop}
          imagesDir={imagesDir}
          imageExtension={imageExtension}
        />
      ))}
    </section>
  );
};

export default SimbolSlots;
