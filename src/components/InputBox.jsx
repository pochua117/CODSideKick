const InputBox = ({ setFunction, value}) => {
  return (
    <input 
      type="text" 
      value={value} 
      onChange={e => {
        const cleanVal = e.target.value.replace(/\D/g, '')
        const trimmed = cleanVal.slice(0, 2)
        setFunction(trimmed)
        console.log("Input changed:", trimmed, typeof trimmed)
      }} 
    />
  )
}

export default InputBox


