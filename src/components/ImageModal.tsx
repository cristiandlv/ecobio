"use client";

import { useEffect } from "react";
import Image from "next/image";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* CONTENIDO */}
      <div
        className="relative max-w-4xl w-full px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-2 text-white text-3xl hover:opacity-70"
        >
          ×
        </button>

        <div className="relative w-full h-[70vh] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain bg-black"
            priority
          />
        </div>
      </div>
    </div>
  );
}
