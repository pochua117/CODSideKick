
import { useNumbers } from "../utils/Citadelle/utils.js";
import SymbolSelection from "./SymbolSelection.jsx";

const BeamSmahserSolver = () => {
  const {X, setX, Y, setY, Z, setZ, resultado1, resultado2, resultado3 } =
    useNumbers();

  const symbolStates = [
    [X, setX],
    [Y, setY],
    [Z, setZ],
  ];


  const allButtons =   [
    {
    number: 0,
    content: (
      <div>
        <img src="../images/terminus/Circulo.svg" alt="Circulo" />
      </div>
    ),
  },
  {
    number: 10,
    content: (
      <div>
        <img src="../images/terminus/DobleCirculo.svg" alt="DobleCirculo" />
      </div>
    ),
  },
  {
    number: 11,
    content: (
      <div>
        <img src="../images/terminus/DobleCirculoRotado.svg" alt="DobleCirculoRotado" />
      </div>
    ),
  },
  {
    number: 20,
    content: (
      <div>
        <img src="../images/terminus/Cruz.svg" alt="Cruz" />
      </div>
    ),
  },
  {
    number: 21,
    content: (
      <div>
        <img src="../images/terminus/CruzRotada.svg" alt="CruzRotada" />
      </div>
    ),
  },
  {
    number: 22,
    content: (
      <div>
        <img src="../images/terminus/CruzRotadaInversa.svg" alt="CruzRotadaInversa" />
      </div>
    ),
  },
];

  const labels = ["X: ", "Y: ", "Z: "];

  const symbolSections = Array.from({ length: 3 }, (_, i) => i);

  return (
    <section className="section-numbers">
      <h2 translate="no">Beam Smasher Puzzle Code Calculator</h2>
      <h3 className="symbols-subtitle"translate="no">Choose the three computer symbols to get the correct puzzle code.</h3>
      <div className="terminus-objects-section">
      {symbolSections.map((i) => (
        <SymbolSelection key={i} text={labels[i]} imagesDir="../images/symbols/" allButtons={allButtons} selected={symbolStates[i][0]} setSelected={symbolStates[i][1]} />
        ))}
      </div>

      <div className="result">
        Code: 
        {[resultado1, resultado2, resultado3].map((res, idx) => (
          <span key={idx} className="result-box">
            {res ? res : <span style={{ visibility: "hidden" }}>0</span>}
          </span>
        ))}
      </div>
    </section>
  );
}

export default BeamSmahserSolver;