import { ButtonProps } from "./type";

const Button: React.FC<ButtonProps> = ({ onClick, text, children }) => {
  return (
    <button onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;
