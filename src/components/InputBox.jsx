const InputBox = ({ setFunction, value, placeholder }) => {
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
      placeholder={placeholder}
    />
  )
}

export default InputBox