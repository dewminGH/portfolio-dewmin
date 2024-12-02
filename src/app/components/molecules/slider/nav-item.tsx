import Styles from "./styles.module.css";
import { menuItemVariants } from "@/app/configs/animation";
import { motion } from "framer-motion";
import { NavItemProps } from "./type";
import { Title } from "../../atoms";
const NavItem: React.FC<NavItemProps> = ({ name }) => {
  return (
    <motion.li
      variants={menuItemVariants}
      whileTap={{ scale: 0.95 }}
      className={Styles["menu-item"]}
    >
      <div className={Styles["text-placeholder"]}>
        <Title
          size="large-extend"
          variant="h2"
          classAppend={Styles["title-static"]}
        >
          {name}
        </Title>
        <span className={Styles["underline"]}></span>
      </div>
    </motion.li>
  );
};

export default NavItem;
