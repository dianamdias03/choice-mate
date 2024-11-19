export interface ButtonProps {
  color:
    | "blue"
    | "red"
    | "blueGray"
    | "gray"
    | "darkGreen"
    | "blueGray"
    | "burntOrange"
    | "darkRose"
    | "sand";
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}
