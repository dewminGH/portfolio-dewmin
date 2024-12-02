import Styles from "./styles.module.css";
import { ParagraphProps } from "./type";

const Text: React.FC<ParagraphProps> = ({
  size = "medium",
  classAppend,
  children,
}) => {
  const sizeClass = Styles[size] || Styles.medium;

  return (
    <p className={`${Styles.paragraph} ${sizeClass} ${classAppend ?? ""}`}>
      {children}
    </p>
  );
};

export default Text;
