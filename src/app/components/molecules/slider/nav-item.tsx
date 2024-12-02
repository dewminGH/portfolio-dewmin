import Styles from "./styles.module.css";
import { menuItemVariants } from "@/app/configs/animation";
import { motion } from "framer-motion";

const NavItem = () => {
  return (
    <motion.li
      variants={menuItemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={Styles.menuItem}
    >
      <div
        className={Styles.iconPlaceholder}
        style={{ border: "1px solid red" }}
      />
      <div
        className={Styles.textPlaceholder}
        style={{ border: "1px solid red" }}
      />
    </motion.li>
  );
};

export default NavItem;
