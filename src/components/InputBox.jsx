const InputBox = ({ length = 1, setFunction, value, onlyNumbers = true, placeholder="" }) => {
  return (
    <input
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={(e) => {
        const cleanVal = e.target.value;
        if (onlyNumbers) {
          const cleanVal = e.target.value.replace(/\D/g, "");
        }
        const trimmed = cleanVal.slice(0, length);
        setFunction(trimmed.toUpperCase());
      }}
    />
  );
};

export default InputBox;
