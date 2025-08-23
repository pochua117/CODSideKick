import { useState } from "react";

import ItemSelection from "./ItemSelection.jsx";

const FolderPuzzleSolver = () => {
  const allButtons = [
  {
    object: "Notso's Collar",
    number: 1,
    month: "1985-07-15",
    content: (
      <>
        <span className="object-name">Notso's Collar</span>
        <span className="object-extra">1 - 1985-07-15</span>
      </>
    ),
  },
  {
    object: "Katana",
    number: 2,
    month: "1985-12-06",
    content: (
      <>
        <span className="object-name">Katana</span>
        <span className="object-extra">2 - 1985-12-06</span>
      </>
    ),
  },
  {
    object: "Scarf",
    number: 3,
    month: "1985-08-06",
    content: (
      <>
        <span className="object-name">Scarf</span>
        <span className="object-extra">3 - 1985-08-06</span>
      </>
    ),
  },
  {
    object: "Wristwatch",
    number: 4,
    month: "1985-09-02",
    content: (
      <>
        <span className="object-name">Wristwatch</span>
        <span className="object-extra">4 - 1985-09-02</span>
      </>
    ),
  },
  {
    object: "Combat Goggles",
    number: 5,
    month: "1985-10-12",
    content: (
      <>
        <span className="object-name">Combat Goggles</span>
        <span className="object-extra">5 - 1985-10-12</span>
      </>
    ),
  },
  {
    object: "BND Badge",
    number: 6,
    month: "1985-06-28",
    content: (
      <>
        <span className="object-name">BND Badge</span>
        <span className="object-extra">6 - 1985-06-28</span>
      </>
    ),
  },
];

  const [selected, setSelected] = useState([]);

  const sortedSelected = [...selected].sort(
    (a, b) => new Date(a.month) - new Date(b.month)
  );

  const code = sortedSelected.map((item) => item.number).join("");

  return (
    <section className="reckoning-container">
      <h2 className="symbols-title">Folders, Documents Code Puzzle Solver</h2>
      <h3 className="symbols-title">Solve the Folders, Documents puzzle by selecting four document, this page automatically orders them and gives you the correct code.</h3>

      <p className="result">{`Selected ${selected.length}/4`}</p>
  
      <div className="objects-section">
        <ItemSelection allButtons={allButtons} selected={selected} setSelected={setSelected} maxLength={4}/> 
      </div>
      <p className="result">
        Code: 
        {selected.length === 4 
          ? code.split("").map((c, idx) => (
              <span key={idx} className="result-box">
                {c}
              </span>
            ))
          : Array.from({ length: 4 }).map((_, idx) => (
              <span key={idx} className="result-box">
                <span style={{ visibility: "hidden" }}>0</span>
              </span>
            ))
        }
      </p>
    </section>
  );
};

export default FolderPuzzleSolver;
