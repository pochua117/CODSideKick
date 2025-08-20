

const ItemSelection = ({ allButtons, selected = [], setSelected = function () {}, maxLength }) => {  

  const toggleSelect = (btn) => {
    setSelected((prev) => {
      const exists = prev.find((item) => item.number === btn.number);

      if (exists) {
        // If it's already there, we remove it.
        return prev.filter((item) => item.number !== btn.number);
      } else {
        // If it is not there and there are less than 4, we add it
        if (prev.length < maxLength) {
          return [...prev, btn];
        }
        return prev; // Ignore if there are already 4
      }
    });
  };

  return (
    <>
        {allButtons.map((btn) => {
          const isSelected = selected.some(
            (item) => item.number === btn.number
          );
          const maxSelected = selected.length === maxLength;

          let bgColor;
          if (isSelected) {
            bgColor = "#8a8a8a";
          } else if (maxSelected) {
            bgColor = "#2e2e2e";
          } else {
            bgColor = "#504d4a";
          }

          return (
            <button
              key={btn.number}
              onClick={() => toggleSelect(btn)}
              style={{
                backgroundColor: bgColor,
                cursor: maxSelected && !isSelected ? "not-allowed" : "pointer",
                opacity: maxSelected && !isSelected ? 0.6 : 1,
                transition: "0.2s",
              }}
            >
              {btn.content}
            </button>
          );
        })}
    </>
  );
};

export default ItemSelection;