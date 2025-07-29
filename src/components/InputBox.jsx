const InputBox = ({ setFunction, value}) => {
  return (
    <input 
      type="text" 
      value={value} 
      onChange={e => {
        const cleanVal = e.target.value.replace(/\D/g, '')
        const trimmed = cleanVal.slice(0, 2)     // forzar a máximo 2 dígitos
        setFunction(trimmed)
        console.log("Valor input: ",value, '->', trimmed) // Log para depuración
      }} 
    />
  )
}

export default InputBox
