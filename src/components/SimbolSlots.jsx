import SimbolSlot from "./SimbolSlot";
import { handleDrop, allowDrop } from "../utils/Citadelle/utils";
import { selectedStates } from "../utils/Citadelle/utils";

const SimbolSlots = ({ id, images, length, type }) => {
  const { selected, setSelected } = selectedStates(length);

  return (
    <section className="section-selected">
      {selected.map((symbolId, index) => (
        <SimbolSlot
          key={index}
          symbolId={symbolId}
          onDrop={(symbolId) =>
            handleDrop(index, symbolId, selected, setSelected)
          }
          allowDrop={allowDrop}
          id={id}
          images={images}
          type={type}
        />
      ))}
    </section>
  );
};

export default SimbolSlots;
