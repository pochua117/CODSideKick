const InputBox = ({ setFunction, value}) => {
  return (
    <input 
      type="number" 
      value={value} 
      onChange={e => {
        const cleanVal = e.target.value.replace(/\D/g, '')
        if (cleanVal.length <= 2) {
          setFunction(String(cleanVal))
        }
      }} 
    />
  )
}

export default InputBox