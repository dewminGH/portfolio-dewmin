import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type faIconProps = {
  name: IconDefinition;
  color: string;
  size:
    | "2xs"
    | "xs"
    | "sm"
    | "lg"
    | "xl"
    | "2xl"
    | "1x"
    | "2x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x";
  classAppend?: string;
};
