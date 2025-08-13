import { useState } from "react";
import InputBox from "../components/InputBox.jsx";

const FolderPuzzleSolver = () => {
  const [items, setItems] = useState(
    Array.from({ length: 4 }, (_, i) => ({
      number: i + 1,
      month: "",
    }))
  );

  const handleChange = (index, field, value) => {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const sortedItems = [...items].sort((a, b) => {
    if (!a.month) return 1;
    if (!b.month) return -1;
    console.log(a, b);
    return a.month - b.month;
  });

  const numerosOrdenados = sortedItems.map((item) => item.number);

  return (
    <section className="reckoning-container">
      <h2 className="symbols-title">Folder Puzzle Solver</h2>
      <div className="section-numbers">
        <h2>Object numbers</h2>
        <div className="input-group">
          {items.map((item, index) => (
            <InputBox
              key={index}
              value={item.number}
              setFunction={(val) => handleChange(index, "number", Number(val))}
            />
          ))}
        </div>
        <h2>Object months</h2>
        <div className="input-group">
          {items.map((item, index) => (
            <InputBox
              key={index}
              value={item.month}
              setFunction={(val) => handleChange(index, "month", Number(val))}
            />
          ))}
        </div>
        <p className="result">{`Code: ${numerosOrdenados.join("")}`}</p>
      </div>
    </section>
  );
};

export default FolderPuzzleSolver;
