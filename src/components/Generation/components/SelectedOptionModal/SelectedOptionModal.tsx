import ReactDOM from "react-dom";
import { SelectedOptionModalProps } from "./SelectedOptionModal.types";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FooterModal,
  GenerateAgain,
  Close,
} from "./SelectedOptionModal.styles";
import { HorizontalDivider } from "../../../HorizontalDivider/HorizontalDivider.styles";
import Button from "../../../Button/Button";

const SelectedOptionModal = ({
  isOpen,
  onClose,
  selectedOption,
  handleRandomSelection,
}: SelectedOptionModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>Resultado</ModalHeader>
        <HorizontalDivider />
        <ModalBody>{selectedOption}</ModalBody>
        <HorizontalDivider />
        <FooterModal>
          <Close>
            <Button onClick={onClose} color="red">
              Fechar
            </Button>
          </Close>
          <GenerateAgain>
            <Button onClick={handleRandomSelection} color="blue">
              <img src="/ciclo.png" alt="Gerar novamente" />
            </Button>
          </GenerateAgain>
        </FooterModal>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default SelectedOptionModal;
