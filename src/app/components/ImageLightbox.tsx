import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { XIcon } from "lucide-react";

interface ImageLightboxProps {
  open: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
}

export function ImageLightbox({ open, onClose, src, alt }: ImageLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-label={alt || "이미지 상세 보기"}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/90"
        onClick={onClose}
      />

      {/* Image */}
      <img
        src={src}
        alt={alt || ""}
        className="relative z-10 max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.08)]"
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <XIcon size={20} />
        <span className="sr-only">닫기</span>
      </button>
    </div>,
    document.body
  );
}
