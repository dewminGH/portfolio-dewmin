"use client";

import React from "react";
import Styles from "./styles.module.css";
import Image from "next/image";
import WORK_PALACE_LOGO from "../../../assets/work-palace-logo.jpg";
import { motion } from "framer-motion";
import { Text, Title } from "../../atoms";

const timelineData = [
  {
    year: "2024 April",
    title: "Frontend Engineer",
    description:
      "Developed and maintained promo websites using Next.js and React. Contributed to building an LMS Admin Panel, with a focus on release management and AWS Amplify integration for smooth deployment and scalability.",
  },
  {
    year: "2023 April",
    title: "Associate Frontend Engineer",
    description:
      "Worked on the development of promo sites using Next.js and React. Involved in building an LMS Admin Panel, enhancing user experience and optimizing performance.",
  },
  {
    year: "2022 October",
    title: "Intern (Frontend Engineer)",
    description:
      "Gained hands-on experience in frontend development with JavaScript, TypeScript, and React. Contributed to the development of an Admin Panel and worked on integrating a WYSIWYG editor extension for improved content management.",
  },
];

const Timeline = () => {
  return (
    <div className={Styles["timeline-container"]}>
      <Title size="xxl" variant="h2" classAppend={Styles["title-static"]}>
        Work Experience
      </Title>

      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          style={{ border: index === 0 ? "2px solid white" : "none" }}
          className={
            index % 2 !== 0
              ? Styles["timeline-item-l"]
              : Styles["timeline-item-r"]
          }
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true, amount: "some" }}
        >
          <Image
            src={WORK_PALACE_LOGO.src}
            width={60}
            height={60}
            alt="logo"
            className={
              index % 2 !== 0
                ? Styles["time-line-logo-l"]
                : Styles["time-line-logo-r"]
            }
          />
          <Title size="small" variant="h2" classAppend={Styles["text-dynamic"]}>
            {item.year}
          </Title>
          <Text classAppend={Styles["text-dynamic"]}>{item.title}</Text>
          <Text size="small" classAppend={Styles["opacity-reduced-text"]}>
            {item.description}
          </Text>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
