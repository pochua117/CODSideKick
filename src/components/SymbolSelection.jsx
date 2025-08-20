import ItemSelection from "./ItemSelection";

const SymbolSelection = ({ text, imagesDir, allButtons, selected, setSelected }) => {
    return (
        <div className="item-selection" translate="no">
            {text}
            <ItemSelection allButtons={allButtons} selected={selected} setSelected={setSelected} maxLength={1} />
        </div>
    )
}

export default SymbolSelection;