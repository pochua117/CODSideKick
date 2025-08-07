const PuzzleButton = ({ name, puzzle, states }) => {
  const activeTab = states[0];
  const setActiveTab = states[1];
  return (
    <button
      className={activeTab === `puzzle${puzzle}` ? "active-tab" : ""}
      onClick={() => {
        setActiveTab(`puzzle${puzzle}`);
      }}
    >
      {name}
    </button>
  );
};

export default PuzzleButton;
