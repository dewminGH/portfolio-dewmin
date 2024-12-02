import Styles from "./styles.module.css";
import ARROW_IMAGE from "../../../assets/arrow.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Arrow = () => {
  return (
    <div className={Styles["arrow-container"]}>
      <motion.div
        whileHover={{ rotate: 180 }} // Rotate 360 degrees
        transition={{ type: "spring", stiffness: 60, damping: 10 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image width={80} height={80} alt="arrow" src={ARROW_IMAGE.src} />
      </motion.div>
    </div>
  );
};

export default Arrow;
