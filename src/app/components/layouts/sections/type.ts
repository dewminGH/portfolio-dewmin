export enum Background {
  PRIMARY_GRADIENT = "PRIMARY_GRADIENT",
  GRAY = "GRAY",
}

export type SectionProps = {
  children: React.ReactNode;
  background?: Background;
};
