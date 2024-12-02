"use client";

import NavItem from "./nav-item";
import Styles from "./styles.module.css";
import { motion, useCycle } from "framer-motion";
import { FaIcon } from "../../atoms";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { useEffect, useState } from "react";
import { IN_PAGE_LINKS } from "@/app/configs/route.config";

const sidebarVariants = {
  open: {
    clipPath: "circle(1600px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(30px at 90px 90px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navigation = () => (
  <motion.ul
    className={Styles["nav-item-container"]}
    variants={{
      open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
      closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    }}
  >
    {IN_PAGE_LINKS.map(({ href, name }) => (
      <NavItem key={name} name={name} href={href} />
    ))}
  </motion.ul>
);

const getClosedClipPath = () => {
  if (typeof window !== "undefined") {
    if (window.matchMedia("(max-width: 768px)").matches) {
      return "circle(30px at 50px 50px)";
    } else if (
      window.matchMedia("(min-width: 768px) and (max-width: 1440px)").matches
    ) {
      return "circle(30px at 70px 70px)";
    } else {
      return "circle(30px at 90px 90px)";
    }
  } else {
    return "circle(30px at 90px 90px)";
  }
};
const NavBar = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);
  const [clipPathValue, setClipPathValue] = useState(getClosedClipPath());

  useEffect(() => {
    const updateClipPath = () => setClipPathValue(getClosedClipPath());

    window.addEventListener("resize", updateClipPath);

    return () => window.removeEventListener("resize", updateClipPath);
  }, []);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const MenuToggle = ({ toggle }) => (
    <button onClick={toggle} className={Styles.button}>
      <motion.div
        key={isOpen ? "open" : "closed"}
        animate={{ rotate: toggle ? 180 : 0, opacity: [1, 0, 1] }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 3,
          opacity: { duration: 0.5, times: [0, 0.5, 1] },
        }} // Smooth spring animation
      >
        <FaIcon
          name={isOpen ? faTimes : faBars}
          color="var(--perfect-black)"
          size="2x"
        />
      </motion.div>
    </button>
  );

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={{
        ...sidebarVariants,
        closed: {
          ...sidebarVariants.closed,
          clipPath: clipPathValue,
        },
      }}
      className={Styles.nav}
    >
      <motion.div className={Styles.background} />
      <Navigation />
      <MenuToggle toggle={setIsOpen} />
    </motion.nav>
  );
};

export default NavBar;
