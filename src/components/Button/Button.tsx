import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = ({ color, onClick, children, disabled }: ButtonProps) => {
  return (
    <StyledButton color={color} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
