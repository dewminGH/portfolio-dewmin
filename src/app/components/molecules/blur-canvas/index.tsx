import Styles from "./styles.module.css";

const BlurCanvas: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div className={Styles["background"]}>{children}</div>;
};

export default BlurCanvas;
