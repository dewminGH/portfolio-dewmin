export enum Background {
  FAV_GRAY = "FAV_GRAY",
  FAV = "FAV",
  PRIMARY_GRADIENT = "PRIMARY_GRADIENT",
  GRAY = "GRAY",
}

export type SectionProps = {
  children: React.ReactNode;
  background?: Background;
};
