"use client";

import { useState } from "react";
import { BlurCanvas, Navbar } from "../../molecules";

const PortfolioNavWithCanvas = () => {
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);
  return (
    <>
      {isOpenNav && <BlurCanvas />}
      <Navbar setIsOpenNav={setIsOpenNav} />
    </>
  );
};

export default PortfolioNavWithCanvas;
