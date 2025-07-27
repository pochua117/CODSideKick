const InputBox = ({ setFunction, value}) => {
  return (
    <input 
      type="text" 
      value={value} 
      onChange={e => {
        const cleanVal = e.target.value.replace(/\D/g, '')
        if (cleanVal.length <= 2) {
          setFunction(cleanVal)
        }
      }} 
    />
  )
}

export default InputBox