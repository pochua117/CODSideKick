import { useState } from "react";

const FolderPuzzleSolver = () => {
  const allButtons = [
    { object: "Notso's Collar", number: 1, month: "1985-07-15" },
    { object: "Katana", number: 2, month: "1985-12-06" },
    { object: "Scarf",number: 3, month: "1985-08-06" },
    { object: "Wristwatch", number: 4, month: "1985-09-02" },
    { object: "Combat Goggles",number: 5, month: "1985-10-12" },
    { object: "BND Badge",number: 6, month: "1985-06-28" },
  ];

  const [selected, setSelected] = useState([]);

  const toggleSelect = (btn) => {
    setSelected((prev) => {
      const exists = prev.find((item) => item.number === btn.number);

      if (exists) {
        // If it's already there, we remove it.
        return prev.filter((item) => item.number !== btn.number);
      } else {
        // If it is not there and there are less than 4, we add it
        if (prev.length < 4) {
          return [...prev, btn];
        }
        return prev; // Ignore if there are already 4
      }
    });
  };

  // Sort selected by month (oldest first)

  const sortedSelected = [...selected].sort((a, b) => {
    return new Date(a.month) - new Date(b.month);
  });

  const code = sortedSelected.map((item) => item.number).join("");

  return (
    <section className="reckoning-container">
      <h2 className="symbols-title">Folder Puzzle Solver</h2>

      <p className="result">
          {`Selected ${selected.length}/4`}
      </p>
      <div className="objects-section">
        {allButtons.map((btn) => {
          const isSelected = selected.some(
            (item) => item.number === btn.number
          );
          return (
            <button
              key={btn.number}
              onClick={() => toggleSelect(btn)}
              style={{
                backgroundColor: isSelected ? "#8a8a8aff" : "#504d4a",
              }}
            >
              <span className="oject-name">{btn.object}</span>
              <span className="object-extra">{btn.number} - {btn.month}</span>
            </button>
          );
        })}
      </div>
      <p className="result">
        Code:
        {selected.length === 4
          ? ` ${code}`
          : " - - - -"}
      </p>
    </section>
  );
};

export default FolderPuzzleSolver;
