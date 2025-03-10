"use client";

import React from "react";
import Styles from "./styles.module.css";
import Image from "next/image";
import WORK_PALACE_LOGO from "../../../assets/work-palace-logo.jpg";
import WORK_PALACE_LOGO2 from "../../../assets/work-palace-logo2.jpg";
import { motion } from "framer-motion";
import { Text, Title } from "../../atoms";

const timelineData = [
  {
    year: "2025 February",
    title: "Software Engineer (On Site)",
    logo: WORK_PALACE_LOGO2.src,
    description:
      "Worked on Next.js-based projects, contributing to the development and maintenance of high-performance websites. Engaged in Python-driven back-end development",
  },
  {
    year: "2024 April",
    title: "Frontend Engineer (Remote)",
    description:
      "Developed and maintained promo websites using Next.js and React. Contributed to building an LMS Admin Panel, with a focus on release management and AWS Amplify integration for smooth deployment and scalability.",
  },
  {
    year: "2023 April",
    title: "Associate Frontend Engineer (Remote)",
    description:
      "Worked on the development of promo sites using Next.js and React. Involved in building an LMS Admin Panel, enhancing user experience and optimizing performance.",
  },
  {
    year: "2022 October",
    title: "Intern (Frontend Engineer) (Remote)",
    description:
      "Gained hands-on experience in frontend development with JavaScript, TypeScript, and React. Contributed to the development of an Admin Panel and worked on integrating a WYSIWYG editor extension for improved content management.",
  },
];

const Timeline = () => {
  return (
    <div className={Styles["timeline-container"]} id="work-experience">
      <Title size="xxl" variant="h2" classAppend={Styles["title-static"]}>
        Work Experience
      </Title>

      {timelineData.map(({ description, title, year, logo }, index) => (
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
            src={logo ?? WORK_PALACE_LOGO.src}
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
            {year}
          </Title>
          <Text classAppend={Styles["text-dynamic"]}>{title}</Text>
          <Text size="small" classAppend={Styles["opacity-reduced-text"]}>
            {description}
          </Text>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
