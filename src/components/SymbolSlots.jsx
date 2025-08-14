import SymbolSlot from "./SymbolSlot";
import { handleDrop, allowDrop } from "../utils/Citadelle/utils";
import { useSelectedStates } from "../utils/Citadelle/utils";

const SymbolSlots = ({ clickSymbolId, imagesDir, length, imageExtension }) => {
  const { selected, setSelected } = useSelectedStates(length);

  return (
    <section className="section-selected">
      {selected.map((dropSymbolId, index) => (
        <SymbolSlot
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

export default SymbolSlots;
