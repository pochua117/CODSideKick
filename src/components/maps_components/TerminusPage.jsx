import { useNumbers } from "../../utils/Citadelle/utils.js";
import InputBox from "../InputBox.jsx";

const TerminusPage = () => {
  const { X, setX, Y, setY, Z, setZ, resultado1, resultado2, resultado3 } =
    useNumbers();

  return (
    <section className="section-numbers">
      <h2 translate="no">BeamSmasher puzzle solver</h2>
      <div className="input-group">
        <InputBox setFunction={setX} value={X} />
        <InputBox setFunction={setY} value={Y} />
        <InputBox setFunction={setZ} value={Z} />
      </div>

      <div className="result" key={resultado1}>
        Result 1: {resultado1}
      </div>
      <div className="result" key={resultado2}>
        Result 2: {resultado2}
      </div>
      <div className="result" key={resultado3}>
        Result 3: {resultado3}
      </div>
    </section>
  );
};

export default TerminusPage;
