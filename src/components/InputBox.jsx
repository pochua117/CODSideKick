const InputBox = ({ setFunction, value, onlyNumbers = true }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        const cleanVal = e.target.value;
        if (onlyNumbers) {
          const cleanVal = e.target.value.replace(/\D/g, "");
        }
        const trimmed = cleanVal.slice(0, 2);
        setFunction(trimmed);
      }}
    />
  );
};

export default InputBox;
