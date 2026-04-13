import { useState } from "react";
import { cn } from "../components/ui/utils";
import { ImageLightbox } from "../organisms/ImageLightbox";

interface ClickableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function ClickableImage({ className, src, alt, ...props }: ClickableImageProps) {
  const [open, setOpen] = useState(false);

  if (!src) return <img className={className} src={src} alt={alt} {...props} />;

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={cn("cursor-pointer hover:brightness-[1.03] transition-[filter]", className)}
        onClick={() => setOpen(true)}
        {...props}
      />
      <ImageLightbox open={open} onClose={() => setOpen(false)} src={src} alt={alt} />
    </>
  );
}
