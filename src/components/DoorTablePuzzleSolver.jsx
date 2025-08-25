import { useState } from "react";

import InputBox from "./InputBox";
import { tableElements } from "../constants.js";

const DoorTablePuzzleSolver = () => {
    const [element, setElement] = useState("");

    const result = tableElements.find((item) => item.name === element.toUpperCase());

    return (
    <div>
      <div className="puzzle-header">
        <h2 className="symbols-title">Door Code Puzzle Solver</h2>
        <h3 className="symbols-subtitle">
            Solve the lab door puzzle. Enter the first letter of each monitor, and get the door code 
        </h3>
        <InputBox className="input-box" setFunction={setElement} value={element} onlyNumbers={false}/>
        <p className="result">
        Door Code: 
        {result
          ? 
            result.atomic.split("").map((c, idx) => (
              <span key={idx} className="result-box">
                {c}
              </span>
            ))
          : Array.from({ length: 3 }).map((_, idx) => (
              <span key={idx} className="result-box">
                <span style={{ visibility: "hidden" }}>0</span>
              </span>
            ))
        }
      </p>
      </div>
    </div>
  );
};

export default DoorTablePuzzleSolver;
