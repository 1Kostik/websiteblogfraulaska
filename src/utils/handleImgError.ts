import emptyImgPlug from "@assets/images/emptyPlug.webp";

export const handleImgError = (e: React.SyntheticEvent) => {
  (e.target as HTMLImageElement).src = emptyImgPlug;
};
