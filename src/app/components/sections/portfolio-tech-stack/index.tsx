"use client";

import Styles from "./styles.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Background, Section } from "../../layouts";
import { techIcons } from "./tech-icons";
import { Title } from "../../atoms";
import { animationVariants } from "@/app/configs/animation";

const PortfolioTeachStack: React.FC = () => {
  return (
    <Section background={Background.GRAY}>
      <div className={Styles["tech-stack-container"]}>
        <Title size="xxl" variant="h2" classAppend={Styles["title-static"]}>
          Tech Stack
        </Title>
        <motion.div
          className={Styles["grid-container"]}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Ensures the animation only triggers when visible
          variants={{
            visible: {
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {techIcons.map((icon, index) => (
            <motion.div
              key={index}
              variants={animationVariants}
              style={{
                background: "var(--primary-color-gray-dark)",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                padding: "8px",
                borderRadius: "8px",
                // boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                src={icon.src}
                width={80}
                height={80}
                alt={`${icon.name} logo`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default PortfolioTeachStack;
