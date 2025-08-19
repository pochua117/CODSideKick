

const ItemSelection = ({ allButtons, selected = [], setSelected = function () {} }) => {  

  const toggleSelect = (btn) => {
    setSelected((prev) => {
      const exists = prev.find((item) => item.number === btn.number);

      if (exists) {
        // If it's already there, we remove it.
        console.log(prev);
        return prev.filter((item) => item.number !== btn.number);
      } else {
        // If it is not there and there are less than 4, we add it
        if (prev.length < 4) {
          console.log(prev);
          return [...prev, btn];
        }
        console.log(prev);
        return prev; // Ignore if there are already 4
      }
    });
  };

  return (
    <>
      <div className="objects-section">
        {allButtons.map((btn) => {
          const isSelected = selected.some(
            (item) => item.number === btn.number
          );
          const maxSelected = selected.length === 4;

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
      </div>
    </>
  );
};

export default ItemSelection;