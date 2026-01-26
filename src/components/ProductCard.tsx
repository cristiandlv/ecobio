"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ProductCardProps = {
  title: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
  disableImageModal?: boolean;
};

export default function ProductCard({
  title,
  image,
  imageAlt,
  children,
  action,
  className,
  disableImageModal = false,
}: ProductCardProps) {
  const [open, setOpen] = useState(false);

  /* ESC para cerrar */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const canOpenModal = image && !disableImageModal;

  return (
    <>
      {/* ================= CARD ================= */}
      <article
        className={`
          relative group
          bg-white rounded-3xl
          border border-neutral-100
          p-6
          flex flex-col items-center text-center
          shadow-[0_10px_30px_rgba(0,0,0,0.06)]
          transition-all duration-300 ease-out
          hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.12)]
          ${className ?? ""}
        `}
      >
        {image && (
          <div
            className={`
              relative
              w-28 h-28 md:w-36 md:h-36 mb-5
              rounded-full overflow-hidden
              border-4 border-(--color-primary-soft)
              bg-neutral-50
              shadow-md
              transition-transform duration-300
              ${
                canOpenModal
                  ? "cursor-zoom-in hover:scale-105"
                  : "cursor-pointer"
              }
            `}
            onClick={() => canOpenModal && setOpen(true)}
            role={canOpenModal ? "button" : undefined}
          >
            <Image
              src={image}
              alt={imageAlt ?? title}
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <h3 className="text-xl font-semibold text-(--color-primary) mb-2">
          {title}
        </h3>

        <div className="w-full text-sm text-neutral-700 min-h-[4.5rem]">
          {children}
        </div>

        {action && (
          <div className="mt-4 w-full flex justify-center">
            {action}
          </div>
        )}
      </article>

      {/* ================= MODAL ================= */}
      {open && image && canOpenModal && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-white/70 backdrop-blur-xl
            animate-in fade-in duration-200
          "
          onClick={() => setOpen(false)}
        >
          {/* CAJA DEL MODAL */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              bg-white
              rounded-3xl
              p-4 md:p-6
              shadow-[0_30px_80px_rgba(0,0,0,0.25)]
              animate-in zoom-in duration-200
              max-w-[92vw]
              max-h-[92vh]
              flex items-center justify-center
            "
          >
            {/* BOTÓN CERRAR (anclado al modal) */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar imagen"
              className="
                absolute -top-4 -right-4
                w-10 h-10
                rounded-full
                bg-neutral-900
                shadow-lg
                flex items-center justify-center
                transition-transform duration-200
                hover:scale-105
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* IMAGEN */}
            <Image
              src={image}
              alt={imageAlt ?? title}
              width={1800}
              height={1800}
              priority
              className="
                max-w-full
                max-h-[85vh]
                object-contain
                rounded-2xl
              "
            />
          </div>
        </div>
      )}
    </>
  );
}
