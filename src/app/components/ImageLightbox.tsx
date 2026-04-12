import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { XIcon, ZoomInIcon, ZoomOutIcon, RotateCcwIcon } from "lucide-react";

interface ImageLightboxProps {
  open: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
}

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const ZOOM_STEP = 0.3;

export function ImageLightbox({ open, onClose, src, alt }: ImageLightboxProps) {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  const resetTransform = useCallback(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, []);

  const handleClose = useCallback(() => {
    resetTransform();
    onClose();
  }, [onClose, resetTransform]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    },
    [handleClose]
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

  // Wheel zoom on the image
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setScale((prev) => {
      const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
      return Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev + delta));
    });
  }, []);

  // Mouse drag for panning
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    translateStart.current = { ...translate };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [translate]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setTranslate({
      x: translateStart.current.x + dx,
      y: translateStart.current.y + dy,
    });
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Double-click to toggle zoom
  const handleDoubleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (scale > 1) {
      resetTransform();
    } else {
      setScale(2.5);
    }
  }, [scale, resetTransform]);

  const zoomIn = useCallback(() => {
    setScale((prev) => Math.min(MAX_SCALE, prev + ZOOM_STEP));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((prev) => Math.max(MIN_SCALE, prev - ZOOM_STEP));
  }, []);

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
        onClick={handleClose}
      />

      {/* Image container */}
      <div
        className="relative z-10 max-h-[90vh] max-w-[90vw] overflow-hidden"
        onWheel={handleWheel}
      >
        <img
          ref={imageRef}
          src={src}
          alt={alt || ""}
          className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.08)] select-none"
          style={{
            transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
            cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
            transition: isDragging ? "none" : "transform 0.2s ease-out",
          }}
          draggable={false}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onDoubleClick={handleDoubleClick}
        />
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-3 py-2 rounded-full bg-black/60 backdrop-blur-sm">
        <button
          onClick={zoomOut}
          disabled={scale <= MIN_SCALE}
          className="p-1.5 rounded-full text-white hover:bg-white/15 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="축소"
        >
          <ZoomOutIcon size={18} />
        </button>
        <span className="text-white/80 text-[12px] font-[500] min-w-[3em] text-center select-none">
          {Math.round(scale * 100)}%
        </span>
        <button
          onClick={zoomIn}
          disabled={scale >= MAX_SCALE}
          className="p-1.5 rounded-full text-white hover:bg-white/15 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="확대"
        >
          <ZoomInIcon size={18} />
        </button>
        <div className="w-px h-4 bg-white/20" />
        <button
          onClick={resetTransform}
          disabled={scale === 1 && translate.x === 0 && translate.y === 0}
          className="p-1.5 rounded-full text-white hover:bg-white/15 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="원래 크기로"
        >
          <RotateCcwIcon size={18} />
        </button>
      </div>

      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <XIcon size={20} />
        <span className="sr-only">닫기</span>
      </button>
    </div>,
    document.body
  );
}
