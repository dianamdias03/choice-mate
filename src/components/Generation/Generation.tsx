import { useState } from "react";
import { chooseRandomItem } from "../../utils/utils";
import Button from "../Button/Button";
import SelectedOptionModal from "./components/SelectedOptionModal/SelectedOptionModal";
import { useOptions } from "../../context/OptionsContext ";

const Generation = () => {
  const { options } = useOptions();
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRandomSelection = () => {
    const randomOption = chooseRandomItem(options);
    setSelectedOption(randomOption);
    setIsModalOpen(true);
  };

  return (
    <>
      <Button
        color="burntOrange"
        onClick={handleRandomSelection}
        disabled={options.length < 2}
      >
        Sortear
      </Button>
      <SelectedOptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedOption={selectedOption}
        handleRandomSelection={handleRandomSelection}
      />
    </>
  );
};

export default Generation;
