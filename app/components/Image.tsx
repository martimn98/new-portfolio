import NextImage, { ImageProps } from "next/image";

export function Image({ ...imageProps }: ImageProps) {
  const isProduction = process.env.NODE_ENV === "production";
  const basePath = process.env.PAGES_BASE_PATH ?? "";
  const src = isProduction ? imageProps.src : basePath + imageProps.src;

  return <NextImage {...imageProps} src={src} />;
}
