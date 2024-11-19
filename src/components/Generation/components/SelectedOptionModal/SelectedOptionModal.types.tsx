export interface SelectedOptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedOption: string;
  handleRandomSelection: () => void;
}
