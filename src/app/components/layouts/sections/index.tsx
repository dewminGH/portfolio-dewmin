import Styles from "./styles.module.css";
import { Background, SectionProps } from "./type";

const Section: React.FC<SectionProps> = ({ children, background }) => {
  const colorPicker = (colors?: Background): string => {
    switch (colors) {
      case Background.PRIMARY_GRADIENT:
        return "var(--primary-color-gradient)";
      case Background.GRAY:
        return "var(--primary-color-gray)";
      default:
        return "#FFFFFF";
    }
  };

  return (
    <div
      className={Styles.section}
      style={{ background: colorPicker(background) }}
    >
      <div className={Styles["section-container"]}>{children}</div>
    </div>
  );
};

export default Section;
