export enum MediaType {
  IMAGE = "image",
  VIDEO = "video",
}

export type MediaItem = {
  type: MediaType;
  src: string;
};
