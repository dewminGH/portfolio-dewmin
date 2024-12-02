import Styles from "./styles.module.css";
import { menuItemVariants } from "@/app/configs/animation";
import { motion } from "framer-motion";
import { NavItemProps } from "./type";
import { Title } from "../../atoms";
import Link from "next/link";
const NavItem: React.FC<NavItemProps> = ({ name, href }) => {
  return (
    <motion.li
      variants={menuItemVariants}
      whileTap={{ scale: 0.95 }}
      className={Styles["menu-item"]}
    >
      <Link href={href}>
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
      </Link>
    </motion.li>
  );
};

export default NavItem;
