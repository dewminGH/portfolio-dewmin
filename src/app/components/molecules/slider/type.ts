import { Dispatch, SetStateAction } from "react";

export type NavItemProps = {
  name: string;
  href: string;
};

export type NavBarProps = {
  setIsOpenNav?: Dispatch<SetStateAction<boolean>>;
};
