import { useState } from "react";
import "./AddItem.styles.css";
import Button from "../Button/Button";
import { useOptions } from "../../context/OptionsContext ";

const AddItem = () => {
  const [inputValue, setInputValue] = useState("");

  const { addOption, removeOptions, options } = useOptions();

  const handleAddOption = () => {
    if (inputValue.trim()) {
      const formattedValue =
        inputValue.trim().charAt(0).toUpperCase() + inputValue.trim().slice(1);
      addOption(formattedValue);
      setInputValue("");
    }
  };

  const handleRemoveOption = () => {
    removeOptions();
  };

  return (
    <div className="add-item-wrapper">
      <input
        type="text"
        className="add-item-input"
        placeholder="Digite aqui..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        maxLength={40}
      ></input>
      <div className="button-wrapper">
        <div className="add-item-button">
          <Button onClick={handleAddOption} color="blue" disabled={false}>
            Adicionar
          </Button>
        </div>
        <div className="remove-item-button">
          <Button
            onClick={handleRemoveOption}
            color="red"
            disabled={options.length < 1}
          >
            <img src="/excluir-lista.png" alt="Excluir lista" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
