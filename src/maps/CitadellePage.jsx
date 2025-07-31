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
      <h2 className="result">Result 3: {resultado3}</h2>
      <script>
        {console.log("1: ",resultado1, typeof resultado1)}
        {console.log("2: ",resultado2, typeof resultado2)}
        {console.log("3: ",resultado3, typeof resultado3)}
      </script>
    </section>
  )
}

export default CitadellePage