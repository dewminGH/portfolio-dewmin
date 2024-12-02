import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faIconProps } from "./type";

const FaIcon: React.FC<faIconProps> = ({ color, name, size, classAppend }) => {
  return (
    <FontAwesomeIcon
      icon={name || faDog}
      color={color}
      size={size}
      className={classAppend}
    />
  );
};

export default FaIcon;
