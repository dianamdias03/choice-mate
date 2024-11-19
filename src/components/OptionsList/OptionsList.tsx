import { useOptions } from "../../context/OptionsContext ";
import "./OptionsList.styles.css";

const OptionList = () => {
  const { options } = useOptions();
  return (
    <div className="option-list">
      {options.length > 0 ? (
        <ul>
          {options.map((option, index) => (
            <li className="option-item" key={index}>
              {option}
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-list">
          <p>Nenhum item adicionado...</p>
        </div>
      )}
    </div>
  );
};

export default OptionList;
