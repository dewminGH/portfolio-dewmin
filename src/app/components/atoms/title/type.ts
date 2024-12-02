export type FontSize =
  | "small"
  | "medium"
  | "large"
  | "large-extend"
  | "xl"
  | "xxl"
  | "xxxl";
export type FontVariant = "h1" | "h2" | "h3" | "h4" | "h5";

export type TitleProps = {
  children: React.ReactNode;
  variant?: FontVariant;
  size?: FontSize;
  classAppend?: string;
};
