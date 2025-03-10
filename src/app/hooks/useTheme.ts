import { useEffect, useState } from "react";

const useTheme = () => {
  const [changeTheme, setChangeTheme] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(
    typeof document !== "undefined"
      ? localStorage.getItem("theme")
        ? true
        : false
      : false
  );

  useEffect(() => {
    if (typeof document !== "undefined") {
      // default as light theme
      if (localStorage.getItem("theme")) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined" && changeTheme) {
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
    setChangeTheme(true);
  };

  return {
    startThemeChange,
    isDark,
    changeTheme,
  };
};

export default useTheme;
