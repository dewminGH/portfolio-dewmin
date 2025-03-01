"use client";

import Styles from "./styles.module.css";
import { Background, Section } from "../../layouts";
import { Title } from "../../atoms";
import { motion } from "framer-motion";

const PortfolioSite = () => {
  return (
    <Section background={Background.GRAY}>
      <div className={Styles["site-portfolio"]} id="about-site">
        <Title size="xxl" variant="h2" classAppend={Styles["title-static"]}>
          About This Site
        </Title>
        <div className={Styles["box"]} />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: "some" }}
        >
          <Title size="small" variant="h4" classAppend={Styles["title-ph"]}>
            This website is a fusion of innovation and design, built by myself
            using Next.js and pure CSS, enriched with dynamic animations powered
            by Framer Motion, and hosted on AWS for seamless performance.
          </Title>
        </motion.div>

        {/* <div className={Styles["icons-box"]}>
          <Image
            src={techIcons.find(({ name }) => name === "Next.js")?.src}
            alt="icon"
            width={340}
            height={340}
            style={{ transform: "rotate(15deg)" }}
          />
          <Image
            src={techIcons.find(({ name }) => name === "CSS")?.src}
            alt="icon"
            width={120}
            height={120}
            className={Styles["box-icon-remove"]}
          />
          <Image
            src={techIcons.find(({ name }) => name === "AWS")?.src}
            alt="icon"
            width={160}
            height={160}
            style={{ transform: "rotate(65deg)" }}
            className={Styles["box-icon-remove"]}
          />
        </div> */}
      </div>
    </Section>
  );
};

export default PortfolioSite;
