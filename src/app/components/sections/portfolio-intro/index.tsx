"use client";

import Styles from "./styles.module.css";
import Image from "next/image";
import MOUSE from "../../../assets/mouse.png";
import CHILL from "../../../assets/chill.png";
import ICE_CREAM from "../../../assets/ice-cream.png";
import useGenerateText, { phrases } from "./use-generate-text";
import { Background, Section } from "../../layouts";
import { FaIcon, Title } from "../../atoms";
import { useState } from "react";
import { motion } from "motion/react";
import { fadeSlideVariants } from "@/app/configs/animation";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faSteam } from "@fortawesome/free-brands-svg-icons/faSteam";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons/faEnvelopeOpenText";
import Link from "next/link";
import { useTheme } from "@/app/hooks";

const SocialIcons = [
  { icon: faLinkedinIn, url: process.env.NEXT_PUBLIC_LINKED_IN ?? "" },
  { icon: faGithub, url: process.env.NEXT_PUBLIC_GIT ?? "" },
  { icon: faFacebook, url: process.env.NEXT_PUBLIC_FB ?? "" },
  { icon: faTwitter, url: process.env.NEXT_PUBLIC_TW ?? "" },
  { icon: faSteam, url: process.env.NEXT_PUBLIC_STEAM ?? "" },
  {
    icon: faEnvelopeOpenText,
    url: process.env.NEXT_PUBLIC_EMAIL
      ? `mailto:${process.env.NEXT_PUBLIC_EMAIL}`
      : "",
  },
];

const PortfolioIntro = () => {
  const [dynamicHeadingText, setDynamicHeadingText] = useState(phrases[0]);
  const { startThemeChange, isDark, changeTheme } = useTheme();
  useGenerateText(setDynamicHeadingText);

  return (
    <Section background={Background.FAV}>
      <div className={Styles["section-container"]} id="home">
        <div className={Styles["section-fragment"]}>
          <Title
            size="medium"
            variant="h4"
            classAppend={Styles["sub-title-gray"]}
          >
            Software Engineer | Next Developer | React Developer
          </Title>
          <Title size="xl" variant="h3" classAppend={Styles["title-main"]}>
            Hello, I’m Dewmin
          </Title>
          <Title size="small" variant="h4" classAppend={Styles["title-ph"]}>
            I am a highly skilled Software Engineer with over 2 years of
            specialized experience in front-end development, focusing on
            Next.js, React, and a diverse range of cutting-edge frameworks
          </Title>
          <div className="custom-font">
            <Title
              size="xl"
              variant="h1"
              classAppend={Styles["sub-title-gray"]}
            >
              WaNna ChanGe Theme ? <br />
              try mE !
              <br />
              <motion.img
                key={isDark ? "dark" : "light"}
                initial={{ opacity: 1, scale: 0 }}
                animate={
                  changeTheme
                    ? { opacity: 0, scale: 0.5, rotate: 360 }
                    : { opacity: 1, scale: 1, rotate: 360 }
                }
                transition={{ duration: 0.6, ease: "easeInOut" }}
                src={isDark ? ICE_CREAM.src : CHILL.src}
                width={96}
                height={96}
                alt="theme-image"
                className={Styles["theme-img"]}
                onClick={startThemeChange}
              />
            </Title>
          </div>
          {/* <Link
            prefetch
            href={process.env.NEXT_PUBLIC_RESUME ?? ""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Arrow />
          </Link> */}
          <Title size="xxl" variant="h2" classAppend={Styles["title-static"]}>
            Bringing
          </Title>
          <motion.div
            key={dynamicHeadingText}
            variants={fadeSlideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.65, ease: "easeInOut" }}
            // whileHover={{ scale: 2 }}
          >
            <Title
              size="xxxl"
              variant="h1"
              classAppend={Styles["title-dynamic"]}
            >
              {dynamicHeadingText}
            </Title>
          </motion.div>
          <Image
            src={MOUSE.src}
            width={50}
            height={50}
            alt="mouse"
            className={Styles["image-mouse"]}
          />
        </div>
        <div className={Styles["section-image"]}>
          <div className={Styles["section-image-layout"]}>
            <div className={Styles["box1"]} />
            <div className={Styles["box2"]} />
            <div className={Styles["box3"]} />
            <div className={Styles["box4"]} />
            <div className={Styles["box5"]} />
            <div className={Styles["box6"]} />
            <div className={Styles["box7"]} />
            <div className={Styles["box8"]}>
              {SocialIcons.map((iconData, index) => (
                <motion.div whileHover={{ scale: 1.2 }} key={index}>
                  <Link href={iconData.url} target="_blank">
                    <FaIcon
                      name={iconData.icon}
                      color="var(--text-color-pink)"
                      size="3x"
                      classAppend={Styles["fa-icon"]}
                    />
                  </Link>
                </motion.div>
              ))}
              {/* <Image
                width={400}
                height={800}
                alt="image"
                src={X.src}
                className={Styles["image"]}
              /> */}
            </div>
          </div>
        </div>

        <div className={Styles["mobile-contact-me-section"]}>
          {SocialIcons.map((iconData, index) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                // border: "2px solid  var(--text-color-pink)",
                padding: "8px",
                borderRadius: "8px",
                background: "var(--primary-color-gradient-dark)",
                // background: "red",
              }}
            >
              <Link href={iconData.url} target="_blank">
                <FaIcon
                  name={iconData.icon}
                  color="var(--text-color-pink)"
                  size="3x"
                  classAppend={Styles["fa-icon"]}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PortfolioIntro;
