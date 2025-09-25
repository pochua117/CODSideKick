import { useState } from "react";
import { useEffect } from "react";

import ItemSelection from "../ItemSelection";

const ShatteredgPage = () => {

  const words = ["CRAB", "YETI", "MOTH", "WORM"];
  
  const boards = [
    ["BCDEF","XYZ","GHILNO","M","JKQU","APRSTVW"],
    ["OSTUHJLD","QPGAFR","YKZWX","NI","ECVB","M"],
    ["E","BCDSTVWXZ","KLMNPQR","OUY","FGHJ","AI"],
    ["AIOUY","QX","BCDEFGH","S","LMNPRTVW","JKZ"]];


  const wordsButtons =   [
    {
    number: "CRAB",
    content: (
      <div>
        CRAB
      </div>
    ),
  },
  {
    number: "YETI",
    content: (
      <div>
        YETI
      </div>
    ),
  },
  {
    number: "MOTH",
    content: (
      <div>
        MOTH
      </div>
    ),
  },
  {
    number: "WORM",
    content: (
      <div>
        WORM
      </div>
    ),
  },
];

  const boardsButtons =   [
    {
    number: ["BCDEF", "XYZ", "GHILNO", "M", "JKQU", "APRSTVW"],
    content: (
        <div>
            BCDEF
        </div>
    )
   },
   {
    number: ["OSTUHJLD", "QPGAFR", "YKZWX", "NI", "ECVB", "M"],
    content: (
        <div>
            OSTUHJLD
        </div>
    )
   },
   {
    number: ["E", "BCDSTVWXZ", "KLMNPQR", "OUY", "FGHJ", "AI"],
    content: (
        <div>
            E
        </div>
    )
   },
   {
    number: ["AIOUY", "QX", "BCDEFGH", "S", "LMNPRTVW", "JKZ"],
    content: (
        <div>
            AIOUY
        </div>
    )
   }
  ]

  const [selectedBoard, setSelectedBoard] = useState([]);
  const [selectedWord, setSelectedWord] = useState([]);
  
  const selectedBoardArray = (selectedBoard[0]?.number || "").split(","); // de string a array
  const result = (selectedWord[0]?.number || "")
    .split("")
    .flatMap(letter =>
      selectedBoardArray
        .filter(word => word.includes(letter))
        .map(word => word.length)
    );

  return (
    <div className="container">
        <div className="puzzle-header">
            <h2 className="symbols-title">Board Puzzle Solver</h2>
            <h3 className="symbols-subtitle">
                Solve the Shattered Veil puzzle by finding the words and boards that match the letters of the selected word. On this page, you can see each board with its symbols for reference.
            </h3>
        </div>
        <div className="objects-section">
            <ItemSelection key={2} allButtons={wordsButtons} selected={selectedWord} setSelected={setSelectedWord} maxLength={1} />
        </div>
        <div className="objects-section">
            <ItemSelection key={1} allButtons={boardsButtons.map(btn => ({...btn,number: btn.number.join(",")}))} selected={selectedBoard} setSelected={setSelectedBoard} maxLength={1} />
        </div>
        <div className="result">
            Code:
            {result.length === 4 
          ? result.map((c, idx) => (
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
        </div>
    </div>
  );
};

export default ShatteredgPage;
