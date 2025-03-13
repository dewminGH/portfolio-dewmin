export enum Background {
  FAV_GRAY = "FAV_GRAY",
  FAV = "FAV",
  PRIMARY_GRADIENT = "PRIMARY_GRADIENT",
  GRAY = "GRAY",
  PINK_GRAY = "PINK_GRAY",
}

export type SectionProps = {
  children: React.ReactNode;
  background?: Background;
};
