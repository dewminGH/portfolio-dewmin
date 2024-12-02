import Styles from "./styles.module.css";
import { TitleProps } from "./type";

const Title: React.FC<TitleProps> = ({
  variant = "h1",
  size = "xxl",
  classAppend,
  children,
}) => {
  const Tag = variant;
  const sizeClass = Styles[size] || Styles.xxl;

  return (
    <Tag className={`${Styles.title} ${sizeClass} `.concat(classAppend ?? "")}>
      {children}
    </Tag>
  );
};

export default Title;
