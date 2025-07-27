import { useNumbers } from '../utils/Citadelle/utils.js' 
import InputBox from '../components/InputBox.jsx'


const CitadellePage = () => {
  const { X, setX, Y, setY, Z, setZ, resultado1, resultado2, resultado3 } = useNumbers()

  return (
    <section className="section-numbers">
      <h2>BeamSmasher puzzle solver</h2>
      <div className="input-group">
        <InputBox setFunction={setX} value={X}/>
        <InputBox setFunction={setY} value={Y}/>
        <InputBox setFunction={setZ} value={Z}/>
      </div>

      <div className="result">Result 1: {resultado1}</div>
      <div className="result">Result 2: {resultado2}</div>
      <div className="result">Result 3: {resultado3}</div>
      <div className="result">Testgit push origin development: {X + Y + Z}</div>
    </section>
  )
}

export default CitadellePage