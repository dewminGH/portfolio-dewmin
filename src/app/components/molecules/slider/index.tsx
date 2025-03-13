"use client";

import NavItem from "./nav-item";
import Styles from "./styles.module.css";
import { Cycle, motion, useCycle } from "framer-motion";
import { FaIcon } from "../../atoms";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { IN_PAGE_LINKS } from "@/app/configs/route.config";
import { NavBarProps } from "./type";

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

const Navigation = ({
  setOpen,
  containerRef,
}: {
  setOpen: Cycle;
  containerRef: LegacyRef<HTMLUListElement> | undefined;
}) => (
  <motion.ul
    ref={containerRef}
    className={Styles["nav-item-container"]}
    onClick={() => setOpen(0)}
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
    return "circle(30px at 70px 70px)";
  }
};
const NavBar: React.FC<NavBarProps> = ({ setIsOpenNav }) => {
  const [isOpen, setIsOpen] = useCycle(false, true);
  const [clipPathValue, setClipPathValue] = useState(getClosedClipPath());
  const NavRef = useRef<null | HTMLDivElement>(null);
  const NavItemListContainerRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (setIsOpenNav) {
      setIsOpenNav(isOpen);
    }
    if (typeof window !== "undefined" && NavItemListContainerRef.current) {
      if (isOpen) {
        setTimeout(() => {
          if (NavItemListContainerRef.current) {
            NavItemListContainerRef.current.classList.add("nav-scroll-css");
          }
        }, 700);
      } else {
        setTimeout(() => {
          if (NavItemListContainerRef.current) {
            NavItemListContainerRef.current.classList.remove("nav-scroll-css");
          }
        }, 700);
      }
    }
  }, [isOpen, setIsOpenNav, NavItemListContainerRef]);

  useEffect(() => {
    const updateClipPath = () => setClipPathValue(getClosedClipPath());
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateClipPath);
    }
    return () => window.removeEventListener("resize", updateClipPath);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        NavRef?.current &&
        !NavRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(0);
      }
    };
    if (typeof document !== "undefined") {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

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
    <div style={{ position: "relative" }}>
      <motion.nav
        ref={NavRef}
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
        <Navigation
          setOpen={setIsOpen}
          containerRef={NavItemListContainerRef}
        />
        <MenuToggle toggle={setIsOpen} />
      </motion.nav>
    </div>
  );
};

export default NavBar;
