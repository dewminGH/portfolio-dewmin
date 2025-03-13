"use client";

import { useEffect, useState } from "react";

const useTheme = () => {
  const [changeTheme, setChangeTheme] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(
    typeof window !== "undefined"
      ? localStorage.getItem("theme")
        ? true
        : false
      : false
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      // default as light theme
      if (localStorage.getItem("theme")) {
        document.body.classList.add("dark-mode");
        setIsDark(true);
      } else {
        document.body.classList.remove("dark-mode");
        setIsDark(false);
      }
    }
  }, [setIsDark]);

  useEffect(() => {
    if (typeof window !== "undefined" && changeTheme) {
      // default as light theme
      if (!localStorage.getItem("theme")) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode");
        setIsDark(true);
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.removeItem("theme");
        setIsDark(false);
      }
      setTimeout(() => setChangeTheme(false), 600);
    }
  }, [changeTheme, setIsDark]);

  const startThemeChange = () => {
    console.log();
    setChangeTheme(true);
  };

  return {
    startThemeChange,
    isDark,
    changeTheme,
  };
};

export default useTheme;
